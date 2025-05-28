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
import { Upload, FileText, Shield, CheckCircle, Car, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/components/language-provider"

const registrationSteps = [
  { id: 1, title: "Personal Information", description: "Basic details about you" },
  { id: 2, title: "Driving Experience", description: "Your driving skills and experience" },
  { id: 3, title: "Vehicle Information", description: "Details about your vehicle(s)" },
  { id: 4, title: "Documentation", description: "Required licenses and permits" },
  { id: 5, title: "Verification", description: "Identity and background check" },
]

export default function DriverRegisterPage() {
  const { content } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([])
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([])
  const [drivingExperience, setDrivingExperience] = useState({
    manual: false,
    automatic: false,
    electric: false,
    motorcycle: false,
    truck: false,
    bus: false,
  })

  const handleVehicleToggle = (vehicle: string) => {
    setSelectedVehicles((prev) => (prev.includes(vehicle) ? prev.filter((v) => v !== vehicle) : [...prev, vehicle]))
  }

  const handleDocUpload = (docId: string) => {
    setUploadedDocs((prev) => (prev.includes(docId) ? prev.filter((d) => d !== docId) : [...prev, docId]))
  }

  const handleExperienceChange = (type: string, checked: boolean) => {
    setDrivingExperience((prev) => ({ ...prev, [type]: checked }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">{content.driverRegistration.title}</h1>
            <p className="text-gray-600">{content.driverRegistration.subtitle}</p>
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
                <CardTitle>{content.driverRegistration.steps.personal.title}</CardTitle>
                <CardDescription>{content.driverRegistration.steps.personal.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{content.driverRegistration.form.firstName}</Label>
                    <Input id="firstName" placeholder="Juan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{content.driverRegistration.form.lastName}</Label>
                    <Input id="lastName" placeholder="Dela Cruz" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{content.driverRegistration.form.email}</Label>
                    <Input id="email" type="email" placeholder="juan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{content.driverRegistration.form.phone}</Label>
                    <Input id="phone" placeholder="+63 9XX XXX XXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">{content.driverRegistration.form.address}</Label>
                  <Textarea id="address" placeholder="House/Unit Number, Street, Barangay, City, Province" rows={3} />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">{content.driverRegistration.form.birthdate}</Label>
                    <Input id="birthdate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">{content.driverRegistration.form.gender}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={content.driverRegistration.form.selectGender} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">{content.driverRegistration.form.male}</SelectItem>
                        <SelectItem value="female">{content.driverRegistration.form.female}</SelectItem>
                        <SelectItem value="other">{content.driverRegistration.form.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">{content.driverRegistration.form.yearsExperience}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={content.driverRegistration.form.selectExperience} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 {content.driverRegistration.form.years}</SelectItem>
                        <SelectItem value="3-5">3-5 {content.driverRegistration.form.years}</SelectItem>
                        <SelectItem value="6-10">6-10 {content.driverRegistration.form.years}</SelectItem>
                        <SelectItem value="10+">10+ {content.driverRegistration.form.years}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={() => setCurrentStep(2)} className="w-full">
                  {content.driverRegistration.form.continue}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Driving Experience */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>{content.driverRegistration.steps.experience.title}</CardTitle>
                <CardDescription>{content.driverRegistration.steps.experience.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label className="text-lg font-medium">{content.driverRegistration.form.transmissionTypes}</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card
                      className={cn(
                        "p-4 cursor-pointer transition-all",
                        drivingExperience.manual && "ring-2 ring-blue-600",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={drivingExperience.manual}
                          onCheckedChange={(checked) => handleExperienceChange("manual", checked as boolean)}
                        />
                        <div className="flex items-center space-x-2">
                          <Car className="h-5 w-5 text-blue-600" />
                          <div>
                            <h3 className="font-medium">{content.driverRegistration.form.manual}</h3>
                            <p className="text-sm text-gray-600">{content.driverRegistration.form.manualDesc}</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card
                      className={cn(
                        "p-4 cursor-pointer transition-all",
                        drivingExperience.automatic && "ring-2 ring-blue-600",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={drivingExperience.automatic}
                          onCheckedChange={(checked) => handleExperienceChange("automatic", checked as boolean)}
                        />
                        <div className="flex items-center space-x-2">
                          <Car className="h-5 w-5 text-green-600" />
                          <div>
                            <h3 className="font-medium">{content.driverRegistration.form.automatic}</h3>
                            <p className="text-sm text-gray-600">{content.driverRegistration.form.automaticDesc}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-lg font-medium">{content.driverRegistration.form.specialVehicles}</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card
                      className={cn(
                        "p-4 cursor-pointer transition-all",
                        drivingExperience.electric && "ring-2 ring-green-600",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={drivingExperience.electric}
                          onCheckedChange={(checked) => handleExperienceChange("electric", checked as boolean)}
                        />
                        <div className="flex items-center space-x-2">
                          <Zap className="h-5 w-5 text-green-600" />
                          <div>
                            <h3 className="font-medium">{content.driverRegistration.form.electric}</h3>
                            <p className="text-sm text-gray-600">{content.driverRegistration.form.electricDesc}</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card
                      className={cn(
                        "p-4 cursor-pointer transition-all",
                        drivingExperience.motorcycle && "ring-2 ring-orange-600",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={drivingExperience.motorcycle}
                          onCheckedChange={(checked) => handleExperienceChange("motorcycle", checked as boolean)}
                        />
                        <div className="flex items-center space-x-2">
                          <Car className="h-5 w-5 text-orange-600" />
                          <div>
                            <h3 className="font-medium">{content.driverRegistration.form.motorcycle}</h3>
                            <p className="text-sm text-gray-600">{content.driverRegistration.form.motorcycleDesc}</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card
                      className={cn(
                        "p-4 cursor-pointer transition-all",
                        drivingExperience.truck && "ring-2 ring-red-600",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={drivingExperience.truck}
                          onCheckedChange={(checked) => handleExperienceChange("truck", checked as boolean)}
                        />
                        <div className="flex items-center space-x-2">
                          <Car className="h-5 w-5 text-red-600" />
                          <div>
                            <h3 className="font-medium">{content.driverRegistration.form.truck}</h3>
                            <p className="text-sm text-gray-600">{content.driverRegistration.form.truckDesc}</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card
                      className={cn(
                        "p-4 cursor-pointer transition-all",
                        drivingExperience.bus && "ring-2 ring-purple-600",
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={drivingExperience.bus}
                          onCheckedChange={(checked) => handleExperienceChange("bus", checked as boolean)}
                        />
                        <div className="flex items-center space-x-2">
                          <Car className="h-5 w-5 text-purple-600" />
                          <div>
                            <h3 className="font-medium">{content.driverRegistration.form.bus}</h3>
                            <p className="text-sm text-gray-600">{content.driverRegistration.form.busDesc}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalExperience">{content.driverRegistration.form.additionalExperience}</Label>
                  <Textarea
                    id="additionalExperience"
                    placeholder={content.driverRegistration.form.additionalExperienceDesc}
                    rows={3}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                    {content.driverRegistration.form.back}
                  </Button>
                  <Button onClick={() => setCurrentStep(3)} className="flex-1">
                    {content.driverRegistration.form.continue}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Vehicle Information */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>{content.driverRegistration.steps.vehicle.title}</CardTitle>
                <CardDescription>{content.driverRegistration.steps.vehicle.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>{content.driverRegistration.form.vehicleTypes}</Label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {content.vehicleTypes.types.map((vehicle, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox
                          id={vehicle.name}
                          checked={selectedVehicles.includes(vehicle.name)}
                          onCheckedChange={() => handleVehicleToggle(vehicle.name)}
                        />
                        <Label htmlFor={vehicle.name} className="text-sm font-normal">
                          {vehicle.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>{content.driverRegistration.form.primaryVehicle}</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="make">{content.driverRegistration.form.make}</Label>
                      <Input id="make" placeholder="Toyota" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">{content.driverRegistration.form.model}</Label>
                      <Input id="model" placeholder="Vios" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="year">{content.driverRegistration.form.year}</Label>
                      <Input id="year" placeholder="2020" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="color">{content.driverRegistration.form.color}</Label>
                      <Input id="color" placeholder="White" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plateNumber">{content.driverRegistration.form.plateNumber}</Label>
                      <Input id="plateNumber" placeholder="ABC 1234" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">{content.driverRegistration.form.availability}</Label>
                  <Textarea id="availability" placeholder={content.driverRegistration.form.availabilityDesc} rows={3} />
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                    {content.driverRegistration.form.back}
                  </Button>
                  <Button onClick={() => setCurrentStep(4)} className="flex-1">
                    {content.driverRegistration.form.continue}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Documentation */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>{content.driverRegistration.steps.documentation.title}</CardTitle>
                <CardDescription>{content.driverRegistration.steps.documentation.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-blue-900">
                        {content.driverRegistration.form.documentRequirements}
                      </h3>
                      <p className="text-sm text-blue-700 mt-1">{content.driverRegistration.form.documentNote}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {content.driverRegistration.documents.map((doc, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <h3 className="font-medium">{doc.name}</h3>
                            {doc.required && (
                              <Badge variant="destructive" className="text-xs">
                                {content.driverRegistration.form.required}
                              </Badge>
                            )}
                          </div>
                        </div>
                        {uploadedDocs.includes(doc.id) && <CheckCircle className="h-5 w-5 text-green-600" />}
                      </div>

                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">{content.driverRegistration.form.uploadText}</p>
                        <p className="text-xs text-gray-500">{content.driverRegistration.form.fileTypes}</p>
                        <Button variant="outline" size="sm" className="mt-3" onClick={() => handleDocUpload(doc.id)}>
                          {uploadedDocs.includes(doc.id)
                            ? content.driverRegistration.form.replaceFile
                            : content.driverRegistration.form.chooseFile}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(3)} className="flex-1">
                    {content.driverRegistration.form.back}
                  </Button>
                  <Button onClick={() => setCurrentStep(5)} className="flex-1">
                    {content.driverRegistration.form.continue}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Verification */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>{content.driverRegistration.steps.verification.title}</CardTitle>
                <CardDescription>{content.driverRegistration.steps.verification.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-900">{content.driverRegistration.form.almostDone}</h3>
                      <p className="text-sm text-green-700 mt-1">{content.driverRegistration.form.reviewTerms}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="terms" />
                    <div className="text-sm">
                      <Label htmlFor="terms" className="font-medium">
                        {content.driverRegistration.form.agreeTerms}
                      </Label>
                      <p className="text-gray-600 mt-1">{content.driverRegistration.form.termsDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="background" />
                    <div className="text-sm">
                      <Label htmlFor="background" className="font-medium">
                        {content.driverRegistration.form.consentBackground}
                      </Label>
                      <p className="text-gray-600 mt-1">{content.driverRegistration.form.backgroundDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox id="communications" />
                    <div className="text-sm">
                      <Label htmlFor="communications" className="font-medium">
                        {content.driverRegistration.form.agreeCommunications}
                      </Label>
                      <p className="text-gray-600 mt-1">{content.driverRegistration.form.communicationsDesc}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">{content.driverRegistration.form.whatNext}</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {content.driverRegistration.nextSteps.map((step, index) => (
                      <li key={index}>• {step}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" onClick={() => setCurrentStep(4)} className="flex-1">
                    {content.driverRegistration.form.back}
                  </Button>
                  <Button className="flex-1">{content.driverRegistration.form.submit}</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
