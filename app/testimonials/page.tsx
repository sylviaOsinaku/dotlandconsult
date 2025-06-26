import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, Award, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    name: "Adebayo Johnson",
    position: "Project Manager",
    company: "MTN Nigeria",
    course: "PMP Certification",
    rating: 5,
    image: "A",
    color: "blue",
    testimonial:
      "The PMP training was exceptional. The instructors were knowledgeable and the practical approach helped me pass the exam on my first attempt. The course materials were comprehensive and the real-world examples made complex concepts easy to understand.",
    achievement: "Passed PMP exam on first attempt",
    beforeAfter: "Promoted to Senior Project Manager within 6 months",
  },
  {
    name: "Funmi Okafor",
    position: "Business Analyst",
    company: "Access Bank",
    course: "Business Analysis Certification",
    rating: 5,
    image: "F",
    color: "red",
    testimonial:
      "Outstanding business analysis training! The course content was comprehensive and immediately applicable to my work. The instructors provided excellent guidance and the networking opportunities were invaluable.",
    achievement: "Improved process efficiency by 40%",
    beforeAfter: "Led 3 major business transformation projects",
  },
  {
    name: "Chidi Okwu",
    position: "Risk Manager",
    company: "Dangote Group",
    course: "Risk Management Professional",
    rating: 5,
    image: "C",
    color: "green",
    testimonial:
      "The risk management certification gave me the skills and confidence to advance in my career. The practical exercises and case studies were particularly valuable. Highly recommended for anyone serious about risk management.",
    achievement: "Developed enterprise risk framework",
    beforeAfter: "Promoted to Head of Risk Management",
  },
  {
    name: "Kemi Adeleke",
    position: "Quality Manager",
    company: "Nestle Nigeria",
    course: "Quality Management Systems",
    rating: 5,
    image: "K",
    color: "purple",
    testimonial:
      "Excellent training program that provided deep insights into ISO 9001 standards. The trainers were experienced and the course structure was well-organized. I was able to implement quality improvements immediately.",
    achievement: "Achieved ISO 9001 certification for company",
    beforeAfter: "Reduced quality defects by 60%",
  },
  {
    name: "Tunde Bakare",
    position: "IT Director",
    company: "First Bank",
    course: "Strategic Leadership",
    rating: 5,
    image: "T",
    color: "indigo",
    testimonial:
      "The strategic leadership course transformed my approach to management. The content was relevant and practical. I learned valuable techniques for leading teams and driving organizational change.",
    achievement: "Led digital transformation initiative",
    beforeAfter: "Increased team productivity by 50%",
  },
  {
    name: "Aisha Mohammed",
    position: "Operations Manager",
    company: "Shell Nigeria",
    course: "Agile & Scrum Master",
    rating: 5,
    image: "A",
    color: "pink",
    testimonial:
      "Fantastic agile training that helped me transition our team to agile methodologies. The hands-on approach and practical exercises made learning enjoyable and effective. Great investment in my career.",
    achievement: "Successfully implemented Agile framework",
    beforeAfter: "Reduced project delivery time by 35%",
  },
]

const stats = [
  { number: "2000+", label: "Professionals Trained", icon: Users },
  { number: "95%", label: "Exam Pass Rate", icon: Award },
  { number: "98%", label: "Satisfaction Rate", icon: Star },
  { number: "50+", label: "Corporate Clients", icon: TrendingUp },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Business professionals celebrating success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Success Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">What Our Students Say</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover how our training programs have transformed careers and organizations across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from professionals who transformed their careers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                {/* Background layers with different colors */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-${testimonial.color}-500 to-${testimonial.color}-700 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>

                {/* Main card content */}
                <div className="relative bg-white rounded-2xl shadow-xl p-6 transform group-hover:-translate-y-2 transition-all duration-300">
                  {/* Profile section */}
                  <div className="absolute -top-6 left-6">
                    <div
                      className={`w-12 h-12 bg-${testimonial.color}-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                    >
                      {testimonial.image}
                    </div>
                  </div>

                  <div className="pt-6">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                        <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Course badge */}
                    <Badge variant="secondary" className="mb-4">
                      {testimonial.course}
                    </Badge>

                    {/* Testimonial text */}
                    <div className="relative mb-4">
                      <Quote className={`h-8 w-8 text-${testimonial.color}-100 absolute -top-4 -left-2`} />
                      <p className="text-gray-600 relative z-10 pl-4 text-sm leading-relaxed">
                        {testimonial.testimonial}
                      </p>
                    </div>

                    {/* Achievement highlights */}
                    <div className="space-y-2 mb-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800">Key Achievement:</p>
                        <p className="text-sm text-green-700">{testimonial.achievement}</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800">Career Impact:</p>
                        <p className="text-sm text-blue-700">{testimonial.beforeAfter}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button variant="link" className={`text-${testimonial.color}-600 p-0`}>
                      <Link href={`/courses/${testimonial.course.toLowerCase().replace(/\s+/g, "-")}`}>
                        Learn about this course
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600">Watch our students share their success stories</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-500 to-red-500 h-48 rounded-t-lg flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-blue-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">Success Story {video}</h3>
                    <p className="text-gray-600 text-sm">
                      Watch how our training transformed this professional's career
                    </p>
                    <Button variant="link" className="text-blue-600 p-0 mt-2">
                      Watch Video
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of successful professionals and transform your career with our world-class training
            programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/training-schedule">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
