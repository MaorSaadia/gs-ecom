/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Truck, RefreshCcw, LockKeyhole, HeadphonesIcon } from "lucide-react";

import { products } from "@/data/products";
import { getProductReviews } from "@/lib/getProductReviews";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductGallery } from "@/components/ProductGallery";
// import ProductReviews from "@/components/ProductReviews";
// import Loading from "@/components/Loading";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = await params;
  const productData = products[id];

  return productData
    ? {
        title: productData.title,
        description: `Buy ${productData.title} - Free Shipping`,
      }
    : { title: "Product Not Found" };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const metadata = await generateMetadata({ params });

  if (metadata.title === "Product Not Found") {
    return notFound();
  }

  const productData = products[id];

  const reviews = await getProductReviews(id);
  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + Number(review.Rating) / 20, 0) /
    reviews.length;
  const totalReviews = reviews.length;

  const badges = [
    { icon: Truck, title: "Fast Shipping", desc: "7-21 business days" },
    { icon: RefreshCcw, title: "Returns/Refund", desc: "30-day guarantee" },
    { icon: LockKeyhole, title: "Secure Payment", desc: "100% protected" },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      desc: "Always here to help",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-lime-50/10 to-white">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="mt-24 sm:mt-12 -mb-12 sm:mb-0">
                <div className="sticky top-24">
                  <ProductGallery productId={productData.id} />
                </div>
              </div>

              <div>
                <ProductInfo
                  productId={productData.id}
                  productData={productData}
                  averageRating={averageRating}
                  totalReviews={totalReviews}
                />
              </div>
            </div>
          </section>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-lime-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 py-2 text-sm font-medium text-lime-600 rounded-full shadow-sm">
                Why Choose {productData.title}
              </span>
            </div>
          </div>

          <section className="">
            <ProductFeatures productId={productData.id} />
          </section>
        </div>

        <section className="py-12 md:py-16 bg-gradient-to-r from-lime-50 via-white to-lime-50 rounded-3xl my-8 shadow-inner cursor-pointer">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white shadow-lg border border-lime-100 transition-transform hover:-translate-y-1"
                >
                  <badge.icon className="w-6 h-6 text-lime-500" />
                  <div className="text-lg font-semibold text-gray-900">
                    {badge.title}
                  </div>
                  <p className="text-sm text-gray-600">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="product-reviews" className="scroll-mt-24">
          {/* <Suspense fallback={<Loading />}>
            <ProductReviews reviews={reviews} />
          </Suspense> */}
        </section>
      </main>
    </div>
  );
}
