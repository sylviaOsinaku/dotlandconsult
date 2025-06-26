import { type NextRequest, NextResponse } from "next/server"
import { PaystackService } from "@/lib/paystack-service"
import { createCoursePurchase } from "@/lib/course-service"

export async function POST(request: NextRequest) {
  try {
    const purchaseData = await request.json()

    const { firstName, lastName, email, phone, courseName, coursePrice, company, position } = purchaseData

    // Generate payment reference
    const reference = PaystackService.generateReference()

    // Initialize Paystack payment
    const paymentResponse = await PaystackService.initializePayment({
      email,
      amount: coursePrice * 100, // Convert to kobo
      reference,
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/verify?reference=${reference}`,
      metadata: {
        course_name: courseName,
        participant_name: `${firstName} ${lastName}`,
        phone,
        company,
        position,
      },
    })

    if (!paymentResponse.status) {
      throw new Error(paymentResponse.message)
    }

    // Save course purchase record
    await createCoursePurchase({
      firstName,
      lastName,
      email,
      phone,
      company,
      position,
      courseName,
      coursePrice,
      paymentReference: reference,
      paymentStatus: "pending",
    })

    return NextResponse.json({
      success: true,
      authorization_url: paymentResponse.data.authorization_url,
      reference: paymentResponse.data.reference,
    })
  } catch (error) {
    console.error("Course purchase error:", error)
    return NextResponse.json({ success: false, message: "Failed to initialize payment" }, { status: 500 })
  }
}
