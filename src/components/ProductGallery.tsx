"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";

interface ProductGalleryProps {
  productId: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  productId,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const visibleThumbnails = 5;
  const images = products[productId]?.gallery || [];

  const nextThumbnails = () => {
    if (startIndex + visibleThumbnails < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const previousThumbnails = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  if (!images.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
      >
        <p className="text-gray-500">No images available</p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Main Image */}
      <motion.div
        layout
        className="relative aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg shadow-orange-100"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedImage}
            src={images[selectedImage]}
            alt={`${products[productId]?.title || "Product"} view ${
              selectedImage + 1
            }`}
            className={`h-full w-full object-cover object-center transition-transform duration-300 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </AnimatePresence>

        {/* Navigation arrows for main image */}
        {images.length > 1 && (
          <>
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev > 0 ? prev - 1 : images.length - 1
                )
              }
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all"
              onClick={() =>
                setSelectedImage((prev) =>
                  prev < images.length - 1 ? prev + 1 : 0
                )
              }
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </>
        )}
      </motion.div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={previousThumbnails}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none disabled:opacity-50 transition-all"
              disabled={startIndex === 0}
              aria-label="Previous thumbnails"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            <div className="mx-2 flex flex-1 gap-2 overflow-hidden">
              {images
                .slice(startIndex, startIndex + visibleThumbnails)
                .map((image, idx) => {
                  const actualIndex = startIndex + idx;
                  return (
                    <motion.button
                      key={actualIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(actualIndex)}
                      className={`relative flex-1 aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
                        selectedImage === actualIndex
                          ? "ring-2 ring-yellow-500 shadow-lg m-1"
                          : "ring-1 ring-gray-200 hover:ring-yellow-200 mt-4"
                      }`}
                      aria-label={`View product image ${actualIndex + 1}`}
                      aria-current={selectedImage === actualIndex}
                    >
                      <motion.img
                        src={image}
                        alt={`${
                          products[productId]?.title || "Product"
                        } thumbnail ${actualIndex + 1}`}
                        className="h-full w-full object-cover object-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      />
                    </motion.button>
                  );
                })}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextThumbnails}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none disabled:opacity-50 transition-all"
              disabled={startIndex + visibleThumbnails >= images.length}
              aria-label="Next thumbnails"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGallery;
