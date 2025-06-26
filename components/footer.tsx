import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-bold text-2xl text-blue-400">Dotland</div>
            <p className="text-gray-300 text-sm">
              Empowering organizations with strategic solutions that drive sustainable growth and operational
              excellence.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2" asChild>
                <Link
                  href="https://www.instagram.com/dotlandconsulting/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2" asChild>
                <Link href="https://x.com/DotlandC" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-white p-2">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white text-sm">
                About Us
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-white text-sm">
                Meet the Team
              </Link>
              <Link href="/courses" className="block text-gray-300 hover:text-white text-sm">
                Training Programs
              </Link>
              <Link href="/testimonials" className="block text-gray-300 hover:text-white text-sm">
                Testimonials
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white text-sm">
                Blog
              </Link>
              <Link href="/faqs" className="block text-gray-300 hover:text-white text-sm">
                FAQs
              </Link>
            </div>
          </div>

          {/* Training Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Training Programs</h3>
            <div className="space-y-2">
              <Link href="/courses/pmp" className="block text-gray-300 hover:text-white text-sm">
                Project Management Professional
              </Link>
              <Link href="/courses/business-analysis" className="block text-gray-300 hover:text-white text-sm">
                Business Analysis
              </Link>
              <Link href="/courses/risk-management" className="block text-gray-300 hover:text-white text-sm">
                Risk Management
              </Link>
              <Link href="/training-schedule" className="block text-gray-300 hover:text-white text-sm">
                Schedule Training
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-blue-400" />
                <p className="text-gray-300 text-sm">The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <div className="text-gray-300 text-sm">
                  <p>07025560034</p>
                  <p>07084659907</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <p className="text-gray-300 text-sm">support@dotlandconsulting.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest training updates and industry insights.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-red-600 hover:bg-red-700">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Dotland Consulting Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
