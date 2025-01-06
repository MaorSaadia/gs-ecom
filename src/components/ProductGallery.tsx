/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

interface ProductGalleryProps {
  productId: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  productId,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

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
      <div className="max-w-2xl mx-auto aspect-square w-full overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[selectedImage]}
          alt={`${products[productId]?.title || "Product"} view ${
            selectedImage + 1
          }`}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="relative">
          <div className="flex items-center">
            <button
              onClick={previousThumbnails}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={startIndex === 0}
              aria-label="Previous thumbnails"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="mx-2 flex flex-1 space-x-2 overflow-hidden">
              {images
                .slice(startIndex, startIndex + visibleThumbnails)
                .map((image, idx) => {
                  const actualIndex = startIndex + idx;
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => setSelectedImage(actualIndex)}
                      className={`relative flex-1 aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
                        selectedImage === actualIndex
                          ? "ring-2 ring-blue-500"
                          : "ring-1 ring-gray-200 hover:ring-blue-200"
                      }`}
                      aria-label={`View product image ${actualIndex + 1}`}
                      aria-current={selectedImage === actualIndex}
                    >
                      <img
                        src={image}
                        alt={`${
                          products[productId]?.title || "Product"
                        } thumbnail ${actualIndex + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </button>
                  );
                })}
            </div>

            <button
              onClick={nextThumbnails}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={startIndex + visibleThumbnails >= images.length}
              aria-label="Next thumbnails"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
