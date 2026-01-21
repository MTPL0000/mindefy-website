import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-[0.875rem] lg:text-[1rem] font-bold tracking-widest uppercase mb-5">
          {data.tag}
        </h1>

        <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-221 mx-auto px-4 xl:px-0">
          Redefine Reality with Engaging AR/VR Game
          <br className="hidden sm:block"></br>Experiences
        </p>

        <div className="w-full max-w-245.5 font-normal mx-auto mb-9 text-justify space-y-5 px-4 xl:px-0">
          <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-12 lg:mb-20">
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
