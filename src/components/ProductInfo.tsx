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
  const [isHovered, setIsHovered] = useState(false);
  const [currentPayLink, setCurrentPayLink] = useState<string | null>(null);

  const MAX_ALLOWED_QUANTITY = 4;

  const findPayLinkForQuantity = useCallback(
    (qty: number): PayLinkItem | null => {
      if (!productData.payLink?.links) return null;

      // Sort links by quantity to ensure we get the closest match
      const sortedLinks = [...productData.payLink.links].sort(
        (a, b) => a.quantity - b.quantity
      );

      // Find the link that matches the quantity exactly or the next available one
      return sortedLinks.find((link) => link.quantity === qty) || null;
    },
    [productData.payLink?.links]
  );

  useEffect(() => {
    if (productData.payLink?.links) {
      // Find the appropriate pay link for the current quantity
      const payLink = findPayLinkForQuantity(quantity);
      setCurrentPayLink(payLink?.url || null);
    }
  }, [quantity, findPayLinkForQuantity, productData.payLink?.links]);

  const calculatePrice = (basePrice: number, qty: number): number =>
    basePrice * qty;

  const getIconComponent = (iconName: string) =>
    IconMap[iconName] || CheckCircle;

  const handleQuantityChange = (newQuantity: number) => {
    const maxQty = Math.min(
      productData.payLink?.maxQuantity || productData.maxQuantity,
      MAX_ALLOWED_QUANTITY
    );
    setQuantity(Math.max(1, Math.min(newQuantity, maxQty)));
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
            // Full star
            return (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            );
          } else if (star - 0.5 <= rating) {
            // Half star
            return (
              <StarHalf
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            );
          } else {
            // Empty star
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
          <div className="flex gap-1">
            <StarRating rating={averageRating} />
          </div>
          <span className="text-sm font-medium text-gray-600">
            {averageRating.toFixed(2)} ({totalReviews} reviews)
          </span>
        </div>
      </motion.div>

      {/* Price Section */}
      <motion.div variants={itemVariants} className="space-y-4">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          className="flex items-center gap-4"
        >
          <span className="text-3xl font-bold text-yellow-600">
            ${calculatePrice(productData.price, quantity).toFixed(2)} USD
          </span>
          {productData.originalPrice && (
            <motion.div className="flex items-center gap-2">
              <span className="text-gray-500 line-through">
                ${(productData.originalPrice * quantity).toFixed(2)} USD
              </span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full"
              >
                Save{" "}
                {Math.round(
                  (1 - productData.price / productData.originalPrice) * 100
                )}
                %
              </motion.span>
            </motion.div>
          )}
        </motion.div>

        {/* Features */}
        <motion.div variants={itemVariants} className="space-y-3">
          {productData.features.map((feature, index) => {
            const Icon = getIconComponent(feature.icon);
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

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <label className="text-gray-700 font-medium">Quantity</label>
          <motion.div className="flex border-2 border-yellow-200 rounded-full overflow-hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(quantity - 1)}
              className="px-4 py-2 hover:bg-yellow-50 transition-colors"
            >
              -
            </motion.button>
            <span className="px-6 py-2 font-medium">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-4 py-2 hover:bg-yellow-50 transition-colors"
            >
              +
            </motion.button>
          </motion.div>
          {quantity >= MAX_ALLOWED_QUANTITY && (
            <span className="text-sm text-yellow-600">
              Max {MAX_ALLOWED_QUANTITY} items per order
            </span>
          )}
        </div>
      </motion.div>

      {/* Payment Button */}
      {productData.payLink && currentPayLink && (
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all ${"bg-yellow-400 text-black"}`}
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
