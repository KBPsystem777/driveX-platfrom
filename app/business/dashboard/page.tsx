"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Calendar,
  Clock,
  Star,
  MapPin,
  Phone,
  MessageSquare,
  Search,
  Car,
  Users,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Zap,
  Truck,
  Settings,
  Award,
  Shield,
} from "lucide-react"

const stats = [
  { title: "Active Bookings", value: "12", change: "+3", icon: Calendar },
  { title: "Available Drivers", value: "156", change: "+12", icon: Users },
  { title: "Monthly Spend", value: "₱125,000", change: "+15%", icon: DollarSign },
  { title: "Average Rating", value: "4.8", change: "+0.2", icon: Star },
]

const availableDrivers = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    rating: 4.9,
    reviews: 156,
    experience: "8 years",
    vehicleTypes: ["Sedan", "SUV", "10-Wheeler Truck", "Heavy Equipment"],
    transmissions: ["Manual", "Automatic"],
    electricExperience: false,
    location: "Quezon City",
    availability: "Available Now",
    hourlyRate: "₱650",
    avatar: "/placeholder.svg?height=60&width=60",
    specialties: ["Heavy Equipment Operation", "Construction Transport", "Long Distance"],
    languages: ["English", "Filipino"],
    certifications: ["Heavy Equipment Operator", "Defensive Driving", "Hazmat Certified"],
    serviceAreas: ["Metro Manila", "Laguna", "Cavite", "Rizal"],
    completedJobs: 234,
    businessRating: 4.9,
    onTimePerformance: 98,
  },
  {
    id: 2,
    name: "Maria Santos",
    rating: 4.8,
    reviews: 203,
    experience: "5 years",
    vehicleTypes: ["SUV", "Van", "Electric Vehicle"],
    transmissions: ["Automatic"],
    electricExperience: true,
    location: "BGC, Taguig",
    availability: "Available in 2 hours",
    hourlyRate: "₱450",
    avatar: "/placeholder.svg?height=60&width=60",
    specialties: ["Executive Transport", "Electric Vehicles", "Corporate Events"],
    languages: ["English", "Filipino", "Mandarin"],
    certifications: ["Electric Vehicle Specialist", "Executive Protection", "First Aid"],
    serviceAreas: ["Metro Manila", "Laguna"],
    completedJobs: 189,
    businessRating: 4.8,
    onTimePerformance: 96,
  },
  {
    id: 3,
    name: "Roberto Garcia",
    rating: 4.9,
    reviews: 89,
    experience: "12 years",
    vehicleTypes: ["10-Wheeler Truck", "14-Wheeler Truck", "Heavy Equipment", "Trailer Truck"],
    transmissions: ["Manual"],
    electricExperience: false,
    location: "Valenzuela City",
    availability: "Available Tomorrow",
    hourlyRate: "₱800",
    avatar: "/placeholder.svg?height=60&width=60",
    specialties: ["Heavy Cargo Transport", "Construction Equipment", "Industrial Transport"],
    languages: ["English", "Filipino"],
    certifications: ["Heavy Equipment Operator", "Crane Operator", "Forklift Operator"],
    serviceAreas: ["Metro Manila", "Bulacan", "Pampanga", "Bataan"],
    completedJobs: 312,
    businessRating: 4.9,
    onTimePerformance: 99,
  },
  {
    id: 4,
    name: "Lisa Fernandez",
    rating: 4.7,
    reviews: 134,
    experience: "6 years",
    vehicleTypes: ["Sedan", "Electric Vehicle", "Luxury Vehicle"],
    transmissions: ["Automatic"],
    electricExperience: true,
    location: "Makati City",
    availability: "Available Now",
    hourlyRate: "₱500",
    avatar: "/placeholder.svg?height=60&width=60",
    specialties: ["VIP Transport", "Electric Vehicles", "Airport Transfers"],
    languages: ["English", "Filipino", "Japanese"],
    certifications: ["Electric Vehicle Specialist", "VIP Protection", "Luxury Vehicle Handling"],
    serviceAreas: ["Metro Manila", "Cavite"],
    completedJobs: 167,
    businessRating: 4.7,
    onTimePerformance: 94,
  },
  {
    id: 5,
    name: "Carlos Mendoza",
    rating: 4.8,
    reviews: 178,
    experience: "10 years",
    vehicleTypes: ["6-Wheeler Truck", "10-Wheeler Truck", "Delivery Van"],
    transmissions: ["Manual", "Automatic"],
    electricExperience: false,
    location: "Pasig City",
    availability: "Available Now",
    hourlyRate: "₱550",
    avatar: "/placeholder.svg?height=60&width=60",
    specialties: ["Logistics", "Delivery Services", "Warehouse Transport"],
    languages: ["English", "Filipino"],
    certifications: ["Commercial Driver", "Logistics Specialist", "Safety Training"],
    serviceAreas: ["Metro Manila", "Rizal", "Laguna"],
    completedJobs: 298,
    businessRating: 4.8,
    onTimePerformance: 97,
  },
]

const vehicleFilterOptions = [
  { value: "all", label: "All Vehicle Types" },
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "van", label: "Van" },
  { value: "6-wheeler", label: "6-Wheeler Truck" },
  { value: "10-wheeler", label: "10-Wheeler Truck" },
  { value: "14-wheeler", label: "14-Wheeler Truck" },
  { value: "trailer", label: "Trailer Truck" },
  { value: "heavy-equipment", label: "Heavy Equipment" },
  { value: "electric", label: "Electric Vehicle" },
  { value: "luxury", label: "Luxury Vehicle" },
]

const currentBookings = [
  {
    id: 1,
    driver: "Juan Dela Cruz",
    vehicle: "10-Wheeler Truck (Company Vehicle)",
    date: "Today",
    time: "2:00 PM - 6:00 PM",
    purpose: "Construction Materials Transport",
    status: "ongoing",
    cost: "₱2,600",
    location: "Quezon City to Laguna",
  },
  {
    id: 2,
    driver: "Maria Santos",
    vehicle: "Tesla Model S (Company Vehicle)",
    date: "Tomorrow",
    time: "9:00 AM - 5:00 PM",
    purpose: "Executive Transport",
    status: "confirmed",
    cost: "₱3,600",
    location: "BGC to Various Locations",
  },
  {
    id: 3,
    driver: "Roberto Garcia",
    vehicle: "14-Wheeler Truck (Company Vehicle)",
    date: "Dec 20",
    time: "6:00 AM - 4:00 PM",
    purpose: "Heavy Equipment Transport",
    status: "pending",
    cost: "₱6,400",
    location: "Valenzuela to Bataan",
  },
]

export default function BusinessDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [vehicleFilter, setVehicleFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")
  const [experienceFilter, setExperienceFilter] = useState("all")
  const [certificationFilter, setCertificationFilter] = useState("all")
  const [transmissionFilter, setTransmissionFilter] = useState("all")
  const [electricFilter, setElectricFilter] = useState("all")
  const [selectedDriver, setSelectedDriver] = useState<any>(null)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    startTime: "",
    endTime: "",
    vehicle: "",
    purpose: "",
    pickupLocation: "",
    destination: "",
    specialRequirements: "",
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return (
          <Badge variant="default" className="bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Ongoing
          </Badge>
        )
      case "confirmed":
        return (
          <Badge variant="default" className="bg-blue-600">
            <Clock className="h-3 w-3 mr-1" />
            Confirmed
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="secondary">
            <AlertCircle className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getAvailabilityBadge = (availability: string) => {
    if (availability.includes("Available Now")) {
      return (
        <Badge variant="default" className="bg-green-600">
          Available Now
        </Badge>
      )
    } else if (availability.includes("hours")) {
      return <Badge variant="secondary">Available Soon</Badge>
    } else {
      return <Badge variant="outline">Available Later</Badge>
    }
  }

  const filteredDrivers = availableDrivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())) ||
      driver.vehicleTypes.some((type) => type.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesLocation = locationFilter === "all" || driver.location.includes(locationFilter)

    const matchesVehicle =
      vehicleFilter === "all" ||
      driver.vehicleTypes.some((type) => {
        switch (vehicleFilter) {
          case "sedan":
            return type.toLowerCase().includes("sedan")
          case "suv":
            return type.toLowerCase().includes("suv")
          case "van":
            return type.toLowerCase().includes("van")
          case "6-wheeler":
            return type.toLowerCase().includes("6-wheeler")
          case "10-wheeler":
            return type.toLowerCase().includes("10-wheeler")
          case "14-wheeler":
            return type.toLowerCase().includes("14-wheeler")
          case "trailer":
            return type.toLowerCase().includes("trailer")
          case "heavy-equipment":
            return type.toLowerCase().includes("heavy equipment")
          case "electric":
            return type.toLowerCase().includes("electric")
          case "luxury":
            return type.toLowerCase().includes("luxury")
          default:
            return true
        }
      })

    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "now" && driver.availability.includes("Available Now")) ||
      (availabilityFilter === "soon" && driver.availability.includes("hours")) ||
      (availabilityFilter === "later" && driver.availability.includes("Tomorrow"))

    const matchesExperience =
      experienceFilter === "all" ||
      (experienceFilter === "1-3" && Number.parseInt(driver.experience) <= 3) ||
      (experienceFilter === "4-7" &&
        Number.parseInt(driver.experience) >= 4 &&
        Number.parseInt(driver.experience) <= 7) ||
      (experienceFilter === "8+" && Number.parseInt(driver.experience) >= 8)

    const matchesTransmission =
      transmissionFilter === "all" ||
      driver.transmissions.some((trans) => trans.toLowerCase().includes(transmissionFilter))

    const matchesElectric =
      electricFilter === "all" ||
      (electricFilter === "yes" && driver.electricExperience) ||
      (electricFilter === "no" && !driver.electricExperience)

    return (
      matchesSearch &&
      matchesLocation &&
      matchesVehicle &&
      matchesAvailability &&
      matchesExperience &&
      matchesTransmission &&
      matchesElectric
    )
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Business Dashboard</h1>
              <p className="text-gray-600">ABC Corporation - Premium Access Plan</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Booking
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} this month</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="drivers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="drivers">Browse Drivers</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Browse Drivers Tab */}
          <TabsContent value="drivers">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Available Drivers</CardTitle>
                    <CardDescription>Browse and book verified professional drivers for your vehicles</CardDescription>
                  </div>
                  <div className="text-sm text-gray-600">
                    {filteredDrivers.length} of {availableDrivers.length} drivers match your criteria
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Search and Basic Filters */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="relative flex-1 min-w-64">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by name, specialty, or vehicle type..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={vehicleFilter} onValueChange={setVehicleFilter}>
                    <SelectTrigger className="w-56">
                      <Truck className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Vehicle Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleFilterOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="w-48">
                      <MapPin className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="Makati">Makati</SelectItem>
                      <SelectItem value="BGC">BGC</SelectItem>
                      <SelectItem value="Quezon">Quezon City</SelectItem>
                      <SelectItem value="Pasig">Pasig</SelectItem>
                      <SelectItem value="Valenzuela">Valenzuela</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}>
                    <Settings className="h-4 w-4 mr-2" />
                    Advanced Filters
                  </Button>
                </div>

                {/* Advanced Filters */}
                {showAdvancedFilters && (
                  <Card className="mb-6 bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Advanced Filters</CardTitle>
                      <CardDescription>Fine-tune your search for the perfect driver</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label>Experience Level</Label>
                          <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any Experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Any Experience</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="4-7">4-7 years</SelectItem>
                              <SelectItem value="8+">8+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Transmission</Label>
                          <Select value={transmissionFilter} onValueChange={setTransmissionFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any Transmission" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Any Transmission</SelectItem>
                              <SelectItem value="manual">Manual Only</SelectItem>
                              <SelectItem value="automatic">Automatic Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Electric Vehicle Experience</Label>
                          <Select value={electricFilter} onValueChange={setElectricFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Any</SelectItem>
                              <SelectItem value="yes">EV Experienced</SelectItem>
                              <SelectItem value="no">No EV Experience</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Availability</Label>
                          <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Any Availability" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Any Availability</SelectItem>
                              <SelectItem value="now">Available Now</SelectItem>
                              <SelectItem value="soon">Available Soon</SelectItem>
                              <SelectItem value="later">Available Later</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Driver Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDrivers.map((driver) => (
                    <Card key={driver.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={driver.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {driver.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{driver.name}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Star className="h-4 w-4 text-yellow-400" />
                              <span>
                                {driver.rating} ({driver.reviews} reviews)
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              <span>{driver.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Experience:</span>
                            <span className="text-sm">{driver.experience}</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Hourly Rate:</span>
                            <span className="text-sm font-semibold text-green-600">{driver.hourlyRate}/hour</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Completed Jobs:</span>
                            <span className="text-sm">{driver.completedJobs}</span>
                          </div>

                          <div>
                            <span className="text-sm font-medium">Vehicle Types:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {driver.vehicleTypes.slice(0, 3).map((type, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {type}
                                </Badge>
                              ))}
                              {driver.vehicleTypes.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{driver.vehicleTypes.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div>
                            <span className="text-sm font-medium">Specialties:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {driver.specialties.slice(0, 2).map((specialty, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {specialty}
                                </Badge>
                              ))}
                              {driver.specialties.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{driver.specialties.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Transmission:</span>
                            <div className="flex gap-1">
                              {driver.transmissions.map((trans, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {trans}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {driver.electricExperience && (
                            <div className="flex items-center space-x-2">
                              <Zap className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-green-600">Electric Vehicle Certified</span>
                            </div>
                          )}

                          <div className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-blue-600" />
                            <span className="text-sm">{driver.certifications.length} Certifications</span>
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Availability:</span>
                            {getAvailabilityBadge(driver.availability)}
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Business Rating:</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{driver.businessRating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="flex-1"
                                onClick={() => setSelectedDriver(driver)}
                              >
                                View Profile
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>Driver Profile - {selectedDriver?.name}</DialogTitle>
                                <DialogDescription>Complete profile and booking information</DialogDescription>
                              </DialogHeader>

                              {selectedDriver && (
                                <div className="space-y-6">
                                  <div className="flex items-center space-x-4">
                                    <Avatar className="h-20 w-20">
                                      <AvatarImage src={selectedDriver.avatar || "/placeholder.svg"} />
                                      <AvatarFallback>
                                        {selectedDriver.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h3 className="text-xl font-semibold">{selectedDriver.name}</h3>
                                      <div className="flex items-center space-x-2">
                                        <Star className="h-4 w-4 text-yellow-400" />
                                        <span>
                                          {selectedDriver.rating} ({selectedDriver.reviews} reviews)
                                        </span>
                                      </div>
                                      <p className="text-gray-600">{selectedDriver.experience} experience</p>
                                      <div className="flex items-center space-x-2 mt-1">
                                        <Shield className="h-4 w-4 text-green-600" />
                                        <span className="text-sm text-green-600">
                                          {selectedDriver.onTimePerformance}% On-time Performance
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-medium mb-3">Vehicle Expertise</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedDriver.vehicleTypes?.map((type, index) => (
                                          <Badge key={index} variant="outline">
                                            {type}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-3">Certifications</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedDriver.certifications?.map((cert, index) => (
                                          <Badge key={index} variant="default" className="bg-blue-600">
                                            {cert}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-3">Service Areas</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedDriver.serviceAreas?.map((area, index) => (
                                          <Badge key={index} variant="secondary">
                                            {area}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-3">Languages</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {selectedDriver.languages?.map((lang, index) => (
                                          <Badge key={index} variant="outline">
                                            {lang}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-medium">Book This Driver</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="bookingDate">Date</Label>
                                        <Input
                                          id="bookingDate"
                                          type="date"
                                          value={bookingDetails.date}
                                          onChange={(e) =>
                                            setBookingDetails({ ...bookingDetails, date: e.target.value })
                                          }
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="vehicle">Your Vehicle</Label>
                                        <Select
                                          value={bookingDetails.vehicle}
                                          onValueChange={(value) =>
                                            setBookingDetails({ ...bookingDetails, vehicle: value })
                                          }
                                        >
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select vehicle" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="10-wheeler">10-Wheeler Truck (ABC-123)</SelectItem>
                                            <SelectItem value="14-wheeler">14-Wheeler Truck (XYZ-456)</SelectItem>
                                            <SelectItem value="sedan">Toyota Camry (DEF-789)</SelectItem>
                                            <SelectItem value="suv">Honda CR-V (GHI-012)</SelectItem>
                                            <SelectItem value="electric">Tesla Model 3 (ELE-345)</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="startTime">Start Time</Label>
                                        <Input
                                          id="startTime"
                                          type="time"
                                          value={bookingDetails.startTime}
                                          onChange={(e) =>
                                            setBookingDetails({ ...bookingDetails, startTime: e.target.value })
                                          }
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="endTime">End Time</Label>
                                        <Input
                                          id="endTime"
                                          type="time"
                                          value={bookingDetails.endTime}
                                          onChange={(e) =>
                                            setBookingDetails({ ...bookingDetails, endTime: e.target.value })
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="purpose">Purpose</Label>
                                      <Input
                                        id="purpose"
                                        placeholder="Construction transport, executive meeting, etc."
                                        value={bookingDetails.purpose}
                                        onChange={(e) =>
                                          setBookingDetails({ ...bookingDetails, purpose: e.target.value })
                                        }
                                      />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="pickup">Pickup Location</Label>
                                        <Input
                                          id="pickup"
                                          placeholder="Office/warehouse address"
                                          value={bookingDetails.pickupLocation}
                                          onChange={(e) =>
                                            setBookingDetails({ ...bookingDetails, pickupLocation: e.target.value })
                                          }
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="destination">Destination</Label>
                                        <Input
                                          id="destination"
                                          placeholder="Delivery/meeting location"
                                          value={bookingDetails.destination}
                                          onChange={(e) =>
                                            setBookingDetails({ ...bookingDetails, destination: e.target.value })
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="requirements">Special Requirements</Label>
                                      <Textarea
                                        id="requirements"
                                        placeholder="Any special instructions, cargo details, or requirements..."
                                        value={bookingDetails.specialRequirements}
                                        onChange={(e) =>
                                          setBookingDetails({ ...bookingDetails, specialRequirements: e.target.value })
                                        }
                                      />
                                    </div>
                                    <Button className="w-full">Book Driver - {selectedDriver.hourlyRate}/hour</Button>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button size="sm" className="flex-1">
                            Quick Book
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredDrivers.length === 0 && (
                  <div className="text-center py-12">
                    <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No drivers found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your filters to find drivers that match your requirements.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("")
                        setVehicleFilter("all")
                        setLocationFilter("all")
                        setAvailabilityFilter("all")
                        setExperienceFilter("all")
                        setTransmissionFilter("all")
                        setElectricFilter("all")
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>Manage your current and upcoming driver bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                {booking.driver
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{booking.driver}</h3>
                              <p className="text-sm text-gray-600">{booking.vehicle}</p>
                              <p className="text-sm text-gray-600">{booking.purpose}</p>
                              <p className="text-sm text-gray-600">{booking.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-lg text-green-600">{booking.cost}</div>
                            <div className="text-sm text-gray-600">{booking.date}</div>
                            <div className="text-sm text-gray-600">{booking.time}</div>
                            {getStatusBadge(booking.status)}
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Driver
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <MapPin className="h-4 w-4 mr-2" />
                            Track
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Usage</CardTitle>
                  <CardDescription>Your driver booking trends by vehicle type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Heavy Equipment</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">8 bookings</div>
                        <div className="text-sm text-gray-500">₱45,200</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Executive Transport</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">12 bookings</div>
                        <div className="text-sm text-gray-500">₱38,400</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">Electric Vehicles</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">6 bookings</div>
                        <div className="text-sm text-gray-500">₱18,600</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Drivers</CardTitle>
                  <CardDescription>Highest rated drivers you've worked with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableDrivers.slice(0, 3).map((driver, index) => (
                      <div key={driver.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{driver.name}</div>
                            <div className="text-sm text-gray-500">{driver.rating}★ rating</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{5 - index} bookings</div>
                          <div className="text-sm text-gray-500">This month</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                  <CardDescription>Monthly spending breakdown by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Heavy Equipment Transport",
                      "Executive Services",
                      "Electric Vehicle Usage",
                      "Standard Delivery",
                    ].map((category, index) => (
                      <div key={category} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{category}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(4 - index) * 25}%` }} />
                          </div>
                          <span className="text-sm text-gray-500">₱{(4 - index) * 25}K</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Driver Specialization Demand</CardTitle>
                  <CardDescription>Most requested driver specializations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-orange-600" />
                        <span className="font-medium">10-Wheeler Truck Drivers</span>
                      </div>
                      <Badge variant="outline">High Demand</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Heavy Equipment Operators</span>
                      </div>
                      <Badge variant="outline">Very High Demand</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Zap className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Electric Vehicle Specialists</span>
                      </div>
                      <Badge variant="outline">Growing Demand</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
