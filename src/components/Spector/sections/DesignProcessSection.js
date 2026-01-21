import Image from "next/image";

export default function DesignProcessSection({ data }) {
  return (
    <div className="w-full mt-12 md:mt-20">
      {/* Mobile/Tablet Version - Text outside image */}
      <div className="block xl:hidden">
        <div className="flex flex-col items-start justify-center gap-3 md:gap-5 mb-4 px-4">
          <p className="text-[#FF5722] text-lg md:text-2xl font-medium uppercase tracking-wide">
            {data.tag}
          </p>
          <h2 className="text-2xl md:text-4xl font-normal text-[#000000] uppercase">
            {data.title}
          </h2>
        </div>
        <div className="relative aspect-2/1 sm:aspect-2/1 w-full overflow-hidden">
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Desktop Version - Text on image */}
      <div className="hidden xl:block">
        <div className="relative aspect-2/1 w-full overflow-hidden">
          <div className="absolute top-24 left-40 w-fit flex flex-col items-start justify-center gap-5 z-10">
            <p className="text-[#FF5722] text-2xl font-medium uppercase tracking-wide">
              {data.tag}
            </p>
            <h2 className="text-4xl font-normal text-[#000000] uppercase">
              {data.title}
            </h2>
          </div>
          <Image
            src={data.image}
            alt={data.imageAlt}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
