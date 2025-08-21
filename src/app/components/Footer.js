import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 dark:text-yellow-400">
              NextMart
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              A simple product showcase and management app built with Next.js.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-xl text-gray-600 dark:text-gray-400">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-blue-600"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-blue-400"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-blue-700"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} NextMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
