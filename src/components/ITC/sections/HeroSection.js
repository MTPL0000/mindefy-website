import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="mt-20 sm:mt-24 lg:mt-28 mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm sm:text-[1rem] font-bold tracking-widest uppercase mb-4 lg:mb-5">
          {data.tag}
        </h1>

        <p className="text-xl sm:text-2xl lg:text-[2.25rem] font-semibold text-[#000000] mb-4 lg:mb-7 leading-tight max-w-sm sm:max-w-2xl lg:max-w-200 mx-auto px-2 sm:px-0">
          {data.title}
        </p>

        <div className="w-full max-w-xs sm:max-w-2xl lg:w-245.5 font-normal mx-auto mb-6 lg:mb-9 text-justify space-y-4 lg:space-y-5 px-4 sm:px-6 lg:px-0">
          <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="relative w-full h-48 sm:h-64 lg:h-120.5 mx-auto mb-12 lg:mb-20 px-4 sm:px-6 lg:px-0">
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
