"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function GoogleAuth() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg cursor-pointer transition"
    >
      <FcGoogle size={22} />
      <span>Sign in with Google</span>
    </button>
  );
}
