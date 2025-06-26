// Fallback storage system when Firebase is not available
export interface FallbackBooking {
  id: string
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
  createdAt: string
  updatedAt: string
}

export interface FallbackContact {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: "new" | "responded" | "closed"
  createdAt: string
  updatedAt: string
}

const STORAGE_KEYS = {
  BOOKINGS: "dotland_bookings",
  CONTACTS: "dotland_contacts",
}

export function saveFallbackBooking(booking: Omit<FallbackBooking, "id" | "status" | "createdAt" | "updatedAt">) {
  if (typeof window === "undefined") return null

  const bookings = getFallbackBookings()
  const newBooking: FallbackBooking = {
    ...booking,
    id: Date.now().toString(),
    status: "pending",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  bookings.push(newBooking)
  localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings))
  return newBooking
}

export function saveFallbackContact(contact: Omit<FallbackContact, "id" | "status" | "createdAt" | "updatedAt">) {
  if (typeof window === "undefined") return null

  const contacts = getFallbackContacts()
  const newContact: FallbackContact = {
    ...contact,
    id: Date.now().toString(),
    status: "new",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  contacts.push(newContact)
  localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts))
  return newContact
}

export function getFallbackBookings(): FallbackBooking[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.BOOKINGS)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function getFallbackContacts(): FallbackContact[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CONTACTS)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}
