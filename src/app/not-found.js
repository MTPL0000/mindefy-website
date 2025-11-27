"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-4 items-center px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
        Page Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-base text-center md:text-lg text-gray-800 mt-6 max-w-2xl">
        The page you're trying to access doesn't exist or may have been moved.
        Let’s help you get back on track.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-[#332771] text-white font-medium shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
