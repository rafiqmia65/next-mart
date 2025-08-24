"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoaderPage from "./LoaderPage";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();

        // Sort by rating (descending) and take top 6
        const topProducts = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);

        setProducts(topProducts);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <LoaderPage></LoaderPage>;
  if (error)
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen transition p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          Popular{" "}
          <span className="text-blue-600 dark:text-yellow-400">
            Tech Gadgets
          </span>
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
                <Image
                  src={p.images?.[0] || "/placeholder.png"}
                  alt={p.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {p.name}
                  </h2>

                  {/* Category badge */}
                  <p className="inline-block mb-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                    {p.category}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Brand: {p.brand}
                  </p>
                  <p className="text-yellow-500 font-semibold mb-1">
                    ⭐ {p.rating} / 5
                  </p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-yellow-400 mb-2">
                    ${p.price}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      p.stock > 0
                        ? "text-green-600 dark:text-green-300"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {p.stock > 0 ? `In Stock (${p.stock})` : "Out of Stock"}
                  </p>
                </div>

                {/* See Details Button */}
                <Link
                  href={`/products/${p._id}`}
                  className="mt-4 w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white dark:bg-gradient-to-r dark:from-yellow-400 dark:to-yellow-500 dark:hover:from-yellow-500 dark:hover:to-yellow-600 font-medium py-2 px-4 rounded-xl transition duration-300"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
