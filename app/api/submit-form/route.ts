import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const submission = await request.json()

    // Google Sheets submission
    // You'll need to replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "YOUR_GOOGLE_SCRIPT_URL"

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...submission,
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets")
    }

    // Send notification email to company
    await fetch("/api/send-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "support@dotlandconsulting.com",
        subject: `New ${submission.type} Form Submission`,
        data: submission.data,
      }),
    })

    return NextResponse.json({ success: true, message: "Form submitted successfully" })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}
