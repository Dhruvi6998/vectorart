// test-email.js
require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
  try {
    console.log('📧 Email Configuration:');
    console.log('Host:', process.env.SMTP_HOST);
    console.log('Port:', process.env.SMTP_PORT);
    console.log('User:', process.env.SMTP_USER);
    console.log('From:', process.env.SMTP_FROM);
    console.log('To:', process.env.CONTACT_EMAIL);
    console.log('---\n');

    // Create transporter with your .env settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE !== 'false', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify connection
    console.log('Verifying connection...');
    await transporter.verify();
    console.log('✅ Server connection verified!\n');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Vector Art Test" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'Test Email - Nodemailer Setup',
      text: 'This is a test email to verify Nodemailer is working!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #23265d;">Success! ✅</h1>
          <p>Nodemailer is configured correctly with your .env settings.</p>
          <hr>
          <p><strong>Configuration:</strong></p>
          <ul>
            <li>Host: ${process.env.SMTP_HOST}</li>
            <li>Port: ${process.env.SMTP_PORT}</li>
            <li>From: ${process.env.SMTP_FROM}</li>
          </ul>
          <p style="color: #666; font-size: 12px;">
            Test sent at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\n🎉 Everything is working! You can now use this in your app.');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
    
    // Provide helpful error messages
    if (error.message.includes('Invalid login')) {
      console.log('\n💡 Tip: If using Gmail, make sure you\'re using an App Password');
      console.log('   Generate at: https://myaccount.google.com/apppasswords');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('\n💡 Tip: Check your SMTP_HOST in .env file');
      console.log('   For Gmail: smtp.gmail.com');
      console.log('   For custom domain: Check with your hosting provider');
    } else if (error.message.includes('ETIMEDOUT') || error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Tip: Check your SMTP_PORT in .env file');
      console.log('   Try port 465 (SSL) or 587 (TLS)');
    }
  }
}

testEmail();