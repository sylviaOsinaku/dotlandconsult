"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Calendar,
  Users,
  Mail,
  Phone,
  Building,
  BookOpen,
  CheckCircle,
  AlertCircle,
  LogOut,
  Eye,
  Filter,
  AlertTriangle,
} from "lucide-react"
import { signInAdmin, signOutAdmin, onAdminAuthStateChanged, isFirebaseConfigured } from "@/lib/admin-auth"
import {
  getBookings,
  getContactSubmissions,
  updateBookingStatus,
  updateContactStatus,
  type Booking,
  type ContactSubmission,
} from "@/lib/booking-service"
import type { User } from "firebase/auth"
import { getCoursePurchases, type CoursePurchase } from "@/lib/course-service"

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bookings, setBookings] = useState<Booking[]>([])
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [coursePurchases, setCoursePurchases] = useState<CoursePurchase[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [error, setError] = useState<string>("")
  const [firebaseConfigured, setFirebaseConfigured] = useState(false)

  useEffect(() => {
    // Check if Firebase is properly configured
    const configured = isFirebaseConfigured()
    setFirebaseConfigured(configured)

    if (!configured) {
      setLoading(false)
      setError("Firebase is not properly configured. Please check your environment variables.")
      return
    }

    const unsubscribe = onAdminAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      if (user) {
        loadData()
      }
    })

    return () => unsubscribe()
  }, [])

  const loadData = async () => {
    try {
      const [bookingsData, contactsData, coursePurchasesData] = await Promise.all([
        getBookings(),
        getContactSubmissions(),
        getCoursePurchases(),
      ])
      setBookings(bookingsData)
      setContacts(contactsData)
      setCoursePurchases(coursePurchasesData)
      setError("")
    } catch (error: any) {
      console.error("Error loading data:", error)
      setError(error.message || "Failed to load data")
    }
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await signInAdmin(email, password)
    } catch (error: any) {
      setError(error.message || "Authentication failed")
    }
  }

  const handleSignOut = async () => {
    try {
      await signOutAdmin()
      setError("")
    } catch (error: any) {
      setError(error.message || "Failed to sign out")
    }
  }

  const handleUpdateBookingStatus = async (bookingId: string, status: Booking["status"]) => {
    try {
      await updateBookingStatus(bookingId, status)
      await loadData()
      setError("")
    } catch (error: any) {
      setError(error.message || "Failed to update booking status")
    }
  }

  const handleUpdateContactStatus = async (contactId: string, status: ContactSubmission["status"]) => {
    try {
      await updateContactStatus(contactId, status)
      await loadData()
      setError("")
    } catch (error: any) {
      setError(error.message || "Failed to update contact status")
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
      case "new":
        return (
          <Badge variant="outline" className="text-yellow-600 border-yellow-600">
            Pending
          </Badge>
        )
      case "confirmed":
      case "responded":
        return (
          <Badge variant="outline" className="text-green-600 border-green-600">
            Confirmed
          </Badge>
        )
      case "cancelled":
      case "closed":
        return (
          <Badge variant="outline" className="text-red-600 border-red-600">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const filteredBookings =
    statusFilter === "all" ? bookings : bookings.filter((booking) => booking.status === statusFilter)

  const filteredContacts =
    statusFilter === "all" ? contacts : contacts.filter((contact) => contact.status === statusFilter)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  // Show configuration error
  if (!firebaseConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-red-600 flex items-center justify-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Configuration Error
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Firebase is not properly configured. Please check your environment variables.
              </AlertDescription>
            </Alert>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Required Environment Variables:</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• NEXT_PUBLIC_FIREBASE_API_KEY</li>
                <li>• NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN</li>
                <li>• NEXT_PUBLIC_FIREBASE_PROJECT_ID</li>
                <li>• NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET</li>
                <li>• NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID</li>
                <li>• NEXT_PUBLIC_FIREBASE_APP_ID</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-blue-800">Setup Instructions:</h3>
              <ol className="text-sm space-y-1 text-blue-700">
                <li>1. Create a Firebase project at console.firebase.google.com</li>
                <li>2. Enable Firestore and Authentication</li>
                <li>3. Get your Firebase config from Project Settings</li>
                <li>4. Add the environment variables to your .env.local file</li>
                <li>5. Restart your development server</li>
              </ol>
            </div>

            <div className="text-center">
              <Button onClick={() => window.location.reload()} variant="outline">
                Retry After Configuration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert className="mb-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@dotlandconsulting.com"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-4 p-3 bg-gray-50 rounded text-sm text-gray-600">
              <p className="font-medium mb-1">Demo Credentials:</p>
              <p>Email: admin@dotlandconsulting.com</p>
              <p>Password: admin123</p>
              <p className="text-xs mt-2 text-gray-500">
                Note: You need to create this user in Firebase Authentication first.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">{bookings.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Confirmed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter((b) => b.status === "confirmed").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertCircle className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {bookings.filter((b) => b.status === "pending").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Messages</p>
                  <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-indigo-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Course Purchases</p>
                  <p className="text-2xl font-bold text-gray-900">{coursePurchases.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="bookings">Training Bookings</TabsTrigger>
              <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
              <TabsTrigger value="courses">Course Purchases</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Training Bookings ({filteredBookings.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredBookings.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No bookings found</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="font-semibold text-lg">
                                {booking.firstName} {booking.lastName}
                              </h3>
                              {getStatusBadge(booking.status)}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                {booking.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                {booking.phone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="h-4 w-4" />
                                {booking.company}
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                {booking.course}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                {booking.trainingType}
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {booking.preferredDate || "TBD"}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2 ml-4">
                            <Button size="sm" variant="outline" onClick={() => setSelectedBooking(booking)}>
                              <Eye className="h-4 w-4" />
                            </Button>

                            {booking.status === "pending" && (
                              <Button
                                size="sm"
                                onClick={() => handleUpdateBookingStatus(booking.id!, "confirmed")}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Confirm
                              </Button>
                            )}

                            {booking.status !== "cancelled" && (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleUpdateBookingStatus(booking.id!, "cancelled")}
                              >
                                Cancel
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages ({filteredContacts.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredContacts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Mail className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No messages found</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredContacts.map((contact) => (
                      <div key={contact.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="font-semibold text-lg">{contact.name}</h3>
                              {getStatusBadge(contact.status)}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                {contact.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                {contact.phone}
                              </div>
                            </div>

                            <div className="mb-2">
                              <span className="font-medium">Subject: </span>
                              {contact.subject}
                            </div>

                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Message: </span>
                              {contact.message.length > 100
                                ? `${contact.message.substring(0, 100)}...`
                                : contact.message}
                            </div>
                          </div>

                          <div className="flex gap-2 ml-4">
                            <Button size="sm" variant="outline" onClick={() => setSelectedContact(contact)}>
                              <Eye className="h-4 w-4" />
                            </Button>

                            {contact.status === "new" && (
                              <Button
                                size="sm"
                                onClick={() => handleUpdateContactStatus(contact.id!, "responded")}
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                Mark Responded
                              </Button>
                            )}

                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleUpdateContactStatus(contact.id!, "closed")}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Course Purchases ({coursePurchases.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {coursePurchases.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No course purchases found</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {coursePurchases.map((purchase) => (
                      <div key={purchase.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="font-semibold text-lg">
                                {purchase.firstName} {purchase.lastName}
                              </h3>
                              <Badge
                                variant={
                                  purchase.paymentStatus === "successful"
                                    ? "default"
                                    : purchase.paymentStatus === "pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {purchase.paymentStatus}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                {purchase.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                {purchase.phone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="h-4 w-4" />
                                {purchase.company}
                              </div>
                              <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                {purchase.courseName}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">₦{purchase.coursePrice.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {purchase.createdAt?.toDate?.()?.toLocaleDateString() || "N/A"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
              <Button
                onClick={() => setSelectedBooking(null)}
                className="absolute top-4 right-4"
                variant="ghost"
                size="sm"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="font-medium">
                    {selectedBooking.firstName} {selectedBooking.lastName}
                  </p>
                </div>
                <div>
                  <Label>Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedBooking.status)}</div>
                </div>
                <div>
                  <Label>Email</Label>
                  <p>{selectedBooking.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p>{selectedBooking.phone}</p>
                </div>
                <div>
                  <Label>Company</Label>
                  <p>{selectedBooking.company}</p>
                </div>
                <div>
                  <Label>Position</Label>
                  <p>{selectedBooking.position}</p>
                </div>
                <div>
                  <Label>Course</Label>
                  <p>{selectedBooking.course}</p>
                </div>
                <div>
                  <Label>Training Type</Label>
                  <p>{selectedBooking.trainingType}</p>
                </div>
                <div>
                  <Label>Preferred Date</Label>
                  <p>{selectedBooking.preferredDate || "Not specified"}</p>
                </div>
                <div>
                  <Label>Participants</Label>
                  <p>{selectedBooking.participants || "1"}</p>
                </div>
              </div>

              {selectedBooking.specialRequirements && (
                <div>
                  <Label>Special Requirements</Label>
                  <p className="mt-1 p-3 bg-gray-50 rounded">{selectedBooking.specialRequirements}</p>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                {selectedBooking.status === "pending" && (
                  <Button
                    onClick={() => {
                      handleUpdateBookingStatus(selectedBooking.id!, "confirmed")
                      setSelectedBooking(null)
                    }}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Confirm Booking
                  </Button>
                )}

                {selectedBooking.status !== "cancelled" && (
                  <Button
                    onClick={() => {
                      handleUpdateBookingStatus(selectedBooking.id!, "cancelled")
                      setSelectedBooking(null)
                    }}
                    variant="destructive"
                  >
                    Cancel Booking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact Detail Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Contact Message Details</CardTitle>
              <Button
                onClick={() => setSelectedContact(null)}
                className="absolute top-4 right-4"
                variant="ghost"
                size="sm"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <p className="font-medium">{selectedContact.name}</p>
                </div>
                <div>
                  <Label>Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedContact.status)}</div>
                </div>
                <div>
                  <Label>Email</Label>
                  <p>{selectedContact.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p>{selectedContact.phone}</p>
                </div>
              </div>

              <div>
                <Label>Subject</Label>
                <p className="font-medium">{selectedContact.subject}</p>
              </div>

              <div>
                <Label>Message</Label>
                <p className="mt-1 p-3 bg-gray-50 rounded whitespace-pre-wrap">{selectedContact.message}</p>
              </div>

              <div className="flex gap-2 pt-4">
                {selectedContact.status === "new" && (
                  <Button
                    onClick={() => {
                      handleUpdateContactStatus(selectedContact.id!, "responded")
                      setSelectedContact(null)
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Mark as Responded
                  </Button>
                )}

                <Button
                  onClick={() => {
                    handleUpdateContactStatus(selectedContact.id!, "closed")
                    setSelectedContact(null)
                  }}
                  variant="outline"
                >
                  Close Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
