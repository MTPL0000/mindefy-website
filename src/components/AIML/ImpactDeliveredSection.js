import Image from "next/image";

export function ImpactDeliveredSection({ data }) {
  return (
    <section className="w-full py-12 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem]">
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-linear-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-x-10 gap-y-20">
          {data.impacts.map((impact, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 calc(33.333% - 40px)", // 3 items per row initially
                maxWidth: "400px",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-18 h-18 mb-6 relative">
                  <Image
                    src={impact.icon}
                    alt={impact.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-poppins text-gray-900 mb-4">
                  {impact.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-700 font-poppins leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {data.ctaText && (
          <div className="text-center mt-10 md:mt-20">
            <span className="inline-block border border-[#332771] text-[#332771] font-poppins px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105">
              {data.ctaText}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
