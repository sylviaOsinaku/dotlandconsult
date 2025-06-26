import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Settings, Target, Monitor, Heart, Shield, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Hr from "../../components/assests/hr.jpg"
import Op from '../../components/assests/OperationsManager.jpg'
import Pm from "../../components/assests/ProjectManager.jpg"
import cusRela from '../../components/assests/cusrelationship.jpg'
import IT from '../../components/assests/info.jpg'
import manager from '../../components/assests/dotmanager.jpg'

const teamMembers = [
  {
    id: 1,
    name: "Christopher Obidike",
    position: "General Manager",
    department: "Executive Leadership",
    icon: Shield,
    color: "bg-blue-600",
    image: manager,
    description: "Leading strategic initiatives and overall company operations with extensive management experience.",
    expertise: ["Strategic Planning", "Operations Management", "Leadership", "Business Development"],
  },
  {
    id: 2,
    name: "Agnes Dzer",
    position: "HR Manager",
    department: "Human Resources",
    icon: Users,
    color: "bg-green-600",
    image: Hr,
    description: "Managing human resources, talent acquisition, and employee development programs.",
    expertise: ["Talent Management", "Employee Relations", "Training & Development", "HR Policies"],
  },
  {
    id: 3,
    name: "Light Ogbenna",
    position: "Operations Manager",
    department: "Operations",
    icon: Settings,
    color: "bg-purple-600",
    image: Op,
    description: "Overseeing daily operations, process optimization, and operational excellence initiatives.",
    expertise: ["Process Optimization", "Quality Management", "Operations Strategy", "Team Leadership"],
  },
  {
    id: 4,
    name: "Malu Benjamin",
    position: "Project Manager",
    department: "Project Management",
    icon: Target,
    color: "bg-orange-600",
    image: Pm,
    description: "Leading project delivery, managing client engagements, and ensuring project success.",
    expertise: ["Project Planning", "Risk Management", "Client Relations", "Team Coordination"],
  },
  {
    id: 5,
    name: "Daniel Echezona",
    position: "IT Support Officer",
    department: "Information Technology",
    icon: Monitor,
    color: "bg-indigo-600",
    image: IT,
    description: "Managing IT infrastructure, technical support, and digital transformation initiatives.",
    expertise: ["IT Support", "System Administration", "Network Management", "Technical Training"],
  },
  {
    id: 6,
    name: "Chinenye Ofebe",
    position: "Customer Relationship Manager",
    department: "Customer Relations",
    icon: Heart,
    color: "bg-red-600",
    image: cusRela,
    description: "Building strong client relationships, managing customer satisfaction, and driving retention.",
    expertise: ["Client Relations", "Customer Service", "Account Management", "Communication"],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Meet Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The People Behind Our Success</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Our dedicated team of professionals brings together diverse expertise and experience to deliver
              exceptional consulting and training services
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Dotland Consulting Limited, our strength lies in our people. Our team combines years of industry
              experience with a passion for excellence, ensuring that every client receives the highest quality service
              and support.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const IconComponent = member.icon
              return (
                <Card key={member.id} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardHeader className="text-center pb-4 relative">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} - ${member.position}`}
                        fill
                        className="rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Role Icon Overlay */}
                      <div
                        className={`absolute -bottom-2 -right-2 w-12 h-12 ${member.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <CardTitle className="text-xl text-gray-900 mb-2">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mx-auto mb-2">
                      {member.position}
                    </Badge>
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-2 pt-4 border-t">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-600 hover:bg-blue-50">
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team by the Numbers</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Professionals Trained</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-gray-600">Organizations Served</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Drives Our Team</h2>
            <p className="text-xl text-gray-600">
              Our team is united by shared values and a common commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive for excellence in every project and interaction</p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">We work together to achieve the best outcomes for our clients</p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">We maintain the highest standards of professional integrity</p>
            </div>

            <div className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">We are passionate about helping our clients succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our experienced professionals are ready to help you achieve your training and consulting goals. Get in touch
            to discuss how we can support your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-600">
              <Link href="/training-schedule">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
