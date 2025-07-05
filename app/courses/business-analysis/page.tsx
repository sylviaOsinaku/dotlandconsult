"use client"

// import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Calendar, MapPin, Award, Download, CheckCircle, CreditCard, TrendingUp } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"
import { CoursePurchaseModal } from "@/components/course-purchase-modal"
import Image from "next/image"
import busImg from '../../../components/assests/businessanalysis.jpg'


export default function BusinessAnalysisCourse() {
  // const [activeSection, setActiveSection] = useState("overview")
  const sections = [
  { id: "description", label: "Description" },
  { id: "benefits", label: "What You Gain" },
  { id: "audience", label: "Who Should Attend" },
  { id: "outline", label: "Course Outline" },
]

  const courseData = {
    title: "Business Analysis Professional (CBAP)",
    subtitle: "IIBA BABOK v3 Aligned Certification",
    price: 200000,
    duration: "5 Days",
    mode: "Online/In-Person",
    level: "Beginner to Intermediate",
    certification: "ECBA, CCBA, CBAP Preparation",
    nextDate: "July 8-13, 2025",
    location: "Lagos, Nigeria / Virtual",
  }
  

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/brochures/business-analysis-brochure.pdf"
    link.download = "Business-Analysis-Course-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const modules = [
    {
      title: "Introduction to Business Analysis (BABOK Chapter 1 & 2)",
      session: "Session 1 – Understanding Business Analysis and Key Concepts",
      topics: [
        "What is Business Analysis?",
        "Overview of the BABOK Guide and IIBA Certification Levels (ECBA, CCBA, CBAP)",
        "Business Analysis Core Concepts Model (BACCM)",
        "Business Analysis Key Terms",
        "Role of a Business Analyst and Career Paths",
      ],
      exercises: ["Identify Business Analysis tasks in different industries", "Case study on Business Analyst roles"],
    },
    {
      title: "Business Analysis Planning & Monitoring (BABOK Chapter 3)",
      session: "Session 2 – Planning Business Analysis Work",
      topics: [
        "Defining the Business Analysis Approach",
        "Stakeholder Identification and Engagement Strategy",
        "Business Analysis Governance",
        "Information Management and Business Analysis Performance Improvement",
      ],
      exercises: [
        "Creating a Business Analysis Plan for a project",
        "Stakeholder Mapping & Analysis (RACI Matrix Creation)",
      ],
    },
    {
      title: "Elicitation & Collaboration (BABOK Chapter 4)",
      session: "Session 3 – Gathering and Validating Requirements",
      topics: [
        "Elicitation Techniques (Interviews, Surveys, Workshops, Focus Groups, Observation, etc.)",
        "Confirming and Communicating Requirements",
        "Active Listening and Effective Stakeholder Collaboration",
        "Overcoming Challenges in Requirements Gathering",
      ],
      exercises: ["Conducting a mock stakeholder interview", "Documenting and validating elicited requirements"],
    },
    {
      title: "Requirements Analysis & Design Definition (BABOK Chapter 5 & 6)",
      session: "Session 4 – Documenting and Modeling Requirements",
      topics: [
        "Types of Requirements (Business, Stakeholder, Solution, Transition, Functional & Non-Functional)",
        "Writing Effective Requirements (BRD, SRS, User Stories)",
        "Requirements Prioritization Techniques (MoSCoW, Kano Model)",
        "Modeling Requirements using BPMN, Use Cases, Process Flow Diagrams",
      ],
      exercises: ["Drafting a Business Requirements Document (BRD)", "Creating a process flow diagram using BPMN"],
    },
    {
      title: "Strategy Analysis (BABOK Chapter 5)",
      session: "Session 5 – Business Need Identification & Solution Definition",
      topics: [
        "Understanding Business Needs & Strategic Goals",
        "Defining Business Problems & Opportunities",
        "Root Cause Analysis Techniques (5 Whys, Fishbone Diagram)",
        "Business Case Development & Feasibility Analysis",
        "Risk Analysis & Change Strategy Development",
      ],
      exercises: [
        "Conducting a SWOT Analysis for a Business Scenario",
        "Developing a Business Case & Cost-Benefit Analysis",
      ],
    },
    {
      title: "Solution Evaluation (BABOK Chapter 7)",
      session: "Session 6 – Assessing and Validating Business Solutions",
      topics: [
        "Solution Performance Measurement",
        "Identifying and Analyzing Performance Gaps",
        "Acceptance Criteria Development",
        "Measuring Solution Benefits and Business Value",
      ],
      exercises: ["Developing Key Performance Indicators (KPIs) for a Business Solution", "Performing a Gap Analysis"],
    },
    {
      title: "Business Analysis Tools & Software (Supporting Techniques)",
      session: "Session 7 – Hands-on Training with Industry Tools",
      topics: [
        "Overview of SDLC Models: Waterfall, Incremental, and Spiral",
        "Agile Methodologies: Scrum and RAD",
        "Requirements Documentation & Collaboration Tools (JIRA, Confluence)",
        "Business Process Modeling Tools (Visio, Lucidchart, BPMN)",
        "Data Analysis & Visualization (Excel, Power BI, Tableau)",
        "Agile BA Framework & Tools (Scrum, Kanban, User Story Mapping)",
      ],
      exercises: ["Creating and Managing User Stories in JIRA", "Designing a dashboard in Power BI/Tableau"],
    },
    {
      title: "Final Project & Certification Preparation",
      session: "Session 8 – Capstone Project & IIBA Exam Readiness",
      topics: [
        "Review of Key BABOK Concepts",
        "Exam Tips and Certification Preparation for ECBA/CCBA/CBAP",
        "Presentation of Final Business Analysis Project",
        "Career Guidance & Next Steps in Business Analysis",
      ],
      exercises: [
        "Completing and presenting a real-world Business Analysis project",
        "ECBA/CBAP practice exam session",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
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
          <span className="text-gray-900 font-medium">Business Analysis</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-4">
                    {courseData.level}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                  <p className="text-emerald-100 text-lg mb-6">{courseData.subtitle}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-emerald-200" />
                      <span className="text-sm">{courseData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-emerald-200" />
                      <span className="text-sm">{courseData.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-emerald-200" />
                      <span className="text-sm">{courseData.nextDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-emerald-200" />
                      <span className="text-sm">CBAP Prep</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <Image
                   src={busImg}
                    alt="Business Analysis Training"
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
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                    About This Course
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This Business Analysis course equips you with essential skills to analyze business needs, define
                    requirements, and support successful project outcomes. Designed for beginners and professionals
                    alike, this course covers the fundamentals of business analysis, including planning, elicitation,
                    requirements management, and solution evaluation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through hands-on projects and real-world case studies, you'll gain practical experience to
                    effectively bridge the gap between business objectives and IT solutions. Gaining this business
                    analysis skill will unlock numerous opportunities for you.
                  </p>

                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-2">Course Details</h4>
                    <ul className="text-sm text-emerald-700 space-y-1">
                      <li>• Duration: {courseData.duration} (Flexible)</li>
                      <li>• Mode: {courseData.mode}</li>
                      <li>• Level: {courseData.level}</li>
                      <li>
                        • Prerequisites: No prior experience required, but familiarity with business concepts is
                        beneficial
                      </li>
                      <li>
                        • Certification Preparation: Covers key knowledge areas for Entry Certificate in Business
                        Analysis (ECBA) and Certified Business Analysis Professional (CBAP)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Course Modules */}
            <section id="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Practical Business Analysis Course Outline</CardTitle>
                  <p className="text-sm text-gray-600">Aligned with IIBA-BABOK v3</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-emerald-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Module {index + 1}: {module.title}
                        </h4>

                        {module.session && (
                          <p className="text-sm text-emerald-600 font-medium mb-3">{module.session}</p>
                        )}

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">Topics Covered:</h5>
                            <ul className="space-y-1">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-emerald-400 mt-1">•</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {module.exercises && (
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Practical Exercises:</h5>
                              <ul className="space-y-1">
                                {module.exercises.map((exercise, exerciseIndex) => (
                                  <li key={exerciseIndex} className="text-sm text-green-700 flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    {exercise}
                                  </li>
                                ))}
                              </ul>
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
                      "Business Analysts and System Analysts",
                      "Project Managers and Consultants",
                      "Process Improvement Specialists",
                      "Product Managers and Owners",
                      "IT Professionals transitioning to BA roles",
                      "Quality Assurance Professionals",
                      "Business Stakeholders",
                      "Anyone interested in business analysis career",
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
                  <span className="text-3xl font-bold text-emerald-600">₦{courseData.price.toLocaleString()}</span>
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
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
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
                  <p className="text-sm text-green-700 font-medium">🎯 IIBA BABOK v3 Aligned Training</p>
                </div>
              </CardContent>
            </Card>

            {/* Certification Path */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">IIBA Certification Path</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-emerald-900 mb-1">ECBA</h4>
                    <p className="text-sm text-emerald-700">Entry Certificate in Business Analysis</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-1">CCBA</h4>
                    <p className="text-sm text-blue-700">Certification of Competency in Business Analysis</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-1">CBAP</h4>
                    <p className="text-sm text-purple-700">Certified Business Analysis Professional</p>
                  </div>
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
