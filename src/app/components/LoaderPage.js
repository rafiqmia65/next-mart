"use client";
import { motion } from "framer-motion";

export default function LoaderPage() {
  return (
    <div
      className="flex items-center justify-center h-screen 
      bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="flex flex-col items-center">
        {/* Clear Visible Spinner */}
        <motion.div
          className="w-20 h-20 rounded-full border-4 
          border-blue-600 border-t-transparent 
          dark:border-yellow-400 dark:border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.8, // faster rotation
            ease: "linear",
          }}
        />

        {/* Animated Loading Text */}
        <motion.p
          className="mt-6 text-xl font-semibold tracking-widest 
          text-blue-600 dark:text-yellow-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
