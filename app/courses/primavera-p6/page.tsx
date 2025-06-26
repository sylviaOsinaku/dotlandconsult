import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Award, Download, Calendar, CheckCircle, BookOpen, Target, Lightbulb } from "lucide-react"
import { CourseNavigation } from "@/components/course-navigation"

export const metadata: Metadata = {
  title: "Primavera P6 Software Training | Dotland Consulting",
  description:
    "Master project planning, scheduling & control with Oracle Primavera P6. 4-day hands-on training with certification. ₦200,000",
}

export default function PrimaveraP6Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Software Training</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Primavera P6 Software Training</h1>
            <p className="text-xl mb-8 text-purple-100">
              Master Project Planning, Scheduling & Control with Oracle Primavera P6
            </p>
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
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Training - ₦200,000
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600"
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
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  Course Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The Primavera P6 Software Training provides hands-on instruction for professionals involved in
                  planning, scheduling, managing, and controlling complex projects. Widely used across industries like
                  construction, engineering, oil & gas, and manufacturing, Primavera P6 helps organizations effectively
                  manage large-scale, resource-intensive projects.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This training covers the essential concepts, tools, and techniques to use Oracle Primavera P6 for
                  project planning, resource management, baseline scheduling, progress tracking, and reporting.
                </p>
              </CardContent>
            </Card>

            {/* What You Will Gain */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-purple-600" />
                  What You Will Gain
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Proficiency in creating and managing project schedules in Primavera P6",
                    "Skills to allocate and level resources effectively",
                    "Ability to create project baselines and track progress",
                    "Hands-on experience with Primavera P6 interface and features",
                    "Techniques to generate dashboards and project performance reports",
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
                  <Users className="h-6 w-6 text-purple-600" />
                  Who Should Attend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Project Planners and Schedulers",
                    "Project Managers and Coordinators",
                    "Engineers (Civil, Mechanical, Electrical, etc.)",
                    "Construction Managers",
                    "PMO Team Members",
                    "Anyone involved in large-scale project execution",
                  ].map((audience, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Outline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                  Course Outline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    module: "Module 1: Introduction to Primavera P6",
                    topics: [
                      "Overview of Primavera P6 Software",
                      "Key Concepts and Terminology",
                      "Navigating the Primavera P6 Interface",
                    ],
                  },
                  {
                    module: "Module 2: Creating a New Project",
                    topics: [
                      "Setting up a Project",
                      "Defining Calendars",
                      "Creating WBS (Work Breakdown Structure)",
                      "Defining Project Activities",
                    ],
                  },
                  {
                    module: "Module 3: Scheduling and Logic Development",
                    topics: [
                      "Activity Sequencing and Relationships",
                      "Applying Constraints",
                      "Critical Path Method (CPM)",
                      "Scheduling the Project",
                    ],
                  },
                  {
                    module: "Module 4: Resources and Costs",
                    topics: [
                      "Creating Resource and Role Dictionaries",
                      "Assigning Resources to Activities",
                      "Resource Leveling Techniques",
                      "Cost Estimation and Budgeting",
                    ],
                  },
                  {
                    module: "Module 5: Baselines and Progress Tracking",
                    topics: [
                      "Creating and Managing Baselines",
                      "Updating Project Status",
                      "Monitoring Project Progress",
                      "Earned Value Management (EVM)",
                    ],
                  },
                  {
                    module: "Module 6: Reporting and Outputs",
                    topics: [
                      "Customizing Layouts and Views",
                      "Generating Gantt Charts, S-Curves, and Reports",
                      "Exporting and Printing Schedules",
                      "Dashboards and Project Portfolios",
                    ],
                  },
                  {
                    module: "Module 7: Advanced Features (Optional)",
                    topics: [
                      "Global Change",
                      "User Defined Fields and Filters",
                      "Multiple Projects Management",
                      "Risk and Issue Management",
                    ],
                  },
                ].map((section, index) => (
                  <div key={index} className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{section.module}</h4>
                    <ul className="space-y-1">
                      {section.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-purple-600 mt-1">•</span>
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
                  <Award className="h-6 w-6 text-purple-600" />
                  Training Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Hands-on Practical Sessions",
                    "Real-Life Project Simulations",
                    "Primavera P6 Licensed Environment for Practice",
                    "Printable Guides and Practice Exercises",
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
                  <div className="text-3xl font-bold text-purple-600 mb-2">₦200,000</div>
                  <p className="text-gray-600">per participant</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">3-4 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">Classroom/Virtual</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">Beginner to Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book This Course
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/brochures/primavera-p6-brochure.pdf" download>
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
          <CourseNavigation currentCourse="primavera-p6" />
        </div>
      </div>
    </div>
  )
}
