import Image from "next/image";

export default function TestingServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  containerClassName,
  contentClassName,
  imageWrapperClassName,
  imageSizeClassName,
  titleTag = "h3",
  imageFirst = false,
}) {
  const TitleTag = titleTag === "p" ? "p" : "h3";

  const content = (
    <div className={contentClassName}>
      <TitleTag className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
        {title}
      </TitleTag>
      <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
        {description}
      </p>
    </div>
  );

  const image = (
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
  );

  return (
    <div className={containerClassName}>
      {imageFirst ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}
