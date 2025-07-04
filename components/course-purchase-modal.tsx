"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import copy from 'copy-text-to-clipboard';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Loader2, Shield, CheckCircle2, Building2, MessageCircle, Copy } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface CoursePurchaseModalProps {
  courseName: string
  coursePrice: number
  children: React.ReactNode
}

export function CoursePurchaseModal({ courseName, coursePrice, children }: CoursePurchaseModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("online")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    copy(text)
    console.log("testing copy")
    console.log(text)
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (paymentMethod === "online") {
        const response = await fetch("/api/purchase-course", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            courseName,
            coursePrice,
          }),
        })

        const result = await response.json()

        if (result.success) {
          window.location.href = result.authorization_url
        } else {
          toast({
            title: "Error",
            description: result.message || "Failed to initialize payment",
            variant: "destructive",
          })
        }
      } else {
        // Handle bank transfer registration
        const response = await fetch("/api/register-bank-transfer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            courseName,
            coursePrice,
            paymentMethod: "bank_transfer",
          }),
        })

        const result = await response.json()

        if (result.success) {
          toast({
            title: "Registration Successful!",
            description: "Please complete your payment using the bank details provided and send proof to our WhatsApp.",
          })
          setIsOpen(false)
        } else {
          toast({
            title: "Error",
            description: result.message || "Failed to register",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Purchase error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl font-bold text-gray-900">Course Enrollment</DialogTitle>
          <DialogDescription className="text-gray-600">
            Complete your registration for <span className="font-semibold text-blue-600">{courseName}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{courseName}</h3>
                <p className="text-sm text-gray-600">Professional Training Course</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">₦{coursePrice.toLocaleString()}</p>
                <p className="text-sm text-gray-500">One-time payment</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Certificate included</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Course materials</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Expert instruction</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="online" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Online Payment
              </TabsTrigger>
              <TabsTrigger value="bank" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Bank Transfer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="online" className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-green-900 mb-1">Secure Online Payment</h4>
                    <p className="text-sm text-green-700 leading-relaxed">
                      Pay securely with your credit/debit card through Paystack. All major cards accepted.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bank" className="space-y-4">
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-900 flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Bank Transfer Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <div>
                        <p className="text-sm text-gray-600">Account Name</p>
                        <p className="font-semibold">A.G. Dotland Consulting Ltd.</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        
                        onClick={() => copyToClipboard("A.G. Dotland Consulting Ltd.", "Account Name")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <div>
                        <p className="text-sm text-gray-600">Bank</p>
                        <p className="font-semibold">GTBank</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("GTBank", "Bank Name")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                      <div>
                        <p className="text-sm text-gray-600">Account Number</p>
                        <p className="font-semibold text-lg">0693274422</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("0693274422", "Account Number")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-blue-900 mb-1">Send Proof of Payment</h4>
                        <p className="text-sm text-blue-700 mb-2">
                          After making the transfer, send your payment receipt to our WhatsApp:
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-blue-900">+234 702 556 0034</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard("+234 702 556 0034", "WhatsApp Number")}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Personal Information */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-gray-900">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-gray-900">Professional Information</CardTitle>
              <p className="text-sm text-gray-500">Optional but helps us customize your experience</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company/Organization
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                  Job Title/Position
                </Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your job title"
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : paymentMethod === "online" ? (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Payment
                </>
              ) : (
                <>
                  <Building2 className="mr-2 h-4 w-4" />
                  Register for Course
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            By proceeding, you agree to our terms of service and privacy policy. You will receive a confirmation email
            after registration.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
