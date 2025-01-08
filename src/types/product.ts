// types/product.ts
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
};

export type ProductFeatureDetail = {
  image: string;
  title: string;
  description: string;
};
