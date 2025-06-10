import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, data } = await request.json()

    // Format the notification email for the company
    const emailContent = `
      <h2>New Form Submission</h2>
      <h3>Details:</h3>
      <ul>
        ${Object.entries(data)
          .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
          .join("")}
      </ul>
      <p>Submitted at: ${new Date().toLocaleString()}</p>
    `

    // Send notification to company email
    // Replace with your actual email service
    console.log("Sending notification to:", to)
    console.log("Subject:", subject)
    console.log("Content:", emailContent)

    return NextResponse.json({ success: true, message: "Notification sent" })
  } catch (error) {
    console.error("Notification sending error:", error)
    return NextResponse.json({ success: false, message: "Failed to send notification" }, { status: 500 })
  }
}
