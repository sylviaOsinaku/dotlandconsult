import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Validate Firebase configuration
function validateFirebaseConfig() {
  const requiredKeys = [
    "NEXT_PUBLIC_FIREBASE_API_KEY",
    "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
    "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
    "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
    "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    "NEXT_PUBLIC_FIREBASE_APP_ID",
  ]

  const missingKeys = requiredKeys.filter((key) => !process.env[key])

  if (missingKeys.length > 0) {
    console.error("Missing Firebase environment variables:", missingKeys)
    return false
  }

  return true
}

// Initialize Firebase only if configuration is valid
let app: any = null
let db: any = null
let auth: any = null

if (typeof window !== "undefined") {
  // Only initialize on client side
  if (validateFirebaseConfig()) {
    try {
      app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
      db = getFirestore(app)
      auth = getAuth(app)
    } catch (error) {
      console.error("Firebase initialization error:", error)
    }
  } else {
    console.warn("Firebase not initialized due to missing configuration")
  }
}

export { db, auth }
export default app
