// app/api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('❌ RECAPTCHA_SECRET_KEY not found in environment variables');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    console.log('🔐 reCAPTCHA verification result:', data.success);
    
    return data.success;
  } catch (error) {
    console.error('❌ reCAPTCHA verification error:', error);
    return false;
  }
}

// Configure your email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your email
    pass: process.env.SMTP_PASSWORD, // Your email password or app password
  },
  tls: {
    rejectUnauthorized: false
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000,
  socketTimeout: 20000,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, formType, agree, recaptchaToken } = body;

    // Validation
    if (!name || !email || !message || !formType) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      console.log('❌ No reCAPTCHA token provided');
      return NextResponse.json(
        { 
          success: false, 
          message: 'reCAPTCHA verification is required.' 
        },
        { status: 400 }
      );
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    
    if (!isRecaptchaValid) {
      console.log('❌ reCAPTCHA verification failed');
      return NextResponse.json(
        { 
          success: false, 
          message: 'reCAPTCHA verification failed. Please try again.' 
        },
        { status: 400 }
      );
    }

    console.log('✅ reCAPTCHA verification passed');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email service not configured. Please contact the administrator.' 
        },
        { status: 500 }
      );
    }

    // Determine subject based on form type
    const subjectMap: Record<string, string> = {
      vpl2025: 'VPL 2025 Feedback',
      asi: 'ASI Orlando 2025 Feedback',
      ppai: 'PPAI 2025 Feedback',
      ppaiExpo: 'PPAI Expo 2025 Feedback',
      ai: 'AI Image Generator Feedback',
      vpl: 'VPL Feedback',
      booth: 'Booth #6066 Feedback',
    };

    const subject = subjectMap[formType] || 'Website Feedback';

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `${subject} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #e74c3c; padding-bottom: 10px;">
            New ${subject}
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${agree ? '<p style="margin: 10px 0;"><strong>Newsletter:</strong> Opted in for promotional emails</p>' : ''}
          </div>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Message:</h3>
            <p style="line-height: 1.6; color: #666;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            <p>This email was sent from Vector Art website feedback form.</p>
            <p>Form Type: ${formType}</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
            <p style="color: #28a745;">✓ reCAPTCHA Verified</p>
          </div>
        </div>
      `,
      text: `
        New ${subject}
        
        Name: ${name}
        Email: ${email}
        ${agree ? 'Newsletter: Opted in for promotional emails' : ''}
        
        Message:
        ${message}
        
        ---
        Form Type: ${formType}
        Submitted at: ${new Date().toLocaleString()}
        ✓ reCAPTCHA Verified
      `,
    };

    // Verify transporter
    await transporter.verify();
    
    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback submitted successfully! We will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error submitting feedback:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit feedback. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact support.';
    } else if (error.code === 'ESOCKET') {
      errorMessage = 'Email service connection failed. Please try again.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Email service timeout. Please try again.';
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage
      },
      { status: 500 }
    );
  }
}