import Image from "next/image";

export default function StartupIncubationHero() {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-[0.875rem] lg:text-[1rem] font-bold tracking-widest uppercase mb-5">
          Startup Incubation Services
        </h1>

        <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-221 mx-auto px-4 xl:px-0">
          <span className="font-medium">Unlock Your </span>Startup Potential
          with <br className="hidden sm:block"></br>Mindefy's Incubation
          Services
        </p>

        <div className="w-full max-w-245.5 font-normal mx-auto mb-9 text-justify space-y-5 px-4 xl:px-0">
          <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
            <span className="font-semibold">
              Are you an aspiring entrepreneur brimming with groundbreaking
              ideas
            </span>
            , but not sure how to bring them to life?
          </p>
          <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
            Look no further! At Mindefy, we specialize in incubating
            innovative concepts and nurturing them into successful ventures.
            Our Startup Incubation Services are designed to empower
            individuals with ideas, guiding them through every step of the
            journey, from{" "}
            <span className="font-semibold">
              concept inception to market validation
            </span>
            .
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-6">
          <Image
            src="/images/WAD.webp"
            alt="Web Application Development - Developer working with web applications"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
