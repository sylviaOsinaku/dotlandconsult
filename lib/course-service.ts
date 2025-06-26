import { db } from "./firebase"
import { collection, addDoc, getDocs, query, orderBy, where, Timestamp, updateDoc, doc } from "firebase/firestore"

export interface CoursePurchase {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  courseName: string
  coursePrice: number
  paymentReference: string
  paymentStatus: "pending" | "successful" | "failed"
  paymentDate?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
}

function checkFirebaseConnection() {
  if (!db) {
    throw new Error("Firebase not properly configured. Please check your environment variables.")
  }
}

export async function createCoursePurchase(purchaseData: Omit<CoursePurchase, "id" | "createdAt" | "updatedAt">) {
  checkFirebaseConnection()

  try {
    const purchase: Omit<CoursePurchase, "id"> = {
      ...purchaseData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }

    const docRef = await addDoc(collection(db, "course_purchases"), purchase)
    return { id: docRef.id, ...purchase }
  } catch (error) {
    console.error("Error creating course purchase:", error)
    throw new Error("Failed to create course purchase. Please try again.")
  }
}

export async function getCoursePurchases() {
  checkFirebaseConnection()

  try {
    const q = query(collection(db, "course_purchases"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as CoursePurchase[]
  } catch (error) {
    console.error("Error fetching course purchases:", error)
    throw new Error("Failed to fetch course purchases")
  }
}

export async function updatePaymentStatus(
  reference: string,
  status: CoursePurchase["paymentStatus"],
  paymentDate?: Timestamp,
) {
  checkFirebaseConnection()

  try {
    const q = query(collection(db, "course_purchases"), where("paymentReference", "==", reference))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      throw new Error("Course purchase not found")
    }

    const purchaseDoc = querySnapshot.docs[0]
    const updateData: any = {
      paymentStatus: status,
      updatedAt: Timestamp.now(),
    }

    if (paymentDate) {
      updateData.paymentDate = paymentDate
    }

    await updateDoc(doc(db, "course_purchases", purchaseDoc.id), updateData)

    return { id: purchaseDoc.id, ...purchaseDoc.data(), ...updateData }
  } catch (error) {
    console.error("Error updating payment status:", error)
    throw new Error("Failed to update payment status")
  }
}

export async function getCoursePurchaseByReference(reference: string) {
  checkFirebaseConnection()

  try {
    const q = query(collection(db, "course_purchases"), where("paymentReference", "==", reference))
    const querySnapshot = await getDocs(q)

    if (querySnapshot.empty) {
      return null
    }

    const purchaseDoc = querySnapshot.docs[0]
    return { id: purchaseDoc.id, ...purchaseDoc.data() } as CoursePurchase
  } catch (error) {
    console.error("Error fetching course purchase by reference:", error)
    throw new Error("Failed to fetch course purchase")
  }
}
