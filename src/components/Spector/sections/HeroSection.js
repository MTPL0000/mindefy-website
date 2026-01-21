import Image from "next/image";

export default function HeroSection({ data }) {
  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col gap-1 items-center justify-center max-w-4xl lg:max-w-6xl mx-auto mt-4 md:mt-8 px-4">
        <h1 className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-normal">
          {data.title}
        </h1>
        <div className="m-auto relative aspect-3/1 w-[16rem] sm:w-[18rem] md:w-[20rem] overflow-hidden">
          <Image
            src={data.logo}
            alt={data.logoAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,87,34,0.60)_52.4%,rgba(254,254,254,0.6)_100%)]">
        <div className="relative aspect-4/3 sm:aspect-3/2 md:aspect-2/1 w-full overflow-hidden">
          <Image
            src={data.mainImage}
            alt={data.mainImageAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
