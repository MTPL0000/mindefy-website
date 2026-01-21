import Image from "next/image";

export default function IntroOverviewSection({ introduction, overview }) {
  return (
    <div className="flex flex-col items-center gap-12 md:gap-20 justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-3 w-full max-w-174 mx-auto">
        <p className="text-[#FF5225] text-sm lg:text-base font-bold tracking-wider uppercase">
          {introduction.tag}
        </p>
        <span className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#000000] text-center">
          {introduction.title}
        </span>
        <span className="text-sm lg:text-base font-normal text-[#000000] text-center">
          {introduction.description}
        </span>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-20">
        <div className="w-full xl:w-286 flex flex-col items-start justify-center gap-5">
          <p className="text-[#FF5722] text-xl md:text-2xl font-medium uppercase">
            {overview.tag}
          </p>
          {overview.paragraphs.map((paragraph, index) => (
            <span
              key={index}
              className="text-sm md:text-base font-normal text-[#333333]"
            >
              {paragraph}
            </span>
          ))}
        </div>

        <div className="relative aspect-square w-full max-w-[20rem] md:max-w-100 xl:max-w-none overflow-hidden">
          <Image
            src={overview.image}
            alt={overview.imageAlt}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
