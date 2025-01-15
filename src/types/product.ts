// types/product.ts

export type ProductVideo = {
  url: string;
  thumbnail?: string;
  title?: string;
  description?: string;
};

export type ProductVariant = {
  type: string;
  options: {
    value: string;
    label: string;
    inStock?: boolean;
    image?: string;
  }[];
};

export type ProductReview = {
  rating?: number;
  count?: number;
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
  variant?: string;
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
  review?: ProductReview;
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
  video?: ProductVideo;
  payLink?: PayLinkConfig;
  variants?: ProductVariant[];
};

export type ProductFeatureDetail = {
  image: string;
  title: string;
  description: string;
};
