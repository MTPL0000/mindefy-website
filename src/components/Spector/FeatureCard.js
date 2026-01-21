import Image from "next/image";

export default function FeatureCard({ feature }) {
  return (
    <div className="w-full max-w-120 flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center bg-[#DDEFFD] aspect-square w-20 md:w-24 lg:w-28 border-4 md:border-6 lg:border-8 border-[#F0F8FE] rounded-[1.25rem] md:rounded-3xl lg:rounded-[1.75rem]">
        <div className="relative aspect-2/1 w-full overflow-hidden">
          <Image
            src={feature.icon}
            alt="image"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h3
          className="text-lg md:text-xl font-semibold text-[#101828] text-center"
          dangerouslySetInnerHTML={{ __html: feature.title.replace(/\n/g, "<br />") }}
        />
        <p className="text-sm md:text-base font-normal text-[#475467] text-center">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
