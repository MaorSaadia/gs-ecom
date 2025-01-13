"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  orderNumber: string;
  issueType: string;
  message: string;
}

const EnhancedCustomerService = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    orderNumber: "",
    issueType: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    field?: string
  ) => {
    if (typeof e === "string" && field) {
      setFormData((prev) => ({ ...prev, [field]: e }));
    } else if (typeof e !== "string") {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/emails/customer-service", formData);
      toast.success("Support ticket submitted successfully!");
      setFormData({
        name: "",
        email: "",
        orderNumber: "",
        issueType: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {/* <div className="bg-lime-100 p-4 rounded-full">
              <HeadphonesIcon className="w-12 h-12 text-lime-600" />
            </div> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated support team is here to assist you with any questions
            or concerns
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Support Features */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white shadow-xl border-0 transition-transform hover:scale-105">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock assistance for all your inquiries
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0 transition-transform hover:scale-105">
              <CardContent className="p-6">
                <MessageSquare className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  Get answers within 24 hours guaranteed
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0 transition-transform hover:scale-105">
              <CardContent className="p-6">
                <ShieldCheck className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Support</h3>
                <p className="text-gray-600">
                  Your information is always protected
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-lime-500 to-lime-400 text-white p-6 rounded-t-xl">
              <h2 className="text-2xl font-bold">Submit a Support Request</h2>
              <p className="text-lime-50">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Number
                    </label>
                    <Input
                      type="text"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Order #"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Issue Type
                    </label>
                    <Select
                      onValueChange={(value) =>
                        handleChange(value, "issueType")
                      }
                      required
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select issue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="order-status">
                          Order Status
                        </SelectItem>
                        <SelectItem value="shipping">Shipping</SelectItem>
                        <SelectItem value="returns">
                          Returns & Refunds
                        </SelectItem>
                        <SelectItem value="product">
                          Product Information
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    placeholder="Please describe your issue in detail..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-lime-500 hover:bg-lime-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCustomerService;
