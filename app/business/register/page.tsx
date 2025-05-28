"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Shield, CheckCircle, CreditCard, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"

const registrationSteps = [
  { id: 1, title: "Personal Information", description: "Your personal details" },
  { id: 2, title: "Business Information", description: "Company and business details" },
  { id: 3, title: "Documentation", description: "Required business documents" },
  { id: 4, title: "Payment & Verification", description: "Access fee and verification" },
]

const businessTypes = [
  "Corporation",
  "Partnership",
  "Sole Proprietorship",
  "LLC",
  "Government Agency",
  "Non-Profit Organization",
  "Other",
]

const vehicleNeeds = [
  { id: "sedan", name: "Sedan", description: "Executive transport, client meetings" },
  { id: "suv", name: "SUV", description: "Family transport, group travel" },
  { id: "van", name: "Van", description: "Group transport, cargo delivery" },
  { id: "pickup", name: "Pickup Truck", description: "Cargo transport, equipment delivery" },
  { id: "truck", name: "Delivery Truck", description: "Commercial deliveries, logistics" },
  { id: "luxury", name: "Luxury Vehicle", description: "VIP transport, special events" },
]

export default function BusinessRegisterPage() {
  const { content } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedVehicleNeeds, setSelectedVehicleNeeds] = useState<string[]>([])
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([])
  const [selectedPlan, setSelectedPlan] = useState("")

  const handleVehicleNeedToggle = (vehicleId: string) => {
    setSelectedVehicleNeeds((prev) =>
      prev.includes(vehicleId) ? prev.filter((v) => v !== vehicleId) : [...prev, vehicleId],
    )
  }

  const handleDocUpload = (docId: string) => {
    setUploadedDocs((prev) => (prev.includes(docId) ? prev.filter((d) => d !== docId) : [...prev, docId]))
  }

  const accessPlans = [
    {
      id: "basic",
      name: "Basic Access",
      price: "₱15,000",
      period: "3 months",
      features: ["Access to driver pool", "Up to 10 bookings/month", "Basic support", "Standard verification"],
    },
    {
      id: "premium",
      name: "Premium Access",
      price: "₱25,000",
      period: "6 months",
      features: [
        "Access to driver pool",
        "Up to 25 bookings/month",
        "Priority support",
        "Fast-track verification",
        "Driver performance analytics",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Access",
      price: "₱40,000",
      period: "12 months",
      features: [
        "Access to driver pool",
        "Unlimited bookings",
        "Dedicated account manager",
        "Instant verification",
        "Advanced analytics",
        "Custom integrations",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Register as Business Owner</h1>
            <p className="text-gray-600">
              Join our exclusive platform to access verified professional drivers for your business needs
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 overflow-x-auto pb-4">
              {registrationSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center min-w-0">
                    <div
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium mb-2",
                        currentStep >= step.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600",
                      )}
                    >
                      {currentStep > step.id ? <CheckCircle className="h-5 w-5" /> : step.id}
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium">{step.title}</div>
                      <div className="text-xs text-gray-500">{step.description}</div>
                    </div>
                  </div>
                  {index < registrationSteps.length - 1 && (
                    <div className={cn("h-1 w-16 mx-4 mt-5", currentStep > step.id ? "bg-blue-600" : "bg-gray-200")} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Please provide your personal details as the business representative</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Juan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Dela Cruz" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="juan@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+63 9XX XXX XXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position in Company</Label>
                  <Input id="position" placeholder="CEO, Manager, HR Director, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address</Label>
                  <Textarea id="address" placeholder="House/Unit Number, Street, Barangay, City, Province" rows={3} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Date of Birth</Label>
                    <Input id="birthdate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={() => setCurrentStep(2)} className="w-full">
                  Continue to Business Information
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Tell us about your business and driver requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" placeholder="ABC Corporation" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "_")}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="yearsInBusiness">Years in Business</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="11-20">11-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeCount">Number of Employees</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessAddress">Business Address</Label>
                  <Textarea id="businessAddress" placeholder="Complete business address" rows={3} />
                </div>

                <div className="space-y-4">
                  <Label>Vehicle Types Needed (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {vehicleNeeds.map((vehicle) => (
                      <Card
                        key={vehicle.id}
                        className={cn(
                          "p-4 cursor-pointer transition-all hover:shadow-md",
                          selectedVehicleNeeds.includes(vehicle.id) && "ring-2 ring-blue-600",
                        )}
                        onClick={() => handleVehicleNeedToggle(vehicle.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={selectedVehicleNeeds.includes(vehicle.id)}
                            onChange={() => handleVehicleNeedToggle(vehicle.id)}
                          />
                          <div>
                            <h3 className="font-medium">{vehicle.name}</h3>
                            <p className="text-sm text-gray-600">{vehicle.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driverRequirements">Specific Driver Requirements</Label>
                  <Textarea
                    id="driverRequirements"
                    placeholder="Describe any specific requirements for drivers (experience level, language skills, special certifications, etc.)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedUsage">Expected Monthly Usage</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select expected usage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 bookings per month</SelectItem>
                      <SelectItem value="6-15">6-15 bookings per month</SelectItem>
                      <SelectItem value="16-30">16-30 bookings per month</SelectItem>
                      <SelectItem value="30+">30+ bookings per month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(3)} className="flex-1">
                    Continue to Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Documentation */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Required Documentation</CardTitle>
                <CardDescription>Upload clear photos or scans of the following business documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-blue-900">Document Requirements</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        All documents must be valid and clearly readable. Documents will be verified by our team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { id: "business_permit", name: "Business Permit", required: true },
                    { id: "sec_registration", name: "SEC Registration (for Corporations)", required: true },
                    { id: "dti_registration", name: "DTI Registration (for Sole Proprietorship)", required: false },
                    { id: "bir_certificate", name: "BIR Certificate of Registration", required: true },
                    { id: "mayor_permit", name: "Mayor's Permit", required: true },
                    { id: "valid_id", name: "Valid Government ID of Representative", required: true },
                    { id: "authorization", name: "Authorization Letter (if not owner)", required: false },
                  ].map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <h3 className="font-medium">{doc.name}</h3>
                            {doc.required && (
                              <Badge variant="destructive" className="text-xs">
                                Required
                              </Badge>
                            )}
                          </div>
                        </div>
                        {uploadedDocs.includes(doc.id) && <CheckCircle className="h-5 w-5 text-green-600" />}
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                        <Button variant="outline" size="sm" className="mt-3" onClick={() => handleDocUpload(doc.id)}>
                          {uploadedDocs.includes(doc.id) ? "Replace File" : "Choose File"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(4)} className="flex-1">
                    Continue to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Payment & Verification */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Access Plan</CardTitle>
                <CardDescription>Select a plan to access our verified driver network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {accessPlans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={cn(
                        "relative cursor-pointer transition-all hover:shadow-lg",
                        selectedPlan === plan.id && "ring-2 ring-blue-600",
                        plan.popular && "border-blue-600",
                      )}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-600">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">{plan.name}</CardTitle>
                        <div className="text-3xl font-bold text-blue-600">{plan.price}</div>
                        <div className="text-sm text-gray-500">for {plan.period}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {selectedPlan && (
                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Payment Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input id="cardName" placeholder="Juan Dela Cruz" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" />
                    <div className="text-sm">
                      <Label htmlFor="terms" className="font-medium">
                        I agree to the Terms and Conditions
                      </Label>
                      <p className="text-gray-600 mt-1">
                        By checking this box, you agree to our business terms, privacy policy, and service agreement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="background" />
                    <div className="text-sm">
                      <Label htmlFor="background" className="font-medium">
                        I consent to business verification
                      </Label>
                      <p className="text-gray-600 mt-1">
                        I authorize DriveConnect to verify my business information and submitted documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="communications" />
                    <div className="text-sm">
                      <Label htmlFor="communications" className="font-medium">
                        I agree to receive communications
                      </Label>
                      <p className="text-gray-600 mt-1">
                        Receive booking confirmations, driver updates, and important platform information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">What happens next?</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Your application and payment will be processed within 24 hours</li>
                    <li>• We'll verify your business documents and information</li>
                    <li>• You'll receive access credentials once approved</li>
                    <li>• Start browsing and booking drivers immediately</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(3)} className="flex-1">
                    Back
                  </Button>
                  <Button className="flex-1" disabled={!selectedPlan}>
                    <DollarSign className="h-4 w-4 mr-2" />
                    Complete Registration & Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
