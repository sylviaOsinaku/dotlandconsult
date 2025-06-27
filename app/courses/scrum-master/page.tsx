"use client"

// import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Calendar, MapPin, Award, Download, CheckCircle, CreditCard, Zap } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"
import { CoursePurchaseModal } from "@/components/course-purchase-modal"

export default function ScrumMasterCourse() {
  // const [activeSection, setActiveSection] = useState("overview")

  const courseData = {
    title: "Professional Scrum Master (PSM I)",
    subtitle: "Master Agile & Scrum Framework",
    price: 320000,
    duration: "3 Days",
    mode: "Classroom/Virtual",
    level: "Beginner to Intermediate",
    certification: "PSM I Exam Preparation",
    nextDate: "March 17-19, 2025",
    location: "Lagos, Nigeria / Virtual",
  }

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "benefits", label: "Benefits" },
    { id: "schedule", label: "Schedule" },
  ]

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/brochures/scrum-master-brochure.pdf"
    link.download = "Scrum-Master-Course-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const benefits = [
    "Complete understanding of Scrum framework",
    "Facilitation and coaching techniques",
    "Servant leadership principles",
    "Agile transformation strategies",
    "Team dynamics and conflict resolution",
    "Metrics and continuous improvement",
  ]

  const modules = [
    {
      title: "Scrum Fundamentals",
      topics: [
        "Agile manifesto and principles",
        "Scrum theory and empiricism",
        "Scrum values and mindset",
        "Scrum vs traditional project management",
      ],
    },
    {
      title: "Scrum Framework",
      topics: [
        "Scrum roles and responsibilities",
        "Product Owner, Scrum Master, Development Team",
        "Scrum events (Sprint, Daily Scrum, etc.)",
        "Scrum artifacts (Backlog, Increment)",
      ],
    },
    {
      title: "Scrum Master Role",
      topics: ["Servant leadership", "Coaching and mentoring", "Facilitation techniques", "Impediment removal"],
    },
    {
      title: "Agile Practices",
      topics: [
        "User story writing",
        "Sprint planning techniques",
        "Retrospective facilitation",
        "Agile estimation methods",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <CourseNavigation sections={sections} />

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
          <span className="text-gray-900 font-medium">Scrum Master</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div id="hero" className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                  <p className="text-orange-100 text-lg">{courseData.subtitle}</p>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {courseData.level}
                </Badge>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-200" />
                  <span className="text-sm">{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-200" />
                  <span className="text-sm">{courseData.mode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-200" />
                  <span className="text-sm">{courseData.nextDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-200" />
                  <span className="text-sm">PSM I Prep</span>
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <section id="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Course Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Become a certified Scrum Master and lead high-performing agile teams. This comprehensive course
                    covers the Scrum framework, servant leadership principles, and practical facilitation techniques.
                    Perfect preparation for the Professional Scrum Master (PSM I) certification.
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
                        <li>• Project managers transitioning to Agile</li>
                        <li>• Team leaders and facilitators</li>
                        <li>• Product managers and owners</li>
                        <li>• Software development professionals</li>
                        <li>• Anyone interested in Agile/Scrum</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Curriculum */}
            <section id="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-orange-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Module {index + 1}: {module.title}
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-orange-400 mt-1">•</span>
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

            {/* Benefits */}
            <section id="benefits">
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose This Course?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h5 className="font-medium">Expert Instructors</h5>
                          <p className="text-sm text-gray-600">
                            Learn from certified Scrum Masters with real-world experience
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h5 className="font-medium">Hands-on Learning</h5>
                          <p className="text-sm text-gray-600">Practice with real scenarios and case studies</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h5 className="font-medium">Certification Prep</h5>
                          <p className="text-sm text-gray-600">Comprehensive preparation for PSM I exam</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h5 className="font-medium">Lifetime Support</h5>
                          <p className="text-sm text-gray-600">Ongoing support and resources after completion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Schedule */}
            <section id="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Training Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Next Available Sessions</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium">Classroom Training</p>
                          <p className="text-sm text-gray-600">March 17-19, 2025</p>
                          <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                        </div>
                        <div>
                          <p className="font-medium">Virtual Training</p>
                          <p className="text-sm text-gray-600">March 24-26, 2025</p>
                          <p className="text-sm text-gray-600">Online via Zoom</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">* Custom training schedules available for corporate groups</p>
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
                  <span className="text-3xl font-bold text-orange-600">₦{courseData.price.toLocaleString()}</span>
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
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
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
                  <p className="text-sm text-green-700 font-medium">🚀 Fast Track: 3-day intensive program</p>
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
