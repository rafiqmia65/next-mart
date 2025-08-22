"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const [form, setForm] = useState({
    category: "",
    name: "",
    brand: "",
    price: "",
    rating: null,
    stock: "",
    description: "",
    specs: {},
    images: [""],
  });

  const [specKey, setSpecKey] = useState("");
  const [specValue, setSpecValue] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSpecAdd = () => {
    if (!specKey || !specValue) return;
    setForm((prev) => ({
      ...prev,
      specs: { ...prev.specs, [specKey]: specValue },
    }));
    setSpecKey("");
    setSpecValue("");
  };

  const handleImageChange = (index, value) => {
    const newImages = [...form.images];
    newImages[index] = value;
    setForm((prev) => ({ ...prev, images: newImages }));
  };

  const addImageField = () => {
    setForm((prev) => ({ ...prev, images: [...prev.images, ""] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Product Added",
          text: `Product ID: ${data.id}`,
        });
        // Reset form
        setForm({
          category: "",
          name: "",
          brand: "",
          price: "",
          rating: null,
          stock: "",
          description: "",
          specs: {},
          images: [""],
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data.error || "Something went wrong",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: err.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">
          Add New Product
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category, Name, Brand */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              placeholder="Brand"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Price, Stock */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock"
              required
              className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            rows={4}
          />

          {/* Specs */}
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <h2 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Specifications
            </h2>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Spec Name"
                value={specKey}
                onChange={(e) => setSpecKey(e.target.value)}
                className="p-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 flex-1"
              />
              <input
                type="text"
                placeholder="Spec Value"
                value={specValue}
                onChange={(e) => setSpecValue(e.target.value)}
                className="p-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 flex-1"
              />
              <button
                type="button"
                onClick={handleSpecAdd}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {Object.entries(form.specs).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <h2 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Images
            </h2>
            {form.images.map((img, idx) => (
              <input
                key={idx}
                type="text"
                placeholder="Image URL"
                value={img}
                onChange={(e) => handleImageChange(idx, e.target.value)}
                className="w-full p-3 mb-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              />
            ))}
            <button
              type="button"
              onClick={() => addImageField()}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              Add Another Image
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-2xl hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
