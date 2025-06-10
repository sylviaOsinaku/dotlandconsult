import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Legal Information</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Privacy Policy</CardTitle>
                <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <h3>Information We Collect</h3>
                <p>
                  We collect information you provide directly to us, such as when you create an account, register for
                  training, contact us, or use our services.
                </p>

                <h3>How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our training services</li>
                  <li>Process registrations and payments</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about our services</li>
                </ul>

                <h3>Information Sharing</h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </p>

                <h3>Cookies</h3>
                <p>
                  We use cookies and similar technologies to enhance your experience on our website. You can control
                  cookie preferences through your browser settings.
                </p>

                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: support@dotlandconsulting.com
                  <br />
                  Phone: 07025560034
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
