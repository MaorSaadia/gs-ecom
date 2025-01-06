import { Metadata } from "next";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductFeatures } from "@/components/ProductFeatures";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fotter";
import { ProductGallery } from "@/components/ProductGallery";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Add this before the ProductPage component
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const productData = products[params.id];

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

export default function ProductPage({ params }: ProductPageProps) {
  const productData = products[params.id];

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
              {/* Mobile Product Title - Only show on mobile */}
              <div className="lg:hidden">
                <h1 className="text-3xl font-bold tracking-tight">
                  {productData.title}
                </h1>
              </div>

              {/* Product Gallery and Info */}
              <div className="order-1 lg:order-none">
                <div className="sticky top-24">
                  <ProductGallery />
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
      </main>
      <Footer />
    </div>
  );
}
