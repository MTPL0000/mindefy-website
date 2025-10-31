"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  // Client logos data
  const clientLogos = [
    {
      src: "/images/sp-logo.png",
      alt: "Spector-Mindefy",
      aspectRatio: "36/11",
    },
    { src: "/images/kotak.png", alt: "Kotak-Mindefy", aspectRatio: "1/1" },
    {
      src: "/images/netlink.svg",
      alt: "Netlink-Mindefy",
      aspectRatio: "2.39/1",
    },
    { src: "/images/mst-hero.webp", alt: "MST-Mindefy", aspectRatio: "2.41/1" },
    {
      src: "/images/krungthai.webp",
      alt: "Krungthai-Mindefy",
      aspectRatio: "100/22",
    },
    {
      src: "/images/solistack.png",
      alt: "Solistack-Mindefy",
      aspectRatio: "1685/451",
    },
    {
      src: "/images/early-foods-hero.png",
      alt: "Early-Foods-Mindefy",
      aspectRatio: "46/31",
    },
    {
      src: "/images/Bottomline.svg",
      alt: "Bottomline-Mindefy",
      aspectRatio: "2.39/1",
    },
    {
      src: "/images/jego-hero.png",
      alt: "Jego-Mindefy",
      aspectRatio: "1.91/1",
    },
    {
      src: "/images/memolect-hero.png",
      alt: "Memolect-Mindefy",
      aspectRatio: "2.92/1",
    },
  ];

  // Responsive ticker logic
  const tickerRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const performScroll = (attempt = 1) => {
      const contactSection = document.getElementById("contact");

      if (!contactSection) {
        console.warn("Contact section not found on current page");
        return;
      }

      requestAnimationFrame(() => {
        void contactSection.offsetHeight;

        const rect = contactSection.getBoundingClientRect();
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        const absoluteTop = rect.top + scrollY;
        const targetPosition = Math.max(0, absoluteTop - 120);

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        if (attempt === 1) {
          setTimeout(() => {
            const newRect = contactSection.getBoundingClientRect();
            if (newRect.top > 200) {
              performScroll(2);
            }
          }, 1000);
        }
      });
    };

    setTimeout(() => performScroll(), 200);
  };

  useEffect(() => {
    function updateWidth() {
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
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#f3f4ff] via-[#FFFFFF] to-[#fff3f0] flex flex-col items-center justify-center text-center pt-20 pb-10 lg:pt-0 lg:pb-0 lg:min-h-screen">
      {/* Heading Section */}
      <div className="px-4 max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-15">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-poppins leading-tight mt-8 transition-all duration-300 ease-out">
          <span className="text-[#F6BC34]">Your Partner For </span>
          {/* AI text for large view - Simple black text */}
          <span className="inline-block text-black font-bold">AI</span>
          {/* Ampersand with smooth fade animation */}
          <span className="text-black transition-all duration-300 ease-out">
            {" "}
            &{" "}
          </span>

          <br />
          <span className="text-[#0BB1E9]">Custom Software Development</span>
        </h1>

        <p className="text-[#424242] font-medium font-poppins text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          A leading AI software development company that merges intelligence,
          design, and engineering to build products for the next generation.
        </p>

        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-5">
          <button
            onClick={scrollToContact}
            className="bg-[#2F2F2F] text-white cursor-pointer border border-[#2F2F2F] px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition duration-300 hover:bg-gray-900 hover:-translate-y-1"
          >
            Book a Call →
          </button>
          <Link
            href="/mindful-ux"
            className="border border-[#2F2F2F] text-[#2F2F2F] px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium transition duration-300 hover:bg-[#2F2F2F] hover:text-white hover:-translate-y-1"
          >
            View Our Work
          </Link>
        </div>
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
            transition={
              rowWidth
                ? {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration,
                      ease: "linear",
                    },
                  }
                : {}
            }
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
    </section>
  );
}
