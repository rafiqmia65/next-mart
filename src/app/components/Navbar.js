"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false); // prevent hydration mismatch
  const pathname = usePathname();
  const { data: session } = useSession();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  const isActive = (path) =>
    pathname === path
      ? "text-blue-600 dark:text-yellow-400 font-semibold"
      : "text-gray-700 dark:text-gray-200 hover:text-blue-500";

  const handleLogout = () => signOut({ callbackUrl: "/" });

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-yellow-400"
            >
              NextMart
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
              <Link href="/products" className={isActive("/products")}>
                Products
              </Link>

              {!session ? (
                <>
                  <Link href="/login" className={isActive("/login")}>
                    Login
                  </Link>
                  <Link href="/register" className={isActive("/register")}>
                    Register
                  </Link>
                </>
              ) : (
                <Link
                  href="/dashboard/add-product"
                  className={isActive("/dashboard/add-product")}
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Right Controls */}
            <div className="hidden md:flex items-center space-x-3">
              {session && (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              )}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200 text-2xl focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-3 md:hidden bg-white dark:bg-gray-900 px-4 py-3">
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
            <Link href="/products" className={isActive("/products")}>
              Products
            </Link>

            {!session ? (
              <>
                <Link href="/login" className={isActive("/login")}>
                  Login
                </Link>
                <Link href="/register" className={isActive("/register")}>
                  Register
                </Link>
              </>
            ) : (
              <Link
                href="/dashboard/add-product"
                className={isActive("/dashboard/add-product")}
              >
                Dashboard
              </Link>
            )}

            {session && (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        )}
      </nav>
      <div className="pt-16" /> {/* offset for fixed navbar */}
    </>
  );
}
