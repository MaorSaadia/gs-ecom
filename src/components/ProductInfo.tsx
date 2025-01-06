"use client";

import { useState } from "react";
import {
  CheckCircle,
  Star,
  Truck,
  Lock,
  Package,
  Gift,
  // Add any other icons you need
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductData } from "../types/product";

interface ProductInfoProps {
  productId: string;
  productData: ProductData;
}

// Icon mapping object
const IconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  CheckCircle,
  Truck,
  Gift,

  // Add any other icons you need to map
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ productData }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const calculatePrice = (basePrice: number, qty: number): number => {
    return basePrice * qty;
  };

  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    const IconComponent = IconMap[iconName];
    if (!IconComponent) {
      console.warn(`Icon "${iconName}" not found, defaulting to CheckCircle`);
      return CheckCircle;
    }
    return IconComponent;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8 mt-10">
      {/* Product Title and Badge */}
      <div className="space-y-2">
        {productData.badge && (
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {productData.badge}
            </span>
          </div>
        )}
        <h1 className="text-4xl font-bold tracking-tight">
          {productData.title}
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
            {productData.review.rating} ({productData.review.count} reviews)
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3">
        {productData.features.map((feature, index) => {
          const Icon = getIconComponent(feature.icon);
          return (
            <div key={index} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">{feature.text}</span>
            </div>
          );
        })}
      </div>

      {/* Price and Quantity */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ${calculatePrice(productData.price, quantity).toFixed(2)} USD
          </span>
          {productData.originalPrice && (
            <>
              <span className="text-gray-500 line-through">
                ${(productData.originalPrice * quantity).toFixed(2)} USD
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Save 30%
              </span>
            </>
          )}
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
              onClick={() =>
                setQuantity((q) => Math.min(productData.maxQuantity, q + 1))
              }
              className="px-4 py-2 border-l hover:bg-gray-50 transition-colors duration-200"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Add to Cart Section */}
      <div className="space-y-4">
        <button className="w-full bg-yellow-500 text-white py-4 rounded-lg font-medium transition-all duration-200 hover:bg-yellow-600 hover:scale-105 active:scale-95">
          Buy Now
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
          {productData.accordionItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
