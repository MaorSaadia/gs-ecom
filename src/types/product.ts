export type ProductReview = {
  rating: number;
  count: number;
};

export type ProductFeature = {
  icon: "CheckCircle" | "Truck";
  text: string;
};

export type ProductAccordionItem = {
  id: string;
  title: string;
  content: string;
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
};

export type ProductFeatureDetail = {
  image: string;
  title: string;
  description: string;
};
