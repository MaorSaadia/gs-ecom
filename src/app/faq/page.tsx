import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What makes your product unique?",
    answer:
      "Our product stands out for its premium quality, innovative design, and exceptional value. We've carefully crafted each detail to ensure it meets the highest standards of performance and durability.",
  },
  {
    question: "How do I know which size/option to choose?",
    answer:
      "We provide detailed size guides and product specifications in our product description. If you're still unsure, feel free to contact our customer support team for personalized assistance.",
  },
  {
    question: "What are your shipping rates?",
    answer:
      "We offer free standard shipping on all orders. Express shipping options are available at checkout for an additional fee. Shipping times vary by location.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide! International shipping times typically range from 10-20 business days depending on your location. Please note that customs fees may apply.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused items in original packaging. For defective items, we provide free returns and exchanges. Contact our support team to initiate a return.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to monitor your shipment's progress on our website.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods. All transactions are encrypted for your security.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "Our customer service team is available via email at support@gs-ecom.com. We aim to respond to all inquiries within 24 hours during business days.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes, all our products come with a standard manufacturer's warranty. The warranty period varies by product - please check the product description for specific details.",
  },
  {
    question: "How do I care for my product?",
    answer:
      "Each product comes with detailed care instructions. Following these guidelines will help maintain the quality and extend the life of your purchase.",
  },
  {
    question: "Do you offer discounts for bulk orders?",
    answer:
      "Yes, we offer special pricing for bulk orders. Please contact our sales team at sales@gs-ecom.com for more information about bulk purchasing options.",
  },
  {
    question: "What if my order arrives damaged?",
    answer:
      "If your order arrives damaged, please take photos and contact our support team immediately. We'll arrange for a replacement or refund at no additional cost to you.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or canceled within 24 hours of placement. After this window, we cannot guarantee changes as items may have already been processed for shipping.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes! Our loyalty program rewards customers with points for purchases, reviews, and referrals. These points can be redeemed for discounts on future purchases.",
  },
];

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <div className="max-w-3xl mx-auto mb-8 text-center text-gray-600">
        <p>
          Can&apos;t find what you&apos;re looking for? Contact our support team
          at{" "}
          <a
            href="mailto:support@gs-ecom.com"
            className="text-blue-600 hover:underline"
          >
            gs-ecom@gmail.com
          </a>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-200"
          >
            <AccordionTrigger className="text-left py-4 px-2 sm:px-4 hover:bg-gray-50 transition-colors duration-200">
              <span className="text-sm sm:text-base font-medium">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-2 sm:px-4 py-3 text-sm sm:text-base text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPage;
