"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  // Client logos data
  const clientLogos = [
    { src: "/images/sp-logo.png", alt: "Spector-Mindefy", aspectRatio: "36/11" },
    { src: "/images/Kotak.svg", alt: "Kotak-Mindefy", aspectRatio: "2.39/1" },
    { src: "/images/netlink.svg", alt: "Netlink-Mindefy", aspectRatio: "2.39/1" },
    { src: "/images/mst.svg", alt: "MST-Mindefy", aspectRatio: "7/6" },
    { src: "/images/krungthai.svg", alt: "Krungthai-Mindefy", aspectRatio: "2.39/1" },
    { src: "/images/solistack.png", alt: "Solistack-Mindefy", aspectRatio: "2.39/1" },
    { src: "/images/early-foods-hero.png", alt: "Early-Foods-Mindefy", aspectRatio: "46/31" },
    { src: "/images/Bottomline.svg", alt: "Bottomline-Mindefy", aspectRatio: "2.39/1" },
    { src: "/images/jego-hero.png", alt: "Jego-Mindefy", aspectRatio: "1.91/1" },
    { src: "/images/memolect-hero.png", alt: "Memolect-Mindefy", aspectRatio: "2.92/1" },
  ];

  // Responsive ticker logic
  const tickerRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);
  console.log(rowWidth);

  useEffect(() => {
    function updateWidth() {
      console.log(tickerRef.current.scrollWidth);
      if (tickerRef.current) {
        setRowWidth((tickerRef.current.scrollWidth + 20) / 2); // Only one set of logos
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Duration based on width (optional: 100px/sec)
  const duration = rowWidth ? rowWidth / 100 : 20;

  return (
    <section className="w-full bg-gradient-to-r from-[#f3f4ff] via-[#FFFFFF] to-[#fff3f0] flex items-center justify-center relative overflow-hidden min-h-screen">
      <div className="mx-auto text-center z-10 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold text-center leading-tight">
          <span className="text-[#F6BC34]">Ideation</span>{" "}
          <span className="text-black">to</span>
          <br />
          <span className="text-[#0BB1E9] font-semibold">Realization</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed">
          Supporting Enterprises & Startups by Providing Solutions Based on
          Proven Technology Frameworks and Acting as Native Accelerators.
        </p>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Link
            href="/mindful-ux"
            className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition"
          >
            Learn More →
          </Link>
        </div>

        {/* Client Logos with Ticker Animation */}
        <div className="mt-10 sm:mt-14 w-full">
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
            Client and Partner Alliances
          </p>

          {/* Ticker Container */}
          <div className="relative w-full overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-8 sm:w-16 h-full bg-gradient-to-r from-[#f3f4ff] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-8 sm:w-16 h-full bg-gradient-to-l from-[#fff3f0] to-transparent z-10"></div>

            {/* Animated ticker */}
            <motion.div
              className="flex items-center"
              ref={tickerRef}
              animate={rowWidth ? { x: [0, -rowWidth] } : false}
              transition={rowWidth ? {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration,
                  ease: "linear",
                },
              } : {}}
              style={{ width: rowWidth ? rowWidth * 2 : "auto" }}
            >
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 ${
                    logo.alt === "MST-Mindefy"
                      ? "w-12 sm:w-16 lg:w-20"
                      : logo.alt === "Jego-Mindefy"
                      ? "w-10 sm:w-14 lg:w-18"
                      : logo.alt === "Early-Foods-Mindefy"
                      ? "w-10 sm:w-14 lg:w-20"
                      : "w-20 sm:w-28 lg:w-36"
                  }`}
                  style={{ aspectRatio: logo.aspectRatio }}
                >
                  <div className="relative w-full h-full p-2 sm:p-3 lg:p-4">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className={`flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 ${
                    logo.alt === "MST-Mindefy"
                      ? "w-12 sm:w-16 lg:w-20"
                      : logo.alt === "Jego-Mindefy"
                      ? "w-10 sm:w-14 lg:w-18"
                      : logo.alt === "Early-Foods-Mindefy"
                      ? "w-10 sm:w-14 lg:w-20"
                      : "w-20 sm:w-28 lg:w-36"
                  }`}
                  style={{ aspectRatio: logo.aspectRatio }}
                >
                  <div className="relative w-full h-full p-2 sm:p-3 lg:p-4">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}