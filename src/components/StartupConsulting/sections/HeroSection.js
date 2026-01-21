import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="mt-20 sm:mt-24 md:mt-28 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-[0.875rem] sm:text-[1rem] font-bold tracking-widest uppercase mb-4 sm:mb-5">
          {data.tag}
        </h1>

        <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-5 sm:mb-6 md:mb-7 leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-200 mx-auto">
          <span className="font-normal">Your </span>Startup's Success{" "}
          <span className="font-normal"> from </span>
          <br className="hidden sm:block" /> Ideation{" "}
          <span className="font-normal">to </span>MVP
          <span className="font-normal"> with </span>Our Expertise
        </p>

        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-240 xl:w-241 font-normal mx-auto mb-6 text-justify space-y-4 sm:space-y-5">
          <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
            {data.descriptions[0]}
          </p>
        </div>
        <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-240 xl:w-241 font-normal mx-auto mb-6 text-center sm:text-justify space-y-4 sm:space-y-5">
          <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
            We believe that guiding startups goes beyond simply telling them
            <span className="font-semibold">"what to do"</span> We also focus on
            sharing insights
            <br className="hidden lg:block" /> and lessons learned on{" "}
            <span className="font-semibold">"what not to do"</span>
            <br className="hidden lg:block" /> This guidance ensures that
            startups make informed decisions and steer clear of pitfalls.
          </p>
        </div>

        <div className="relative w-full h-60 sm:h-80 md:h-100 lg:h-112 xl:h-124.5 mx-auto mb-8 sm:mb-12 md:mb-18">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
