"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ProductData } from "../types/product";

interface BundlePricingProps {
  productData: ProductData;
  onQuantityChange: (quantity: number) => void;
  onBuyNow: () => void;
}

const BundlePricing: React.FC<BundlePricingProps> = ({
  productData,
  onQuantityChange,
}) => {
  const [selectedBundle, setSelectedBundle] = useState(1);

  const getBundles = (payLink: ProductData["payLink"]) => {
    if (!payLink?.links) return [];

    return payLink.links.map((link) => {
      const quantity = link.quantity;
      const discount = quantity > 1 ? (quantity - 1) * 5 + 5 : 0;
      const baseTotal = productData.price * quantity;
      const discountedPrice = baseTotal * (1 - discount / 100);
      const originalTotal =
        (productData.originalPrice || productData.price) * quantity;

      return {
        quantity,
        label: `Buy ${quantity}`,
        subtitle:
          quantity === 1
            ? "Standard Price"
            : `Buy ${quantity} and Save ${discount}%`,
        price: discountedPrice,
        originalPrice: originalTotal,
        url: link.url,
        popular: quantity === 2,
      };
    });
  };

  const bundles = getBundles(productData.payLink);

  useEffect(() => {
    onQuantityChange(selectedBundle);
  }, [selectedBundle, onQuantityChange]);

  if (!productData.payLink?.links.length) {
    return null;
  }

  return (
    <div className="w-full space-y-6">
      <div className="text-center font-medium text-gray-800 border-b border-gray-200 pb-2">
        BUNDLE & SAVE
      </div>

      <div className="space-y-3">
        {bundles.map((bundle, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative rounded-xl border-2 p-4 cursor-pointer transition-colors ${
              selectedBundle === bundle.quantity
                ? "border-yellow-400 bg-yellow-50"
                : "border-gray-200 hover:border-yellow-200"
            }`}
            onClick={() => setSelectedBundle(bundle.quantity)}
          >
            {bundle.popular && (
              <div className="absolute -top-2 right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                Most Popular
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${selectedBundle === bundle.quantity ? "border-yellow-400 bg-yellow-400" : "border-gray-300"}`}
                >
                  {selectedBundle === bundle.quantity && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>

                <div>
                  <div className="font-semibold">{bundle.label}</div>
                  <div className="text-sm text-gray-600">{bundle.subtitle}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold">${bundle.price.toFixed(2)} USD</div>
                {bundle.originalPrice > bundle.price && (
                  <div className="text-sm text-gray-500 line-through">
                    ${bundle.originalPrice.toFixed(2)} USD
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BundlePricing;
