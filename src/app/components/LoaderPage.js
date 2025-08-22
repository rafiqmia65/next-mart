"use client";
import { motion } from "framer-motion";

export default function LoaderPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="flex flex-col items-center">
        {/* Glowing Spinner */}
        <motion.div
          className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full shadow-[0_0_25px_rgba(250,204,21,0.8)]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Animated Loading Text */}
        <motion.p
          className="mt-6 text-xl font-semibold text-yellow-400 tracking-widest drop-shadow-lg"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
