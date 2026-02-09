import Image from "next/image";

export default function SolutionCard({ card }) {
  return (
    <div className="flex-1 border-[#E9E9E9] border-[0.06625rem] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[#FFFFFF] rounded-[1.25rem]">
      <div className="flex pl-3 lg:pl-2.5 pt-3 lg:pt-2.5 pb-2">
        <div className="relative w-12 lg:w-15 h-12 lg:h-15 shrink-0">
          <Image
            src={card.icon}
            alt={`${card.title} Icon`}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="pl-3 lg:pl-2.5 pr-4 lg:pr-6 pb-6 lg:pb-9">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 lg:mb-5">
          {card.title}
        </h3>

        <p className="text-sm sm:text-base lg:text-base text-[#444444] leading-relaxed text-justify">
          {card.description}
        </p>
      </div>
    </div>
  );
}
