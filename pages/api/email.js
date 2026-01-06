import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  // Add CORS headers for production
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('📧 Email API called');
  console.log('Environment check:', {
    hasHost: !!process.env.SMTP_HOST,
    hasPort: !!process.env.SMTP_PORT,
    hasUser: !!process.env.SMTP_USER,
    hasPass: !!process.env.SMTP_PASS,
    hasContactEmail: !!process.env.CONTACT_EMAIL,
  });

  try {
    const { name, email, message, website } = req.body;
    console.log('📝 Received data:', { name, email, messageLength: message?.length });

    // Honeypot check to catch bots
    if (website && website.trim() !== '') {
      console.log('🤖 Bot detected');
      return res.status(200).json({ message: 'Email sent successfully' });
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Missing fields:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Gmail-specific configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('🔌 Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');

    // Email must be sent FROM the authenticated Gmail account
    const mailOptions = {
      from: process.env.SMTP_USER,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name} via rohinipatturaja.com`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    console.log('📤 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);

    return res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('💥 Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
    });

    return res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message,
      code: error.code,
    });
  }
}
