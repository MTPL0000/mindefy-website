"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  // Client logos data
  const clientLogos = [
    {
      src: "/images/sp-logo.webp",
      alt: "Spector-Mindefy",
      aspectRatio: "184/56",
    },
    { src: "/images/kotak.webp", alt: "Kotak-Mindefy", aspectRatio: "218/56" },
    {
      src: "/images/netlink.webp",
      alt: "Netlink-Mindefy",
      aspectRatio: "245/56",
    },
    { src: "/images/mst-hero.webp", alt: "MST-Mindefy", aspectRatio: "135/56" },
    {
      src: "/images/krungthai.webp",
      alt: "Krungthai-Mindefy",
      aspectRatio: "255/56",
    },
    {
      src: "/images/solistack.webp",
      alt: "Solistack-Mindefy",
      aspectRatio: "210/56",
    },
    {
      src: "/images/early-foods-hero.webp",
      alt: "Early-Foods-Mindefy",
      aspectRatio: "74/56",
    },
    {
      src: "/images/Bottomline.webp",
      alt: "Bottomline-Mindefy",
      aspectRatio: "2.39/1",
    },
    {
      src: "/images/jego-hero.webp",
      alt: "Jego-Mindefy",
      aspectRatio: "107/56",
    },
    {
      src: "/images/memolect-hero.webp",
      alt: "Memolect-Mindefy",
      aspectRatio: "164/56",
    },
  ];

  // Responsive ticker logic
  const tickerRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);

  // State for AI animation
  const aiRef = useRef(null);
  // stores scroll progress (0 to 1)
  const [scrollProgress, setScrollProgress] = useState(0);
  // State for responsive base font size
  const [baseFontSize, setBaseFontSize] = useState(3.75);
  // State for hiding the "&" text
  const [hideAmpersand, setHideAmpersand] = useState(false);
  // State to check if device is desktop
  const [isDesktop, setIsDesktop] = useState(false);

  // Calculate responsive base font size
  const getBaseFontSize = () => {
    if (typeof window === "undefined") return 3.75;
    const width = window.innerWidth;
    // text-3xl = 1.875rem (mobile, < 640px)
    // text-4xl = 2.25rem (sm, 640px - 768px)
    // text-5xl = 3rem (md, 768px - 1024px)
    // text-6xl = 3.75rem (lg, 1024px+)
    if (width < 640) return 1.875;
    if (width < 768) return 2.25;
    if (width < 1024) return 3;
    return 3.75;
  };

  // Check if device is desktop (lg breakpoint = 1024px)
  const checkIsDesktop = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768;
    // return window.innerWidth >= 1024;
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    // Function to calculate and scroll to contact section
    const performScroll = (attempt = 1) => {
      const contactSection = document.getElementById("contact");

      if (!contactSection) {
        console.warn("Contact section not found on current page");
        return;
      }

      // Wait for any ongoing layout changes to complete
      requestAnimationFrame(() => {
        // Force layout recalculation
        void contactSection.offsetHeight;

        // Get current positions
        const rect = contactSection.getBoundingClientRect();
        const scrollY =
          window.pageYOffset || document.documentElement.scrollTop;

        // Calculate absolute position from top of document
        const absoluteTop = rect.top + scrollY;

        // Account for navbar (120px) and add small buffer
        const targetPosition = Math.max(0, absoluteTop - 120);

        // Perform smooth scroll
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Verify scroll worked correctly
        if (attempt === 1) {
          setTimeout(() => {
            const newRect = contactSection.getBoundingClientRect();
            // If element is not near the top of viewport, try again once
            if (newRect.top > 200) {
              performScroll(2);
            }
          }, 1000);
        }
      });
    };

    // Initial delay to ensure page is stable
    setTimeout(() => performScroll(), 200);
  };

  useEffect(() => {
    function updateWidth() {
      if (tickerRef.current) {
        setRowWidth(tickerRef.current.scrollWidth / 3); // Width of one set (total is 3 sets)
      }
      setBaseFontSize(getBaseFontSize());
      setIsDesktop(checkIsDesktop());
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Scroll handler for AI animation - only active on desktop
  useEffect(() => {
    const handleScroll = () => {
      // Only run animation on desktop devices
      if (!isDesktop) return;

      const heroSection = document.querySelector("[data-hero-section]");
      const aiTextElement = document.querySelector("[data-ai-text]");

      if (!heroSection || !aiTextElement) return;

      const navbarHeight = 64; // Approximate navbar height
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress based on AI text position relative to navbar
      // Animation completes when AI text reaches just below the navbar
      const scrollStart = 0;
      const aiTextInitialTop = viewportHeight * 0.25; // Approximate initial position
      const scrollEnd = aiTextInitialTop - navbarHeight;

      const scrollY = window.scrollY || window.pageYOffset;

      let progress = 0;

      if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        progress = Math.max(0, Math.min(1, progress));
      } else if (scrollY > scrollEnd) {
        progress = 1;
      }

      setScrollProgress(progress);

      // Hide ampersand when scroll progress reaches 0.3 (30%)
      setHideAmpersand(progress > 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  // Duration based on width - slower speed for better visibility across all screen sizes
  const duration = rowWidth ? rowWidth / 80 : 20;

  // Calculate transform values based on scroll progress (only for desktop)
  const translateX = isDesktop ? -750 * scrollProgress : 0;
  const translateY = isDesktop ? -200 * scrollProgress : 0;
  const scale = isDesktop ? 1 - 0.25 * scrollProgress : 1;

  // Calculate font size based on scroll progress (only for desktop)
  const minFontSize = baseFontSize * 0.4;
  const fontSize = isDesktop
    ? baseFontSize - (baseFontSize - minFontSize) * scrollProgress
    : baseFontSize;

  const disperseAmount = isDesktop
    ? Math.sin(scrollProgress * Math.PI) * 15
    : 0;

  return (
    <section
      data-hero-section
      className="relative w-full overflow-hidden bg-linear-to-r from-[#f3f4ff] via-[#FFFFFF] to-[#fff3f0] flex flex-col items-center justify-center text-center py-10 lg:pt-0 lg:pb-0 lg:min-h-screen"
    >
      {/* Heading Section */}
      <div className="px-4 max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-10 lg:gap-15">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-poppins leading-tight mt-4">
          <span className="text-[#F6BC34] text-center">Your Partner For</span>

          {/* AI text for large view only - with animation and dispersion */}
          <span
            ref={aiRef}
            data-ai-text
            className="hidden lg:inline-block text-black relative mx-5"
            style={{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
              fontSize: `${fontSize}rem`,
              transition: "transform 0.3s ease-out, font-size 0.3s ease-out",
              zIndex: scrollProgress > 0 ? 10 : 1,
              position: "relative",
              filter: `blur(${disperseAmount * 0.3}px)`,
              textShadow: `
                ${disperseAmount * 0.5}px ${disperseAmount * 0.3}px ${
                disperseAmount * 0.8
              }px rgba(0, 0, 0, ${0.1 * (disperseAmount / 15)}),
                ${-disperseAmount * 0.4}px ${disperseAmount * 0.5}px ${
                disperseAmount * 0.6
              }px rgba(0, 0, 0, ${0.08 * (disperseAmount / 15)}),
                ${disperseAmount * 0.3}px ${-disperseAmount * 0.4}px ${
                disperseAmount * 0.7
              }px rgba(0, 0, 0, ${0.06 * (disperseAmount / 15)})
              `,
              letterSpacing: `${disperseAmount * 0.15}px`,
              opacity: 1 - (disperseAmount / 15) * 0.3,
            }}
          >
            AI
          </span>
          {/* AI text for small view */}
          <span className="lg:hidden text-black mx-3">AI</span>
          {/* & text for large view only - with fade animation */}
          <span
            className="hidden lg:inline-block text-black transition-all duration-300"
            style={{
              opacity: hideAmpersand ? 0 : 1,
            }}
          >
            &
          </span>
          {/* & text for small view */}
          <span className="lg:hidden text-black">&</span>
          <br />
          <span
            className="text-[#0BB1E9]"
            style={{
              transition: "transform 0.5s ease-out",
              transform: hideAmpersand ? "translateX(-2rem)" : "translateX(0)",
            }}
          >
            Custom Software Development
          </span>
        </h1>

        <p className="text-[#444444] font-medium font-poppins text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
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
            href="/ai-ml-services"
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
        <div className="relative w-full overflow-hidden mt-6 sm:mt-6 lg:mt-12">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-8 sm:w-16 h-full bg-linear-to-r from-[#f3f4ff] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-8 sm:w-16 h-full bg-linear-to-l from-[#fff3f0] to-transparent z-10"></div>

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
          >
            {/* Render logos multiple times for seamless infinite scroll */}
            {[...Array(3)].map((_, setIndex) => (
              clientLogos.map((logo, index) => (
                <div
                  key={`set-${setIndex}-${index}`}
                  className="shrink-0 mx-4 sm:mx-6 lg:mx-8 h-5 sm:h-6 lg:h-8 xl:h-10"
                  style={{ aspectRatio: logo.aspectRatio }}
                >
                  <div className="relative w-full h-full p-1 sm:p-2 lg:p-2">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 160px"
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
