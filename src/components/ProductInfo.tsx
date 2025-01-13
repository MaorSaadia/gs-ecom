"use client";

import { useState, useEffect, useCallback } from "react";
import {
  CheckCircle,
  Truck,
  Lock,
  Package,
  Gift,
  Star,
  StarHalf,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductData, PayLinkItem } from "../types/product";
import BundlePricing from "./BundlePricing";

interface ProductInfoProps {
  productId: string;
  productData: ProductData;
  averageRating?: number;
  totalReviews?: number;
}

const IconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  CheckCircle,
  Truck,
  Gift,
};

export const ProductInfo: React.FC<ProductInfoProps> = ({
  productData,
  averageRating = 0,
  totalReviews = 0,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [, setIsHovered] = useState(false);
  const [currentPayLink, setCurrentPayLink] = useState<string | null>(null);

  const findPayLinkForQuantity = useCallback(
    (qty: number): PayLinkItem | null => {
      if (!productData.payLink?.links) return null;
      const sortedLinks = [...productData.payLink.links].sort(
        (a, b) => a.quantity - b.quantity
      );
      return sortedLinks.find((link) => link.quantity === qty) || null;
    },
    [productData.payLink?.links]
  );

  useEffect(() => {
    if (productData.payLink?.links) {
      const payLink = findPayLinkForQuantity(quantity);
      setCurrentPayLink(payLink?.url || null);
    }
  }, [quantity, findPayLinkForQuantity, productData.payLink?.links]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handlePayNowClick = () => {
    if (currentPayLink) {
      window.open(currentPayLink, "_blank");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToReviews = () => {
    const reviewsSection = document.getElementById("product-reviews");
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= Math.floor(rating)) {
            return (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            );
          } else if (star - 0.5 <= rating) {
            return (
              <StarHalf
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            );
          } else {
            return <Star key={star} className="w-4 h-4 text-gray-200" />;
          }
        })}
      </div>
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-2xl mx-auto p-6 space-y-8 mt-2 md:mt-10 bg-white rounded-2xl shadow-lg"
    >
      {/* Title and Badge */}
      <motion.div variants={itemVariants} className="space-y-2 mt-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          {productData.title}
        </h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={scrollToReviews}
        >
          <StarRating rating={averageRating} />
          <span className="text-sm font-medium text-gray-600">
            {averageRating.toFixed(2)} ({totalReviews} reviews)
          </span>
        </div>
      </motion.div>

      {/* Bundle Pricing Section */}
      <motion.div variants={itemVariants}>
        <BundlePricing
          productData={productData}
          onQuantityChange={handleQuantityChange}
          onBuyNow={handlePayNowClick}
        />
      </motion.div>

      {/* Features Section */}
      <motion.div variants={itemVariants} className="space-y-3 pt-4">
        {productData.features.map((feature, index) => {
          const Icon = IconMap[feature.icon] || CheckCircle;
          return (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors"
            >
              <Icon className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">{feature.text}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Buy Now Button */}
      {productData.payLink && currentPayLink && (
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all bg-yellow-400 text-black"
            onClick={handlePayNowClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            Buy Now
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 text-sm text-gray-600"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-yellow-500" />
              Secure Checkout
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2"
            >
              <Package className="w-4 h-4 text-yellow-500" />
              Free Returns
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Accordion */}
      <motion.div
        variants={itemVariants}
        className="border-t border-yellow-100 pt-6"
      >
        <Accordion type="multiple" className="space-y-2">
          {productData.accordionItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <motion.div whileHover={{ x: 5 }}>
                <AccordionTrigger className="hover:text-yellow-600">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </motion.div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default ProductInfo;
