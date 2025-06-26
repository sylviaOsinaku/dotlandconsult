import { type NextRequest, NextResponse } from "next/server"
import { PaystackService } from "@/lib/paystack-service"
import { updatePaymentStatus, getCoursePurchaseByReference } from "@/lib/course-service"
import {generateCoursePaymentConfirmationEmail } from "@/lib/email-service"
import { sendEmail } from "@/lib/sendEmail"
import { Timestamp } from "firebase/firestore"

export async function POST(request: NextRequest) {
  try {
    const { reference } = await request.json()

    if (!reference) {
      return NextResponse.json({ success: false, message: "Payment reference is required" }, { status: 400 })
    }

    // Verify payment with Paystack
    const verificationResponse = await PaystackService.verifyPayment(reference)

    if (!verificationResponse.status) {
      throw new Error("Payment verification failed")
    }

    const paymentData = verificationResponse.data

    // Get course purchase record
    const coursePurchase = await getCoursePurchaseByReference(reference)

    if (!coursePurchase) {
      return NextResponse.json({ success: false, message: "Course purchase not found" }, { status: 404 })
    }

    // Update payment status based on Paystack response
    const paymentStatus = paymentData.status === "success" ? "successful" : "failed"
    const paymentDate = paymentStatus === "successful" ? Timestamp.now() : undefined

    await updatePaymentStatus(reference, paymentStatus, paymentDate)

    // Send confirmation email if payment was successful
    if (paymentStatus === "successful") {
      const emailContent = generateCoursePaymentConfirmationEmail({
        ...coursePurchase,
        paymentAmount: paymentData.amount / 100, // Convert from kobo
        paymentDate: new Date().toLocaleDateString(),
      })

      await sendEmail({
        to: coursePurchase.email,
        subject: `Course Payment Confirmation - ${coursePurchase.courseName}`,
        html: emailContent.html,
        text: emailContent.text,
      })

      // Send notification to admin
      await sendEmail({
        to: process.env.ADMIN_EMAIL || "support@dotlandconsulting.com",
        subject: `New Course Purchase - ${coursePurchase.courseName}`,
        html: `
          <h2>New Course Purchase Confirmed</h2>
          <p><strong>Course:</strong> ${coursePurchase.courseName}</p>
          <p><strong>Participant:</strong> ${coursePurchase.firstName} ${coursePurchase.lastName}</p>
          <p><strong>Email:</strong> ${coursePurchase.email}</p>
          <p><strong>Phone:</strong> ${coursePurchase.phone}</p>
          <p><strong>Company:</strong> ${coursePurchase.company}</p>
          <p><strong>Amount Paid:</strong> ₦${(paymentData.amount / 100).toLocaleString()}</p>
          <p><strong>Payment Reference:</strong> ${reference}</p>
          <p><strong>Payment Date:</strong> ${new Date().toLocaleString()}</p>
        `,text : `New payment made`
      })
    }

    return NextResponse.json({
      success: true,
      paymentStatus,
      message: paymentStatus === "successful" ? "Payment confirmed successfully" : "Payment failed",
    })
  } catch (error) {
    console.error("Payment verification error:", error)
    return NextResponse.json({ success: false, message: "Failed to verify payment" }, { status: 500 })
  }
}
