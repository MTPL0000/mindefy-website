import Image from "next/image";

export default function LowCodeFeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  containerClassName,
  contentClassName,
  imageWrapperClassName,
  imageSizeClassName,
}) {
  return (
    <div className={containerClassName}>
      <div className={contentClassName}>
        <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#000000] mb-3 lg:mb-4">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify lg:max-w-[34.312rem]">
          {description}
        </p>
      </div>
      <div className={imageWrapperClassName}>
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
  );
}
