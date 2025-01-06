import { Metadata } from "next";
import { notFound } from "next/navigation";

import { products } from "@/data/products";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductGallery } from "@/components/ProductGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fotter";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Add this before the ProductPage component
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const productData = products[id];

  if (!productData) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: productData.title,
    description: `Buy ${productData.title} - High quality product with free shipping`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const productData = products[id];

  if (!productData) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Section */}
          <section className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Gallery and Info */}
              <div className="mt-24 sm:mt-12 -mb-12 sm:mb-0">
                <div className="sticky top-24">
                  <ProductGallery productId={productData.id} />
                </div>
              </div>
              <div>
                <ProductInfo
                  productId={productData.id}
                  productData={productData}
                />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="relative py-8 md:py-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">
                Why Choose {productData.title}
              </span>
            </div>
          </div>

          {/* Features Section */}
          <section className="py-8 md:py-12">
            <ProductFeatures productId={productData.id} />
          </section>
        </div>
        {/* Trust Badges */}
        <section className="py-8 md:py-12 bg-gray-50 rounded-2xl my-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-xl font-semibold text-gray-900">
                  Fast Shipping
                </div>
                <p className="text-sm text-gray-600">2-3 business days</p>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold text-gray-900">
                  Free Returns
                </div>
                <p className="text-sm text-gray-600">30-day guarantee</p>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold text-gray-900">
                  Secure Payment
                </div>
                <p className="text-sm text-gray-600">100% protected</p>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold text-gray-900">
                  24/7 Support
                </div>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
