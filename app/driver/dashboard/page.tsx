"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  Star,
  Calendar,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  Settings,
  CheckCircle,
  FileText,
  Building,
  Eye,
  Truck,
  Users,
} from "lucide-react"

const driverStats = [
  { title: "Total Earnings", value: "₱45,230", change: "+12%", icon: DollarSign },
  { title: "Rating", value: "4.9", change: "+0.1", icon: Star },
  { title: "Completed Trips", value: "156", change: "+8", icon: Calendar },
  { title: "Business Interests", value: "8", change: "+3", icon: Building },
]

const interestedBusinesses = [
  {
    id: 1,
    businessName: "ABC Logistics Corp",
    contactPerson: "Maria Santos",
    vehicleNeeded: "10-Wheeler Truck",
    location: "Quezon City",
    frequency: "Daily",
    hourlyRate: "₱650",
    requirements: "Heavy cargo transport, construction materials",
    urgency: "high",
    postedDate: "2 hours ago",
    businessType: "Logistics",
    employeeCount: "50-200",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    businessName: "Elite Executive Services",
    contactPerson: "Robert Chen",
    vehicleNeeded: "Luxury Sedan",
    location: "BGC, Taguig",
    frequency: "Weekly",
    hourlyRate: "₱500",
    requirements: "Executive transport, airport transfers, client meetings",
    urgency: "medium",
    postedDate: "1 day ago",
    businessType: "Corporate Services",
    employeeCount: "11-50",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    businessName: "Green Earth Delivery",
    contactPerson: "Lisa Fernandez",
    vehicleNeeded: "Electric Van",
    location: "Makati City",
    frequency: "3x per week",
    hourlyRate: "₱450",
    requirements: "Eco-friendly deliveries, last-mile logistics",
    urgency: "low",
    postedDate: "3 days ago",
    businessType: "Delivery Services",
    employeeCount: "11-50",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    businessName: "Metro Construction Inc",
    contactPerson: "Carlos Rodriguez",
    vehicleNeeded: "Heavy Equipment Operator",
    location: "Pasig City",
    frequency: "Full-time",
    hourlyRate: "₱800",
    requirements: "Construction site transport, heavy machinery operation",
    urgency: "high",
    postedDate: "5 hours ago",
    businessType: "Construction",
    employeeCount: "200+",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const upcomingBookings = [
  {
    id: 1,
    business: "ABC Logistics Corp",
    vehicle: "10-Wheeler Truck",
    time: "2:00 PM",
    date: "Today",
    duration: "8 hours",
    amount: "₱5,200",
    status: "confirmed",
    location: "Quezon City to Laguna",
  },
  {
    id: 2,
    business: "Elite Executive Services",
    vehicle: "Mercedes-Benz S-Class",
    time: "4:30 PM",
    date: "Today",
    duration: "4 hours",
    amount: "₱2,000",
    status: "pending",
    location: "BGC to NAIA",
  },
  {
    id: 3,
    business: "Green Earth Delivery",
    vehicle: "Electric Van",
    time: "10:00 AM",
    date: "Tomorrow",
    duration: "6 hours",
    amount: "₱2,700",
    status: "confirmed",
    location: "Makati delivery routes",
  },
]

export default function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true)
  const [selectedBusiness, setSelectedBusiness] = useState<any>(null)

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "high":
        return <Badge variant="destructive">Urgent</Badge>
      case "medium":
        return <Badge variant="default">Medium Priority</Badge>
      case "low":
        return <Badge variant="secondary">Low Priority</Badge>
      default:
        return <Badge variant="secondary">{urgency}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge variant="default" className="bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Confirmed
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold">Welcome back, Juan!</h1>
                <p className="text-gray-600">Professional Driver - Heavy Equipment Specialist</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{isOnline ? "Online" : "Offline"}</span>
                <Switch checked={isOnline} onCheckedChange={setIsOnline} />
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Online Status Alert */}
        {isOnline && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <h3 className="font-medium text-green-900">You're Online!</h3>
                <p className="text-sm text-green-700">Ready to receive booking requests from businesses</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {driverStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change} this week</p>
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
        <Tabs defaultValue="opportunities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="opportunities">Business Opportunities</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Business Opportunities Tab */}
          <TabsContent value="opportunities">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Businesses Looking for Your Skills</span>
                </CardTitle>
                <CardDescription>
                  Companies that need drivers with your vehicle experience and qualifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {interestedBusinesses.map((business) => (
                    <Card key={business.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={business.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {business.businessName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-lg">{business.businessName}</h3>
                              <p className="text-sm text-gray-600">Contact: {business.contactPerson}</p>
                              <p className="text-sm text-gray-600">
                                {business.businessType} • {business.employeeCount} employees
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            {getUrgencyBadge(business.urgency)}
                            <p className="text-sm text-gray-500 mt-1">{business.postedDate}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Truck className="h-4 w-4 text-blue-600" />
                              <span className="font-medium">Vehicle Needed:</span>
                              <Badge variant="outline">{business.vehicleNeeded}</Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-green-600" />
                              <span className="font-medium">Location:</span>
                              <span className="text-sm">{business.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-purple-600" />
                              <span className="font-medium">Frequency:</span>
                              <span className="text-sm">{business.frequency}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <DollarSign className="h-4 w-4 text-green-600" />
                              <span className="font-medium">Rate:</span>
                              <span className="text-lg font-semibold text-green-600">{business.hourlyRate}/hour</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-orange-600" />
                              <span className="font-medium">Company Size:</span>
                              <span className="text-sm">{business.employeeCount}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{business.requirements}</p>
                        </div>

                        <div className="flex space-x-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" onClick={() => setSelectedBusiness(business)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>{selectedBusiness?.businessName}</DialogTitle>
                                <DialogDescription>Complete business opportunity details</DialogDescription>
                              </DialogHeader>

                              {selectedBusiness && (
                                <div className="space-y-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="font-medium mb-3">Business Information</h4>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Business Type:</span>
                                          <span>{selectedBusiness.businessType}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Company Size:</span>
                                          <span>{selectedBusiness.employeeCount} employees</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Contact Person:</span>
                                          <span>{selectedBusiness.contactPerson}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Location:</span>
                                          <span>{selectedBusiness.location}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-medium mb-3">Job Details</h4>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Vehicle Type:</span>
                                          <Badge variant="outline">{selectedBusiness.vehicleNeeded}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Frequency:</span>
                                          <span>{selectedBusiness.frequency}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Hourly Rate:</span>
                                          <span className="font-semibold text-green-600">
                                            {selectedBusiness.hourlyRate}
                                          </span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-gray-600">Priority:</span>
                                          {getUrgencyBadge(selectedBusiness.urgency)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-medium mb-2">Detailed Requirements</h4>
                                    <p className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                      {selectedBusiness.requirements}
                                    </p>
                                  </div>

                                  <div className="flex space-x-3">
                                    <Button className="flex-1">
                                      <MessageSquare className="h-4 w-4 mr-2" />
                                      Express Interest
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                      <Phone className="h-4 w-4 mr-2" />
                                      Contact Business
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Apply Now
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>Your confirmed and upcoming business bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <Card key={booking.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                {booking.business
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{booking.business}</h3>
                              <p className="text-sm text-gray-600">{booking.vehicle}</p>
                              <p className="text-sm text-gray-600">{booking.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-lg text-green-600">{booking.amount}</div>
                            <div className="text-sm text-gray-600">
                              {booking.date} at {booking.time}
                            </div>
                            <div className="text-sm text-gray-600">{booking.duration}</div>
                            {getStatusBadge(booking.status)}
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Call Business
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <MapPin className="h-4 w-4 mr-2" />
                            View Route
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>Your earnings breakdown for this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Total Earnings</span>
                      <span className="text-lg font-bold text-green-600">₱45,230</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Platform Fee (15%)</span>
                      <span className="text-lg font-medium text-red-600">-₱6,785</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <span className="text-sm font-medium text-green-900">Net Earnings</span>
                      <span className="text-lg font-bold text-green-600">₱38,445</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Your performance this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Business Satisfaction</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "96%" }} />
                        </div>
                        <span className="text-sm font-medium">96%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">On-time Performance</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "98%" }} />
                        </div>
                        <span className="text-sm font-medium">98%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Average Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">4.9</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Driver Profile</CardTitle>
                <CardDescription>Manage your professional driver profile and qualifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Vehicle Specializations</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">10-Wheeler Truck</Badge>
                        <Badge variant="default">Heavy Equipment</Badge>
                        <Badge variant="default">Construction Vehicles</Badge>
                        <Badge variant="outline">Sedan</Badge>
                        <Badge variant="outline">SUV</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Transmission Experience</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Manual</Badge>
                        <Badge variant="default">Automatic</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Special Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default" className="bg-green-600">
                          Heavy Equipment Operator
                        </Badge>
                        <Badge variant="default" className="bg-blue-600">
                          Defensive Driving
                        </Badge>
                        <Badge variant="outline">Hazmat Certified</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Availability</h3>
                      <p className="text-sm text-gray-600">Monday to Saturday, 6:00 AM - 8:00 PM</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Service Areas</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Metro Manila</Badge>
                        <Badge variant="outline">Laguna</Badge>
                        <Badge variant="outline">Cavite</Badge>
                        <Badge variant="outline">Rizal</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">English</Badge>
                        <Badge variant="outline">Filipino</Badge>
                        <Badge variant="outline">Tagalog</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button>
                    <FileText className="h-4 w-4 mr-2" />
                    Update Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
