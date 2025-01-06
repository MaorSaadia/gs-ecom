"use client";

import { motion } from "framer-motion";
import { productFeatures } from "@/data/products";

type ProductFeaturesProps = {
  productId: string;
};

type FeatureProps = {
  image: string;
  title: string;
  description: string;
  isReversed?: boolean;
};

const Feature: React.FC<FeatureProps> = ({
  image,
  title,
  description,
  isReversed,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className={`
      flex flex-col gap-8
      md:flex-row md:items-center md:gap-16
      ${isReversed ? "md:flex-row-reverse" : ""}
    `}
  >
    <motion.div className="w-full md:w-1/2" whileHover={{ scale: 1.02 }}>
      <div className="relative group overflow-hidden rounded-2xl">
        <motion.img
          src={image}
          alt={title}
          className="w-full shadow-xl transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>

    <motion.div
      className="w-full md:w-1/2 space-y-6"
      variants={{
        hidden: { opacity: 0, x: isReversed ? -30 : 30 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent"
        whileHover={{ x: 10 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-600 leading-relaxed text-lg"
        whileHover={{ x: 10 }}
      >
        {description}
      </motion.p>
    </motion.div>
  </motion.div>
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
    <section className="py-4 md:py-12 px-4 bg-gradient-to-b from-white via-yellow-50/30 to-white cursor-pointer">
      {stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-white shadow-lg border border-yellow-100"
              >
                <motion.div
                  className="text-4xl font-bold text-yellow-500"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm font-medium text-gray-600 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="max-w-4xl mx-auto space-y-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} isReversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
