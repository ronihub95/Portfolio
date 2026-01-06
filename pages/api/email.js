import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  console.log('📧 Email API called');

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // e.g., smtp.gmail.com
      port: process.env.SMTP_PORT || 587,
      secure: false,                      // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,      // your email
        pass: process.env.SMTP_PASS,      // your email password or app password
      },
    });

    // Prepare email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,      // your receiving email
      subject: `New message from ${name} via rohinipatturaja.com`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('💥 Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
