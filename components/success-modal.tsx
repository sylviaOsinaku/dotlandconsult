"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X, Calendar, ArrowRight} from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  type: "contact" | "training-schedule"
  data?: Record<string, any>
}

export function SuccessModal({ isOpen, onClose, type, data }: SuccessModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!isOpen) return null

  const getContent = () => {
    if (type === "training-schedule") {
      return {
        title: "Training Request Submitted Successfully",
        
       
        details: [
          "Booking confirmation sent to your email",
          "Our team will contact you within 24 hours",
          
        ],
        nextSteps: "What happens next?",
        course: data?.course || "Selected Course",
    
      }
    } else {
      return {
        title: "Message Sent Successfully",
        subtitle: "We've received your inquiry",
        message: "Thank you for contacting us. Our team will review your message and respond promptly.",
        details: [
          "Confirmation email sent to your inbox",
          "Our team will respond within 24 hours",
        ],
        nextSteps: "What happens next?",
        course: null,
        
      }
    }
  }

  const content = getContent()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible ? "opacity-40" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <Card
        className={`relative sm:my-8 sm:w-full sm:max-w-lg transform transition-all duration-300 shadow-2xl border-0 overflow-hidden rounded-lg ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <CardHeader className="text-center pb-6 pt-8 px-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-t-lg relative">
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">{content.title}</CardTitle>

          
        </CardHeader>

        <CardContent className="px-8 py-6 space-y-6">
         

          {/* Course Info for Training Bookings */}
          {content.course && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">{content.nextSteps}</h4>
            <div className="space-y-3">
              {content.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6  bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
              </div>
            </div>
          )}

          
 
         
          

          
        

          
         
 
 <div className="flex flex-col gap-3 pt-2">
            <Button onClick={handleClose} className="w-full bg-blue-600 hover:bg-blue-700 font-medium py-3">
              Continue Browsing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {type === "training-schedule" && (
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 font-medium py-3"
                onClick={() => {
                  window.location.href = "/courses"
                }}
              >
                <Calendar className="mr-2  w-4" />
                Explore More Courses
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
