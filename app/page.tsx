"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Car,
  CheckCircle,
  Star,
  Building2,
  Lock,
  Zap,
  Globe,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              🚀 Now in Beta • Powered by Blockchain
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Smarter Way to Hire{" "}
              <span className="text-blue-600">Trusted Drivers</span> in the
              Philippines
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              DriveX connects you to verified, professional drivers — ready for
              business, logistics, and private transport needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700"
              >
                <Zap className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2"
              >
                <Car className="mr-2 h-5 w-5" />
                Register as a Driver
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-green-600" />
                Blockchain Verified
              </div>
              <div className="flex items-center">
                <UserCheck className="h-4 w-4 mr-2 text-blue-600" />
                Licensed Drivers Only
              </div>
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-purple-600" />
                Trusted by Businesses
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800">
                  <Car className="mr-1 h-3 w-3" />
                  For Drivers
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Join the Nation's First{" "}
                  <span className="text-green-600">
                    Onchain Driver Registry
                  </span>
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Free and easy signup for licensed drivers
                      </h3>
                      <p className="text-gray-600">
                        No hidden fees. Just bring your license and start
                        earning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Get discovered by top companies and clients
                      </h3>
                      <p className="text-gray-600">
                        Access exclusive opportunities from verified businesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Your identity is protected and tokenized on-chain
                      </h3>
                      <p className="text-gray-600">
                        Secure, private, and tamper-proof verification system.
                      </p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Sign Up to Start Driving
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 border">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Car className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Driver Profile
                      </h4>
                      <p className="text-sm text-gray-500">
                        Verified & Blockchain Protected
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">License Status</span>
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-medium">5+ years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">4.9</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Blockchain ID</span>
                      <span className="text-xs font-mono text-blue-600">
                        0x7a8b...9c2d
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        100+
                      </div>
                      <div className="text-sm text-gray-600">
                        Verified Drivers
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Building2 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        200+
                      </div>
                      <div className="text-sm text-gray-600">
                        Partner Companies
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Recent Hires
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Logistics Company hired 3 drivers</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span>Private Family hired 1 driver</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span>Delivery Service hired 5 drivers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  <Building2 className="mr-1 h-3 w-3" />
                  For Businesses
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Be a Founding Member:{" "}
                  <span className="text-blue-600">DriveX Founders Club</span>
                </h2>
                <div className="space-y-4 mb-6">
                  <p className="text-gray-600">
                    Be one of the first to shape the future of Philippine
                    mobility. Join the DriveX Founders Club — pay ₱1,200 now and
                    unlock lifetime benefits as our thank you.
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>
                      <span className="font-semibold">Lifetime Discount:</span>{" "}
                      20% off all subscription plans forever
                    </li>
                    <li>
                      <span className="font-semibold">
                        Priority Access to Drivers:
                      </span>{" "}
                      Always get top drivers before non-early users
                    </li>
                    <li>
                      <span className="font-semibold">VIP Badge:</span>{" "}
                      “Founding Business” tag on dashboard
                    </li>
                    <li>
                      <span className="font-semibold">Book Ahead Window:</span>{" "}
                      Book drivers 1 week earlier than public users
                    </li>
                    <li>
                      <span className="font-semibold">
                        Lifetime Free Booking Credits:
                      </span>{" "}
                      Get ₱1,000 worth of booking credits yearly
                    </li>
                    <li>
                      <span className="font-semibold">
                        Early Feature Rollouts:
                      </span>{" "}
                      First access to beta features
                    </li>
                    <li>
                      <span className="font-semibold">
                        Community Voting Rights:
                      </span>{" "}
                      Help shape future DriveX features
                    </li>
                    <li>
                      <span className="font-semibold">Custom Support</span>
                    </li>
                    <li>
                      <span className="font-semibold">
                        NFTs for early backers
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-8">
                  <p className="text-sm text-blue-800">
                    <Lock className="inline h-4 w-4 mr-1" />
                    <strong>Limited Time Offer:</strong> This exclusive offer is
                    only available for a limited time. Pricing may vary soon.
                  </p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Join the Founders Club (₱1,200)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity + Trust Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Backed by Blockchain. Built for Trust.
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                DriveX securely tokenizes each driver's identity using smart
                contracts and cryptographic hashes — with no third-party
                tooling. KYC is stored off-chain, while hashes are stored
                on-chain for verification and compliance. We're paving the way
                for a national decentralized driver ID system in partnership
                with the future of PH transport regulation.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Secure Storage
                  </h3>
                  <p className="text-sm text-gray-600">
                    KYC data encrypted and stored off-chain for privacy
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Blockchain Verified
                  </h3>
                  <p className="text-sm text-gray-600">
                    Identity hashes stored on-chain for tamper-proof
                    verification
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Future-Ready
                  </h3>
                  <p className="text-sm text-gray-600">
                    Building the foundation for national driver ID system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Subscription Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              No freemium. No bloat. Just affordable access.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Individuals Plan */}
              <Card className="relative border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Individuals</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ₱499
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Access to 5 driver profiles per month</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Basic driver verification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Direct messaging</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Mobile app access</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-9" variant="outline">
                    Choose Individual Plan
                  </Button>
                </CardContent>
              </Card>

              {/* Business Plan */}
              <Card className="relative border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Businesses</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ₱2,499
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Unlimited access to all drivers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Advanced hiring tools</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Direct communication with drivers</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Analytics dashboard</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">
                    Choose Business Plan
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <p className="text-green-800">
                <strong>💚 Fair Ecosystem:</strong> Drivers register for free.
                Your subscription supports a fairer, trusted transport
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Driving. Start Hiring. Smarter.
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              DriveX by BPxAI is the Philippines' first onchain-powered driver
              network. Be part of the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Car className="mr-2 h-5 w-5" />
                Register as a Driver
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <Car className="h-8 w-8 text-blue-400 mr-3" />
                  <span className="text-2xl font-bold">DriveX</span>
                  <span className="text-sm text-gray-500">by BPxAI</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Connecting professional drivers with businesses across the
                  Philippines for reliable, safe, and efficient transportation
                  solutions.
                </p>
                <div className="flex space-x-4">
                  <Badge
                    variant="outline"
                    className="text-gray-400 border-gray-600"
                  >
                    🔗 Blockchain Powered
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-gray-400 border-gray-600"
                  >
                    🇵🇭 Made in PH
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">For Drivers</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Requirements
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">For Businesses</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Get Access
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Enterprise
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; 2024 DriveX by BPxAI. All rights reserved. Building the
                future of transport in the Philippines.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
