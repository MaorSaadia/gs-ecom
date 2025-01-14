"use client";

import { useState, useEffect, useCallback } from "react";
import {
  CheckCircle,
  Truck,
  Lock,
  // Package,
  Gift,
  // Star,
  // StarHalf,
  Cloud,
  CloudHail,
  Lightbulb,
  TruckIcon,
  HeartIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductData } from "../types/product";
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
  Cloud,
  CloudHail,
  Lightbulb,
};

export const ProductInfo: React.FC<ProductInfoProps> = ({
  productData,
  // averageRating = 0,
  // totalReviews = 0,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [, setIsHovered] = useState(false);
  const [currentPayLink, setCurrentPayLink] = useState<string | null>(null);

  // Initialize selected variants
  useEffect(() => {
    if (productData.variants) {
      const initialVariants: Record<string, string> = {};
      productData.variants.forEach((variant) => {
        // Select first available option for each variant type
        const firstAvailableOption = variant.options.find(
          (opt) => opt.inStock !== false
        );
        if (firstAvailableOption) {
          initialVariants[variant.type] = firstAvailableOption.value;
        }
      });
      setSelectedVariants(initialVariants);
    }
  }, [productData.variants]);

  const findPayLinkForQuantityAndVariant = useCallback(
    (qty: number): string | null => {
      if (!productData.payLink?.links) return null;

      const link = productData.payLink.links.find((link) => {
        // Match quantity
        if (link.quantity !== qty) return false;

        // If there are variants, match the variant
        if (productData.variants && productData.variants.length > 0) {
          // Get the selected variant value (e.g., "UK" for plugType)
          const variantValue = selectedVariants[productData.variants[0].type];
          return link.variant === variantValue;
        }

        // If no variants, just match quantity
        return true;
      });

      return link?.url || null;
    },
    [productData.payLink?.links, productData.variants, selectedVariants]
  );

  useEffect(() => {
    const payLink = findPayLinkForQuantityAndVariant(quantity);
    setCurrentPayLink(payLink);
  }, [quantity, findPayLinkForQuantityAndVariant]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleVariantChange = (type: string, value: string) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [type]: value,
    }));
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

  // const StarRating = ({ rating }: { rating: number }) => {
  //   return (
  //     <div className="flex gap-1">
  //       {[1, 2, 3, 4, 5].map((star) => {
  //         if (star <= Math.floor(rating)) {
  //           return (
  //             <Star
  //               key={star}
  //               className="w-4 h-4 fill-yellow-400 text-yellow-400"
  //             />
  //           );
  //         } else if (star - 0.5 <= rating) {
  //           return (
  //             <StarHalf
  //               key={star}
  //               className="w-4 h-4 fill-yellow-400 text-yellow-400"
  //             />
  //           );
  //         } else {
  //           return <Star key={star} className="w-4 h-4 text-gray-200" />;
  //         }
  //       })}
  //     </div>
  //   );
  // };

  // const scrollToReviews = () => {
  //   const reviewsSection = document.getElementById("product-reviews");
  //   if (reviewsSection) {
  //     reviewsSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-2xl mx-auto p-6 space-y-8 mt-2 lg:mt-10 bg-white rounded-2xl shadow-lg"
    >
      {/* Title and Badge */}
      <motion.div variants={itemVariants} className="space-y-2 mt-2">
        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent">
          {productData.title}
        </h1>
        {/* <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={scrollToReviews}
        >
          <StarRating rating={averageRating} />
          <span className="text-sm font-medium text-gray-600">
            {averageRating.toFixed(2)} ({totalReviews} reviews)
          </span>
        </div> */}
      </motion.div>

      {/* Variant Selection */}
      {productData.variants && (
        <motion.div variants={itemVariants} className="space-y-4">
          {productData.variants.map((variant) => (
            <div key={variant.type} className="space-y-2">
              <h3 className="font-medium text-gray-700">
                {variant.type.charAt(0).toUpperCase() + variant.type.slice(1)}{" "}
              </h3>
              <div className="flex flex-wrap gap-2">
                {variant.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleVariantChange(variant.type, option.value)
                    }
                    disabled={option.inStock === false}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedVariants[variant.type] === option.value
                        ? "border-lime-500 bg-lime-50"
                        : "border-gray-200 hover:border-lime-200"
                    } ${option.inStock === false ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {option.label || option.value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Bundle Pricing Section */}
      <motion.div variants={itemVariants}>
        <BundlePricing
          productData={productData}
          selectedVariant={
            productData.variants
              ? selectedVariants[productData.variants[0].type]
              : undefined
          }
          onQuantityChange={handleQuantityChange}
          onBuyNow={handlePayNowClick}
        />
      </motion.div>

      {/* Features Section */}
      <motion.div variants={itemVariants} className="space-y-3">
        {productData.features.map((feature, index) => {
          const Icon = IconMap[feature.icon] || CheckCircle;
          return (
            <motion.div
              key={index}
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-lime-50 transition-colors"
            >
              <Icon className="w-5 h-5 text-lime-500" />
              <span className="text-gray-700">{feature.text}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Buy Now Button */}
      {currentPayLink && (
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all bg-lime-400 text-black"
            onClick={handlePayNowClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            Buy Now
          </motion.button>

          <motion.div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-lime-500" />
              Secure Checkout
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2"
            >
              <TruckIcon className="w-4 h-4 text-lime-500" />
              Free Worldwide Shipping
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-center gap-2"
            >
              <HeartIcon className="w-4 h-4 text-lime-500" />
              Satisfaction Guaranteed
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Accordion */}
      <motion.div
        variants={itemVariants}
        className="border-t border-lime-100 pt-6"
      >
        <Accordion type="multiple" className="space-y-2">
          {productData.accordionItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <motion.div whileHover={{ x: 5 }}>
                <AccordionTrigger className="hover:text-lime-600">
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
