import React from "react";
import Footer from "@/components/Fotter";
import Navbar from "@/components/Navbar";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Section */}
          <section className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Mobile Product Title - Only show on mobile */}
              <div className="lg:hidden">
                <h1 className="text-3xl font-bold tracking-tight">
                  SoapShear: Stay Clean
                </h1>
              </div>

              {/* Product Gallery and Info */}
              <div className="order-1 lg:order-none">
                <div className="sticky top-24">
                  <ProductGallery />
                </div>
              </div>
              <div>
                <ProductInfo />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="relative py-8 md:py-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">
                Why Choose SoapShear
              </span>
            </div>
          </div>

          {/* Features Section */}
          <section className="py-8 md:py-12">
            <ProductFeatures />
          </section>

          {/* Trust Badges */}
          <section className="py-8 md:py-12 bg-gray-50 rounded-2xl my-8">
            <div className="max-w-5xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-gray-900">
                    Fast Shipping
                  </div>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-gray-900">
                    Free Returns
                  </div>
                  <p className="text-sm text-gray-600">30-day guarantee</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-gray-900">
                    Secure Payment
                  </div>
                  <p className="text-sm text-gray-600">100% protected</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-gray-900">
                    24/7 Support
                  </div>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Newsletter Section */}
      </main>
      <Footer />
    </div>
  );
}