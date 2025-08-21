import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Explore & Manage the Latest{" "}
            <span className="text-blue-600 dark:text-yellow-400">
              Tech Gadgets
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Discover trending gadgets and manage your collection effortlessly.
            Built with Next.js 15, Tailwind CSS & NextAuth for a smooth
            experience.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Browse Gadgets
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-lg border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <Image
            src="https://i.ibb.co.com/VW70fkVd/computer-curvy-monitor-digital-device-53876-97324.jpg"
            alt="Tech gadgets showcase"
            width={400}
            height={300}
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
