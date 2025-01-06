/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/api/placeholder/120/40"
              alt="SoapShear"
              className="h-10 w-auto"
            />
            <div className="space-y-2">
              <a
                href="mailto:info@soapshear.com"
                className="flex items-center text-gray-600 hover:text-gray-900 text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@soapshear.com
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/track"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} SoapShear. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
