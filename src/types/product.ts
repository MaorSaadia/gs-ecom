// types/product.ts

export type ProductVariant = {
  type: string; // e.g., "plugType", "color", "size"
  options: {
    value: string; // e.g., "UK", "EU", "US"
    label: string; // Display name
    inStock?: boolean;
    image?: string; // Optional image URL for the variant
  }[];
};

export type ProductReview = {
  rating: number;
  count: number;
};

export type ProductFeature = {
  icon: string;
  text: string;
};

export type ProductAccordionItem = {
  id: string;
  title: string;
  content: string;
};

export type PayLinkItem = {
  quantity: number;
  url: string;
  variant?: string; // Add variant identifier for different variant pay links
};

export type PayLinkConfig = {
  links: PayLinkItem[];
  buttonColor?: string;
  buttonText?: string;
  maxQuantity?: number;
};

export type ProductData = {
  id: string;
  title: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  maxQuantity: number;
  review: ProductReview;
  features: ProductFeature[];
  accordionItems: ProductAccordionItem[];
  featuresDetail: {
    mainFeatures: ProductFeatureDetail[];
    stats?: {
      value: string;
      label: string;
    }[];
  };
  gallery: string[];
  payLink?: PayLinkConfig;
  variants?: ProductVariant[]; // Add variants array
};

export type ProductFeatureDetail = {
  image: string;
  title: string;
  description: string;
};
