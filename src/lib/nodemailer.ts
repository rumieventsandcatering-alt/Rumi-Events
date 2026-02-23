import nodemailer from 'nodemailer';

interface EmailData {
    mobile: string;
    message: string;
    date: Date;
}

export async function sendEmailNotification(data: EmailData) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: `"Rumi Events Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.BUSINESS_EMAIL, // The business owner's email
        subject: 'New Lead: Rumi Events Contact Form Submission',
        text: `New contact submission received.
    
    Mobile: ${data.mobile}
    Message: ${data.message}
    Date: ${new Date(data.date).toLocaleString()}
    `,
        html: `
      <h2>New Contact Submission</h2>
      <p><strong>Mobile:</strong> ${data.mobile}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><strong>Date:</strong> ${new Date(data.date).toLocaleString()}</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}
