"use client";

import Image from "next/image";

export function WhyAISection({ data }) {
  // Determine grid layout based on number of cards
  const getGridClass = () => {
    const cardCount = data.cards.slice(0, 5).length;
    if (cardCount === 4) {
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
  };

  // Determine centering class
  const getCenteringClass = () => {
    const cardCount = data.cards.slice(0, 5).length;
    if (cardCount < 5) {
      return "justify-center";
    }
    return "";
  };

  return (
    <section
      className="w-full py-16 md:py-24 md:mb-16"
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

        {/* Cards Grid */}
        <div
          className={`grid ${getGridClass()} ${getCenteringClass()} ${
            data.cards.length == 4 ? "gap-5" : "gap-6"
          }  mb-8 md:mb-16`}
        >
          {data.cards.slice(0, 5).map((card, index) => (
            <div key={index} className="flex justify-center">
              <div
                className={`w-full max-w-[17.5rem] ${
                  data.cards.length == 4 ? "min-w-[15rem]" : "min-w-[11.875rem]"
                } h-full bg-[#FFFFFF1A] border border-[#FFFFFF33] rounded-2xl p-6 hover:bg-opacity-15 transition-all duration-300 hover:transform hover:scale-105`}
              >
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
                  <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2 sm:mb-3 font-poppins">
                    {card.title}
                  </h3>
                  <p className="text-base text-[#DBEAFE] leading-relaxed font-poppins">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {data.ctaText && (
          <div className="text-center mt-8 md:mt-16">
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
    </section>
  );
}
