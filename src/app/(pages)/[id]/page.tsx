import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Truck, RefreshCcw, LockKeyhole, HeadphonesIcon } from "lucide-react";

import { products } from "@/data/products"; // Import your product data
import { ProductInfo } from "@/components/ProductInfo";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductGallery } from "@/components/ProductGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Fotter";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const productData = products[id];

  return productData
    ? {
        title: productData.title,
        description: `Buy ${productData.title} - free shipping`,
      }
    : { title: "Product Not Found" };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const metadata = await generateMetadata({ params });

  if (metadata.title === "Product Not Found") {
    return notFound();
  }

  const productData = products[id];

  const badges = [
    { icon: Truck, title: "Fast Shipping", desc: "7-21 business days" },
    { icon: RefreshCcw, title: "Free Returns", desc: "30-day guarantee" },
    { icon: LockKeyhole, title: "Secure Payment", desc: "100% protected" },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      desc: "Always here to help",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-yellow-50/10 to-white">
      <Navbar />
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
                />
              </div>
            </div>
          </section>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 py-2 text-sm font-medium text-yellow-600 rounded-full shadow-sm">
                Why Choose {productData.title}
              </span>
            </div>
          </div>

          <section className="">
            <ProductFeatures productId={productData.id} />
          </section>
        </div>

        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 rounded-3xl my-8 shadow-inner cursor-pointer">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 p-6 rounded-xl bg-white shadow-lg border border-yellow-100 transition-transform hover:-translate-y-1"
                >
                  <badge.icon className="w-6 h-6 text-yellow-500" />
                  <div className="text-lg font-semibold text-gray-900">
                    {badge.title}
                  </div>
                  <p className="text-sm text-gray-600">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
