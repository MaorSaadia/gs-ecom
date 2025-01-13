"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package2, Search, ArrowRight, Truck, Box, Timer } from "lucide-react";

const EnhancedTrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    window.open(
      `https://global.cainiao.com/newDetail.htm?mailNoList=${trackingNumber}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-2xl border-0">
          <CardHeader className="text-center py-8 bg-gradient-to-r from-slate-50 via-lime-50 to-slate-50 rounded-t-xl">
            <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg transform -translate-y-2">
              <Box className="w-10 h-10 text-gray-500" />
            </div>
            <CardTitle className="text-4xl font-bold text-black mb-4">
              Track Your Package
            </CardTitle>
            <CardDescription className="text-lg text-slate-900">
              Real-time tracking for your deliveries
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Enter your tracking number here"
                  value={trackingNumber}
                  onChange={(e) => {
                    setTrackingNumber(e.target.value);
                    setError("");
                  }}
                  className={`pl-12 h-16 text-lg rounded-xl transition-all duration-300 
                    ${error ? "border-red-500" : "border-gray-300"}
                    group-hover:border-gray-500 focus:border-gray-500 focus:ring-gray-500`}
                />
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 
                  group-hover:text-gray-500 transition-colors duration-300"
                />
              </div>

              {error && (
                <p className="text-red-500 text-base flex items-center space-x-2">
                  <span>⚠️</span>
                  <span>{error}</span>
                </p>
              )}

              <Button
                type="submit"
                className="w-full h-16 bg-gray-900 hover:bg-gray-800 text-white rounded-xl
                  flex items-center justify-center space-x-3 text-lg font-semibold
                  transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <span>Track Now</span>
                <ArrowRight className="w-6 h-6" />
              </Button>
            </form>
          </CardContent>

          <CardFooter className="bg-gray-50 rounded-b-xl p-6 -mt-6">
            <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Package2 className="w-5 h-5 text-lime-500" />
                <span>Real-time Updates</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-lime-300 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-lime-500" />
                <span>Global Shipping</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-lime-300 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Timer className="w-5 h-5 text-lime-500" />
                <span>24/7 Tracking</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedTrackingPage;
