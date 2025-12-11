"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection({ data }) {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current?.nextElementSibling) {
      sectionRef.current.nextElementSibling.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full md:h-screen flex items-center justify-center overflow-hidden pt-12 pb-12"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data.backgroundImage}
          alt="Background"
          fill
          className="object-contain md:object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-5 md:mb-8">
            <span className="bg-linear-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent leading-normal">
              {data.title}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-4xl text-[#000000] font-normal mb-5 md:mb-8 font-poppins">
            {data.subtitle}
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-[#000000] font-normal max-w-3xl mx-auto leading-relaxed font-poppins">
            {data.description}
          </p>

          {data.description_1 && (
            <p className="text-sm sm:text-base lg:text-xl text-[#000000] font-normal max-w-3xl mx-auto leading-relaxed font-poppins">
              {data.description_1}
            </p>
          )}

          <button
            onClick={handleScroll}
            className="mt-5 md:mt-8 font-poppins cursor-pointer inline-block bg-[#332771] text-white h-10 text-center px-7 py-3 rounded-full font-normal text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <ChevronDown className="w-7 h-7 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
