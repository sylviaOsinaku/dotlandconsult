import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
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
                  <Link href="/training-schedule"  >Book Training Session</Link>
                </Button>
              </div>
            </div>

            {/* Right Images - Original Layout */}
            <div className="hidden lg:block relative animate-fade-in-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Business meeting"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-200">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Team collaboration"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-300">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Business analysis"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="transform hover:scale-105 transition-all duration-500 animate-float delay-500">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Training session"
                      className="w-full h-32 object-cover rounded-xl shadow-lg"
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

      {/* Popular & Path Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular & Path Courses</h2>
            <p className="text-xl text-gray-600">Choose your career path with our specialized training programs</p>
          </div>

          {/* Course Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Management Path */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Management Path</CardTitle>
                <CardDescription>Leadership and strategic management courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Link
                    href="/courses/pmp"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Project Management (PMP)</span>
                    </div>
                  </Link>
                  <Link
                    href="/courses/leadership"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Strategic Leadership</span>
                    </div>
                  </Link>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/courses?category=management">View All Management Courses</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Analysis Path */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-blue-900">Analysis Path</CardTitle>
                <CardDescription>Business and data analysis specializations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Link
                    href="/courses/business-analysis"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Business Analysis</span>
                    </div>
                  </Link>
                  <Link
                    href="/courses/agile-scrum"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Agile & Scrum</span>
                    </div>
                  </Link>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/courses?category=analysis">View All Analysis Courses</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quality & Risk Path */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-blue-900">Quality & Risk Path</CardTitle>
                <CardDescription>Risk management and quality assurance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Link
                    href="/courses/risk-management"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Risk Management</span>
                    </div>
                  </Link>
                  <Link
                    href="/courses/quality-management"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Quality Management</span>
                    </div>
                  </Link>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/courses?category=quality-risk">View All Quality Courses</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
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
                      &apos;The PMP training was exceptional. The instructors were knowledgeable and the practical approach
                      helped me pass the exam on my first attempt.&apos;
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
                      &apos;Outstanding business analysis training! The course content was comprehensive and immediately
                      applicable to my work.&apos;
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
                      &apos;The risk management certification gave me the skills and confidence to advance in my career.
                      Highly recommended!&apos;
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
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/training-schedule" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Training
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-300"
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
            <p className="text-xl text-gray-600">We&apos;re here to help you achieve your professional goals</p>
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
