import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm font-bold text-[#FF5630] uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">
            About Mindefy
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 leading-tight">
            We are A{" "}
            <span className="font-bold">Top-Notch IT Service Provider</span>{" "}
            And
            <br className="hidden sm:block" />
            <span className="font-bold">Product Development company</span>
          </h2>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            {/* Experience Banner */}
            <div className="relative w-full max-w-md lg:max-w-none aspect-[13.92/1] mb-4 sm:mb-6 lg:mb-7">
              <Image
                src="/images/Experience.svg"
                fill
                alt="Mindefy Experience"
                className="object-contain"
              />
            </div>
            
            {/* Description Text */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify mb-4 sm:mb-6">
              Transform your business with Mindefy, a premier IT company
              committed to driving digital excellence and empowering
              organizations to thrive in the rapidly evolving digital landscape.
              With our cutting-edge solutions, experienced team, and
              customer-centric approach, we are the trusted partner you need to
              harness the full potential of technology and achieve outstanding
              results.
            </p>
            
            {/* Call to Action */}
            <a
              href="#about"
              className="text-indigo-600 font-medium hover:underline inline-flex items-center text-base sm:text-lg transition-colors"
            >
              ABOUT US <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right Content - 3D Character */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 lg:w-96 xl:w-[29.75rem] aspect-square">
              <Image 
                src="/images/specs.webp" 
                fill 
                alt="Mindefy 3D Character" 
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
