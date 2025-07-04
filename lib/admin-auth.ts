import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User } from "firebase/auth"
import { auth } from "./firebase"

export async function signInAdmin(email: string, password: string) {
  if (!auth) {
    throw new Error("Firebase not properly configured. Please check your environment variables.")
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error: any) {
    console.error("Admin sign in error:", error)

    // Handle specific Firebase auth errors
    switch (error.code) {
      case "auth/invalid-api-key":
        throw new Error("Firebase configuration error. Please check your API key.")
      case "auth/user-not-found":
        throw new Error("No admin account found with this email.")
      case "auth/wrong-password":
        throw new Error("Incorrect password.")
      case "auth/invalid-email":
        throw new Error("Invalid email address.")
      case "auth/too-many-requests":
        throw new Error("Too many failed attempts. Please try again later.")
      default:
        throw new Error("Authentication failed. Please try again.")
    }
  }
}

export async function signOutAdmin() {
  if (!auth) {
    throw new Error("Firebase not properly configured.")
  }

  try {
    await signOut(auth)
  } catch (error) {
    console.error("Admin sign out error:", error)
    throw new Error("Failed to sign out")
  }
}

export function onAdminAuthStateChanged(callback: (user: User | null) => void) {
  if (!auth) {
    console.warn("Firebase auth not available")
    callback(null)
    return () => {}
  }

  return onAuthStateChanged(auth, callback)
}

export function isFirebaseConfigured() {
  return !!auth
}
