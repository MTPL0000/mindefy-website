import Image from "next/image";

export function HeroSection({ data }) {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={data.backgroundImage}
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem] relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 md:mb-8">
            <span className="bg-gradient-to-r from-[#434AE4] to-[#5441B7] to-[#E86343] font-poppins bg-clip-text text-transparent leading-normal">
              {data.title}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-[#000000] font-semibold mb-5 md:mb-8 font-poppins">
            {data.subtitle}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#000000] mb-5 md:mb-8 max-w-3xl mx-auto leading-relaxed font-poppins">
            {data.description}
          </p>
          <a
            href={data.buttonLink}
            className="font-poppins inline-block bg-[#332771] text-white px-7 py-3 rounded-full font-normal text-sm md:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
