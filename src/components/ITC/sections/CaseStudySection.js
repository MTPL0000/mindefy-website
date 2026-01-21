import Image from "next/image";

export default function CaseStudySection({ data }) {
  return (
    <>
      <section className="py-12 lg:py-21 bg-[#E9F1FE]">
        <div className="max-w-full sm:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
            <div className="flex-1 space-y-4 lg:space-y-6">
              <div className="flex items-center mb-6 lg:mb-7.5 justify-center lg:justify-start">
                <div className="relative w-32 sm:w-36 lg:w-40.5 h-16 sm:h-20 lg:h-25 shrink-0">
                  <Image
                    src={data.logo}
                    alt="logo"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-4 lg:space-y-6 text-[#444444] text-justify">
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex-1 relative h-64 sm:h-80 lg:h-96 w-full">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-xs sm:max-w-3xl lg:w-235.5 mx-auto mt-8 lg:mt-15 rounded-2xl bg-[#F9F9F9] px-4 sm:px-6 lg:px-0">
        <p className="p-4 lg:p-5 font-semibold text-base lg:text-lg text-[#444444]">
          {data.quote}
        </p>
      </div>
    </>
  );
}
