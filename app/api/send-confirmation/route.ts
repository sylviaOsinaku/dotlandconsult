import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, formType, data } = await request.json()

    // Email service configuration (you can use services like Resend, SendGrid, etc.)
    const emailContent = generateConfirmationEmail(formType, data)

    // For now, we'll simulate email sending
    // Replace this with your actual email service
    console.log("Sending confirmation email to:", email)
    console.log("Email content:", emailContent)

    // Example with a hypothetical email service:
    // await emailService.send({
    //   to: email,
    //   from: 'support@dotlandconsulting.com',
    //   subject: emailContent.subject,
    //   html: emailContent.html,
    // })

    return NextResponse.json({ success: true, message: "Confirmation email sent" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, message: "Failed to send confirmation email" }, { status: 500 })
  }
}
type ContactFormData = {
  name: string;
  message: string;
  firstName:string;
  lastName:string;
  course:string;
  preferredDate:string;
  trainingType:string;
  // add more fields if needed
};

function generateConfirmationEmail(formType: string, data: ContactFormData) {
  if (formType === "contact") {
    return {
      subject: "Thank you for contacting Dotland Consulting",
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${data.name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${data.message}</p>
        <p>Best regards,<br>Dotland Consulting Team</p>
      `,
    }
  } else if (formType === "training-schedule") {
    return {
      subject: "Training Booking Confirmation - Dotland Consulting",
      html: `
        <h2>Training Booking Confirmation</h2>
        <p>Dear ${data.firstName} ${data.lastName},</p>
        <p>Thank you for your training booking request. We will contact you within 24 hours to confirm your training schedule.</p>
        <p><strong>Course:</strong> ${data.course}</p>
        <p><strong>Training Type:</strong> ${data.trainingType}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p>Best regards,<br>Dotland Consulting Team</p>
      `,
    }
  }

  return {
    subject: "Thank you - Dotland Consulting",
    html: "<p>Thank you for your submission. We will get back to you soon.</p>",
  }
}
