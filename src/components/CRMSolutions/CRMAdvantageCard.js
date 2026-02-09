import Image from "next/image";

export default function CRMAdvantageCard({
  title,
  description,
  imageSrc,
  imageAlt,
  containerClassName,
  contentClassName,
  imageWrapperClassName,
  imageInnerClassName,
  imageSizeClassName,
  imageFirst = false,
}) {
  const content = (
    <div className={contentClassName}>
      <h3 className="text-xl lg:text-2xl lg:ml-3.5 mt-2.5 font-semibold text-[#000000] mb-4">
        {title}
      </h3>
      <p className="text-sm lg:text-base lg:mx-3.5 mb-2.5 w-full lg:w-104 text-[#444444] leading-relaxed text-left lg:text-justify">
        {description}
      </p>
    </div>
  );

  const image = (
    <div className={imageWrapperClassName}>
      <div className={imageInnerClassName}>
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

  return (
    <div
      className={containerClassName}
      style={{
        boxShadow:
          "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
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
