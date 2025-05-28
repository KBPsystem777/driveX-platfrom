"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Car, Building, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "driver" as "driver" | "business" | "admin",
  })
  const router = useRouter()

  const handleLogin = (role: "driver" | "business" | "admin") => {
    // In a real app, this would authenticate with your backend
    console.log("Logging in as:", role, loginData)

    // Simulate successful login and redirect to appropriate dashboard
    switch (role) {
      case "driver":
        router.push("/driver/dashboard")
        break
      case "business":
        router.push("/business/dashboard")
        break
      case "admin":
        router.push("/admin/dashboard")
        break
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your DriveConnect account</p>
          </div>

          <Tabs defaultValue="driver" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="driver" className="flex items-center space-x-2">
                <Car className="h-4 w-4" />
                <span>Driver</span>
              </TabsTrigger>
              <TabsTrigger value="business" className="flex items-center space-x-2">
                <Building className="h-4 w-4" />
                <span>Business</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Admin</span>
              </TabsTrigger>
            </TabsList>

            {/* Driver Login */}
            <TabsContent value="driver">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-blue-600" />
                    <span>Driver Login</span>
                  </CardTitle>
                  <CardDescription>Access your driver dashboard to manage bookings and earnings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="driver-email">Email Address</Label>
                    <Input
                      id="driver-email"
                      type="email"
                      placeholder="driver@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="driver-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="driver-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => handleLogin("driver")}>
                    Sign In as Driver
                  </Button>
                  <div className="text-center space-y-2">
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Forgot your password?
                    </Link>
                    <div className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Link href="/driver/register" className="text-blue-600 hover:underline">
                        Register as Driver
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Business Login */}
            <TabsContent value="business">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-green-600" />
                    <span>Business Owner Login</span>
                  </CardTitle>
                  <CardDescription>Access your business dashboard to book and manage drivers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="business-email">Email Address</Label>
                    <Input
                      id="business-email"
                      type="email"
                      placeholder="business@company.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="business-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => handleLogin("business")}>
                    Sign In as Business Owner
                  </Button>
                  <div className="text-center space-y-2">
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Forgot your password?
                    </Link>
                    <div className="text-sm text-gray-600">
                      Don't have an account?{" "}
                      <Link href="/business/register" className="text-blue-600 hover:underline">
                        Register as Business Owner
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Admin Login */}
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    <span>Admin Login</span>
                  </CardTitle>
                  <CardDescription>Administrative access to manage the platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      placeholder="admin@driveconnect.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Admin Password</Label>
                    <div className="relative">
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter admin password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => handleLogin("admin")}>
                    Sign In as Admin
                  </Button>
                  <div className="text-center">
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <div className="text-sm text-gray-500">Secure login powered by DriveConnect</div>
          </div>
        </div>
      </div>
    </div>
  )
}
