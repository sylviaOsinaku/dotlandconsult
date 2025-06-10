"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-lg border-t-4 border-t-blue-600">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">We use cookies to enhance your experience</h3>
              <p className="text-sm text-gray-600 mb-4">
                We use cookies to analyze website traffic, personalize content, and provide social media features. By
                continuing to use our site, you consent to our use of cookies. You can manage your preferences or learn
                more in our{" "}
                <a href="/about" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="bg-blue-600 hover:bg-blue-700">
                  Accept All Cookies
                </Button>
                <Button onClick={declineCookies} variant="outline">
                  Decline
                </Button>
                <Button variant="ghost" className="text-sm">
                  Manage Preferences
                </Button>
              </div>
            </div>
            <Button onClick={declineCookies} variant="ghost" size="sm" className="flex-shrink-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
