import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Dotland Consulting" <${process.env.SMTP_FROM}>`,
      to,
      subject,
      html,
      text,
    })

    console.log("Email sent:", info.messageId)
    return info
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

export function generateBookingConfirmationEmail(bookingData: any) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Training Booking Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #dc2626); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        .detail-label { font-weight: bold; color: #475569; }
        .detail-value { color: #1e293b; }
        .next-steps { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .step { margin: 10px 0; padding-left: 20px; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; }
        .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Training Booking Confirmed!</h1>
          <p>Thank you for choosing Dotland Consulting</p>
        </div>
        
        <div class="content">
          <h2>Dear ${bookingData.firstName} ${bookingData.lastName},</h2>
          
          <p>We're excited to confirm your training booking! Our team will contact you within 24 hours to finalize the details and provide payment information.</p>
          
          <div class="booking-details">
            <h3>📋 Booking Details</h3>
            <div class="detail-row">
              <span class="detail-label">Course:</span>
              <span class="detail-value">${bookingData.course}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Training Type:</span>
              <span class="detail-value">${bookingData.trainingType}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Preferred Date:</span>
              <span class="detail-value">${bookingData.preferredDate || "To be confirmed"}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Participants:</span>
              <span class="detail-value">${bookingData.participants || "1"}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Company:</span>
              <span class="detail-value">${bookingData.company}</span>
            </div>
          </div>
          
          <div class="next-steps">
            <h3>🚀 What Happens Next?</h3>
            <div class="step">1️⃣ Our training coordinator will call you within 24 hours</div>
            <div class="step">2️⃣ We'll confirm your training dates and venue</div>
            <div class="step">3️⃣ You'll receive payment details and invoice</div>
            <div class="step">4️⃣ Pre-course materials will be sent 1 week before training</div>
          </div>
          
          <div class="contact-info">
            <h3>📞 Contact Information</h3>
            <p><strong>Phone:</strong> 07025560034 | 07084659907</p>
            <p><strong>Email:</strong> support@dotlandconsulting.com</p>
            <p><strong>Address:</strong> The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos</p>
          </div>
          
          <p>If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
          
          <p>We look forward to helping you advance your career!</p>
          
          <p><strong>Best regards,</strong><br>
          The Dotland Consulting Team</p>
        </div>
        
        <div class="footer">
          <p>© 2024 Dotland Consulting Limited. All rights reserved.</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
    Training Booking Confirmation - Dotland Consulting
    
    Dear ${bookingData.firstName} ${bookingData.lastName},
    
    Thank you for your training booking! Here are your details:
    
    Course: ${bookingData.course}
    Training Type: ${bookingData.trainingType}
    Preferred Date: ${bookingData.preferredDate || "To be confirmed"}
    Participants: ${bookingData.participants || "1"}
    Company: ${bookingData.company}
    
    Our team will contact you within 24 hours to confirm details.
    
    Contact us: 07025560034 | support@dotlandconsulting.com
    
    Best regards,
    Dotland Consulting Team
  `

  return { html, text }
}

export function generateContactConfirmationEmail(contactData: any) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message Received - Dotland Consulting</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #dc2626); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .message-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✉️ Message Received!</h1>
          <p>Thank you for contacting Dotland Consulting</p>
        </div>
        
        <div class="content">
          <h2>Dear ${contactData.name},</h2>
          
          <p>We've received your message and our team will respond within 24 hours.</p>
          
          <div class="message-details">
            <h3>📝 Your Message</h3>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f1f5f9; padding: 15px; border-radius: 4px; font-style: italic;">
              "${contactData.message}"
            </p>
          </div>
          
          <p>If you have any urgent questions, please call us at 07025560034.</p>
          
          <p><strong>Best regards,</strong><br>
          The Dotland Consulting Team</p>
        </div>
        
        <div class="footer">
          <p>© 2024 Dotland Consulting Limited. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
    Message Received - Dotland Consulting
    
    Dear ${contactData.name},
    
    We've received your message about "${contactData.subject}" and will respond within 24 hours.
    
    Your message: "${contactData.message}"
    
    For urgent matters, call: 07025560034
    
    Best regards,
    Dotland Consulting Team
  `

  return { html, text }
}
