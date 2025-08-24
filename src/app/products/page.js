"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoaderPage from "../../components/LoaderPage";

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
        setProducts(data);
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
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        Explore Our{" "}
        <span className="text-blue-600 dark:text-yellow-400">Tech Gadgets</span>
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col group"
          >
            {/* Image */}
            <div className="relative w-full h-60 overflow-hidden rounded-t-3xl">
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
                <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                  {p.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {p.category} • {p.brand}
                </p>
                <p className="text-yellow-500 font-medium mt-1">
                  ⭐ {p.rating} / 5
                </p>
                <p className="mt-2 text-lg font-bold text-blue-600 dark:text-yellow-400">
                  ${p.price}
                </p>
                <p
                  className={`mt-1 text-sm font-medium ${
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
                className="mt-4 w-full text-center bg-blue-600 hover:bg-blue-700 text-white dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900 font-medium py-2 px-4 rounded-xl transition"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
