import Image from "next/image";

export function EngagementModelSection({ data }) {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem]">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 font-poppins w-10 h-10 rounded-full bg-[#332771] flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-2.5">
                {step.number}
              </div>

              <div
                className="flex flex-col items-center justify-center rounded-lg py-6 px-4 w-74 h-50"
                style={{ boxShadow: "0px 0px 20px 0px #00000033" }}
              >
                <div className="relative w-13 h-13 mb-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#332771] mb-4 font-poppins">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-[#332771] leading-relaxed font-poppins">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
