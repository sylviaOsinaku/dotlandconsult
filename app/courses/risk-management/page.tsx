import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Award, Download, CheckCircle, Calendar, BookOpen, Shield } from "lucide-react"
import Link from "next/link"

export default function RiskManagementCoursePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Professional Certification</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Risk Management Professional</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Develop expertise in identifying, assessing, and mitigating risks across all organizational levels with
                our comprehensive risk management certification program.
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
                    src="/placeholder.svg?height=128&width=400"
                    alt="Risk assessment"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="/placeholder.svg?height=128&width=400"
                    alt="Risk management meeting"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/placeholder.svg?height=128&width=400"
                    alt="Risk analysis"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="/placeholder.svg?height=128&width=400"
                    alt="Risk management training"
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
                    Our Risk Management Professional certification program provides comprehensive training in risk
                    management principles, methodologies, and best practices. This 5-day intensive course covers all
                    aspects of enterprise risk management, from identification to mitigation.
                  </p>
                  <p>
                    Participants will learn to develop risk management frameworks, conduct risk assessments, implement
                    mitigation strategies, and establish monitoring systems. The course includes practical exercises,
                    case studies, and industry-specific scenarios.
                  </p>
                </div>
              </div>

              {/* Learning Objectives */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Objectives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Master risk identification techniques",
                    "Learn risk assessment methodologies",
                    "Develop risk mitigation strategies",
                    "Understand compliance frameworks",
                    "Practice risk monitoring and reporting",
                    "Learn crisis management principles",
                    "Understand insurance and risk transfer",
                    "Master risk communication skills",
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
                      <CardTitle className="text-blue-900">Day 1: Risk Management Fundamentals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Risk Management</li>
                        <li>• Risk Management Frameworks</li>
                        <li>• Risk Governance and Culture</li>
                        <li>• Risk Management Standards</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 2: Risk Identification & Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Risk Identification Techniques</li>
                        <li>• Qualitative Risk Assessment</li>
                        <li>• Quantitative Risk Assessment</li>
                        <li>• Risk Analysis Tools and Techniques</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 3: Risk Treatment & Mitigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Risk Treatment Strategies</li>
                        <li>• Risk Mitigation Planning</li>
                        <li>• Risk Transfer and Insurance</li>
                        <li>• Business Continuity Planning</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 4: Risk Monitoring & Reporting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Risk Monitoring Systems</li>
                        <li>• Key Risk Indicators (KRIs)</li>
                        <li>• Risk Reporting and Communication</li>
                        <li>• Risk Dashboard Development</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 5: Advanced Topics & Case Studies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Crisis Management and Response</li>
                        <li>• Regulatory Compliance</li>
                        <li>• Industry-Specific Risk Management</li>
                        <li>• Case Studies and Best Practices</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Target Audience</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Risk Managers",
                        "Compliance Officers",
                        "Internal Auditors",
                        "Project Managers",
                        "Operations Managers",
                        "Finance Professionals",
                        "Insurance Professionals",
                        "Senior Management",
                      ].map((role, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-600" />
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
                    <span className="text-2xl font-bold text-red-600">₦400,000</span>
                  </div>
                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="text-sm text-gray-600">5 Days (40 Hours)</div>
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
                        <div className="text-sm text-gray-600">Professional Certificate</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Materials</div>
                        <div className="text-sm text-gray-600">Comprehensive Package</div>
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
                  <CardTitle className="text-blue-900">What&apos;s Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Comprehensive risk management toolkit",
                      "Risk assessment templates",
                      "Case studies from various industries",
                      "Digital and printed materials",
                      "Professional certificate",
                      "Post-training consultation",
                      "Access to risk management resources",
                      "Professional networking opportunities",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Risk Management Expert</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Protect your organization from uncertainties and create value through effective risk management strategies.
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
