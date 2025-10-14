import Image from "next/image";

export default function BusinessImpactSection({ data }) {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem]">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          {data.cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 md:mb-8">
                <span className="bg-gradient-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent">
                  {card.title}
                </span>
              </h2>
              {/* Subtitle */}
              <p className="text-left text-base sm:text-xl font-bold text-[#444444] mb-4 max-w-md">
                {card.subtitle}
              </p>

              {/* Points List */}
              <ul className="space-y-2 md:space-y-3 text-left w-full max-w-md">
                {card.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <span className="text-black-600 font-bold text-base sm:text-lg flex-shrink-0 mt-0.5">
                      •
                    </span>
                    <span className="text-base sm:text-xl font-bold text-[#444444] leading-relaxed">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <span className="inline-block border border-[#332771] text-[#332771] px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105">
            {data.noteText}
          </span>
        </div>
      </div>
    </section>
  );
}
