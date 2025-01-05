import { ProductData } from "../types/product";

export const products: Record<string, ProductData> = {
  soapshear: {
    id: "soapshear",
    title: "SoapShear: Stay Clean",
    badge: "Best Seller",
    price: 24.95,
    originalPrice: 34.93,
    maxQuantity: 10,
    review: {
      rating: 5.0,
      count: 18,
    },
    features: [
      {
        icon: "CheckCircle",
        text: "Hygienic and Clean Design",
      },
      {
        icon: "CheckCircle",
        text: "Premium Wall Mount Included",
      },
      {
        icon: "Truck",
        text: "Free Express Shipping",
      },
    ],
    accordionItems: [
      {
        id: "how-it-works",
        title: "How It Works",
        content:
          "Transform soap into smooth powder effortlessly with our patented grinding mechanism. Simply insert your soap bar and turn the handle for instant, mess-free soap powder.",
      },
      {
        id: "placement",
        title: "Where Can I Put It?",
        content:
          "Perfect for kitchens, bathrooms, or camping. The included wall mount allows for easy installation on any flat surface, while the compact design makes it ideal for travel.",
      },
      {
        id: "shipping",
        title: "Shipping Information",
        content:
          "Free worldwide shipping on all orders. Standard delivery takes 3-5 business days, with express shipping options available at checkout.",
      },
      {
        id: "returns",
        title: "Our Return Policy",
        content:
          "30-day money-back guarantee. If you're not completely satisfied, return the product in its original condition for a full refund, no questions asked.",
      },
    ],
    featuresDetail: {
      mainFeatures: [],
      stats: undefined,
    },
  },
  // Add more products here following the same structure
};

export const productFeatures = {
  soapshear: {
    mainFeatures: [
      {
        image: "/product-detail-1.jpeg",
        title: "Transform Soap Into Smooth, Usable Powder Effortlessly",
        description:
          "With SoapShear, keep bar soap fresh and dry. Its precise grating mechanism transforms messy bars into fine powder with a simple press, making your daily routine cleaner and more efficient.",
      },
      {
        image: "/product-detail-2.jpeg",
        title: "Make your soap last longer",
        description:
          "SoapShear grinds just the right amount of soap, helping your bars last longer and saving you money. The precision control ensures zero waste and maximum efficiency in your soap usage.",
      },
      {
        image: "/product-detail-3.jpeg",
        title: "Innovative Design Meets Functionality",
        description:
          "Our sleek, modern design isn't just about looks. Every aspect of SoapShear has been engineered for optimal performance, durability, and ease of use, making it a perfect addition to any bathroom or kitchen.",
      },
    ],
    stats: [
      {
        value: "30%",
        label: "Longer Lasting Soap",
      },
      {
        value: "5k+",
        label: "Happy Customers",
      },
      {
        value: "4.9★",
        label: "Average Rating",
      },
    ],
  },
  // Add more products here as needed
};
