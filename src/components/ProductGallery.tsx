/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/main.jpeg", "/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];

export const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const visibleThumbnails = 5;

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

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="relative">
        <div className="flex items-center">
          <button
            onClick={previousThumbnails}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 focus:outline-none"
            disabled={startIndex === 0}
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
                    className={`relative flex-1 aspect-square overflow-hidden rounded-lg ${
                      selectedImage === actualIndex
                        ? "ring-2 ring-blue-500"
                        : "ring-1 ring-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product thumbnail ${actualIndex + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </button>
                );
              })}
          </div>

          <button
            onClick={nextThumbnails}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 focus:outline-none"
            disabled={startIndex + visibleThumbnails >= images.length}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Note about plants */}
      {/* <p className="text-sm text-gray-500 text-center">
        Reminder: Plants are not included in the shipment, you need to purchase
        them locally
      </p> */}
    </div>
  );
};

export default ProductGallery;
