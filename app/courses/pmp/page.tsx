"use client"

// import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Calendar, MapPin, Award, Download, CheckCircle, CreditCard, Target } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"
import { CoursePurchaseModal } from "@/components/course-purchase-modal"
import Image from "next/image"

export default function PMPCourse() {
  // const [activeSection, setActiveSection] = useState("overview")

  const courseData = {
    title: "Project Management Professional (PMP)",
    subtitle: "Globally Recognized PMI Certification",
    price: 200000,
    duration: "5-6 Days",
    mode: "Classroom/Online/Hybrid",
    level: "Professional",
    certification: "PMP Certification Preparation",
    nextDate: "February 10-14, 2025",
    location: "Lagos, Nigeria / Virtual",
    hours: "30-40 Hours",
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/brochures/pmp-brochure.pdf"
    link.download = "PMP-Course-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const objectives = [
    "Master PMI's PMP Exam Content Outline (ECO)",
    "Apply Predictive (Waterfall), Agile, and Hybrid methodologies",
    "Gain hands-on experience through practical exercises, case studies, and simulations",
    "Learn real-world project management tools and techniques",
    "Prepare for the PMP exam with mock tests and practical applications",
  ]

  const modules = [
    {
      title: "Introduction to PMP and PMI Framework",
      topics: [
        "Overview of PMI and PMP Certification",
        "PMI Talent Triangle (Ways of Working, Power Skills, and Business Acumen)",
        "PMP Exam Format and Certification Process",
        "PMBOK Guide 7th Edition vs Previous Editions",
        "Key Concepts: Projects, Programs, Portfolios",
        "Predictive (Waterfall), Agile, and Hybrid Methodologies",
      ],
      exercises: [
        "Setting up a Personal PMP Study Plan",
        "Hands-on Activity: Classifying Project Methodologies",
        "Group Discussion: Real-life Project Challenges & Solutions",
      ],
    },
    {
      title: "Creating a High-Performing Team",
      topics: [
        "Defining and Managing Project Teams",
        "Team Development and Leadership Approaches",
        "Stakeholder Engagement and Communication",
        "Virtual Teams and Remote Collaboration",
        "Training, Coaching, and Mentorship",
        "Conflict Resolution and Emotional Intelligence",
        "Servant Leadership and Agile Mindset",
      ],
      exercises: [
        "Stakeholder Analysis Exercise (Identifying and Mapping Stakeholders)",
        "Team Charter Development (Creating Project Team Agreements)",
        "Conflict Resolution Role Play (Handling Difficult Stakeholders)",
      ],
    },
    {
      title: "Starting the Project (Project Initiation)",
      topics: [
        "Developing the Project Charter",
        "Identifying and Engaging Stakeholders",
        "Agile vs Predictive Approach to Project Initiation",
        "Business Case and Benefits Management",
        "Governance and Compliance Considerations",
        "Decision-Making and Feasibility Analysis",
      ],
      exercises: [
        "Create a Real Project Charter (Based on a Case Study)",
        "Stakeholder Engagement Strategy Workshop",
        "Live Discussion: Agile vs Predictive Approach in Initiation",
      ],
    },
    {
      title: "Planning the Project (Project Planning)",
      topics: [
        "Developing the Project Management Plan",
        "Scope Management and Requirements Gathering",
        "Work Breakdown Structure (WBS)",
        "User Stories and Product Backlogs in Agile",
        "Scheduling and Time Management",
        "Critical Path Method (CPM)",
        "Agile Iteration Planning and Velocity",
        "Cost Estimation and Budgeting",
        "Quality Planning and Continuous Improvement",
        "Risk Management Planning",
      ],
      exercises: [
        "Create a WBS for a Real Project (Predictive & Agile)",
        "Sprint Planning Exercise (Backlog Prioritization & Estimation)",
        "Risk Assessment Creation (FMEA & Risk Register Development)",
        "Earned Value Management (EVM) Calculation Exercise",
      ],
    },
    {
      title: "Executing the Project",
      topics: [
        "Directing and Managing Project Work",
        "Implementing Quality Management Practices",
        "Team Performance Monitoring and Coaching",
        "Stakeholder Engagement and Collaboration",
        "Issue and Change Management",
        "Agile Execution: Daily Stand-ups, Sprint Reviews, and Retrospectives",
        "Lean and Kanban Workflow Management",
      ],
      exercises: [
        "Kanban Board Setup & Workflow Optimization",
        "Mock Sprint Planning & Execution (With Retrospectives)",
        "Case Study: Managing Change Requests in a Hybrid Environment",
      ],
    },
    {
      title: "Monitoring and Controlling the Project",
      topics: [
        "Performance Measurement Techniques",
        "Earned Value Management (EVM)",
        "Agile Metrics: Lead Time, Cycle Time, Burndown Charts",
        "Change Management and Integrated Change Control",
        "Risk Tracking and Response Strategy Adjustment",
        "Ensuring Quality and Compliance",
        "Stakeholder Feedback and Continuous Improvement",
      ],
      exercises: [
        "EVM Calculation Workshop (Real Project Example)",
        "Live Sprint Review & Metrics Analysis",
        "Change Control Board Simulation (Evaluating and Approving Changes)",
      ],
    },
    {
      title: "Closing the Project",
      topics: [
        "Project Closure and Lessons Learned",
        "Final Product Delivery and Benefits Realization",
        "Transitioning Project Outcomes to Operations",
        "Documentation and Archiving Best Practices",
        "Agile Retrospectives for Continuous Learning",
      ],
      exercises: [
        "Project Closure Checklist Exercise",
        "Conducting a Project Retrospective Session",
        "Case Study: Post-Project Analysis & Lessons Learned",
      ],
    },
    {
      title: "Agile and Hybrid Approaches in Project Management",
      topics: [
        "Agile Frameworks (Scrum, Kanban, SAFe, XP)",
        "Adaptive Planning and Rolling-Wave Planning",
        "Servant Leadership in Agile Teams",
        "Agile Metrics and Continuous Delivery",
        "Blending Agile and Traditional Project Management",
        "Managing Hybrid Teams and Frameworks",
      ],
      exercises: [
        "Simulating a Hybrid Project (Blending Agile & Waterfall)",
        "Agile Transformation Case Study Analysis",
        "Creating a Hybrid Project Plan",
      ],
    },
    {
      title: "PMP Exam Preparation & Strategy",
      topics: [
        "Exam Content Breakdown (People, Process, Business Environment)",
        "Sample PMP Exam Questions and Practice Tests",
        "Exam-Taking Strategies and Time Management",
        "PMI Code of Ethics and Professional Conduct",
        "Final Review and Q&A Session",
      ],
      exercises: ["Mock PMP Exam Sessions", "Exam Strategy Workshop", "Final Assessment and Feedback"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
          <span className="text-gray-900 font-medium">PMP</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-4">
                    {courseData.level}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                  <p className="text-blue-100 text-lg mb-6">{courseData.subtitle}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-200" />
                      <span className="text-sm">{courseData.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-200" />
                      <span className="text-sm">{courseData.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-200" />
                      <span className="text-sm">{courseData.nextDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-200" />
                      <span className="text-sm">35 PDUs</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="PMP Certification Training"
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
                    <Target className="h-6 w-6 text-blue-600" />
                    About This Course
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This Project Management Professional (PMP) is a globally recognized certification awarded by the
                    Project Management Institute (PMI). It validates a professional's expertise in project management,
                    demonstrating their ability to lead and direct projects effectively. The PMP certification covers
                    key project management principles, including planning, execution, monitoring and controlling, and
                    closing projects.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    It is based on the PMBOK (Project Management Body of Knowledge) Guide and follows methodologies such
                    as predictive (waterfall), agile, and hybrid approaches. PMP certification is highly valued across
                    industries, enhancing career opportunities and credibility for project managers worldwide. Through
                    interactive lessons, case studies, and real-world scenarios, you will gain the confidence and
                    competence required to guide projects from initiation to completion.
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Objectives:</h4>
                    <ul className="space-y-2">
                      {objectives.map((objective, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Course Modules */}
            <section id="curriculum">
              <Card>
                <CardHeader>
                  <CardTitle>Comprehensive Course Outline</CardTitle>
                  <p className="text-sm text-gray-600">
                    Duration: {courseData.duration} ({courseData.hours}) - Flexible Mode: {courseData.mode}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Module {index + 1}: {module.title}
                        </h4>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">Topics Covered:</h5>
                            <ul className="grid md:grid-cols-2 gap-1">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-blue-400 mt-1">•</span>
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

            {/* Exam Information */}
            <section id="exam">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    PMP Exam Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    The PMP exam is administered by PMI (Project Management Institute) and tests your knowledge across
                    three domains of project management.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">People (42%)</h4>
                      <p className="text-sm text-blue-700">Managing and leading project teams effectively</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Process (50%)</h4>
                      <p className="text-sm text-green-700">Technical aspects of managing projects</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Business Environment (8%)</h4>
                      <p className="text-sm text-purple-700">Connection between projects and organizational strategy</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Exam Format</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 180 questions (multiple choice, multiple responses, matching, hotspot)</li>
                      <li>• 230 minutes (3 hours 50 minutes)</li>
                      <li>• Computer-based testing</li>
                      <li>• Available at Prometric test centers worldwide</li>
                    </ul>
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
                  <span className="text-3xl font-bold text-blue-600">₦{courseData.price.toLocaleString()}</span>
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
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
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

            {/* PMI Partnership */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">PMI Authorized</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-600">
                    This course provides the required 35 contact hours of project management education needed for PMP
                    certification eligibility.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">✅ PMI-approved 35 PDUs included</p>
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
