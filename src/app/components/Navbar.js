"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Theme toggle effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-yellow-400"
            >
              NextMart
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
                Products
              </Link>
              <Link
                href="/login"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
              >
                Login
              </Link>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white text-sm"
            >
              {theme === "light" ? "Dark" : "Light"} Mode
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200 focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Products
            </Link>
            <Link
              href="/login"
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-500"
            >
              Login
            </Link>
          </div>
        )}
      </nav>

      {/* Offset for fixed navbar */}
      <div className="pt-16" />
    </>
  );
}
