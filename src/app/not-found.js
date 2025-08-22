import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-7xl sm:text-8xl font-extrabold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500"
          >
            Go Home
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Browse Gadgets
          </Link>
        </div>
      </div>
    </section>
  );
}
