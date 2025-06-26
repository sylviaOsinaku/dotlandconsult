import nodemailer from 'nodemailer'


export async function sendEmail({ to, subject, html, text }: {
  to: string
  subject: string
  html: string
  text: string
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // must be string from .env
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject,
    text,
    html,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent: ' + info.response)
    return { success: true, message: 'Email sent' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Email failed to send' }
  }
}
