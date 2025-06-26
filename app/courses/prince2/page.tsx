"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Calendar, MapPin, Award, Download, CheckCircle, CreditCard, BookOpen } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"
import { CoursePurchaseModal } from "@/components/course-purchase-modal"

export default function Prince2Course() {
  const [activeSection, setActiveSection] = useState("overview")

  const courseData = {
    title: "PRINCE2 Foundation & Practitioner",
    subtitle: "Structured Project Management Methodology",
    price: 450000,
    duration: "5 Days",
    mode: "Classroom/Virtual",
    level: "Foundation to Practitioner",
    certification: "PRINCE2 Foundation & Practitioner Certificates",
    nextDate: "February 17-21, 2025",
    location: "Lagos, Nigeria / Virtual",
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/brochures/prince2-brochure.pdf"
    link.download = "PRINCE2-Course-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const benefits = [
    "Structured project management approach",
    "Globally recognized certification",
    "Scalable methodology for any project size",
    "Clear roles and responsibilities framework",
    "Risk-based project management",
    "Business case driven approach",
  ]

  const modules = [
    {
      title: "Introduction to PRINCE2",
      topics: [
        "PRINCE2 principles and methodology",
        "Project context and environment",
        "PRINCE2 vs other methodologies",
        "Tailoring PRINCE2 to project needs",
      ],
    },
    {
      title: "PRINCE2 Principles",
      topics: [
        "Continued business justification",
        "Learn from experience",
        "Defined roles and responsibilities",
        "Manage by stages",
        "Manage by exception",
        "Focus on products",
        "Tailor to suit project environment",
      ],
    },
    {
      title: "PRINCE2 Themes",
      topics: [
        "Business case theme",
        "Organization theme",
        "Quality theme",
        "Plans theme",
        "Risk theme",
        "Change theme",
        "Progress theme",
      ],
    },
    {
      title: "PRINCE2 Processes",
      topics: [
        "Starting up a project (SU)",
        "Directing a project (DP)",
        "Initiating a project (IP)",
        "Controlling a stage (CS)",
        "Managing product delivery (MP)",
        "Managing stage boundaries (SB)",
        "Closing a project (CP)",
      ],
    },
    {
      title: "Project Environment",
      topics: ["Embedding PRINCE2", "Contracting considerations", "Commercial considerations", "People considerations"],
    },
    {
      title: "Practitioner Application",
      topics: [
        "Scenario-based exercises",
        "Real-world case studies",
        "Exam preparation strategies",
        "Practice assessments",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <CourseNavigation activeSection={activeSection} />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">PRINCE2</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                  <p className="text-purple-100 text-lg">{courseData.subtitle}</p>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {courseData.level}
                </Badge>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-200" />
                  <span className="text-sm">{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-200" />
                  <span className="text-sm">{courseData.mode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-200" />
                  <span className="text-sm">{courseData.nextDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-200" />
                  <span className="text-sm">Certified</span>
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <section id="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    Course Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    PRINCE2 (PRojects IN Controlled Environments) is the world's most widely adopted project management
                    methodology. This comprehensive course covers both Foundation and Practitioner levels, providing you
                    with structured approach to project management that can be applied to any project, regardless of
                    size or complexity.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn</h4>
                      <ul className="space-y-2">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Target Audience</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Project managers and team leaders</li>
                        <li>• Business analysts and consultants</li>
                        <li>• Program and portfolio managers</li>
                        <li>• Senior managers and executives</li>
                        <li>• Anyone involved in project delivery</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Course Modules */}
            <section id="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Module {index + 1}: {module.title}
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Certification */}
            <section id="certification">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-purple-600" />
                    Certification Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Upon successful completion, you'll receive both PRINCE2 Foundation and Practitioner certificates
                    from AXELOS, the global best practice organization.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Foundation Level</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• 60 multiple choice questions</li>
                        <li>• 60 minutes duration</li>
                        <li>• 55% pass mark</li>
                        <li>• Closed book examination</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Practitioner Level</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• 68 multiple choice questions</li>
                        <li>• 150 minutes duration</li>
                        <li>• 55% pass mark</li>
                        <li>• Open book examination</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-center">
                  <span className="text-3xl font-bold text-purple-600">₦{courseData.price.toLocaleString()}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{courseData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{courseData.mode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Date:</span>
                    <span className="font-medium text-green-600">{courseData.nextDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{courseData.location}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <CoursePurchaseModal courseName={courseData.title} coursePrice={courseData.price}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                  </CoursePurchaseModal>

                  <Button variant="outline" className="w-full" onClick={handleDownload}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Brochure
                  </Button>

                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/contact">Contact for Group Training</Link>
                  </Button>
                </div>

                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-green-700 font-medium">
                    🎯 Early Bird: Save 15% if you register 2 weeks before
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>📞 07025560034</p>
                  <p>📧 support@dotlandconsulting.com</p>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
