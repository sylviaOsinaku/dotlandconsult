import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, Download } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "pmp",
    title: "Project Management Professional (PMP)",
    description:
      "Globally recognized project management certification that validates your ability to manage projects effectively",
    price: "₦450,000",
    duration: "5 Days",
    level: "Professional",
    participants: "Max 20",
    features: [
      "35 PDUs included",
      "Exam preparation materials",
      "Practice tests and simulations",
      "Post-training support",
      "Certificate of completion",
    ],
  },
  {
    id: "business-analysis",
    title: "Business Analysis Certification",
    description: "Comprehensive training in business analysis methodologies and best practices",
    price: "₦350,000",
    duration: "4 Days",
    level: "Professional",
    participants: "Max 20",
    features: [
      "Requirements gathering techniques",
      "Stakeholder management",
      "Process modeling",
      "Solution evaluation",
      "Industry case studies",
    ],
  },
  {
    id: "risk-management",
    title: "Risk Management Professional",
    description: "Professional certification in risk management principles and practices",
    price: "₦400,000",
    duration: "5 Days",
    level: "Professional",
    participants: "Max 20",
    features: [
      "Risk assessment methodologies",
      "Mitigation strategies",
      "Compliance frameworks",
      "Risk monitoring tools",
      "Real-world scenarios",
    ],
  },
  {
    id: "agile-scrum",
    title: "Agile & Scrum Master",
    description: "Master agile methodologies and scrum framework for effective project delivery",
    price: "₦300,000",
    duration: "3 Days",
    level: "Intermediate",
    participants: "Max 25",
    features: [
      "Scrum framework mastery",
      "Agile principles",
      "Sprint planning",
      "Team facilitation",
      "Continuous improvement",
    ],
  },
  {
    id: "quality-management",
    title: "Quality Management Systems",
    description: "ISO 9001 quality management systems implementation and auditing",
    price: "₦380,000",
    duration: "4 Days",
    level: "Professional",
    participants: "Max 20",
    features: [
      "ISO 9001 standards",
      "Quality auditing",
      "Process improvement",
      "Documentation systems",
      "Certification preparation",
    ],
  },
  {
    id: "leadership",
    title: "Strategic Leadership",
    description: "Develop strategic leadership skills for organizational transformation",
    price: "₦420,000",
    duration: "3 Days",
    level: "Executive",
    participants: "Max 15",
    features: ["Leadership strategies", "Change management", "Team building", "Decision making", "Executive coaching"],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Professional Training Programs</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Advance Your Career with World-Class Training</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Choose from our comprehensive range of professional certification courses designed to accelerate your
                career growth
              </p>
            </div>

            {/* Right Images - Original Layout */}
            <div className="hidden lg:block relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Training classroom"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Professional meeting"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Project management"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Business analysis"
                    className="w-full h-32 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600">
              Internationally recognized certifications delivered by industry experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-2xl font-bold text-red-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-blue-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.participants}
                    </div>
                  </div>

                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold mb-3 text-gray-900">What's Included:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Award className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/courses/${course.id}`}>View Details</Link>
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
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Training Programs?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our world-class training approach</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Certified Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn from industry-certified professionals with real-world experience</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personalized attention with maximum 25 participants per class</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Badge className="h-12 w-12 text-blue-600 mx-auto mb-4 text-2xl">PECB</Badge>
                <CardTitle className="text-blue-900">PECB Authorized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Official PECB training partner delivering globally recognized certifications
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Multiple training schedules to fit your professional commitments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our training programs
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
