import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Award, Download, CheckCircle, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BusinessAnalysisCoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Professional Certification</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Analysis Certification</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Master the art of business analysis with comprehensive training in methodologies, tools, and best
                practices for organizational improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/training-schedule">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </Button>
              </div>
            </div>

            {/* Right Images */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Business analysis"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Data analysis"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Requirements gathering"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Business training"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Our Business Analysis Certification program provides comprehensive training in business analysis
                    methodologies, techniques, and best practices. This 4-day intensive course equips you with the
                    skills needed to bridge the gap between business needs and technology solutions.
                  </p>
                  <p>
                    You'll learn how to gather requirements, analyze business processes, facilitate stakeholder
                    communication, and recommend solutions that drive organizational success. The course includes
                    practical exercises, case studies, and real-world scenarios.
                  </p>
                </div>
              </div>

              {/* Learning Objectives */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Objectives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Master requirements gathering techniques",
                    "Learn stakeholder analysis and management",
                    "Understand business process modeling",
                    "Develop solution evaluation skills",
                    "Practice facilitation and communication",
                    "Learn documentation best practices",
                    "Understand change management principles",
                    "Master analytical thinking techniques",
                  ].map((objective, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Curriculum */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 1: Business Analysis Fundamentals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Business Analysis</li>
                        <li>• Business Analysis Core Concepts</li>
                        <li>• Stakeholder Analysis and Management</li>
                        <li>• Business Analysis Planning</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 2: Requirements Engineering</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Requirements Elicitation Techniques</li>
                        <li>• Requirements Analysis and Documentation</li>
                        <li>• Requirements Validation and Verification</li>
                        <li>• Requirements Management</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 3: Business Process Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Business Process Modeling</li>
                        <li>• Process Improvement Techniques</li>
                        <li>• Gap Analysis and Root Cause Analysis</li>
                        <li>• Solution Assessment and Validation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 4: Solution Design & Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Solution Design and Evaluation</li>
                        <li>• Change Strategy and Implementation</li>
                        <li>• Solution Validation and Testing</li>
                        <li>• Performance Measurement and Monitoring</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Who Should Attend */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Should Attend</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Business Analysts",
                        "Systems Analysts",
                        "Project Managers",
                        "Product Managers",
                        "IT Professionals",
                        "Consultants",
                        "Process Improvement Specialists",
                        "Quality Assurance Professionals",
                      ].map((role, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{role}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Details Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-2xl font-bold text-red-600">₦350,000</span>
                  </div>
                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="text-sm text-gray-600">4 Days (32 Hours)</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Class Size</div>
                        <div className="text-sm text-gray-600">Maximum 20 participants</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Certification</div>
                        <div className="text-sm text-gray-600">Certificate of Completion</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Materials</div>
                        <div className="text-sm text-gray-600">Digital & Physical</div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="/training-schedule">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Training
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive course materials",
                      "Practical exercises and case studies",
                      "Business analysis templates",
                      "Digital and printed resources",
                      "Certificate of completion",
                      "Post-training support",
                      "Access to online resources",
                      "Networking opportunities",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Master Business Analysis Skills</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a skilled business analyst and drive organizational success through effective requirements management
            and process improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/training-schedule">Schedule Training</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
