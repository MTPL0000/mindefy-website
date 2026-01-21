import Image from "next/image";

export default function AdvantageCard({ item }) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${
        item.bgColor || ""
      } rounded-2xl py-4 lg:py-2.5 px-4 lg:px-3.5`}
    >
      <div
        className={`flex-1 ${item.reverse ? "order-1 lg:order-2" : "mb-4 lg:mb-0"}`}
      >
        <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 lg:mb-4 text-center lg:text-left">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
          {item.description}
        </p>
      </div>
      <div
        className={`flex-1 relative h-48 lg:h-64 ${
          item.reverse ? "mb-4 lg:mb-0 order-2 lg:order-1" : ""
        }`}
      >
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
