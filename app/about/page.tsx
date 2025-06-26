import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Globe, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">About Dotland Consulting Limited</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Businesses Through Innovation</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A dynamic and results-driven management education and training consulting firm dedicated to empowering
              organizations with strategic solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-6">
                Dotland Consulting Limited is a dynamic and results-driven management education, training consulting
                firm dedicated to empowering organizations with strategic solutions that drive sustainable growth and
                operational excellence.
              </p>

              <p className="mb-6">
                Established with a vision to transform businesses through innovation, capacity building, and
                best-in-class advisory services, Dotland Consulting Limited partners with clients across diverse
                industries comprising of Finance, Construction, Oil and Gas, Healthcare, Telecommunication, Information
                Technology, Pharmaceuticals, Marketing, and Hospitality to deliver measurable impact.
              </p>

              <p className="mb-6">
                Our core areas of expertise include project and program management, Business analysis, risk management,
                business process optimization, corporate training, and strategic planning. We bring a unique blend of
                industry knowledge, technical expertise, and practical experience, enabling us to tailor our services to
                the specific needs of each client.
              </p>

              <p>
                At Dotland Consulting Limited, we are an Authorized Training Partner of PECB. Our Training schools are
                located in Lagos and Abuja, and we are committed to professionalism, integrity, and client satisfaction.
                Our team of seasoned consultants and certified professionals leverage global best practices to help
                organizations achieve their goals and navigate complex challenges with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every project and training program we deliver
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We maintain the highest standards of professional integrity and ethics</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We embrace innovation to deliver cutting-edge solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We leverage global best practices in all our services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Delivering expertise across diverse sectors</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Finance",
              "Construction",
              "Oil and Gas",
              "Healthcare",
              "Telecommunication",
              "Information Technology",
              "Pharmaceuticals",
              "Marketing",
              "Hospitality",
              "Manufacturing",
              "Education",
              "Government",
            ].map((industry) => (
              <div key={industry} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for organizational growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Project & Program Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional project management solutions following global standards and best practices
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Business Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic business analysis and requirements management for organizational improvement
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive risk assessment, mitigation strategies, and compliance management
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Business Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Streamlining operations and improving efficiency through process improvement
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Corporate Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customized training programs designed to enhance organizational capabilities
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Long-term strategic planning and implementation support for sustainable growth
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PECB Partnership */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Authorized Training Partner</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">PECB Partnership</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            As an Authorized Training Partner of PECB, we deliver internationally recognized certification programs that
            meet global standards for professional development.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/courses" className="flex items-center">
              View Certification Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with us to unlock your organization's potential through our proven consulting and training
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <Link href="/training-schedule">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
