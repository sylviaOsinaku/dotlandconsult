import { db } from "./firebase"
import { collection, addDoc, getDocs, query, orderBy, Timestamp, updateDoc, doc } from "firebase/firestore"

export interface Booking {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  course: string
  preferredDate: string
  trainingType: string
  participants: string
  specialRequirements: string
  status: "pending" | "confirmed" | "cancelled"
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: "new" | "responded" | "closed"
  createdAt: Timestamp
  updatedAt: Timestamp
}

function checkFirebaseConnection() {
  if (!db) {
    throw new Error("Firebase not properly configured. Please check your environment variables.")
  }
}

export async function createBooking(bookingData: Omit<Booking, "id" | "status" | "createdAt" | "updatedAt">) {
  checkFirebaseConnection()

  try {
    const booking: Omit<Booking, "id"> = {
      ...bookingData,
      status: "pending",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }

    const docRef = await addDoc(collection(db, "bookings"), booking)
    return { id: docRef.id, ...booking }
  } catch (error) {
    console.error("Error creating booking:", error)
    throw new Error("Failed to create booking. Please try again.")
  }
}

export async function createContactSubmission(
  contactData: Omit<ContactSubmission, "id" | "status" | "createdAt" | "updatedAt">,
) {
  checkFirebaseConnection()

  try {
    const submission: Omit<ContactSubmission, "id"> = {
      ...contactData,
      status: "new",
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }

    const docRef = await addDoc(collection(db, "contacts"), submission)
    return { id: docRef.id, ...submission }
  } catch (error) {
    console.error("Error creating contact submission:", error)
    throw new Error("Failed to create contact submission. Please try again.")
  }
}

export async function getBookings() {
  checkFirebaseConnection()

  try {
    const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Booking[]
  } catch (error) {
    console.error("Error fetching bookings:", error)
    throw new Error("Failed to fetch bookings")
  }
}

export async function getContactSubmissions() {
  checkFirebaseConnection()

  try {
    const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ContactSubmission[]
  } catch (error) {
    console.error("Error fetching contact submissions:", error)
    throw new Error("Failed to fetch contact submissions")
  }
}

export async function updateBookingStatus(bookingId: string, status: Booking["status"]) {
  checkFirebaseConnection()

  try {
    const bookingRef = doc(db, "bookings", bookingId)
    await updateDoc(bookingRef, {
      status,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating booking status:", error)
    throw new Error("Failed to update booking status")
  }
}

export async function updateContactStatus(contactId: string, status: ContactSubmission["status"]) {
  checkFirebaseConnection()

  try {
    const contactRef = doc(db, "contacts", contactId)
    await updateDoc(contactRef, {
      status,
      updatedAt: Timestamp.now(),
    })
  } catch (error) {
    console.error("Error updating contact status:", error)
    throw new Error("Failed to update contact status")
  }
}
