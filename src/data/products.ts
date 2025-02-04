import { ProductData } from "../types/product";

export const products: Record<string, ProductData> = {
  ticTacToeGame: {
    id: "ticTacToeGame",
    title: "Tic-Tac-Toe Puzzle Game",
    badge: "Perfect Gift",
    price: 14.99,
    originalPrice: 19.99,
    maxQuantity: 20,
    review: {
      rating: 4.8,
      count: 42,
    },
    payLink: {
      links: [
        {
          quantity: 1,
          url: "https://shop.mishbaby.com//_paylink/AZRFCRhT",
        },
        {
          quantity: 2,
          url: "https://shop.mishbaby.com//_paylink/AZRFJayp",
        },
        {
          quantity: 3,
          url: "https://shop.mishbaby.com//_paylink/AZRFLqKQ",
        },
      ],
      buttonColor: "#FFC200",
      buttonText: "Buy Now",
      maxQuantity: 3,
    },

    features: [
      {
        icon: "Gift",
        text: "Perfect Gift for Kids and Adults",
      },
      {
        icon: "LightBulb",
        text: "Educational & Engaging",
      },
      {
        icon: "Airplane",
        text: "Compact & Travel-Friendly",
      },
    ],
    accordionItems: [
      {
        id: "features",
        title: "Why Choose This Game?",
        content:
          "Develop problem-solving skills, enhance logic, and enjoy hours of fun with this portable Tic-Tac-Toe game. Its ergonomic design ensures comfort, while the durable build guarantees lasting use.",
      },
      {
        id: "gift",
        title: "Perfect Gift for Any Occasion",
        content:
          "An excellent holiday or birthday gift for kids aged 3 and older. Whether at home or on the go, this game offers fun, education, and engagement for the whole family.",
      },
      {
        id: "specs",
        title: "Product Specifications",
        content:
          "Material: ABS\nColor Options: Yellow, Orange\nNet Weight: 131g\nSize: 90mm x 90mm x 28mm\nPackage Includes: 1x Portable Tic-Tac-Toe Puzzle Game",
      },
      {
        id: "shipping",
        title: "Shipping Information",
        content:
          "Enjoy free worldwide shipping on all orders. Delivery takes 7-21 business days. Optional express shipping is available at checkout for faster delivery.",
      },
      {
        id: "returns",
        title: "Our Return Policy",
        content:
          "We offer a 30-day money-back guarantee. If you're not satisfied, return the product in its original condition for a full refund.",
      },
    ],
    gallery: [
      "/ticTacToeGame/main.jpeg",
      "/ticTacToeGame/1.jpeg",
      // "/ticTacToeGame/2.jpeg",
      // "/ticTacToeGame/3.jpeg",
      "/ticTacToeGame/4.jpeg",
    ],
    featuresDetail: {
      mainFeatures: [],
      stats: undefined,
    },
  },
  mistify: {
    id: "mistify",
    title: "Mistify Rain Cloud Humidifier Oil Diffuser",
    badge: "3-in-1 Multifunction",
    price: 48.99,
    originalPrice: 74.99,
    maxQuantity: 10,
    // review: {
    //   rating: 4.7,
    //   count: 156,
    // },
    variants: [
      {
        type: "plug Type",
        options: [
          // { value: "UK", label: "UK Plug", inStock: true },
          { value: "EU", label: "EU Plug", inStock: true },
          { value: "US", label: "US Plug", inStock: true },
        ],
      },
    ],
    payLink: {
      links: [
        // EU plug variants
        {
          quantity: 1,
          url: "https://shop.mishbaby.com//_paylink/AZRj1kiM",
          variant: "EU",
        },
        {
          quantity: 2,
          url: "https://shop.mishbaby.com//_paylink/AZRj1tKx",
          variant: "EU",
        },
        {
          quantity: 3,
          url: "https://shop.mishbaby.com//_paylink/AZRj1y8Y",
          variant: "EU",
        },

        // US plug variants
        {
          quantity: 1,
          url: "https://shop.mishbaby.com//_paylink/AZRj1CrA",
          variant: "US",
        },
        {
          quantity: 2,
          url: "https://shop.mishbaby.com//_paylink/AZRj1TbD",
          variant: "US",
        },
        {
          quantity: 3,
          url: "https://shop.mishbaby.com//_paylink/AZRj1aVH",
          variant: "US",
        },
      ],
      buttonColor: "#FFC200",
      buttonText: "Buy Now",
      maxQuantity: 3,
    },
    features: [
      {
        icon: "Cloud",
        text: "3-in-1: Humidifier, Aromatherapy, and Night Light",
      },
      {
        icon: "CloudHail",
        text: "Rain Sounds & White Noise for Relaxation",
      },
      {
        icon: "Lightbulb",
        text: "Adjustable Brightness for Comfort",
      },
    ],
    accordionItems: [
      {
        id: "specs",
        title: "Product Specifications",
        content:
          "Material: ABS + Silicone\nDimensions: 15cm x 15cm x 20cm\nCapacity: 250ml\nModes: Rain Sound, White Noise, Light-Only, and Humidifier Mode\nPackage Includes: 1x Rain Cloud Humidifier, 1x USB Cable, 1x User Manual",
      },
      {
        id: "shipping",
        title: "Shipping Information",
        content:
          "Free worldwide shipping on all orders. Delivery times typically range from 7-21 business days, depending on your location and product availability.",
      },
      {
        id: "returns",
        title: "Return Policy",
        content:
          "We offer a 14-day money-back guarantee. Return the product in its original condition for a full refund if you're not satisfied.",
      },
    ],
    gallery: [
      "products/mistify/main.jpeg",
      "products/mistify/1.jpeg",
      "products/mistify/2.jpeg",
      "products/mistify/3.jpeg",
      "products/mistify/4.jpeg",
      "products/mistify/5.jpeg",
    ],
    video: {
      url: "https://video.wixstatic.com/video/f33a90_28019163afa748b089b70e108c73a5ea/720p/mp4/file.mp4",
      thumbnail: "/products/mistify/main.jpeg",
      title: "Mistify Rain Cloud Humidifier Oil Diffuser",
      description:
        "See how our cloud-shaped humidifier creates a soothing atmosphere",
    },
    featuresDetail: {
      mainFeatures: [],
      stats: undefined,
    },
  },
  // Add more products here following the same structure
};

export const productFeatures = {
  ticTacToeGame: {
    mainFeatures: [
      {
        image: "/ticTacToeGame/tic-tac-toe-feature-1.jpeg",
        title: "Fun and Educational for All Ages",
        description:
          "Engage your kids and yourself with this simple yet challenging game. It promotes problem-solving and logic skills while providing hours of entertainment.",
      },
      {
        image: "/ticTacToeGame/tic-tac-toe-feature-2.jpeg",
        title: "Portable and Travel-Friendly",
        description:
          "Take it anywhere! The compact and lightweight design makes it ideal for family trips, vacations, or just playing on the go.",
      },
      {
        image: "/ticTacToeGame/tic-tac-toe-feature-3.jpeg",
        title: "Built to Last",
        description:
          "Crafted from durable ABS material, this game is designed to withstand daily use by kids and adults alike, ensuring long-term fun.",
      },
    ],
    stats: [
      {
        value: "4 Modes",
        label: "Game Options",
      },
      {
        value: "131g",
        label: "Lightweight Design",
      },
      {
        value: "4.8★",
        label: "Average Rating",
      },
    ],
  },
  mistify: {
    mainFeatures: [
      {
        image: "products/mistify/feature-1.jpeg",
        title: "Relax with Rain Sounds and White Noise",
        description:
          "Enjoy a soothing ambiance with natural rain sounds and white noise, perfect for meditation, sleep, or focused work.",
      },
      {
        image: "products/mistify/feature-3.jpeg",
        title: "Aromatherapy and Humidification",
        description:
          "Turn your room into a calming retreat by adding essential oils for aromatherapy. Maintain optimal humidity levels while enjoying refreshing scents.",
      },
      {
        image: "products/mistify/feature-4.jpeg",
        title: "Stylish and Functional Design",
        description:
          "With its modern rain cloud design, this humidifier doubles as a decorative piece. Ideal for bedrooms, desks, or any living space.",
      },
      {
        image: "products/mistify/feature-5.jpeg",
        title: "Easy to Add Water/Clean",
        description:
          "Large opening design, makes it easy to add water and less likely to spill out also make it easier clean the humidifier.",
      },
      {
        image: "products/mistify/feature-6.jpeg",
        title: "Add Essential Oil",
        description:
          "Drop 2-3 drops of essential oil into the water tank, the mist will be filled with fragrance, and the air will be full of fragrance.",
      },
    ],
    stats: [
      {
        value: "3-in-1",
        label: "Functions in One Device",
      },
      {
        value: "250ml",
        label: "Water Tank Capacity",
      },
      {
        value: "Essential Oil",
        label: "Add 2-3 drops to fill the air with fragrance",
      },
    ],
  },
};
