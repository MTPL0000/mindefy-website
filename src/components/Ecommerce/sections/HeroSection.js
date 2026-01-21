import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-5">
          {data.tag}
        </h1>

        <p className="text-xl md:text-2xl xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-200 mx-auto px-4 xl:px-0">
          {data.title}
        </p>

        <div className="w-full max-w-2xl xl:w-241 font-normal mx-auto mb-9 text-justify space-y-7 px-4 xl:px-0">
          <p className="text-[1rem] text-[#444444] leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-120.5 mx-auto mb-20">
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
