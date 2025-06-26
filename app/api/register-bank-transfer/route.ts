import { type NextRequest, NextResponse } from "next/server"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, position, courseName, coursePrice, paymentMethod } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !courseName || !coursePrice) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Store registration in Firestore
    const registrationData = {
      firstName,
      lastName,
      email,
      phone,
      company: company || "",
      position: position || "",
      courseName,
      coursePrice,
      paymentMethod,
      paymentStatus: "pending",
      registrationDate: new Date().toISOString(),
      reference: `BANK_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }

    await addDoc(collection(db, "course_registrations"), registrationData)

    // Send notification email to admin
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-notification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "bank_transfer_registration",
          data: registrationData,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError)
    }

    // Send confirmation email to user
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-confirmation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "bank_transfer_registration",
          email,
          data: registrationData,
        }),
      })
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Registration successful! Please complete payment and send proof to WhatsApp.",
      reference: registrationData.reference,
    })
  } catch (error) {
    console.error("Bank transfer registration error:", error)
    return NextResponse.json({ success: false, message: "Registration failed. Please try again." }, { status: 500 })
  }
}
