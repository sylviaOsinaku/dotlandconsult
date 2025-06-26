import { type NextRequest, NextResponse } from "next/server"
import { createBooking } from "@/lib/booking-service"
import {  generateCoursePaymentConfirmationEmail } from "@/lib/email-service"
import { sendEmail } from "@/lib/sendEmail"

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json()

    // Create booking in Firestore
    const booking = await createBooking(bookingData)

    // Send confirmation email to user
    const emailContent = generateCoursePaymentConfirmationEmail(bookingData)
    await sendEmail({
      to: bookingData.email,
      subject: "Training Booking Confirmation - Dotland Consulting",
      html: emailContent.html,
      text: emailContent.text,
    })

    // Send notification email to admin
    await sendEmail({
  to: process.env.ADMIN_EMAIL || "support@dotlandconsulting.com",
  subject: `New Training Booking - ${bookingData.course}`,
  html: `
    <h2>New Training Booking Received</h2>
    <p><strong>Name:</strong> ${bookingData.firstName} ${bookingData.lastName}</p>
    <p><strong>Email:</strong> ${bookingData.email}</p>
    <p><strong>Phone:</strong> ${bookingData.phone}</p>
    <p><strong>Company:</strong> ${bookingData.company}</p>
    <p><strong>Course:</strong> ${bookingData.course}</p>
    <p><strong>Training Type:</strong> ${bookingData.trainingType}</p>
    <p><strong>Preferred Date:</strong> ${bookingData.preferredDate}</p>
    <p><strong>Participants:</strong> ${bookingData.participants}</p>
    <p><strong>Special Requirements:</strong> ${bookingData.specialRequirements}</p>
    <p><strong>Booking ID:</strong> ${booking.id}</p>
  `,
  text: `
New Training Booking Received

Name: ${bookingData.firstName} ${bookingData.lastName}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Company: ${bookingData.company}
Course: ${bookingData.course}
Training Type: ${bookingData.trainingType}
Preferred Date: ${bookingData.preferredDate}
Participants: ${bookingData.participants}
Special Requirements: ${bookingData.specialRequirements}
Booking ID: ${booking.id}
  `
})


    return NextResponse.json({
      success: true,
      message: "Booking submitted successfully",
      bookingId: booking.id,
    })
  } catch (error) {
    console.error("Booking submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit booking" }, { status: 500 })
  }
}
