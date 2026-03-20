"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRAND_LOGOS = [
  {
    src: "/images/sp-logo.webp",
    alt: "Spector-Mindefy",
  },
  { src: "/images/kotak.webp", alt: "Kotak-Mindefy" },
  {
    src: "/images/netlink.webp",
    alt: "Netlink-Mindefy",
  },
  { src: "/images/mst-hero.webp", alt: "MST-Mindefy" },
  {
    src: "/images/krungthai.webp",
    alt: "Krungthai-Mindefy",
  },
  {
    src: "/images/solistack.webp",
    alt: "Solistack-Mindefy",
  },
  {
    src: "/images/early-foods-hero.webp",
    alt: "Early-Foods-Mindefy",
  },
  {
    src: "/images/Bottomline.webp",
    alt: "Bottomline-Mindefy",
  },
  {
    src: "/images/jego-hero.webp",
    alt: "Jego-Mindefy",
  },
  {
    src: "/images/memolect-hero.webp",
    alt: "Memolect-Mindefy",
  },
];

export default function TrustBar() {
  return (
    <div className="brand-section-5 relative z-40 -mt-10 lg:-mt-20 pb-20 lg:pb-32">
      <h2 className="sr-only">Trusted by Leading Brands</h2>
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
            {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map(
              (logo, index) => (
                <div
                  key={index}
                  className="shrink-0 w-45 lg:w-2xs h-25 lg:h-32 bg-white rounded-lg shadow-sm border border-gray-300 flex items-center justify-center relative overflow-hidden group cursor-pointer"
                >
                  {/* Default */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-600 group-hover:translate-y-full group-hover:opacity-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={60}
                      className="max-w-30 lg:max-w-37 h-auto grayscale opacity-40 transition-all duration-500"
                    />
                  </div>

                  {/* Hover */}
                  <div className="absolute inset-0 flex items-center justify-center -translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={150}
                      height={60}
                      className="max-w-30 lg:max-w-37 h-auto grayscale-0 opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
