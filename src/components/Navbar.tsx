/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden sm:flex flex-1 justify-start">
            <Link
              href="/contact"
              className="text-white hover:text-yellow-100 px-4 py-2 text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-200 flex items-center space-x-1"
            >
              Contact
            </Link>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer">
              <img src="/logo-1.png" alt="logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden sm:flex flex-1 justify-end">
            <Link
              href="/tracking"
              className="text-white hover:text-yellow-100 px-4 py-2 text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-200 flex items-center space-x-1"
            >
              Tracking
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`sm:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white/10 backdrop-blur-md">
          <Link
            href="/contact"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/tracking"
            className="block px-4 py-3 text-base font-medium text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Tracking
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
