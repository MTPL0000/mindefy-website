"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function WhyAISection({ data }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.scrollBehavior = "smooth";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      className="w-full py-16 md:py-30 md:mb-16"
      style={{
        background:
          "linear-gradient(135deg, #0F172B 0%, #1C398E 50%, #312C85 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 xl:px-[8.83rem]">
        <div className="text-center mb-8 sm:mb-12 lg:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#DBEAFE] mb-4 md:mb-6 font-poppins">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-xl font-normal text-[#DBEAFE] max-w-3xl mx-auto font-poppins">
            {data.subtitle}
          </p>
        </div>

        <div className="relative mb-8 md:mb-16">
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 -ml-3 md:-ml-5 shadow-lg"
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-300 -mr-3 md:-mr-5 shadow-lg"
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Scrollable container with drag support */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-6 md:gap-8 px-2 pt-3 md:pt-6 pb-4 snap-x snap-mandatory scrollbar-hide md:scrollbar-default active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#FFFFFF33 transparent",
            }}
          >
            {data.cards.slice(0, 5).map((card, index) => (
              <div
                key={index}
                className="flex-none w-[85%] max-w-[280px] min-w-[220px] min-h-84 snap-center justify-center"
              >
                <div className="h-full bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-2xl p-6 hover:bg-opacity-15 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="bg-[#05DF72] w-3 h-3 rounded-full relative top-[-8px] left-[98%]"></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 mb-4 relative">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        fill
                        className="object-contain pointer-events-none"
                      />
                    </div>
                    {card.percentage && (
                      <div className="text-4xl md:text-3xl font-bold text-[#FFFFFF] font-poppins">
                        {card.percentage}
                      </div>
                    )}
                    {card.rate && (
                      <div className="text-sm font-medium text-[#BEDBFF] mt-1 mb-3 sm:mb-4 font-poppins">
                        {card.rate}
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-2 sm:mb-3 font-poppins">
                      {card.title}
                    </h3>
                    <p className="md:text-base text-sm text-[#DBEAFE] leading-relaxed font-poppins">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {data.ctaText && (
          <div className="text-center">
            <span
              style={{
                background: "linear-gradient(90deg, #155DFC 0%, #009689 100%)",
              }}
              className="font-poppins inline-block text-[#DBEAFE] px-4 md:px-8 py-2 md:py-4 rounded-2xl font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {data.ctaText}
            </span>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (min-width: 768px) {
          .scrollbar-default::-webkit-scrollbar {
            display: block;
            height: 8px;
          }
          .scrollbar-default::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-default::-webkit-scrollbar-thumb {
            background: #ffffff33;
            border-radius: 4px;
          }
          .scrollbar-default::-webkit-scrollbar-thumb:hover {
            background: #ffffff4d;
          }
          .scrollbar-default {
            scrollbar-width: thin;
          }
        }
      `}</style>
    </section>
  );
}
