import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Award, Download, Calendar, CheckCircle, BookOpen, Target, Lightbulb } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"
import { CoursePurchaseModal } from "@/components/course-purchase-modal"

export const metadata: Metadata = {
  title: "PMI-ACP Certification Training | Dotland Consulting",
  description:
    "Master Agile Practices & Elevate Your Career with PMI-ACP® Certification. Comprehensive Agile training. ₦200,000",
}
const sections = [
  { id: "description", label: "Description" },
  { id: "benefits", label: "What You Gain" },
  { id: "audience", label: "Who Should Attend" },
  { id: "outline", label: "Course Outline" },
]
export default function PMIACPPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">PMI Certification</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PMI-Agile Certified Practitioner (PMI-ACP)®</h1>
            <p className="text-xl mb-8 text-green-100">
              Master Agile Practices & Elevate Your Career with PMI-ACP® Certification
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>5-7 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Expert-Led Training</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>PMI-ACP® Prep</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <CoursePurchaseModal courseName="PMI-Agile Certified Practitioner (PMI-ACP)" coursePrice={200000}>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Training - ₦200,000
                </Button>
              </CoursePurchaseModal>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
                asChild
              >
                <a href="/brochures/pmi-acp-brochure.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The PMI-Agile Certified Practitioner (PMI-ACP)® certification is a globally recognized credential for
                  professionals who want to demonstrate their expertise in Agile methodologies. Offered by the Project
                  Management Institute (PMI), this certification validates your ability to apply Agile principles,
                  frameworks, and best practices in dynamic project environments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our PMI-ACP® Certification Training provides comprehensive coverage of Agile frameworks such as Scrum,
                  Kanban, Lean, Extreme Programming (XP), and SAFe, ensuring you are well-equipped to manage Agile
                  projects efficiently. This course prepares participants for the PMI-ACP® exam through expert-led
                  training, real-world case studies, and hands-on exercises.
                </p>
              </CardContent>
            </Card>

            {/* Why Enroll */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-green-600" />
                  Why Enroll in PMI-ACP® Certification Training?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Globally Recognized Certification – Enhance career opportunities in Agile project management",
                    "Comprehensive Agile Knowledge – Covers multiple Agile frameworks beyond just Scrum",
                    "Increase Team Productivity – Learn best practices for Agile project delivery",
                    "Higher Earning Potential – PMI-ACP® certified professionals are in high demand worldwide",
                    "Exam-Oriented Training – Includes mock tests, real-world scenarios, and expert guidance",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Learning Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                  Key Learning Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">By the end of this training, participants will be able to:</p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Understand Agile principles, values, and frameworks",
                    "Implement Agile project management best practices",
                    "Facilitate Agile teams and enhance collaboration",
                    "Apply Scrum, Kanban, Lean, XP, and SAFe in real-world projects",
                    "Master Agile risk management and stakeholder engagement",
                    "Prepare effectively for the PMI-ACP® certification exam",
                  ].map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Modules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-green-600" />
                  Course Modules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    module: "Module 1: Introduction to Agile & PMI-ACP® Certification",
                    topics: [
                      "Overview of Agile methodologies & their benefits",
                      "PMI-ACP® certification process & exam details",
                      "Agile vs. Traditional project management",
                    ],
                  },
                  {
                    module: "Module 2: Agile Principles & Mindset",
                    topics: [
                      "Agile Manifesto and 12 Agile Principles",
                      "Agile mindset and cultural shift",
                      "Value-driven delivery and customer collaboration",
                    ],
                  },
                  {
                    module: "Module 3: Agile Frameworks & Methodologies",
                    topics: [
                      "Scrum: Roles, Events, and Artifacts",
                      "Kanban: Workflow, WIP Limits, and Continuous Flow",
                      "Extreme Programming (XP): Engineering practices and Test-Driven Development (TDD)",
                      "Lean & SAFe: Principles and Implementation",
                    ],
                  },
                  {
                    module: "Module 4: Value-Driven Delivery",
                    topics: [
                      "Prioritization techniques: MoSCoW, Kano Model",
                      "Agile planning and incremental delivery",
                      "Minimum Viable Product (MVP) and iterative development",
                    ],
                  },
                  {
                    module: "Module 5: Stakeholder Engagement & Team Performance",
                    topics: [
                      "Agile communication & collaboration strategies",
                      "Building high-performing Agile teams",
                      "Servant leadership and Agile coaching",
                    ],
                  },
                  {
                    module: "Module 6: Adaptive Planning & Agile Metrics",
                    topics: [
                      "Agile estimation techniques (Story Points, Planning Poker)",
                      "Velocity tracking and release planning",
                      "Agile performance measurement & continuous improvement",
                    ],
                  },
                  {
                    module: "Module 7: Problem Detection & Risk Management",
                    topics: [
                      "Managing risks and uncertainties in Agile projects",
                      "Agile retrospectives for continuous process improvement",
                      "Handling impediments and resolving team conflicts",
                    ],
                  },
                  {
                    module: "Module 8: PMI-ACP® Exam Preparation & Mock Tests",
                    topics: [
                      "PMI-ACP® exam format and question types",
                      "Sample practice questions & exam strategies",
                      "Final mock test & review session",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{section.module}</h4>
                    <ul className="space-y-1">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* PMI-ACP Exam Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-green-600" />
                  PMI-ACP® Certification Exam Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Exam</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Questions</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Passing Score</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">PMI-ACP®</td>
                        <td className="border border-gray-300 px-4 py-2">120 Multiple-Choice</td>
                        <td className="border border-gray-300 px-4 py-2">180 Minutes</td>
                        <td className="border border-gray-300 px-4 py-2">Determined by PMI</td>
                        <td className="border border-gray-300 px-4 py-2">Online, Proctored</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  📌 PMI-ACP® certification is valid for 3 years and requires 30 PDUs for renewal.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-center">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₦200,000</div>
                  <p className="text-gray-600">per participant</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">5-7 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">Multiple Options</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">Intermediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-medium">PMI-ACP® Prep</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <CoursePurchaseModal courseName="PMI-Agile Certified Practitioner (PMI-ACP)" coursePrice={200000}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book This Course
                    </Button>
                  </CoursePurchaseModal>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/brochures/pmi-acp-brochure.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </a>
                  </Button>
                </div>

                <Separator />

                <div className="text-center space-y-2">
                  <p className="font-medium text-gray-900">Need Help?</p>
                  <p className="text-sm text-gray-600">Contact our training team</p>
                  <div className="space-y-1 text-sm">
                    <p>📞 07025560034 | 07084659907</p>
                    <p>✉️ support@dotlandconsulting.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Navigation */}
        <div className="mt-12">
          <CourseNavigation currentCourse="pmi-acp"sections={sections} />
        </div>
      </div>
    </div>
  )
}
