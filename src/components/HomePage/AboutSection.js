import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 font-poppins">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-18">
          <p className="text-sm font-bold text-[#FF5630] font-poppins uppercase tracking-wider mb-4 sm:mb-7">
            About Mindefy
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light font-poppins text-[#3D3D3D] leading-tight mb-4">
            <span className="font-normal">Leading The Next Wave of</span>
            <br className="hidden sm:block" />{" "}
            <span className="font-bold">AI Software Development</span>
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
            <p className="text-[#444444] text-sm sm:text-base font-normal font-poppins leading-relaxed text-justify mb-4 sm:mb-6">
              Every great product starts with a spark of the mind, and at
              Mindefy, we turn that spark into intelligent software. As a
              leading software development company, we combine human insight
              with machine intelligence to deliver digital products that work
              smarter for your business.
            </p>
            <p className="text-[#444444] text-sm sm:text-base font-normal font-poppins leading-relaxed text-justify mb-4 sm:mb-6">
              Our approach combines deep AI development expertise with custom
              software development services, allowing you to build solutions
              that think, adapt, and evolve. From creating an MVP product to
              scaling complex enterprise systems or integrating AI into your
              existing workflow, Mindefy brings the clarity of mind your product
              deserves.
            </p>
            <p className="text-[#444444] text-sm sm:text-base font-normal font-poppins leading-relaxed text-justify mb-6 sm:mb-8">
              With a dedicated team of software developers, AI engineers, and
              product strategists, we deliver end-to-end digital product
              development services from concept and design to deployment and
              optimization. As a trusted custom software development company, we
              partner with startups and enterprises worldwide to create
              technology that not only works but understands.
            </p>

            {/* Call to Action */}
            <Link
              href="/about-us-technology-innovators"
              className="text-[#6A53E1] font-medium hover:underline inline-flex items-center text-base sm:text-lg transition-colors"
            >
              ABOUT US <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Right Content - 3D Character */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 sm:w-80 lg:w-96 xl:w-119 aspect-415/436">
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
