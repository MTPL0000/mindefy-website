import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm sm:text-base lg:text-[1rem] font-bold tracking-widest uppercase mb-4 sm:mb-5 lg:mb-5">
          {data.tag}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[#000000] mb-4 sm:mb-6 lg:mb-7 leading-tight max-w-full sm:max-w-4xl lg:max-w-221 mx-auto px-4 sm:px-0">
          <span className="font-normal">{data.title.normal}</span>
          {data.title.bold}
          <span>{data.title.normal2}</span>
          {data.title.bold2}
        </p>

        <div className="w-full max-w-4xl lg:w-245.5 font-normal mx-auto mb-6 sm:mb-8 lg:mb-9 text-justify space-y-4 sm:space-y-5 lg:space-y-5 px-4 sm:px-6 lg:px-0">
          {data.descriptions.map((desc, index) => (
            <p
              key={index}
              className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed"
            >
              {desc}
            </p>
          ))}
        </div>

        <div className="relative w-full sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[52.39%] aspect-4/3 sm:aspect-3/2 md:aspect-16/10 lg:aspect-video mx-auto mb-6">
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
