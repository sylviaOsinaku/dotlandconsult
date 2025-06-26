interface PaystackPaymentData {
  email: string
  amount: number // in kobo (multiply by 100)
  reference: string
  callback_url?: string
  metadata?: {
    course_name: string
    participant_name: string
    phone: string
    [key: string]: any
  }
}

interface PaystackResponse {
  status: boolean
  message: string
  data: {
    authorization_url: string
    access_code: string
    reference: string
  }
}

export class PaystackService {
  private static readonly BASE_URL = "https://api.paystack.co"
  private static readonly SECRET_KEY = "sk_test_f1696e10aa9e5d40bf8ba8c652f621a153fc3fee"

  static async initializePayment(paymentData: PaystackPaymentData): Promise<PaystackResponse> {
    if (!this.SECRET_KEY) {
      throw new Error("Paystack secret key not configured")
    }

    const response = await fetch(`${this.BASE_URL}/transaction/initialize`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentData),
    })

    if (!response.ok) {
      throw new Error(`Paystack API error: ${response.statusText}`)
    }

    return response.json()
  }

  static async verifyPayment(reference: string): Promise<any> {
    if (!this.SECRET_KEY) {
      throw new Error("Paystack secret key not configured")
    }

    const response = await fetch(`${this.BASE_URL}/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.SECRET_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Paystack verification error: ${response.statusText}`)
    }

    return response.json()
  }

  static generateReference(): string {
    return `dotland_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
}
