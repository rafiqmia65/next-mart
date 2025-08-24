"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import LoaderPage from "@/components/LoaderPage";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Session check
  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Fetch all products and filter by id
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();

        const matchedProduct = data.find((p) => p._id === id);
        setProduct(matchedProduct || null);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchProduct();
  }, [id]);

  if (loading) return <LoaderPage></LoaderPage>;
  if (!product)
    return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-950 transition">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition duration-500">
        {/* Image Section */}
        <div className="relative w-full h-96 overflow-hidden group">
          <Image
            src={product.images?.[0] || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-900 dark:text-gray-100">
            {product.name}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            {/* Category Badge */}
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
              {product.category}
            </span>
            {/* Brand */}
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
              {product.brand}
            </span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-yellow-500 font-semibold text-lg sm:text-xl">
              ⭐ {product.rating} / 5
            </p>
            <p
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 0
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
              } transition`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </p>
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-gradient bg-clip-text text-blue-600 dark:text-yellow-400 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg sm:text-base">
            {product.description}
          </p>

          {/* Specs Section */}
          {product.specs && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 dark:text-gray-400">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    <span className="font-medium capitalize">{key}:</span>{" "}
                    {value}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
