import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "What is Dotland Consulting Limited?",
        answer:
          "Dotland Consulting Limited is a dynamic management education and training consulting firm dedicated to empowering organizations with strategic solutions that drive sustainable growth and operational excellence. We are an Authorized Training Partner of PECB.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve diverse industries including Finance, Construction, Oil and Gas, Healthcare, Telecommunication, Information Technology, Pharmaceuticals, Marketing, and Hospitality.",
      },
      {
        question: "Where are your training locations?",
        answer:
          "Our training schools are located in Lagos and Abuja. We also offer online training and can conduct corporate training at your organization's premises.",
      },
    ],
  },
  {
    category: "Training Programs",
    faqs: [
      {
        question: "What types of training do you offer?",
        answer:
          "We offer professional certification training in Project Management (PMP), Business Analysis, Risk Management, Quality Management Systems, Agile & Scrum, and Strategic Leadership.",
      },
      {
        question: "Are your certifications internationally recognized?",
        answer:
          "Yes, as an Authorized Training Partner of PECB, our certifications are globally recognized and meet international standards.",
      },
      {
        question: "What is the difference between public and corporate training?",
        answer:
          "Public training involves joining scheduled classes with other participants, while corporate training is customized for your organization and can be conducted at your premises or ours.",
      },
      {
        question: "Do you offer online training?",
        answer:
          "Yes, we offer virtual instructor-led training with interactive sessions, digital materials, and recorded sessions for review.",
      },
    ],
  },
  {
    category: "PMP Certification",
    faqs: [
      {
        question: "What are the prerequisites for PMP certification?",
        answer:
          "You need a secondary degree, 7,500 hours of project management experience, and 35 hours of project management education (which our course provides). Alternatively, with a four-year degree, you need 4,500 hours of project management experience.",
      },
      {
        question: "How long is the PMP certification valid?",
        answer:
          "PMP certification is valid for 3 years. You need to earn 60 PDUs (Professional Development Units) during this period to maintain your certification.",
      },
      {
        question: "What is included in the PMP course fee?",
        answer:
          "The course fee includes 35 PDUs, comprehensive materials, practice exams, certificate of completion, post-training support, and access to online resources.",
      },
      {
        question: "What is the PMP exam pass rate?",
        answer:
          "Our students have a high pass rate due to our comprehensive training approach, practice exams, and experienced instructors. We provide extensive exam preparation materials and strategies.",
      },
    ],
  },
  {
    category: "Registration & Payment",
    faqs: [
      {
        question: "How do I register for a course?",
        answer:
          "You can register by filling out our training booking form, calling us directly, or visiting our office. We'll confirm your registration and send payment details.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, online payments, and corporate payments. Payment details will be provided upon registration confirmation.",
      },
      {
        question: "Can I get a refund if I cancel my registration?",
        answer:
          "Refund policies vary depending on the timing of cancellation. Please contact us for specific refund terms and conditions.",
      },
      {
        question: "Do you offer group discounts?",
        answer:
          "Yes, we offer attractive discounts for group registrations and corporate training. Contact us for customized pricing based on your requirements.",
      },
    ],
  },
  {
    category: "Course Materials & Support",
    faqs: [
      {
        question: "What materials are provided with the course?",
        answer:
          "We provide comprehensive course materials including digital and printed resources, practice exams, templates, case studies, and access to online resources.",
      },
      {
        question: "Do you provide post-training support?",
        answer:
          "Yes, we offer post-training email support, access to additional resources, and consultation to help you apply what you've learned.",
      },
      {
        question: "Can I access course materials after the training?",
        answer:
          "Yes, you'll have continued access to digital materials and online resources for a specified period after completing the training.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Business professionals in discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Got Questions? We Have Answers</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Find answers to common questions about our training programs, certifications, and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 mb-4">Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-8">
                  Can't find the answer you're looking for? Our team is here to help you with any questions about our
                  training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Call: 07025560034
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our training programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/training-schedule">Schedule Training</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/courses">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
