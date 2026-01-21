import Image from "next/image";

export default function FeatureCard({ feature, index }) {
  const iconSizes = {
    0: "w-8 sm:w-10 lg:w-[2.93rem] h-16 sm:h-20 lg:h-22.5",
    1: "w-10 sm:w-12 lg:w-18.5 h-16 sm:h-20 lg:h-22.5",
    2: "w-10 sm:w-12 lg:w-[4.812rem] h-16 sm:h-20 lg:h-22.5",
    3: "w-12 sm:w-14 lg:w-21.25 h-16 sm:h-20 lg:h-22.5",
  };

  const titleMargins = {
    0: "mt-2 lg:mt-5.75",
    1: "mt-2 lg:mt-5.75",
    2: "mt-2 lg:mt-5.75",
    3: "mt-0 lg:-mt-2",
  };

  const descMargins = {
    0: "ml-0 lg:ml-[-2.85rem]",
    1: "ml-0 lg:-ml-21",
    2: "ml-0 lg:-ml-21",
    3: "ml-0 lg:ml-[-5.85rem]",
  };

  const titleSpacing = {
    0: "space-y-1 lg:space-y-2.5",
    1: "space-y-1 lg:space-y-2.5",
    2: "space-y-1 lg:space-y-2.5",
    3: "space-y-1 lg:space-y-1.5",
  };

  return (
    <div className="flex gap-3 lg:gap-4 w-full lg:w-[29.68rem] flex-1">
      <div className={`relative ${iconSizes[index]} shrink-0`}>
        <Image
          src={feature.icon}
          alt={feature.id}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <div>
        <h3
          className={`font-semibold text-lg sm:text-xl lg:text-2xl ${titleSpacing[index]} ${titleMargins[index]}`}
        >
          {feature.title.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </h3>
        <p
          className={`text-sm sm:text-base lg:text-[1rem] font-normal text-[#444444] leading-relaxed ${descMargins[index]} text-justify mt-2 lg:mt-0`}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
