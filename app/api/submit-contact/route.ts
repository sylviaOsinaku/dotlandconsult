import { type NextRequest, NextResponse } from "next/server"
import { createContactSubmission } from "@/lib/booking-service"
import { sendEmail } from "@/lib/sendEmail"
import { generateCoursePaymentConfirmationEmail } from "@/lib/email-service"


export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    // Create contact submission in Firestore
    const submission = await createContactSubmission(contactData)

    // Send confirmation email to user
    const emailContent = generateCoursePaymentConfirmationEmail(contactData)
    await sendEmail({
      to: contactData.email,
      subject: "Message Received - Dotland Consulting",
      html: emailContent.html,
      text: emailContent.text,
    })

    // Send notification email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || "support@dotlandconsulting.com",
      subject: `New Contact Message - ${contactData.subject}`,
      html: `
        <h2>New Contact Message Received</h2>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f1f5f9; padding: 15px; border-radius: 4px;">
          ${contactData.message}
        </p>
        <p><strong>Submission ID:</strong> ${submission.id}</p>
      `, text:`contact details`
    })

    return NextResponse.json({
      success: true,
      message: "Message submitted successfully",
      submissionId: submission.id,
    })
  } catch (error) {
    console.error("Contact submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit message" }, { status: 500 })
  }
}
