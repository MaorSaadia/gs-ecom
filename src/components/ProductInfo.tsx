"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Truck, Lock, Package, Gift } from "lucide-react";
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

const IconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  CheckCircle,
  Truck,
  Gift,
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ productData }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isHovered, setIsHovered] = useState(false);

  const calculatePrice = (basePrice: number, qty: number): number =>
    basePrice * qty;

  const getIconComponent = (iconName: string) =>
    IconMap[iconName] || CheckCircle;

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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-2xl mx-auto p-6 space-y-8 mt-2 md:mt-10 bg-white rounded-2xl shadow-lg"
    >
      <motion.div variants={itemVariants} className="space-y-2">
        {productData.badge && (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full"
          >
            {productData.badge}
          </motion.div>
        )}
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          {productData.title}
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} className="flex items-center gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 180 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
        <span className="text-gray-600 hover:text-yellow-600 cursor-pointer transition-colors">
          {productData.review.rating} ({productData.review.count} reviews)
        </span>
      </motion.div>

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
                Save 30%
              </motion.span>
            </motion.div>
          )}
        </motion.div>

        <div className="flex items-center gap-4">
          <label className="text-gray-700 font-medium">Quantity</label>
          <motion.div className="flex border-2 border-yellow-200 rounded-full overflow-hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-2 hover:bg-yellow-50 transition-colors"
            >
              -
            </motion.button>
            <span className="px-6 py-2 font-medium">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setQuantity((q) => Math.min(productData.maxQuantity, q + 1))
              }
              className="px-4 py-2 hover:bg-yellow-50 transition-colors"
            >
              +
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
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
