import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      companyName,
      message,
      agreeToNewsLetter,
      recaptchaToken,
    } = body;

    /* ===============================
       Basic validation
    =============================== */
    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    /* ===============================
       reCAPTCHA verification
    =============================== */
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      throw new Error('reCAPTCHA secret key not configured');
    }

    const recaptchaResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { message: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    /* ===============================
       SMTP configuration validation
    =============================== */
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
      SMTP_FROM,
      CONTACT_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASSWORD ||
      !SMTP_FROM ||
      !CONTACT_EMAIL
    ) {
      throw new Error('SMTP environment variables are not configured properly');
    }

    /* ===============================
       Create mail transporter
    =============================== */
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // auto-secure logic
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    /* ===============================
       Email content
    =============================== */
    await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: 'Contact Form Submission From Website',
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${companyName || 'Not provided'}
Agree to Newsletter: ${agreeToNewsLetter ? 'Yes' : 'No'}

Message:
${message}
      `,
      html: `
        <h2>Contact Form Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${companyName || 'Not provided'}</p>
        <p><strong>Agree to Newsletter:</strong> ${agreeToNewsLetter ? 'Yes' : 'No'}</p>
        <hr />
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
