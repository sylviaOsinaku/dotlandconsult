import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, Download, Briefcase, TrendingUp, Shield, BookOpen } from "lucide-react"
import Link from "next/link"
// import { CoursePurchaseModal } from "@/components/course-purchase-modal"

const courseCategories = [
  {
    id: "project-management",
    title: "Project Management",
    description: "Master project leadership and delivery methodologies",
    icon: Briefcase,
    color: "blue",
    courses: [
      {
        id: "pmp",
        title: "Project Management Professional (PMP)",
        description: "Globally recognized PMI certification for project managers",
        price: "₦200,000",
        duration: "5-6 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Master PMI's PMP Exam Content Outline",
          "Apply Predictive, Agile, and Hybrid methodologies",
          "35 PDUs included",
          "Exam preparation materials",
          "Post-training support",
        ],
      },
      {
        id: "prince2",
        title: "PRINCE2® Certification",
        description: "Structured project management methodology",
        price: "₦220,000",
        duration: "Foundation & Practitioner",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Foundation & Practitioner levels",
          "Globally recognized methodology",
          "Scalable approach for any project",
          "Comprehensive course materials",
          "Certificate of completion",
        ],
      },
      {
        id: "scrum-master",
        title: "Professional Scrum Master (PSM)",
        description: "Master Agile and Scrum methodologies",
        price: "₦150,000",
        duration: "3-4 Days",
        level: "Intermediate",
        participants: "Max 25",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Scrum.org certified training",
          "Agile team facilitation",
          "Lifetime valid certification",
          "Practical exercises",
          "Real-world scenarios",
        ],
      },
      {
        id: "pmi-acp",
        title: "PMI-Agile Certified Practitioner",
        description: "PMI's Agile certification covering multiple frameworks",
        price: "₦200,000",
        duration: "4-5 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Covers Scrum, Kanban, Lean, XP, SAFe",
          "PMI globally recognized",
          "3-year validity with PDUs",
          "Comprehensive training",
          "Exam preparation",
        ],
      },
      {
        id: "program-management",
        title: "Program Management",
        description: "Strategic leadership for multiple projects",
        price: "₦250,000",
        duration: "3-5 Days",
        level: "Executive",
        participants: "Max 15",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "PgMP certification preparation",
          "Strategic program alignment",
          "Benefits realization",
          "Stakeholder management",
          "Executive coaching",
        ],
      },
      {
        id: "primavera-p6",
        title: "Primavera P6 Software",
        description: "Advanced project scheduling and control",
        price: "₦200,000",
        duration: "3-4 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Oracle Primavera P6 mastery",
          "Resource management & leveling",
          "Hands-on training",
          "Project scheduling",
          "Performance tracking",
        ],
      },
    ],
  },
  {
    id: "process-management",
    title: "Process Management",
    description: "Optimize business processes and operations",
    icon: TrendingUp,
    color: "red",
    courses: [
      {
        id: "business-analysis",
        title: "Business Analysis",
        description: "IIBA BABOK v3 aligned certification",
        price: "₦200,000",
        duration: "5 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "ECBA, CCBA, CBAP preparation",
          "Requirements analysis & modeling",
          "Stakeholder management",
          "Process improvement",
          "Industry case studies",
        ],
      },
      {
        id: "risk-management",
        title: "Professional Risk Management",
        description: "Enterprise risk management and mitigation",
        price: "₦150,000",
        duration: "4-5 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "ISO 31000 & COSO frameworks",
          "Risk assessment & analysis",
          "Crisis & incident management",
          "Compliance frameworks",
          "Real-world scenarios",
        ],
      },
      {
        id: "operations-facility",
        title: "Operations & Facility Management",
        description: "Strategic facility and operations optimization",
        price: "₦180,000",
        duration: "4 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "ISO 41001 & IFMA standards",
          "Maintenance & safety management",
          "Vendor management",
          "Cost optimization",
          "Smart facilities",
        ],
      },
    ],
  },
  {
    id: "people-management",
    title: "People Management",
    description: "Build strong customer and employee relationships",
    icon: Users,
    color: "green",
    courses: [
      {
        id: "crm",
        title: "Customer Relationship Management",
        description: "Build lasting customer relationships",
        price: "₦100,000",
        duration: "3-4 Days",
        level: "Intermediate",
        participants: "Max 25",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "CRM tools & strategies",
          "Customer engagement & retention",
          "Sales & marketing automation",
          "Data management",
          "Performance measurement",
        ],
      },
      {
        id: "supply-chain",
        title: "Logistics & Supply Chain Management",
        description: "Optimize supply chain operations",
        price: "₦300,000",
        duration: "5-6 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "End-to-end supply chain optimization",
          "Procurement & inventory management",
          "Technology & digital transformation",
          "Performance measurement",
          "Global supply chain trends",
        ],
      },
    ],
  },
  {
    id: "it-courses",
    title: "IT Courses",
    description: "Technology and data analysis expertise",
    icon: BookOpen,
    color: "purple",
    courses: [
      {
        id: "data-analysis",
        title: "Data Analysis",
        description: "Transform data into actionable insights",
        price: "₦180,000",
        duration: "3-4 Days",
        level: "Intermediate",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Excel, Python, SQL, Power BI",
          "Statistical analysis & visualization",
          "Machine learning basics",
          "Business intelligence",
          "Hands-on projects",
        ],
      },
      {
        id: "ms-project",
        title: "Microsoft Project",
        description: "Project planning and scheduling mastery",
        price: "₦180,000",
        duration: "4 Days",
        level: "Intermediate",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Project planning & resource management",
          "Tracking & performance analysis",
          "Gantt charts & timelines",
          "Resource leveling",
          "Reporting & dashboards",
        ],
      },
    ],
  },
  {
    id: "hse-courses",
    title: "Health, Safety & Environment",
    description: "Safety and emergency response training",
    icon: Shield,
    color: "orange",
    courses: [
      {
        id: "first-aid-cpr",
        title: "First Aid and CPR",
        description: "Critical emergency response skills",
        price: "₦80,000",
        duration: "4 Days",
        level: "Basic",
        participants: "Max 25",
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Basic life support & CPR",
          "Emergency response protocols",
          "AED usage",
          "Injury management",
          "Certification included",
        ],
      },
      {
        id: "food-safety",
        title: "Food Safety & Hygiene",
        description: "Safe food handling practices",
        price: "₦80,000",
        duration: "2-4 Days",
        level: "Basic",
        participants: "Max 25",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "HACCP principles",
          "Food contamination prevention",
          "Personal hygiene",
          "Cleaning & sanitization",
          "Regulatory compliance",
        ],
      },
      {
        id: "caregiver",
        title: "Caregiver Certification",
        description: "Professional compassionate care skills",
        price: "₦140,000",
        duration: "4-5 Days",
        level: "Professional",
        participants: "Max 20",
        image:
          "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        features: [
          "Personal care & safety",
          "Medical assistance basics",
          "Communication skills",
          "Emergency response",
          "Practicum included",
        ],
      },
    ],
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Professional Training Programs</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advance Your Career with World-Class Training</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Choose from our comprehensive range of professional certification courses designed to accelerate your
              career growth across multiple disciplines
            </p>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {courseCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600 border-blue-200",
              red: "bg-red-100 text-red-600 border-red-200",
              green: "bg-green-100 text-green-600 border-green-200",
              purple: "bg-purple-100 text-purple-600 border-purple-200",
              orange: "bg-orange-100 text-orange-600 border-orange-200",
            }

            return (
              <div key={category.id} className={`mb-16 ${categoryIndex > 0 ? "mt-20" : ""}`}>
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      colorClasses[category.color as keyof typeof colorClasses]
                    }`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">{category.title}</h2>
                  <p className="text-xl text-gray-600">{category.description}</p>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course) => (
                    <Card
                      key={course.id}
                      className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge
                            className={`${
                              category.color === "blue"
                                ? "bg-blue-600"
                                : category.color === "red"
                                  ? "bg-red-600"
                                  : category.color === "green"
                                    ? "bg-green-600"
                                    : category.color === "purple"
                                      ? "bg-purple-600"
                                      : "bg-orange-600"
                            } text-white`}
                          >
                            {course.price}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="secondary">{course.level}</Badge>
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
                          <Button
                            className={`w-full ${
                              category.color === "blue"
                                ? "bg-blue-600 hover:bg-blue-700"
                                : category.color === "red"
                                  ? "bg-red-600 hover:bg-red-700"
                                  : category.color === "green"
                                    ? "bg-green-600 hover:bg-green-700"
                                    : category.color === "purple"
                                      ? "bg-purple-600 hover:bg-purple-700"
                                      : "bg-orange-600 hover:bg-orange-700"
                            }`}
                          >
                            <Link href={`/courses/${course.id}`}>View Details</Link>
                          </Button>
                          <Button
                            variant="outline"
                            className={`w-full ${
                              category.color === "blue"
                                ? "border-blue-600 text-blue-600 hover:bg-blue-600"
                                : category.color === "red"
                                  ? "border-red-600 text-red-600 hover:bg-red-600"
                                  : category.color === "green"
                                    ? "border-green-600 text-green-600 hover:bg-green-600"
                                    : category.color === "purple"
                                      ? "border-purple-600 text-purple-600 hover:bg-purple-600"
                                      : "border-orange-600 text-orange-600 hover:bg-orange-600"
                            } hover:text-white`}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            <a href={`/brochures/${course.id}-brochure.pdf`} download={`${course.title}-Brochure.pdf`}>
                              Download Brochure
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
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
            <Button size="lg" variant="outline" className="border-white text-blue-900 hover:bg-white hover:text-blue-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
