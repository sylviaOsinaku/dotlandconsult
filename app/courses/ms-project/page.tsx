import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Award, Download, Calendar, CheckCircle, BookOpen, Target, Lightbulb } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"

export const metadata: Metadata = {
  title: "Microsoft Project Training | Dotland Consulting",
  description:
    "Plan, schedule, track, and deliver projects efficiently with Microsoft Project. 4-day comprehensive training. ₦180,000",
}

const sections = [
  { id: "description", label: "Description" },
  { id: "benefits", label: "What You Gain" },
  { id: "audience", label: "Who Should Attend" },
  { id: "outline", label: "Course Outline" },
]
export default function MSProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Software Training</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Microsoft Project Training</h1>
            <p className="text-xl mb-8 text-blue-100">Plan, Schedule, Track, and Deliver Projects Efficiently</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>4 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Hands-on Training</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certificate Included</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Training - ₦180,000
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-800 hover:bg-white hover:text-blue-600"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
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
                  <BookOpen className="h-6 w-6 text-blue-600" />
                  Course Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The Microsoft Project Training is a comprehensive hands-on course designed to equip project
                  professionals with the skills to effectively plan, schedule, monitor, and control projects using
                  Microsoft Project, a leading project management software tool.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This training covers practical techniques for creating project schedules, assigning resources,
                  tracking performance, and generating reports. Participants will learn to manage small to large-scale
                  projects across various industries using real-world examples and guided exercises.
                </p>
              </CardContent>
            </Card>

            {/* What You Will Gain */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600" />
                  What You Will Gain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Confidence in using Microsoft Project for real-world project planning",
                    "Skills to create WBS, assign resources, and manage timelines",
                    "Ability to monitor progress and perform schedule analysis",
                    "Understanding of earned value and variance reporting",
                    "Tools to communicate and report project status with stakeholders",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Who Should Attend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  Who Should Attend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Project Managers",
                    "Project Coordinators",
                    "Team Leads & Engineers",
                    "Schedulers & Planners",
                    "PMO Team Members",
                    "Anyone involved in managing or tracking project activities",
                  ].map((audience, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 4-Day Course Outline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  4-Day Course Outline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    day: "Day 1: Introduction and Project Setup",
                    topics: [
                      "Overview of Microsoft Project Interface",
                      "Understanding Key Terminologies",
                      "Creating a New Project",
                      "Setting Up Project Calendars and Working Time",
                      "Defining Project Start/Finish Dates",
                      "Creating and Structuring a Work Breakdown Structure (WBS)",
                    ],
                  },
                  {
                    day: "Day 2: Scheduling and Task Management",
                    topics: [
                      "Creating Tasks and Milestones",
                      "Setting Task Durations and Dependencies",
                      "Applying Constraints and Deadlines",
                      "Understanding Critical Path and Float",
                      "Splitting Tasks and Creating Recurring Tasks",
                      "Grouping and Outlining Tasks",
                    ],
                  },
                  {
                    day: "Day 3: Resource and Cost Management",
                    topics: [
                      "Creating Resource Pool (Work, Material, Cost Resources)",
                      "Assigning Resources to Tasks",
                      "Managing Resource Overallocations",
                      "Entering Costs and Budget Information",
                      "Performing Resource Leveling",
                      "Viewing and Analyzing Resource Usage",
                    ],
                  },
                  {
                    day: "Day 4: Tracking, Reporting & Project Control",
                    topics: [
                      "Setting a Project Baseline",
                      "Updating Task Progress and Completion",
                      "Tracking Actual Start, Finish, and Duration",
                      "Analyzing Variances and Slippages",
                      "Earned Value Management Basics",
                      "Generating Custom Views and Filters",
                      "Creating and Exporting Reports (Dashboards, Status Reports)",
                      "Finalizing and Printing Project Plans",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{section.day}</h4>
                    <ul className="space-y-1">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Training Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-blue-600" />
                  Training Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Hands-on sessions with step-by-step guidance",
                    "Real-life project simulation and exercises",
                    "MS Project practice files and templates",
                    "Printed or digital course manual",
                    "Certificate of Completion",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
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
                  <div className="text-3xl font-bold text-blue-600 mb-2">₦180,000</div>
                  <p className="text-gray-600">per participant</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">4 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Schedule:</span>
                    <span className="font-medium">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">In-person/Virtual</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book This Course
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/brochures/ms-project-brochure.pdf" download>
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
          <CourseNavigation currentCourse="ms-project"  sections={sections} />
        </div>
      </div>
    </div>
  )
}
