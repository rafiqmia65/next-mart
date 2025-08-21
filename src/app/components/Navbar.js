"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  // Theme toggle effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // function to check active link
  const isActive = (path) =>
    pathname === path
      ? "text-blue-600 dark:text-yellow-400 font-semibold"
      : "text-gray-700 dark:text-gray-200 hover:text-blue-500";

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
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
              <Link href="/products" className={isActive("/products")}>
                Products
              </Link>
              <Link href="/login" className={isActive("/login")}>
                Login
              </Link>
              <Link href="/register" className={isActive("/register")}>
                Register
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
                className="text-gray-700 dark:text-gray-200 focus:outline-none cursor-pointer"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="flex flex-col gap-3 md:hidden  bg-white dark:bg-gray-900 px-4 py-3 space-y-2">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/products" className={isActive("/products")}>
              Products
            </Link>
            <Link href="/login" className={isActive("/login")}>
              Login
            </Link>
            <Link href="/register" className={isActive("/register")}>
              Register
            </Link>
          </div>
        )}
      </nav>

      {/* Offset for fixed navbar */}
      <div className="pt-16" />
    </>
  );
}
