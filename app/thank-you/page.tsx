"use client";

import { useEffect, useState, Suspense } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Download,
  Calendar,
  Mail,
  MessageSquare,
  Star,
  Gift,
  Crown,
  Shield,
  Users,
  ArrowRight,
  Copy,
  ExternalLink,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { useToast } from "@/hooks/use-toast";

interface PaymentDetails {
  transactionId?: string;
  amount?: string;
  currency?: string;
  paymentMethod?: string;
  status?: string;
  timestamp?: string;
  planType?: string;
  customerEmail?: string;
  customerName?: string;
  referenceNumber?: string;
}

export default function ThankYouPage() {
  const { toast } = useToast();
  const [paymentDetails] = useState<PaymentDetails>({});
  const [isLoading] = useState(true);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Transaction ID copied to clipboard",
    });
  };

  const formatAmount = (amount: string | undefined) => {
    if (!amount) return "₱1,200";
    const numAmount = Number.parseFloat(amount);
    return `₱${numAmount.toLocaleString()}`;
  };

  const formatDate = (timestamp: string | undefined) => {
    if (!timestamp) return new Date().toLocaleDateString();
    return new Date(timestamp).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getPlanDetails = (planType: string | undefined) => {
    switch (planType?.toLowerCase()) {
      case "founders":
      case "founder":
        return {
          name: "DriveX Founders Club",
          icon: Crown,
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
        };
      case "individual":
        return {
          name: "Individual Plan",
          icon: Users,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
        };
      case "business":
        return {
          name: "Business Plan",
          icon: Shield,
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-200",
        };
      default:
        return {
          name: "DriveX Founders Club",
          icon: Crown,
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
        };
    }
  };

  const planDetails = getPlanDetails(paymentDetails.planType);
  const PlanIcon = planDetails.icon;

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
  //         <p className="text-gray-600">Processing your payment...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Suspense>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to the DriveX Family! 🎉
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your payment has been successfully processed. You're now part of
                an exclusive group shaping the future of Philippine mobility.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Transaction Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Payment Confirmation
                    </CardTitle>
                    <CardDescription>
                      Your transaction has been completed successfully
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Transaction ID
                        </label>
                        <div className="flex items-center space-x-2 mt-1">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {paymentDetails.transactionId ||
                              "TXN-" + Date.now()}
                          </code>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              copyToClipboard(
                                paymentDetails.transactionId ||
                                  "TXN-" + Date.now()
                              )
                            }
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Amount Paid
                        </label>
                        <div className="text-lg font-semibold text-green-600 mt-1">
                          {formatAmount(paymentDetails.amount)}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Payment Method
                        </label>
                        <div className="text-sm text-gray-900 mt-1 capitalize">
                          {paymentDetails.paymentMethod || "Credit Card"}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Date & Time
                        </label>
                        <div className="text-sm text-gray-900 mt-1">
                          {formatDate(paymentDetails.timestamp)}
                        </div>
                      </div>
                    </div>

                    {paymentDetails.referenceNumber && (
                      <div>
                        <label className="text-sm font-medium text-gray-600">
                          Reference Number
                        </label>
                        <div className="text-sm text-gray-900 mt-1 font-mono">
                          {paymentDetails.referenceNumber}
                        </div>
                      </div>
                    )}

                    <Separator />

                    <div
                      className={`p-4 rounded-lg ${planDetails.bgColor} ${planDetails.borderColor} border`}
                    >
                      <div className="flex items-center space-x-3">
                        <PlanIcon className={`h-6 w-6 ${planDetails.color}`} />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {planDetails.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Lifetime access with exclusive benefits
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Founders Club Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Crown className="h-5 w-5 text-yellow-600 mr-2" />
                      Your Founders Club Benefits
                    </CardTitle>
                    <CardDescription>
                      Exclusive perks you've unlocked as a founding member
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Lifetime Discount
                          </h4>
                          <p className="text-sm text-gray-600">
                            20% off all subscription plans forever
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Priority Access to Drivers
                          </h4>
                          <p className="text-sm text-gray-600">
                            Always get top drivers before non-early users
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            VIP Badge
                          </h4>
                          <p className="text-sm text-gray-600">
                            "Founding Business" tag on dashboard
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Book Ahead Window
                          </h4>
                          <p className="text-sm text-gray-600">
                            Book drivers 1 week earlier than public users
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Lifetime Free Booking Credits
                          </h4>
                          <p className="text-sm text-gray-600">
                            Get ₱1,000 worth of booking credits yearly
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Early Feature Rollouts
                          </h4>
                          <p className="text-sm text-gray-600">
                            First access to beta features
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Community Voting Rights
                          </h4>
                          <p className="text-sm text-gray-600">
                            Help shape future DriveX features
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            NFTs for Early Backers
                          </h4>
                          <p className="text-sm text-gray-600">
                            Exclusive digital collectibles
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Next Steps Sidebar */}
              <div className="space-y-6">
                {/* What's Next */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What's Next?</CardTitle>
                    <CardDescription>Your journey starts here</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-bold text-blue-600">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Check Your Email
                        </h4>
                        <p className="text-sm text-gray-600">
                          We've sent your receipt and access details
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-bold text-blue-600">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Join Our Community
                        </h4>
                        <p className="text-sm text-gray-600">
                          Connect with other founding members
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-xs font-bold text-blue-600">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Platform Launch
                        </h4>
                        <p className="text-sm text-gray-600">
                          Get early access when we go live
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Receipt
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Onboarding Call
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Join Community Discord
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Knowledge Base
                    </Button>
                  </CardContent>
                </Card>

                {/* Special Offer */}
                <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Gift className="h-5 w-5 text-yellow-600 mr-2" />
                      Exclusive Bonus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4">
                      As a founding member, you'll receive a limited edition
                      DriveX NFT and exclusive merchandise package!
                    </p>
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      Founders Only
                    </Badge>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Our team is here to help you get the most out of your
                      DriveX experience.
                    </p>
                    <Button className="w-full" variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">
                  You're Part of Something Big
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Help us build the future of Philippine mobility. Your feedback
                  and participation will shape DriveX.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Access Dashboard
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Invite Friends
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
