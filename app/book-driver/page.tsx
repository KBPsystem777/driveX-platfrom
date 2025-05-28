"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin, Clock, Star } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"

const vehicleTypes = [
  { id: "sedan", name: "Sedan", price: 2500, description: "Comfortable for city trips" },
  { id: "suv", name: "SUV", price: 3500, description: "Perfect for families" },
  { id: "van", name: "Van", price: 4500, description: "Group transportation" },
  { id: "pickup", name: "Pickup Truck", price: 4000, description: "For cargo and equipment" },
  { id: "truck", name: "Delivery Truck", price: 6000, description: "Heavy cargo transport" },
  { id: "heavy", name: "Heavy Equipment", price: 12000, description: "Construction vehicles" },
]

const availableDrivers = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    rating: 4.9,
    reviews: 156,
    experience: "8 years",
    specialties: ["sedan", "suv"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Maria Santos",
    rating: 4.8,
    reviews: 203,
    experience: "5 years",
    specialties: ["van", "pickup"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Roberto Garcia",
    rating: 4.9,
    reviews: 89,
    experience: "12 years",
    specialties: ["truck", "heavy"],
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function BookDriverPage() {
  const [selectedVehicle, setSelectedVehicle] = useState("")
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [step, setStep] = useState(1)

  const selectedVehicleData = vehicleTypes.find((v) => v.id === selectedVehicle)
  const filteredDrivers = availableDrivers.filter((driver) => driver.specialties.includes(selectedVehicle))

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Book a Professional Driver</h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                  step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600",
                )}
              >
                1
              </div>
              <div className={cn("h-1 w-16", step >= 2 ? "bg-blue-600" : "bg-gray-200")} />
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                  step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600",
                )}
              >
                2
              </div>
              <div className={cn("h-1 w-16", step >= 3 ? "bg-blue-600" : "bg-gray-200")} />
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                  step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600",
                )}
              >
                3
              </div>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
                <CardDescription>Tell us about your transportation needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="pickup" placeholder="Enter pickup address" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoff">Drop-off Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="dropoff" placeholder="Enter destination" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !pickupDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Return Date (Optional)</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !returnDate && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Vehicle Type</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicleTypes.map((vehicle) => (
                      <Card
                        key={vehicle.id}
                        className={cn(
                          "cursor-pointer transition-all hover:shadow-md",
                          selectedVehicle === vehicle.id && "ring-2 ring-blue-600",
                        )}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <CardContent className="p-4">
                          <h3 className="font-semibold">{vehicle.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{vehicle.description}</p>
                          <p className="font-bold text-blue-600">₱{vehicle.price}/day</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requirements (Optional)</Label>
                  <Textarea id="notes" placeholder="Any special requirements or notes for your driver..." rows={3} />
                </div>

                <Button onClick={() => setStep(2)} className="w-full" disabled={!selectedVehicle || !pickupDate}>
                  Continue to Driver Selection
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Select Your Driver</CardTitle>
                <CardDescription>Choose from our verified drivers for {selectedVehicleData?.name}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {filteredDrivers.map((driver) => (
                  <Card key={driver.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={driver.avatar || "/placeholder.svg"}
                          alt={driver.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold">{driver.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              {driver.rating} ({driver.reviews} reviews)
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {driver.experience} experience
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-2">
                            {driver.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                {vehicleTypes.find((v) => v.id === specialty)?.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button onClick={() => setStep(3)}>Select Driver</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button variant="outline" onClick={() => setStep(1)} className="w-full">
                  Back to Trip Details
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Booking Confirmation</CardTitle>
                <CardDescription>Review your booking details and confirm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Vehicle Type:</span>
                      <span>{selectedVehicleData?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pickup Date:</span>
                      <span>{pickupDate ? format(pickupDate, "PPP") : "Not selected"}</span>
                    </div>
                    {returnDate && (
                      <div className="flex justify-between">
                        <span>Return Date:</span>
                        <span>{format(returnDate, "PPP")}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Total Estimated Cost:</span>
                      <span>₱{selectedVehicleData?.price}/day</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+63 9XX XXX XXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back to Driver Selection
                  </Button>
                  <Button className="flex-1">Confirm Booking</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
