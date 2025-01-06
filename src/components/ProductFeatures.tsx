/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Moon } from "lucide-react";
import { productFeatures } from "@/data/products";

type FeatureProps = {
  image: string;
  title: string;
  description: string;
  isReversed?: boolean;
};

export interface ProductFeaturesProps {
  productId: string;
}

const Feature: React.FC<FeatureProps> = ({
  image,
  title,
  description,
  isReversed,
}) => (
  <div
    className={`
    flex flex-col gap-8 
    md:flex-row md:items-center md:gap-12
    ${isReversed ? "md:flex-row-reverse" : ""}
  `}
  >
    <div className="w-full md:w-1/2">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <div className="flex items-center gap-2">
        <Moon className="w-5 h-5 text-blue-600" />
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
        Learn more →
      </button>
    </div>
  </div>
);

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({
  productId,
}) => {
  const features =
    productFeatures[productId as keyof typeof productFeatures]?.mainFeatures ||
    [];
  const stats =
    productFeatures[productId as keyof typeof productFeatures]?.stats || [];

  return (
    <section className="py-12 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      {/* Stats Section */}
      {stats.length > 0 && (
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="max-w-3xl mx-auto space-y-12 md:space-y-24">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} isReversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
