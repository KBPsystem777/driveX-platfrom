"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Users,
  Car,
  Calendar,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  FileText,
  Star,
  MessageSquare,
} from "lucide-react"

const stats = [
  { title: "Total Drivers", value: "1,234", change: "+12%", icon: Users },
  { title: "Pending Applications", value: "89", change: "+5%", icon: Clock },
  { title: "Active Drivers", value: "1,145", change: "+8%", icon: Car },
  { title: "This Month Registrations", value: "156", change: "+15%", icon: Calendar },
]

const pendingApplications = [
  {
    id: 1,
    name: "Maria Santos",
    email: "maria@example.com",
    phone: "+63 912 345 6789",
    vehicleTypes: ["Sedan", "SUV"],
    transmissions: ["Manual", "Automatic"],
    electricExperience: true,
    submittedAt: "2024-01-15",
    status: "pending",
    documents: { complete: 4, total: 5 },
    experience: "5 years",
  },
  {
    id: 2,
    name: "Roberto Garcia",
    email: "roberto@example.com",
    phone: "+63 923 456 7890",
    vehicleTypes: ["Truck", "Heavy Equipment"],
    transmissions: ["Manual"],
    electricExperience: false,
    submittedAt: "2024-01-14",
    status: "under_review",
    documents: { complete: 5, total: 5 },
    experience: "12 years",
  },
  {
    id: 3,
    name: "Ana Reyes",
    email: "ana@example.com",
    phone: "+63 934 567 8901",
    vehicleTypes: ["Van", "SUV"],
    transmissions: ["Automatic"],
    electricExperience: true,
    submittedAt: "2024-01-13",
    status: "pending",
    documents: { complete: 3, total: 5 },
    experience: "3 years",
  },
]

const activeDrivers = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    rating: 4.9,
    completedTrips: 156,
    vehicleTypes: ["Sedan", "SUV"],
    transmissions: ["Manual", "Automatic"],
    electricExperience: false,
    status: "active",
    joinedAt: "2023-06-15",
    reports: [
      { id: 1, date: "2024-01-10", type: "performance", rating: 5, note: "Excellent service, very professional" },
      { id: 2, date: "2024-01-05", type: "feedback", rating: 4, note: "Good driver, punctual" },
    ],
  },
  {
    id: 2,
    name: "Lisa Fernandez",
    email: "lisa@example.com",
    rating: 4.8,
    completedTrips: 203,
    vehicleTypes: ["SUV", "Van"],
    transmissions: ["Automatic"],
    electricExperience: true,
    status: "active",
    joinedAt: "2023-04-22",
    reports: [
      { id: 3, date: "2024-01-08", type: "performance", rating: 5, note: "Great experience with electric vehicles" },
    ],
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    email: "carlos@example.com",
    rating: 4.7,
    completedTrips: 89,
    vehicleTypes: ["Van", "Truck"],
    transmissions: ["Manual"],
    electricExperience: false,
    status: "suspended",
    joinedAt: "2023-08-10",
    reports: [{ id: 4, date: "2024-01-12", type: "incident", rating: 2, note: "Late arrival, needs improvement" }],
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedDriver, setSelectedDriver] = useState<any>(null)
  const [newReport, setNewReport] = useState({ type: "", rating: "", note: "" })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      case "under_review":
        return (
          <Badge variant="default">
            <Eye className="h-3 w-3 mr-1" />
            Under Review
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="default" className="bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        )
      case "active":
        return (
          <Badge variant="default" className="bg-green-600">
            Active
          </Badge>
        )
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleAddReport = () => {
    if (selectedDriver && newReport.type && newReport.rating && newReport.note) {
      // In a real app, this would make an API call
      console.log("Adding report:", { driverId: selectedDriver.id, ...newReport })
      setNewReport({ type: "", rating: "", note: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Export Data
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>AD</AvatarFallback>
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
                    <p className="text-sm text-green-600">{stat.change} from last month</p>
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
        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications">Driver Applications</TabsTrigger>
            <TabsTrigger value="drivers">Active Drivers</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Driver Applications Tab */}
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Driver Applications</CardTitle>
                    <CardDescription>Review and manage driver registration applications</CardDescription>
                  </div>
                  <Badge variant="destructive" className="text-sm">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {pendingApplications.filter((app) => app.status === "pending").length} Pending Review
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search applications..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="under_review">Under Review</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Vehicle Types</TableHead>
                      <TableHead>Transmission</TableHead>
                      <TableHead>Electric</TableHead>
                      <TableHead>Documents</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{application.name}</div>
                            <div className="text-sm text-gray-500">{application.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{application.phone}</TableCell>
                        <TableCell>{application.experience}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {application.vehicleTypes.map((type, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {application.transmissions.map((trans, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {trans}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          {application.electricExperience ? (
                            <Badge variant="default" className="bg-green-600 text-xs">
                              Yes
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              No
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {application.documents.complete}/{application.documents.total} complete
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{
                                width: `${(application.documents.complete / application.documents.total) * 100}%`,
                              }}
                            />
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(application.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4 mr-1" />
                              Review
                            </Button>
                            <Button size="sm" variant="default">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Active Drivers Tab */}
          <TabsContent value="drivers">
            <Card>
              <CardHeader>
                <CardTitle>Active Drivers</CardTitle>
                <CardDescription>Manage verified drivers on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Driver</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Vehicle Types</TableHead>
                      <TableHead>Transmission</TableHead>
                      <TableHead>Electric</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeDrivers.map((driver) => (
                      <TableRow key={driver.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>
                                {driver.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{driver.name}</div>
                              <div className="text-sm text-gray-500">{driver.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <span className="font-medium">{driver.rating}</span>
                            <Star className="h-4 w-4 text-yellow-400 ml-1" />
                            <span className="text-sm text-gray-500 ml-1">({driver.completedTrips})</span>
                          </div>
                        </TableCell>
                        <TableCell>{driver.completedTrips} trips</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {driver.vehicleTypes.map((type, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {driver.transmissions.map((trans, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {trans}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          {driver.electricExperience ? (
                            <Badge variant="default" className="bg-green-600 text-xs">
                              Yes
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">
                              No
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{getStatusBadge(driver.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline" onClick={() => setSelectedDriver(driver)}>
                                  <Eye className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>Driver Profile - {selectedDriver?.name}</DialogTitle>
                                  <DialogDescription>
                                    View driver details, reports, and add new reviews
                                  </DialogDescription>
                                </DialogHeader>

                                {selectedDriver && (
                                  <div className="space-y-6">
                                    {/* Driver Info */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                      <Card>
                                        <CardHeader>
                                          <CardTitle className="text-lg">Driver Information</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                          <div className="flex justify-between">
                                            <span className="text-gray-600">Email:</span>
                                            <span>{selectedDriver.email}</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-gray-600">Rating:</span>
                                            <span className="flex items-center">
                                              {selectedDriver.rating} <Star className="h-4 w-4 text-yellow-400 ml-1" />
                                            </span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-gray-600">Completed Trips:</span>
                                            <span>{selectedDriver.completedTrips}</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-gray-600">Joined:</span>
                                            <span>{selectedDriver.joinedAt}</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            {getStatusBadge(selectedDriver.status)}
                                          </div>
                                        </CardContent>
                                      </Card>

                                      <Card>
                                        <CardHeader>
                                          <CardTitle className="text-lg">Driving Experience</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                          <div>
                                            <span className="text-gray-600 block mb-2">Vehicle Types:</span>
                                            <div className="flex flex-wrap gap-2">
                                              {selectedDriver.vehicleTypes.map((type, index) => (
                                                <Badge key={index} variant="outline">
                                                  {type}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                          <div>
                                            <span className="text-gray-600 block mb-2">Transmission:</span>
                                            <div className="flex flex-wrap gap-2">
                                              {selectedDriver.transmissions.map((trans, index) => (
                                                <Badge key={index} variant="secondary">
                                                  {trans}
                                                </Badge>
                                              ))}
                                            </div>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-gray-600">Electric Vehicle Experience:</span>
                                            {selectedDriver.electricExperience ? (
                                              <Badge variant="default" className="bg-green-600">
                                                Yes
                                              </Badge>
                                            ) : (
                                              <Badge variant="secondary">No</Badge>
                                            )}
                                          </div>
                                        </CardContent>
                                      </Card>
                                    </div>

                                    {/* Reports & Reviews */}
                                    <Card>
                                      <CardHeader>
                                        <CardTitle className="text-lg">Reports & Reviews</CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <div className="space-y-4">
                                          {selectedDriver.reports?.map((report) => (
                                            <div key={report.id} className="border rounded-lg p-4">
                                              <div className="flex justify-between items-start mb-2">
                                                <div className="flex items-center space-x-2">
                                                  <Badge
                                                    variant={report.type === "incident" ? "destructive" : "default"}
                                                  >
                                                    {report.type}
                                                  </Badge>
                                                  <span className="text-sm text-gray-500">{report.date}</span>
                                                </div>
                                                <div className="flex items-center">
                                                  {[...Array(5)].map((_, i) => (
                                                    <Star
                                                      key={i}
                                                      className={`h-4 w-4 ${
                                                        i < report.rating
                                                          ? "text-yellow-400 fill-current"
                                                          : "text-gray-300"
                                                      }`}
                                                    />
                                                  ))}
                                                </div>
                                              </div>
                                              <p className="text-sm">{report.note}</p>
                                            </div>
                                          ))}
                                        </div>

                                        {/* Add New Report */}
                                        <div className="mt-6 border-t pt-6">
                                          <h4 className="font-medium mb-4">Add New Report/Review</h4>
                                          <div className="space-y-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                              <div className="space-y-2">
                                                <Label htmlFor="reportType">Report Type</Label>
                                                <Select
                                                  value={newReport.type}
                                                  onValueChange={(value) => setNewReport({ ...newReport, type: value })}
                                                >
                                                  <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                    <SelectItem value="performance">Performance Review</SelectItem>
                                                    <SelectItem value="feedback">Customer Feedback</SelectItem>
                                                    <SelectItem value="incident">Incident Report</SelectItem>
                                                    <SelectItem value="training">Training Completion</SelectItem>
                                                  </SelectContent>
                                                </Select>
                                              </div>
                                              <div className="space-y-2">
                                                <Label htmlFor="rating">Rating</Label>
                                                <Select
                                                  value={newReport.rating}
                                                  onValueChange={(value) =>
                                                    setNewReport({ ...newReport, rating: value })
                                                  }
                                                >
                                                  <SelectTrigger>
                                                    <SelectValue placeholder="Select rating" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                    <SelectItem value="5">5 - Excellent</SelectItem>
                                                    <SelectItem value="4">4 - Good</SelectItem>
                                                    <SelectItem value="3">3 - Average</SelectItem>
                                                    <SelectItem value="2">2 - Below Average</SelectItem>
                                                    <SelectItem value="1">1 - Poor</SelectItem>
                                                  </SelectContent>
                                                </Select>
                                              </div>
                                            </div>
                                            <div className="space-y-2">
                                              <Label htmlFor="note">Notes/Comments</Label>
                                              <Textarea
                                                id="note"
                                                placeholder="Enter detailed notes about the driver's performance, behavior, or any incidents..."
                                                value={newReport.note}
                                                onChange={(e) => setNewReport({ ...newReport, note: e.target.value })}
                                                rows={3}
                                              />
                                            </div>
                                            <Button onClick={handleAddReport} className="w-full">
                                              <MessageSquare className="h-4 w-4 mr-2" />
                                              Add Report
                                            </Button>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>

                            <Button size="sm" variant="outline">
                              <FileText className="h-4 w-4 mr-1" />
                              Documents
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Driver Registration Trends</CardTitle>
                  <CardDescription>Monthly driver registration statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Registration Trends Chart Placeholder</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Drivers</CardTitle>
                  <CardDescription>Highest rated drivers this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeDrivers.slice(0, 3).map((driver, index) => (
                      <div key={driver.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{driver.name}</div>
                            <div className="text-sm text-gray-500">{driver.completedTrips} trips</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{driver.rating}★</div>
                          <div className="text-sm text-gray-500">
                            {driver.electricExperience ? "EV Certified" : "Standard"}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Type Distribution</CardTitle>
                  <CardDescription>Most popular vehicle types among drivers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Sedan", "SUV", "Van", "Truck", "Electric"].map((type, index) => (
                      <div key={type} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{type}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(5 - index) * 20}%` }} />
                          </div>
                          <span className="text-sm text-gray-500">{(5 - index) * 20}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transmission Experience</CardTitle>
                  <CardDescription>Driver transmission capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Manual Transmission</span>
                      </div>
                      <Badge variant="outline">75% of drivers</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Automatic Transmission</span>
                      </div>
                      <Badge variant="outline">85% of drivers</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Car className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">Electric Vehicle Experience</span>
                      </div>
                      <Badge variant="outline">25% of drivers</Badge>
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
