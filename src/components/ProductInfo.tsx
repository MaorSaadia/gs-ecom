"use client";

import { useState } from "react";
import { CheckCircle, Star, Truck, Lock, Package } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ProductReview = {
  rating: number;
  count: number;
};

const PRODUCT_PRICE = 24.95;
const MAX_QUANTITY = 10;

export const ProductInfo: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const review: ProductReview = {
    rating: 5.0,
    count: 18,
  };

  const calculatePrice = (basePrice: number, qty: number): number => {
    return basePrice * qty;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8 mt-10">
      {/* Product Title and Badge */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Best Seller
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          SoapShear: Stay Clean
        </h1>
      </div>

      {/* Rating Section */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400 transform transition-transform hover:scale-110"
            />
          ))}
          <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
            {review.rating} ({review.count} reviews)
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Hygienic and Clean Design</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Premium Wall Mount Included</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-green-500" />
          <span className="text-gray-700">Free Express Shipping</span>
        </div>
      </div>

      {/* Price and Quantity */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ${calculatePrice(PRODUCT_PRICE, quantity).toFixed(2)} USD
          </span>
          <span className="text-gray-500 line-through">
            ${(PRODUCT_PRICE * 1.4 * quantity).toFixed(2)} USD
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Save 30%
          </span>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-gray-700 font-medium">Quantity</label>
          <div className="flex border rounded-lg">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-2 border-r hover:bg-gray-50 transition-colors duration-200"
            >
              -
            </button>
            <span className="px-6 py-2 font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1))}
              className="px-4 py-2 border-l hover:bg-gray-50 transition-colors duration-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Add to Cart Section */}
      <div className="space-y-4">
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95">
          Add to Cart
        </button>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4" />
            Secure Checkout
          </div>
          <div className="flex items-center gap-1">
            <Package className="w-4 h-4" />
            Free Returns
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="border-t pt-6 space-y-2">
        <Accordion type="multiple">
          <AccordionItem value="how-it-works">
            <AccordionTrigger>How It Works</AccordionTrigger>
            <AccordionContent>
              Transform soap into smooth powder effortlessly with our patented
              grinding mechanism. Simply insert your soap bar and turn the
              handle for instant, mess-free soap powder.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="placement">
            <AccordionTrigger>Where Can I Put It?</AccordionTrigger>
            <AccordionContent>
              Perfect for kitchens, bathrooms, or camping. The included wall
              mount allows for easy installation on any flat surface, while the
              compact design makes it ideal for travel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping Information</AccordionTrigger>
            <AccordionContent>
              Free worldwide shipping on all orders. Standard delivery takes 3-5
              business days, with express shipping options available at
              checkout.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="returns">
            <AccordionTrigger>Our Return Policy</AccordionTrigger>
            <AccordionContent>
              30-day money-back guarantee. If you&apos;re not completely
              satisfied, return the product in its original condition for a full
              refund, no questions asked.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductInfo;
