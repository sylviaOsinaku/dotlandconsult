"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Calendar, MapPin, Award, Download, CheckCircle, CreditCard, Shield } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"
import { CoursePurchaseModal } from "@/components/course-purchase-modal"
import Image from "next/image"

export default function RiskManagementCourse() {
  const [activeSection, setActiveSection] = useState("overview")

  const courseData = {
    title: "Professional Risk Management",
    subtitle: "Enterprise Risk Management & Mitigation Strategies",
    price: 150000,
    duration: "4-5 Days",
    mode: "Classroom/Online/Hybrid",
    level: "Professional",
    certification: "Risk Management Certificate",
    nextDate: "March 10-14, 2025",
    location: "Lagos, Nigeria / Virtual",
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/brochures/risk-management-brochure.pdf"
    link.download = "Risk-Management-Course-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const modules = [
    {
      title: "Introduction to Risk Management",
      objective: "Understand the fundamental concepts of risk and the importance of risk management in organizations.",
      topics: [
        "Definition and Types of Risk (Strategic, Operational, Financial, Compliance, etc.)",
        "The Role of Risk Management in Business",
        "Risk Management Frameworks and Standards (e.g., ISO 31000, COSO)",
        "History and Evolution of Risk Management",
      ],
      explanation:
        "This module sets the stage, helping participants understand what risk management is and why it's vital. Frameworks like ISO 31000 provide structured approaches that businesses use to manage risks systematically.",
    },
    {
      title: "Risk Identification and Assessment",
      objective: "Learn to identify and evaluate risks using structured techniques.",
      topics: [
        "Risk Identification Tools (SWOT, PESTLE, Brainstorming, Checklists)",
        "Risk Assessment Methodologies (Qualitative vs Quantitative)",
        "Risk Matrix and Heat Maps",
        "Probability and Impact Assessment",
      ],
      explanation:
        "Risk identification is the process of pinpointing risks before they become issues. This module covers tools that help recognize threats and opportunities. Assessment methods allow participants to evaluate the severity and likelihood of each risk.",
    },
    {
      title: "Risk Analysis and Evaluation",
      objective: "Analyze identified risks to understand their nature and determine their significance.",
      topics: [
        "Root Cause Analysis",
        "Risk Modelling and Simulations (e.g., Monte Carlo Simulation)",
        "Cost-Benefit Analysis",
        "Risk Appetite and Tolerance Levels",
      ],
      explanation:
        "This part focuses on digging deeper into risk data. Tools like root cause analysis help determine why risks occur. Simulations and financial analysis are introduced to estimate potential impacts.",
    },
    {
      title: "Risk Response and Mitigation Strategies",
      objective: "Learn how to design and implement effective risk treatment plans.",
      topics: [
        "Risk Treatment Options (Avoid, Transfer, Reduce, Accept, Exploit)",
        "Developing Risk Mitigation Plans",
        "Contingency Planning",
        "Insurance and Hedging",
      ],
      explanation:
        "Once risks are evaluated, organizations must decide how to respond. This module gives practical tools and examples to reduce or control risks, including financial instruments like insurance.",
    },
    {
      title: "Risk Monitoring and Reporting",
      objective: "Understand how to monitor risk over time and report findings to stakeholders.",
      topics: [
        "Key Risk Indicators (KRIs)",
        "Risk Reporting Structures",
        "Risk Dashboards and Software Tools",
        "Continuous Improvement in Risk Management",
      ],
      explanation:
        "Risk management is not a one-time activity. This module teaches how to track risks over time and communicate effectively with leadership using tools and structured reporting formats.",
    },
    {
      title: "Enterprise Risk Management (ERM)",
      objective: "Apply an integrated, strategic approach to managing risk across the entire organization.",
      topics: [
        "Principles of ERM",
        "Building a Risk-Aware Culture",
        "Aligning ERM with Strategic Planning",
        "Case Studies in ERM Implementation",
      ],
      explanation:
        "ERM is a comprehensive way to look at risk across all departments. It ensures risk management aligns with organizational goals and strategy, promoting a proactive risk culture.",
    },
    {
      title: "Legal, Regulatory, and Ethical Considerations",
      objective: "Explore the legal framework and ethical issues in risk management.",
      topics: [
        "Regulatory Compliance (SOX, GDPR, Basel III, etc.)",
        "Risk Management and Corporate Governance",
        "Ethical Risk Management",
        "Whistleblower Protections and Conflict of Interest",
      ],
      explanation:
        "Risk management must also consider legal and ethical dimensions. This module introduces relevant laws and ethical principles that guide responsible risk handling.",
    },
    {
      title: "Risk Management Tools and Technology",
      objective: "Learn to leverage technology in managing risk.",
      topics: [
        "Risk Management Information Systems (RMIS)",
        "AI and Data Analytics in Risk Management",
        "Cybersecurity Risk Management",
        "Blockchain and Emerging Technologies",
      ],
      explanation:
        "Digital tools are transforming how risks are tracked and mitigated. This module provides an overview of current and emerging technologies used in modern risk management.",
    },
    {
      title: "Crisis and Incident Management",
      objective: "Prepare for and respond to critical events that disrupt normal operations.",
      topics: [
        "Business Continuity Planning (BCP)",
        "Disaster Recovery (DR)",
        "Crisis Communication Strategies",
        "Case Studies of Major Crises",
      ],
      explanation:
        "When risks materialize into crises, organizations need robust response plans. This module covers business continuity, disaster recovery, and effective crisis communication.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <CourseNavigation sections={[]} />

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
          <span className="text-gray-900 font-medium">Risk Management</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-4">
                    {courseData.level}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                  <p className="text-red-100 text-lg mb-6">{courseData.subtitle}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-red-200" />
                      <span className="text-sm">{courseData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-red-200" />
                      <span className="text-sm">{courseData.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-red-200" />
                      <span className="text-sm">{courseData.nextDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-red-200" />
                      <span className="text-sm">ISO 31000</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Risk Management Training"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <section id="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-red-600" />
                    Course Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This Professional Risk Management course provides comprehensive training in enterprise risk
                    management and mitigation strategies. Learn to identify, assess, and manage risks using
                    industry-standard frameworks including ISO 31000 and COSO. Perfect for professionals looking to
                    enhance their risk management capabilities and protect their organizations from potential threats.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Key Frameworks Covered</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• ISO 31000 - International Risk Management Standard</li>
                      <li>• COSO Framework - Committee of Sponsoring Organizations</li>
                      <li>• Enterprise Risk Management (ERM) Principles</li>
                      <li>• Business Continuity Planning (BCP)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Course Modules */}
            <section id="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Course Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-red-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Module {index + 1}: {module.title}
                        </h4>

                        <p className="text-sm text-red-600 font-medium mb-3">
                          <strong>Objective:</strong> {module.objective}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">Topics Covered:</h5>
                            <ul className="space-y-1">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-red-400 mt-1">•</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {module.explanation && (
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-700 italic">{module.explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Who Should Attend */}
            <section id="audience">
              <Card>
                <CardHeader>
                  <CardTitle>Who Should Attend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Risk Managers and Officers",
                      "Project Managers",
                      "Compliance Officers",
                      "Internal Auditors",
                      "Business Continuity Managers",
                      "Operations Managers",
                      "Finance and Insurance Professionals",
                      "Senior Management and Executives",
                    ].map((audience, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{audience}</span>
                      </div>
                    ))}
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
                  <span className="text-3xl font-bold text-red-600">₦{courseData.price.toLocaleString()}</span>
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
                    <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
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
                  <p className="text-sm text-green-700 font-medium">🛡️ ISO 31000 & COSO Aligned Training</p>
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
