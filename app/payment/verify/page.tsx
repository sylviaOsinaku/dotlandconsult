"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Loader2, Home, FileText } from "lucide-react"
import Link from "next/link"

export default function PaymentVerificationPage() {
  const searchParams = useSearchParams()
  const reference = searchParams.get("reference")
  const [verificationStatus, setVerificationStatus] = useState<"loading" | "success" | "failed">("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (reference) {
      verifyPayment(reference)
    } else {
      setVerificationStatus("failed")
      setMessage("Invalid payment reference")
    }
  }, [reference])

  const verifyPayment = async (ref: string) => {
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reference: ref }),
      })

      const result = await response.json()

      if (result.success && result.paymentStatus === "successful") {
        setVerificationStatus("success")
        setMessage("Your payment has been confirmed successfully!")
      } else {
        setVerificationStatus("failed")
        setMessage(result.message || "Payment verification failed")
      }
    } catch (error) {
      console.error("Verification error:", error)
      setVerificationStatus("failed")
      setMessage("An error occurred while verifying your payment")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            {verificationStatus === "loading" && <Loader2 className="h-6 w-6 animate-spin text-blue-600" />}
            {verificationStatus === "success" && <CheckCircle className="h-6 w-6 text-green-600" />}
            {verificationStatus === "failed" && <XCircle className="h-6 w-6 text-red-600" />}
            Payment Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {verificationStatus === "loading" && (
            <div>
              <p className="text-gray-600">Verifying your payment...</p>
              <p className="text-sm text-gray-500 mt-2">Please wait while we confirm your transaction.</p>
            </div>
          )}

          {verificationStatus === "success" && (
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-medium">{message}</p>
              </div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>✅ Payment confirmed</p>
                <p>✅ Course registration completed</p>
                <p>✅ Confirmation email sent</p>
              </div>
              <p className="text-sm text-gray-600">
                Our training team will contact you within 24 hours with course details and schedule.
              </p>
            </div>
          )}

          {verificationStatus === "failed" && (
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-medium">{message}</p>
              </div>
              <p className="text-sm text-gray-600">
                If you believe this is an error, please contact our support team with your payment reference:{" "}
                <strong>{reference}</strong>
              </p>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button asChild variant="outline" className="flex-1">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            {verificationStatus === "success" && (
              <Button asChild className="flex-1">
                <Link href="/courses">
                  <FileText className="mr-2 h-4 w-4" />
                  View Courses
                </Link>
              </Button>
            )}
            {verificationStatus === "failed" && (
              <Button asChild className="flex-1">
                <Link href="/contact">
                  <FileText className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
