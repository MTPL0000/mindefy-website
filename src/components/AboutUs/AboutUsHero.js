import Image from "next/image";

export default function AboutUsHero() {
  return (
    <section className="max-w-7xl mx-auto pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8">
      {/* Heading section */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8 mb-6 sm:mb-8">
        <h1 className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase">
          ABOUT US
        </h1>

        {/* Responsive heading with better text flow */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-normal text-[#000000] leading-tight">
            <span className="block sm:inline">Transforming </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000]">
              Business Payments and Processes{" "}
            </span>
            <span className="block sm:inline">
              for companies and financial institutions around the world.
            </span>
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-normal text-[#000000] leading-tight mt-4 sm:mt-6">
            <span className="block sm:inline">Obsessed with </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000]">
              Removing Complexity. Automating and Digitising all That is
              Possible.
            </span>
          </h2>
        </div>

        {/* Responsive image container */}
        <div className="m-auto relative aspect-2/1 w-full max-w-5xl overflow-hidden mt-6 sm:mt-8 lg:mt-10">
          <Image
            src="/images/abt-1.png"
            alt="soli-stack"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Main section */}
      <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-5xl mx-auto gap-6 sm:gap-8 lg:gap-9 mt-12 sm:mt-16 lg:mt-18">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] text-center px-4 sm:px-0">
          Customer Delight Is The Foundation Of Our Business
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-0">
          <p className="text-sm sm:text-base lg:text-base font-normal text-[#000000] text-center leading-relaxed">
            It leads our guiding principles. It defines our innovation to
            address new opportunities and solve real problems now,
            anticipating ones that customers don't even know they'll have. It
            drives who and how we hire to create world-class products and
            experiences that help businesses and financial institutions pay
            and get paid.
          </p>
          <p className="text-sm sm:text-base lg:text-base font-normal text-[#000000] text-center leading-relaxed">
            At our core we share ideas, innovate together and support each
            other personally and professionally. It is through our guiding
            principles that we achieve our common goal of exceeding
            expectations and delighting customers.
          </p>
        </div>
      </div>
    </section>
  );
}
