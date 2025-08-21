"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();
  const { data: session } = useSession();

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const isActive = (path) =>
    pathname === path
      ? "text-blue-600 dark:text-yellow-400 font-semibold"
      : "text-gray-700 dark:text-gray-200 hover:text-blue-500";

  const handleLogout = () => signOut({ callbackUrl: "/" });

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left: Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-yellow-400"
            >
              NextMart
            </Link>

            {/* Center: Links */}
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
                <Link href="/dashboard" className={isActive("/dashboard")}>
                  Dashboard
                </Link>
              )}
            </div>

            {/* Right: Logout + Theme */}
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
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200 focus:outline-none cursor-pointer text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="flex flex-col gap-3 md:hidden bg-white dark:bg-gray-900 px-4 py-3 space-y-2">
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
              <Link href="/dashboard" className={isActive("/dashboard")}>
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

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        )}
      </nav>

      {/* Offset for fixed navbar */}
      <div className="pt-16" />
    </>
  );
}
