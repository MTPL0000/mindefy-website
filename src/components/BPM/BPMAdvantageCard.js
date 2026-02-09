import Image from "next/image";

export default function BPMAdvantageCard({
  title,
  description,
  imageSrc,
  imageAlt,
  containerClassName,
  contentClassName,
  imageWrapperClassName,
  imageContainerClassName,
  imageSizeClassName,
}) {
  return (
    <div className={containerClassName}>
      <div className={contentClassName}>
        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#000000] mb-3 md:mb-3.5 lg:mb-4 wrap-break-word">
          {title}
        </h3>
        <p className="text-sm md:text-base lg:text-base text-[#444444] leading-relaxed text-justify wrap-break-word hyphens-auto">
          {description}
        </p>
      </div>
      <div className={imageWrapperClassName}>
        <div className={imageContainerClassName}>
          <div className={imageSizeClassName}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
