"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  Users,
  Award,
  Download,
  CheckCircle,
  Calendar,
  BookOpen,
  Target,
  Star,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { CourseNavigation } from "@/components/course-navigation"

const navigationSections = [
  { id: "brochure", label: "Brochure" },
  { id: "benefits", label: "Benefits" },
  { id: "pricing", label: "Pricing" },
  { id: "schedule", label: "Schedule" },
  { id: "corporate", label: "Corporate" },
  { id: "curriculum", label: "Curriculum" },
  { id: "reviews", label: "Reviews" },
  { id: "enquire", label: "Enquire" },
  { id: "faqs", label: "FAQs" },
]

export default function PMPCoursePage() {
  return (
    <div className="min-h-screen">
      <CourseNavigation sections={navigationSections} />

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Professional Certification</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up delay-200">
                Project Management Professional (PMP)
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 animate-fade-in-up delay-300">
                Earn the globally recognized PMP certification and validate your ability to manage projects effectively
                across industries and methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/training-schedule">Enroll Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  <span className="text-white">Download Brochure</span>
                </Button>
              </div>
            </div>

            {/* Right Images - Original Layout */}
            <div className="hidden lg:block relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Project management team"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-200">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Business planning"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-300">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Training session"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-500">
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Professional development"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
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
            <div className="lg:col-span-2 space-y-12">
              {/* Brochure Section */}
              <div id="brochure" className="scroll-mt-32">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    The Project Management Professional PMP certification is the world&apos;s leading project management
                    certification. This comprehensive 5-day training program prepares you for the PMP exam while
                    providing practical skills you can immediately apply in your workplace.
                  </p>
                  <p>
                    Our PMP training covers all aspects of the PMBOK Guide and includes real-world case studies,
                    interactive exercises, and exam preparation materials. You&apos;ll learn from certified PMP instructors
                    with extensive industry experience.
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              <div id="benefits" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Award className="h-8 w-8 text-blue-600 mb-4" />
                      <h4 className="font-semibold mb-2">Global Recognition</h4>
                      <p className="text-gray-600">Join over 1 million PMP certified professionals worldwide</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Target className="h-8 w-8 text-red-600 mb-4" />
                      <h4 className="font-semibold mb-2">Career Growth</h4>
                      <p className="text-gray-600">Average 25% salary increase for PMP certified professionals</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-green-600 mb-4" />
                      <h4 className="font-semibold mb-2">Industry Credibility</h4>
                      <p className="text-gray-600">Recognized across all industries and geographical locations</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
                      <h4 className="font-semibold mb-2">Practical Skills</h4>
                      <p className="text-gray-600">Immediately applicable project management techniques</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Pricing Section */}
              <div id="pricing" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Options & Pricing</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-blue-900">Public Training</CardTitle>
                      <div className="text-3xl font-bold text-blue-600">₦450,000</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          5-day intensive training
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          All course materials
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          35 PDUs included
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Exam preparation
                        </li>
                      </ul>
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                        <Link href="/training-schedule">Book Now</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-red-200 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-red-900">Corporate Training</CardTitle>
                      <div className="text-3xl font-bold text-red-600">Custom</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Customized content
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          On-site delivery
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Flexible scheduling
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Group discounts
                        </li>
                      </ul>
                      <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                        <Link href="/contact">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <CardTitle className="text-green-900">Online Training</CardTitle>
                      <div className="text-3xl font-bold text-green-600">₦350,000</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Virtual instructor-led
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Interactive sessions
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Digital materials
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Recorded sessions
                        </li>
                      </ul>
                      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                        <Link href="/training-schedule">Enroll Online</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Schedule Section */}
              <div id="schedule" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Schedule</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">March 2024 - Lagos</h4>
                          <p className="text-gray-600">March 18-22, 2024 | 9:00 AM - 5:00 PM</p>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Link href="/training-schedule">Register</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">April 2024 - Abuja</h4>
                          <p className="text-gray-600">April 15-19, 2024 | 9:00 AM - 5:00 PM</p>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Link href="/training-schedule">Register</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Corporate Section */}
              <div id="corporate" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Training Solutions</h3>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">Why Choose Corporate Training?</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Customized to your organization&apos;s needs
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Cost-effective for groups of 8+
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Flexible scheduling and location
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Team building opportunities
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Corporate Packages Include:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Pre-training assessment
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Customized course materials
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Post-training support
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            Progress tracking and reporting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Curriculum Section */}
              <div id="curriculum" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 1: Project Management Fundamentals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Introduction to Project Management</li>
                        <li>• Project Life Cycle and Organization</li>
                        <li>• Project Management Processes</li>
                        <li>• Project Integration Management</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 2: Scope, Schedule & Cost Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Project Scope Management</li>
                        <li>• Project Schedule Management</li>
                        <li>• Project Cost Management</li>
                        <li>• Earned Value Management</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 3: Quality, Resources & Communications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Project Quality Management</li>
                        <li>• Project Resource Management</li>
                        <li>• Project Communications Management</li>
                        <li>• Team Development and Leadership</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 4: Risk, Procurement & Stakeholder Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Project Risk Management</li>
                        <li>• Project Procurement Management</li>
                        <li>• Project Stakeholder Management</li>
                        <li>• Agile and Hybrid Approaches</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-900">Day 5: Exam Preparation & Practice</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Exam Strategy and Tips</li>
                        <li>• Practice Questions and Mock Exams</li>
                        <li>• Review of Key Concepts</li>
                        <li>• Final Q&A Session</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Reviews Section */}
              <div id="reviews" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          A
                        </div>
                        <div>
                          <h4 className="font-semibold">Adebayo Johnson</h4>
                          <p className="text-sm text-gray-600">Project Manager, MTN</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        &apos;Excellent training program! The instructors were knowledgeable and the practical approach
                        helped me pass the PMP exam on my first attempt&apos;
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                          O
                        </div>
                        <div>
                          <h4 className="font-semibold">Olumide Adeyemi</h4>
                          <p className="text-sm text-gray-600">Senior PM, Dangote Group</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        &apos;Outstanding course content and delivery. The real-world examples made complex concepts easy to
                        understand.&apos;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Enquire Section */}
              <div id="enquire" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <Card className="bg-gradient-to-r from-blue-50 to-red-50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h4 className="text-xl font-semibold mb-4">Take the Next Step in Your Career</h4>
                    <p className="text-gray-600 mb-6">
                      Join thousands of professionals who have advanced their careers with PMP certification
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <Link href="/training-schedule" className="flex items-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          Book Training
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Contact Us
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* FAQs Section */}
              <div id="faqs" className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">What are the prerequisites for PMP certification?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        You need a secondary degree, 7,500 hours of project management experience, and 35 hours of
                        project management education (which our course provides).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">How long is the PMP certification valid?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        PMP certification is valid for 3 years. You need to earn 60 PDUs during this period to maintain
                        your certification.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">What is included in the course fee?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        The course fee includes 35 PDUs, comprehensive materials, practice exams, certificate of
                        completion, and post-training support.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">Can I take the course online?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Yes, we offer virtual instructor-led training with interactive sessions, digital materials, and
                        recorded sessions for review.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Details Card */}
              <Card className="sticky top-32">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Course Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-2xl font-bold text-red-600">₦450,000</span>
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
                        <div className="text-sm text-gray-600">PMP Eligible</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Materials</div>
                        <div className="text-sm text-gray-600">Digital & Physical</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">PDUs</div>
                        <div className="text-sm text-gray-600">35 Contact Hours</div>
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
                      "35 PDUs for PMP certification",
                      "Comprehensive course materials",
                      "Practice exams and simulations",
                      "Digital and printed resources",
                      "Post-training email support",
                      "Certificate of completion",
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

              {/* Next Steps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Next Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        1
                      </span>
                      <span>Register for the course</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        2
                      </span>
                      <span>Complete pre-course preparation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        3
                      </span>
                      <span>Attend 5-day training program</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        4
                      </span>
                      <span>Apply for PMP exam with PMI</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become PMP Certified?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the ranks of over 1 million PMP certified professionals worldwide and advance your project management
            career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/training-schedule">Schedule Training</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
