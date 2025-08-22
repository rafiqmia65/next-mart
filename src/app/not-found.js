import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page Not Found</p>
        <Link
          href="/"
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
