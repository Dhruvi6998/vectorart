// app/api/upload-artwork/route.ts
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

export async function POST(request: NextRequest) {
  console.log('📨 Received upload artwork request');
  
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const companyName = formData.get('companyName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const orderInformation = formData.get('orderInformation') as string;
    const agreeToNewsletter = formData.get('agree') as string;
    const file = formData.get('file') as File | null;
    const recaptchaToken = formData.get('recaptchaToken') as string;

    console.log('📋 Form data received:', { name, companyName, email, phone });
    console.log('📎 File uploaded:', file ? file.name : 'No file');

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      console.log('❌ No reCAPTCHA token provided');
      return NextResponse.json(
        { 
          success: false, 
          error: 'reCAPTCHA verification is required.' 
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
          error: 'reCAPTCHA verification failed. Please try again.' 
        },
        { status: 400 }
      );
    }

    console.log('✅ reCAPTCHA verification passed');

    // Create transporter with environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE !== 'false', // true for 465, false for 587
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

    // Prepare attachment if file exists
    const attachments = [];
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      attachments.push({
        filename: file.name,
        content: buffer
      });
      console.log('✅ File attachment prepared:', file.name);
    }

    // Get current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Email HTML content
    const emailBody = `
      <html>
        <head>
          <style>
            .content-table {
              border-collapse: collapse;
              font-size: 0.9em;
              min-width: 400px;
              border-radius: 5px 5px 0 0;
              overflow: hidden;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
              display: inline-block;
              margin-left: 80px;
            }
            
            .content-table thead tr {
              background-color: #23265d;
              color: #ffffff;
              font-weight: bold;
            }
            
            .content-table th,
            .content-table td {
              padding: 12px 15px;
            }

            .content-table tbody tr {
              border-bottom: 1px solid #dddddd;
            }

            .content-table tbody tr:nth-of-type(even) {
              background-color: #f3f3f3;
            }

            .content-table tbody tr:last-of-type {
              border-bottom: 2px solid #009879;
            }

            .content-table tbody tr.active-row {
              font-weight: bold;
              color: #0cbee4;
            }
          </style>
        </head>
        <body>
          <div style='text-align: center;'>
            <h2>Vector Art</h2>
            <p style='text-align: right'>Received From Upload Artwork Form</p>
            <p style='text-align: right'>Date: ${currentDate}</p>
            <table class='content-table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>${name}</td>
                </tr>
                <tr class='active-row'>
                  <td>Company Name</td>
                  <td>${companyName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>${email}</td>
                </tr>
                <tr class='active-row'>
                  <td>Contact-No</td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td>Order Information</td>
                  <td>${orderInformation || 'N/A'}</td>
                </tr>
                <tr class='active-row'>
                  <td>Agree To Newsletter</td>
                  <td>${agreeToNewsletter === 'true' ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
            <p>&copy; 2024 All Rights Reserved.</p>
          </div>
        </body>
      </html>
    `;

    // Send email
    console.log('📤 Sending email...');
    const info = await transporter.sendMail({
      from: `"Vector Art" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@vectorart.co',
      replyTo: email,
      subject: 'Upload Artwork Submission From Website!',
      html: emailBody,
      attachments: attachments
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent! Our team will get back to you shortly.' 
    });

  } catch (error: any) {
    console.error('❌ Email sending error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email. Please try again.',
        details: error.message
      },
      { status: 500 }
    );
  }
}