/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const paymentMethods = [
  { name: "American Express", id: "amex", icon: "/svgs/amex.svg" },
  { name: "PayPal", id: "paypal", icon: "/svgs/paypal.svg" },
  { name: "Mastercard", id: "mastercard", icon: "/svgs/mastercard.svg" },
  { name: "Visa", id: "visa", icon: "/svgs/visa.svg" },
  { name: "Discover", id: "discover", icon: "/svgs/discover.svg" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/logo-1.png"
              alt="logo"
              className="h-10 w-auto"
            />
            <div className="space-y-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:info@soapshear.com"
                className="flex items-center text-gray-700 hover:text-yellow-600 text-sm group"
              >
                <Mail className="h-4 w-4 mr-2 group-hover:text-yellow-500 transition-colors duration-200" />
                info@gmail.com
              </motion.a>
            </div>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-gray-900 mb-4 border-b-2 border-yellow-400 pb-2 inline-block">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {["Contact Us", "Shipping Policy", "Refund Policy"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={`/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                      className="text-gray-700 hover:text-yellow-600 text-sm transition-colors duration-200 block"
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-gray-900 mb-4 border-b-2 border-yellow-400 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["FAQ", "Track Order", "Privacy Policy", "Terms of Service"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-gray-700 hover:text-yellow-600 text-sm transition-colors duration-200 block"
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-yellow-200 flex flex-wrap justify-center sm:justify-between items-center gap-4"
        >
          <motion.p variants={itemVariants} className="text-gray-600 text-sm">
            © {currentYear} All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-end items-center gap-4"
          >
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="h-8 w-12 relative transition-all duration-300"
              >
                <img
                  src={method.icon}
                  alt={`${method.name} payment accepted`}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
