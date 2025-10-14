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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {data.title}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-semibold mb-4 sm:mb-6">
            {data.subtitle}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
          <a
            href={data.buttonLink}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
