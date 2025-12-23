// app/api/pentool/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// In-memory storage for reviews (for development)
// In production, you should use a database
let reviews: Array<{ name: string; message: string }> = [];

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error('❌ reCAPTCHA secret key not configured');
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
    console.error('❌ Error verifying reCAPTCHA:', error);
    return false;
  }
}

// POST - Submit a new review with reCAPTCHA validation
export async function POST(request: NextRequest) {
  console.log('📨 Received review submission');
  
  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken } = body;

    console.log('📋 Review data received:', { name, email });

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: 'Please complete the reCAPTCHA verification' },
        { status: 400 }
      );
    }

    console.log('🔐 Verifying reCAPTCHA...');
    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);

    if (!isValidRecaptcha) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    console.log('✅ reCAPTCHA verified successfully');

    // Create transporter with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    console.log('📧 SMTP configured:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER
    });

    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Email HTML content
    const emailBody = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #23265d;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              background-color: #f9f9f9;
              padding: 30px;
              border: 1px solid #ddd;
            }
            .review-box {
              background-color: white;
              padding: 20px;
              margin: 20px 0;
              border-left: 4px solid #0cbee4;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .label {
              font-weight: bold;
              color: #23265d;
              margin-bottom: 5px;
            }
            .value {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f5f5f5;
              border-radius: 3px;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #777;
              font-size: 12px;
            }
            .quote-icon {
              color: #b3e5fc;
              font-size: 24px;
            }
            .verified-badge {
              display: inline-block;
              background-color: #4caf50;
              color: white;
              padding: 5px 10px;
              border-radius: 3px;
              font-size: 12px;
              margin-left: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🎨 PenTool 2025 - New Feedback Received <span class="verified-badge">✓ Verified</span></h2>
            </div>
            <div class="content">
              <p style="text-align: right; color: #666; margin-bottom: 20px;">
                <strong>Date:</strong> ${currentDate}
              </p>
              
              <div class="review-box">
                <div class="quote-icon">❝</div>
                
                <div class="label">Name:</div>
                <div class="value">${name}</div>
                
                <div class="label">Email:</div>
                <div class="value">${email}</div>
                
                <div class="label">Feedback Message:</div>
                <div class="value">${message}</div>
              </div>
              
              <p style="margin-top: 30px; padding: 15px; background-color: #e8f5e9; border-radius: 5px;">
                <strong>📌 Action Required:</strong> Please review and respond to this feedback at your earliest convenience.
              </p>
              
              <p style="margin-top: 15px; padding: 10px; background-color: #e3f2fd; border-radius: 5px; font-size: 12px;">
                <strong>🔒 Security:</strong> This submission was verified with Google reCAPTCHA v2
              </p>
            </div>
            <div class="footer">
              <p>&copy; 2025 Vector Art - PenTool. All Rights Reserved.</p>
              <p>This email was sent from the PenTool feedback form at vectorart.co</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email notification
    console.log('📤 Sending email notification...');
    const info = await transporter.sendMail({
      from: `"PenTool Feedback" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@vectorart.co',
      replyTo: email,
      subject: `New PenTool Feedback from ${name} ✓ Verified`,
      html: emailBody
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);

    // Store review (only name and message for public display)
    const newReview = {
      name,
      message
    };
    
    reviews.push(newReview);
    console.log('✅ Review stored successfully');

    // Return success response for SweetAlert2
    return NextResponse.json({ 
      success: true,
      message: 'Message sent! Our team will get back to you shortly.',
      review: newReview
    });

  } catch (error: any) {
    console.error('❌ Error processing review:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit feedback. Please try again.',
        details: error.message
      },
      { status: 500 }
    );
  }
}