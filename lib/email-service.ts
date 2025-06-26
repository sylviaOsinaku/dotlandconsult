export function generateCoursePaymentConfirmationEmail(data: {
  firstName: string
  lastName: string
  courseName: string
  paymentAmount: number
  paymentDate: string
  paymentReference: string
}) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Course Payment Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .success-badge { background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; display: inline-block; margin-bottom: 20px; }
            .course-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
            .payment-info { background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
            .btn { background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Payment Confirmed! 🎉</h1>
                <p>Thank you for your course purchase</p>
            </div>
            
            <div class="content">
                <div class="success-badge">✓ Payment Successful</div>
                
                <p>Dear ${data.firstName} ${data.lastName},</p>
                
                <p>We're excited to confirm that your payment has been successfully processed for the following course:</p>
                
                <div class="course-details">
                    <h3>${data.courseName}</h3>
                    <p><strong>Amount Paid:</strong> ₦${data.paymentAmount.toLocaleString()}</p>
                    <p><strong>Payment Date:</strong> ${data.paymentDate}</p>
                    <p><strong>Reference:</strong> ${data.paymentReference}</p>
                </div>
                
                <div class="payment-info">
                    <h4>What's Next?</h4>
                    <ul>
                        <li>Our training team will contact you within 24 hours to confirm your course schedule</li>
                        <li>You'll receive detailed course materials and joining instructions</li>
                        <li>A calendar invite will be sent with the training dates and venue/online details</li>
                    </ul>
                </div>
                
                <p>If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
                
                <a href="mailto:support@dotlandconsulting.com" class="btn">Contact Support</a>
                
                <div class="footer">
                    <p><strong>AG. Dotland Consulting Limited</strong></p>
                    <p>The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos</p>
                    <p>Phone: 07025560034 | 07084659907</p>
                    <p>Email: support@dotlandconsulting.com</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `

  const text = `
Course Payment Confirmation

Dear ${data.firstName} ${data.lastName},

Your payment has been successfully processed for:

Course: ${data.courseName}
Amount Paid: ₦${data.paymentAmount.toLocaleString()}
Payment Date: ${data.paymentDate}
Reference: ${data.paymentReference}

What's Next?
- Our training team will contact you within 24 hours
- You'll receive detailed course materials and joining instructions
- A calendar invite will be sent with training details

Contact us: support@dotlandconsulting.com | 07025560034

AG. Dotland Consulting Limited
The Bunker, 279 Herbert Macaulay Way, Yaba, Lagos
  `

  return { html, text }
}
