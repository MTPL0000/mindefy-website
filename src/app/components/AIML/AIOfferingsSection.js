import Image from "next/image";

export function AIOfferingsSection({ data }) {
  return (
    <section className="w-full py-12 md:py-16"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem]">
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-8">
            <span className="bg-gradient-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-[#000000] max-w-3xl mx-auto font-poppins">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data?.offerings &&
            data?.offerings?.map((offering, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 md:p-8 shadow-[0px_0px_28px_0px_#0000001A] hover:scale-[1.02] transition-all duration-300 border border-gray-100"
              >
                <div className="flex gap-4 items-center mb-5">
                  <div className="w-13 h-13 relative">
                    <Image
                      src={offering.icon}
                      alt={offering.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-poppins">
                    {offering.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-7 font-poppins">
                  {offering.subtitle}
                </p>

                <div className="space-y-4">
                  {offering?.items &&
                    offering?.items?.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-l-2 border-purple-500 pl-3 sm:pl-4"
                      >
                        <p className="text-sm text-[#000000] font-light leading-relaxed font-poppins">
                          <span className="text-sm font-semibold text-gray-900 mb-1 font-poppins">
                            {item.title}
                          </span>{" "}
                          - {item.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
