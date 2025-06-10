"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Phone, Mail } from "lucide-react"
import { SuccessModal } from "@/components/success-modal"

export default function TrainingSchedulePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    course: "",
    preferredDate: "",
    trainingType: "",
    participants: "",
    specialRequirements: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccessModal(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          position: "",
          course: "",
          preferredDate: "",
          trainingType: "",
          participants: "",
          specialRequirements: "",
          agreeToTerms: false,
        })
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Form submission failed:", error)
      alert("Failed to submit booking request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Training Schedule</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Training Session</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Schedule your professional training with our expert instructors. Choose from our flexible training options
              to fit your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Training Booking Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to schedule your training session. We&apos;ll contact you within 24 hours to
                    confirm your booking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="position">Job Position *</Label>
                          <Input
                            id="position"
                            value={formData.position}
                            onChange={(e) => handleInputChange("position", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Training Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Training Details</h3>
                      <div>
                        <Label htmlFor="course">Select Course *</Label>
                        <Select onValueChange={(value) => handleInputChange("course", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a training program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Project Management Professional (PMP)">
                              Project Management Professional (PMP)
                            </SelectItem>
                            <SelectItem value="Business Analysis Certification">
                              Business Analysis Certification
                            </SelectItem>
                            <SelectItem value="Risk Management Professional">Risk Management Professional</SelectItem>
                            <SelectItem value="Agile & Scrum Master">Agile & Scrum Master</SelectItem>
                            <SelectItem value="Quality Management Systems">Quality Management Systems</SelectItem>
                            <SelectItem value="Strategic Leadership">Strategic Leadership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="preferredDate">Preferred Start Date</Label>
                          <Input
                            id="preferredDate"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="trainingType">Training Type *</Label>
                          <Select onValueChange={(value) => handleInputChange("trainingType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select training type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Public Training">Public Training</SelectItem>
                              <SelectItem value="Corporate Training">Corporate Training</SelectItem>
                              <SelectItem value="Online Training">Online Training</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="participants">Number of Participants</Label>
                        <Input
                          id="participants"
                          type="number"
                          min="1"
                          max="25"
                          value={formData.participants}
                          onChange={(e) => handleInputChange("participants", e.target.value)}
                          placeholder="Enter number of participants"
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
                      <div>
                        <Label htmlFor="specialRequirements">Special Requirements or Comments</Label>
                        <Textarea
                          id="specialRequirements"
                          value={formData.specialRequirements}
                          onChange={(e) => handleInputChange("specialRequirements", e.target.value)}
                          placeholder="Any special requirements, dietary restrictions, accessibility needs, etc."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms and conditions and privacy policy *
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!formData.agreeToTerms || isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-gray-600">07025560034</div>
                      <div className="text-sm text-gray-600">07084659907</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-gray-600">support@dotlandconsulting.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-sm text-gray-600">The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Training Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Training Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Public Training</div>
                        <div className="text-sm text-gray-600">Join scheduled public sessions</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Corporate Training</div>
                        <div className="text-sm text-gray-600">Customized for your organization</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Online Training</div>
                        <div className="text-sm text-gray-600">Virtual instructor-led sessions</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        1
                      </span>
                      <span>We&apos;ll review your booking request</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        2
                      </span>
                      <span>Our team will contact you within 24 hours</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        3
                      </span>
                      <span>We&apos;ll confirm dates and send payment details</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        4
                      </span>
                      <span>You&apos;ll receive pre-course materials</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        type="training-schedule"
        data={formData}
      />
    </div>
  )
}
