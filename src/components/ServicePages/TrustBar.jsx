"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustBar({ content }) {
  const logos = Array.isArray(content?.logos) ? content.logos : [];

  if (!logos.length) {
    return null;
  }

  return (
    <div className="brand-section-5 relative z-10 -mt-10 lg:-mt-20 pb-20">
      <h2 className="sr-only font-poppins">Trusted by Leading Brands</h2>
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4 lg:gap-6 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40, // faster speed
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="shrink-0 w-45 lg:w-2xs h-25 lg:h-32 bg-white rounded-lg shadow-sm border border-gray-300 flex items-center justify-center relative overflow-hidden group cursor-pointer"
              >
                {/* Default */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-600 group-hover:translate-y-full group-hover:opacity-0">
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.alt || "Trusted brand"}
                      width={150}
                      height={60}
                      className="max-w-30 lg:max-w-37 h-auto grayscale opacity-40 transition-all duration-500"
                    />
                  ) : (
                    <span className="px-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#162560]/45">
                      {logo.label || logo.alt || logo.name}
                    </span>
                  )}
                </div>

                {/* Hover */}
                <div className="absolute inset-0 flex items-center justify-center -translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.alt || logo.label || "Trusted brand"}
                      width={150}
                      height={60}
                      className="max-w-30 lg:max-w-37 h-auto grayscale-0 opacity-100 transition-all duration-500"
                    />
                  ) : (
                    <span className="px-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#F15A24]">
                      {logo.label || logo.alt || logo.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
