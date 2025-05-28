// Type definitions for the marketplace application

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  role: "customer" | "driver" | "admin"
  createdAt: string
  updatedAt: string
}

export interface Driver extends User {
  role: "driver"
  licenseNumber: string
  experience: string
  rating: number
  completedTrips: number
  status: "online" | "offline" | "busy"
  vehicleTypes: string[]
  documents: DriverDocument[]
  verificationStatus: "pending" | "under_review" | "approved" | "rejected"
  availability: string
}

export interface DriverDocument {
  id: string
  type: "license" | "nbi" | "medical" | "or" | "insurance" | "ltfrb"
  name: string
  url: string
  status: "pending" | "approved" | "rejected"
  uploadedAt: string
  expiryDate?: string
}

export interface Vehicle {
  id: string
  driverId: string
  make: string
  model: string
  year: number
  color: string
  plateNumber: string
  type: "sedan" | "suv" | "van" | "pickup" | "truck" | "heavy"
  capacity: number
  status: "active" | "maintenance" | "inactive"
  insurance: {
    provider: string
    policyNumber: string
    expiryDate: string
  }
  registration: {
    number: string
    expiryDate: string
  }
}

export interface Booking {
  id: string
  customerId: string
  driverId: string
  vehicleId: string
  pickupLocation: {
    address: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  dropoffLocation: {
    address: string
    coordinates: {
      lat: number
      lng: number
    }
  }
  scheduledDate: string
  scheduledTime: string
  returnDate?: string
  status: "pending" | "confirmed" | "ongoing" | "completed" | "cancelled"
  amount: number
  specialRequirements?: string
  createdAt: string
  updatedAt: string
}

export interface Review {
  id: string
  bookingId: string
  customerId: string
  driverId: string
  rating: number
  comment: string
  createdAt: string
}

export interface Payment {
  id: string
  bookingId: string
  amount: number
  method: "cash" | "card" | "gcash" | "paymaya"
  status: "pending" | "completed" | "failed" | "refunded"
  transactionId?: string
  createdAt: string
}

export interface Notification {
  id: string
  userId: string
  type: "booking" | "payment" | "verification" | "system"
  title: string
  message: string
  read: boolean
  createdAt: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface DriverRegistrationForm {
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    birthdate: string
    gender: string
    experience: string
  }
  vehicleInfo: {
    types: string[]
    primaryVehicle: {
      make: string
      model: string
      year: string
      color: string
      plateNumber: string
    }
    availability: string
  }
  documents: {
    [key: string]: File | null
  }
  agreements: {
    terms: boolean
    background: boolean
    communications: boolean
  }
}

export interface BookingForm {
  pickup: string
  dropoff: string
  pickupDate: Date
  returnDate?: Date
  vehicleType: string
  specialRequirements?: string
  contactInfo: {
    fullName: string
    phone: string
    email: string
  }
}

export interface BusinessOwner extends User {
  role: "business_owner"
  businessName: string
  businessType: string
  yearsInBusiness: string
  employeeCount: string
  businessAddress: string
  position: string
  accessPlan: "basic" | "premium" | "enterprise"
  accessExpiryDate: string
  verificationStatus: "pending" | "under_review" | "approved" | "rejected"
  paymentStatus: "pending" | "paid" | "failed"
  documents: BusinessDocument[]
  vehicleNeeds: string[]
  monthlyBookingLimit: number
  currentBookingCount: number
}

export interface BusinessDocument {
  id: string
  type:
    | "business_permit"
    | "sec_registration"
    | "dti_registration"
    | "bir_certificate"
    | "mayor_permit"
    | "valid_id"
    | "authorization"
  name: string
  url: string
  status: "pending" | "approved" | "rejected"
  uploadedAt: string
  expiryDate?: string
}

export interface DriverBooking {
  id: string
  businessOwnerId: string
  driverId: string
  businessVehicle: {
    make: string
    model: string
    plateNumber: string
    type: string
  }
  scheduledDate: string
  startTime: string
  endTime: string
  purpose: string
  pickupLocation: string
  destination: string
  specialRequirements?: string
  status: "pending" | "confirmed" | "ongoing" | "completed" | "cancelled"
  hourlyRate: number
  totalCost: number
  createdAt: string
  updatedAt: string
}

export interface AccessPlan {
  id: string
  name: string
  price: number
  duration: number // in months
  bookingLimit: number
  features: string[]
  popular?: boolean
}
