"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dotlnHomePic1 from "../components/assests/homepic1.jpg"
import dotInHomePic2 from "../components/assests/dotmanager.jpg"
import dotlandLogo from '../components/assests/DOTLAND LOGO jpg (1)PNG - Obidike Christopher (1).png'
import busImg from '../components/assests/businessanalysis.jpg'
import prince2Img from '../components/assests/PRINCE2.jpg'
import dataImg from '../components/assests/DATA ANALYSIS.jpg'
import foodImg from '../components/assests/foodsafety.jpg'
import cprImg from '../components/assests/firstaidandcpr.jpg'
import primeraImg from '../components/assests/Primavera P6.jpg'
import pmiImg from '../components/assests/PMI-ACP.jpg'

import careImg from '../components/assests/Caregiver Certification Training.jpg'
import cusImg from '../components/assests/CustomerRelationship.jpg'
import logImg from '../components/assests/Logistics.jpg'
import opeImg from '../components/assests/OPERATIONS AND FACILITY MANAGEMENT.jpg'
import promanImg from '../components/assests/projectmangement.jpg'
// import prince1Img from '../components/assests/prince.jpg'
import riskImg from '../components/assests/riskman.jpg'
import micImg from '../components/assests/microsofttraining.jpg'
import scrumImg from '../components/assests/ProfessionalScrum.jpg'

import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Award,
  Users,
  Target,
  BookOpen,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Shield,
  Briefcase,
  Quote,
  Download,
} from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function HomePage() {
  const handleBrochureDownload = (courseId: string, courseName: string) => {
    // Create a simple text-based brochure content
    const brochureContent = `
DOTLAND CONSULTING LIMITED
Professional Training Programs

Course: ${courseName}

For detailed course information, pricing, and schedules, please contact us:

Phone: 07025560034 | 07084659907
Email: support@dotlandconsulting.com
Address: The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos

Visit our website: www.dotlandconsulting.com

© 2024 Dotland Consulting Limited. All rights reserved.
    `

    const blob = new Blob([brochureContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${courseId}-brochure.txt`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-red-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in delay-200">
                Authorized Training Partner of PECB
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up delay-300 text-white">
                Empowering Organizations with
                <span className="text-red-300 block mt-2 animate-fade-in-up delay-500"> Strategic Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed animate-fade-in-up delay-700">
                Transform your business through innovation, capacity building, and best-in-class advisory services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-1000">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/courses" className="flex items-center">
                    Explore Training Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  <Link href="/training-schedule">Book Training Session</Link>
                </Button>
              </div>
            </div>

            {/* Right Images - Original Layout */}
            <div className="hidden lg:block relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float">
                    <Image
                      src={dotlnHomePic1}
                      alt="Business meeting"
                      className="w-full h-35 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-200">
                    <Image
                      src={dotInHomePic2}
                      alt="Team collaboration"
                      className="w-full h-35 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-300">
                    <Image
                      src={dotlandLogo}
                      alt="Business analysis"
                      className="w-full h-35 object-cove rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-500">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Training session"
                      className="w-full h-35 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable impact across diverse industries through our specialized consulting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional project and program management solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Business Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Strategic business analysis and process optimization</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive risk assessment and mitigation strategies</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-400">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Corporate Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customized training programs for organizational growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Training Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Training Courses</h2>
            <p className="text-xl text-gray-600">Professional certification courses across multiple disciplines</p>
          </div>

          {/* Course Categories */}
          <div className="space-y-16">
            {/* Project Management Courses */}
            <div className="animate-fade-in-up delay-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Project Management</h3>
                <p className="text-gray-600">Master project leadership and delivery methodologies</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* PMP Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={pmiImg}
                      alt="PMP Certification Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">₦200,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Project Management Professional (PMP)</CardTitle>
                    <CardDescription>Globally recognized PMI certification for project managers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Master PMI's PMP Exam Content Outline</p>
                      <p>• Apply Predictive, Agile, and Hybrid methodologies</p>
                      <p>• 5-6 Days (30-40 Hours) Flexible</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Link href="/courses/pmp">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => handleBrochureDownload("pmp", "Project Management Professional (PMP)")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* PRINCE2 Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={prince2Img}
                      alt="PRINCE2 Certification Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">₦220,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">PRINCE2® Certification</CardTitle>
                    <CardDescription>Structured project management methodology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Foundation & Practitioner levels</p>
                      <p>• Globally recognized methodology</p>
                      <p>• Scalable approach for any project</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Link href="/courses/prince2">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => handleBrochureDownload("prince2", "PRINCE2 Certification")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Scrum Master Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={scrumImg}
                      alt="Professional Scrum Master Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">₦150,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Professional Scrum Master (PSM)</CardTitle>
                    <CardDescription>Master Agile and Scrum methodologies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Scrum.org certified training</p>
                      <p>• Agile team facilitation</p>
                      <p>• Lifetime valid certification</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Link href="/courses/scrum-master">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => handleBrochureDownload("scrum-master", "Professional Scrum Master (PSM)")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* PMI-ACP Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={pmiImg}
                      alt="PMI-ACP Certification Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">₦200,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">PMI-Agile Certified Practitioner</CardTitle>
                    <CardDescription>PMI's Agile certification covering multiple frameworks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Covers Scrum, Kanban, Lean, XP, SAFe</p>
                      <p>• PMI globally recognized</p>
                      <p>• 3-year validity with PDUs</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Link href="/courses/pmi-acp">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => handleBrochureDownload("pmi-acp", "PMI-Agile Certified Practitioner")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Program Management Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={promanImg}
                      alt="Program Management Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">₦250,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Program Management</CardTitle>
                    <CardDescription>Strategic leadership for multiple projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• PgMP certification preparation</p>
                      <p>• Strategic program alignment</p>
                      <p>• 3-5 Days flexible delivery</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Link href="/courses/program-management">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => handleBrochureDownload("program-management", "Program Management")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Primavera P6 Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={primeraImg}
                      alt="Primavera P6 Software Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">₦200,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Primavera P6 Software</CardTitle>
                    <CardDescription>Advanced project scheduling and control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Oracle Primavera P6 mastery</p>
                      <p>• Resource management & leveling</p>
                      <p>• 3-4 Days hands-on training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Link href="/courses/primavera-p6">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        onClick={() => handleBrochureDownload("primavera-p6", "Primavera P6 Software")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Process Management Courses */}
            <div className="animate-fade-in-up delay-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Process Management</h3>
                <p className="text-gray-600">Optimize business processes and operations</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Business Analysis Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={busImg}
                      alt="Business Analysis Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">₦200,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Business Analysis</CardTitle>
                    <CardDescription>IIBA BABOK v3 aligned certification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• ECBA, CCBA, CBAP preparation</p>
                      <p>• Requirements analysis & modeling</p>
                      <p>• 5 Days comprehensive training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
                        <Link href="/courses/business-analysis">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                        onClick={() => handleBrochureDownload("business-analysis", "Business Analysis")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Management Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={riskImg}
                      alt="Professional Risk Management Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">₦150,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Professional Risk Management</CardTitle>
                    <CardDescription>Enterprise risk management and mitigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• ISO 31000 & COSO frameworks</p>
                      <p>• Risk assessment & analysis</p>
                      <p>• Crisis & incident management</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
                        <Link href="/courses/risk-management">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                        onClick={() => handleBrochureDownload("risk-management", "Professional Risk Management")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Operations & Facility Management */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={opeImg}
                      alt="Operations and Facility Management"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">₦180,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Operations & Facility Management</CardTitle>
                    <CardDescription>Strategic facility and operations optimization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• ISO 41001 & IFMA standards</p>
                      <p>• Maintenance & safety management</p>
                      <p>• 4 Days practical training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-red-600 hover:bg-red-700">
                        <Link href="/courses/operations-facility">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                        onClick={() =>
                          handleBrochureDownload("operations-facility", "Operations & Facility Management")
                        }
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* People Management Courses */}
            <div className="animate-fade-in-up delay-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">People Management</h3>
                <p className="text-gray-600">Build strong customer and employee relationships</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* CRM Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={cusImg}
                      alt="Customer Relationship Management Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">₦100,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Customer Relationship Management</CardTitle>
                    <CardDescription>Build lasting customer relationships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• CRM tools & strategies</p>
                      <p>• Customer engagement & retention</p>
                      <p>• Sales & marketing automation</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Link href="/courses/crm">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => handleBrochureDownload("crm", "Customer Relationship Management")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Supply Chain Management */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={logImg}
                      alt="Logistics and Supply Chain Management"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">₦300,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Logistics & Supply Chain Management</CardTitle>
                    <CardDescription>Optimize supply chain operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• End-to-end supply chain optimization</p>
                      <p>• Procurement & inventory management</p>
                      <p>• Technology & digital transformation</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <Link href="/courses/supply-chain">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => handleBrochureDownload("supply-chain", "Logistics & Supply Chain Management")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* IT Courses */}
            <div className="animate-fade-in-up delay-400">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">IT Courses</h3>
                <p className="text-gray-600">Technology and data analysis expertise</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Data Analysis Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={dataImg}
                      alt="Data Analysis Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-600 text-white">₦180,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Data Analysis</CardTitle>
                    <CardDescription>Transform data into actionable insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Excel, Python, SQL, Power BI</p>
                      <p>• Statistical analysis & visualization</p>
                      <p>• 3-4 Days hands-on training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Link href="/courses/data-analysis">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-600 text-purple-600 hover:bg-purple-50"
                        onClick={() => handleBrochureDownload("data-analysis", "Data Analysis")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* MS Project Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={micImg}
                      alt="Microsoft Project Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-600 text-white">₦180,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Microsoft Project</CardTitle>
                    <CardDescription>Project planning and scheduling mastery</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Project planning & resource management</p>
                      <p>• Tracking & performance analysis</p>
                      <p>• 4 Days comprehensive training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Link href="/courses/ms-project">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-600 text-purple-600 hover:bg-purple-50"
                        onClick={() => handleBrochureDownload("ms-project", "Microsoft Project")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* HSE Courses */}
            <div className="animate-fade-in-up delay-500">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Health, Safety & Environment</h3>
                <p className="text-gray-600">Safety and emergency response training</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* First Aid & CPR Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={cprImg}
                      alt="First Aid and CPR Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-600 text-white">₦80,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">First Aid and CPR</CardTitle>
                    <CardDescription>Critical emergency response skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Basic life support & CPR</p>
                      <p>• Emergency response protocols</p>
                      <p>• 4 Days practical training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                        <Link href="/courses/first-aid-cpr">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50"
                        onClick={() => handleBrochureDownload("first-aid-cpr", "First Aid and CPR")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Food Safety Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={foodImg}
                      alt="Food Safety and Hygiene Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-600 text-white">₦80,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Food Safety & Hygiene</CardTitle>
                    <CardDescription>Safe food handling practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• HACCP principles</p>
                      <p>• Food contamination prevention</p>
                      <p>• 2-4 Days flexible training</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                        <Link href="/courses/food-safety">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50"
                        onClick={() => handleBrochureDownload("food-safety", "Food Safety & Hygiene")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Caregiver Course */}
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={careImg}
                      alt="Caregiver Certification Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-600 text-white">₦140,000</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Caregiver Certification</CardTitle>
                    <CardDescription>Professional compassionate care skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p>• Personal care & safety</p>
                      <p>• Medical assistance basics</p>
                      <p>• 4-5 Days with practicum</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-orange-600 hover:bg-orange-700">
                        <Link href="/courses/caregiver">Learn More</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50"
                        onClick={() => handleBrochureDownload("caregiver", "Caregiver Certification")}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-black px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Dot Consulting */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Dot Consulting?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our world-class approach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">PECB Authorized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Official PECB training partner delivering globally recognized certifications
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn from industry-certified professionals with real-world experience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Practical Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Hands-on training with real-world case studies and practical exercises</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-400">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Multiple training formats including public, corporate, and online options
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Hear from professionals who transformed their careers with us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced Testimonial Card 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    A
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">Adebayo Johnson</h4>
                      <p className="text-sm text-gray-600">Project Manager, MTN</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-100 absolute -top-4 -left-2" />
                    <p className="text-gray-600 relative z-10 pl-4">
                      "The PMP training was exceptional. The instructors were knowledgeable and the practical approach
                      helped me pass the exam on my first attempt."
                    </p>
                  </div>
                  <Button variant="link" className="mt-4 text-blue-600 p-0">
                    <Link href="/testimonials">Read Full Story</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Testimonial Card 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    F
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">Funmi Okafor</h4>
                      <p className="text-sm text-gray-600">Business Analyst, Access Bank</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-red-100 absolute -top-4 -left-2" />
                    <p className="text-gray-600 relative z-10 pl-4">
                      "Outstanding business analysis training! The course content was comprehensive and immediately
                      applicable to my work."
                    </p>
                  </div>
                  <Button variant="link" className="mt-4 text-red-600 p-0">
                    <Link href="/testimonials">Read Full Story</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Enhanced Testimonial Card 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 transform group-hover:-translate-y-2 transition-all duration-300">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    C
                  </div>
                </div>
                <div className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">Chidi Okwu</h4>
                      <p className="text-sm text-gray-600">Risk Manager, Dangote Group</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-green-100 absolute -top-4 -left-2" />
                    <p className="text-gray-600 relative z-10 pl-4">
                      "The risk management certification gave me the skills and confidence to advance in my career.
                      Highly recommended!"
                    </p>
                  </div>
                  <Button variant="link" className="mt-4 text-green-600 p-0">
                    <Link href="/testimonials">Read Full Story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Join thousands of professionals who have advanced their careers through our world-class training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/training-schedule" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Training
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-900 hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help you achieve your professional goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">07025560034</p>
                <p className="text-gray-600">07084659907</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardHeader>
                <Mail className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">support@dotlandconsulting.com</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-900">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
