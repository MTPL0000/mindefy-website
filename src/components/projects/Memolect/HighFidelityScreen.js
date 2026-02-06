import Image from "next/image";

export default function HighFidelityScreen({
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
  wrapperClassName = "",
  imageWrapperClassName = "",
  contentWrapperClassName = "",
  wrapText = false,
  textWrapperClassName = "",
  accentClassName = "",
}) {
  const paragraphNodes = paragraphs.map((paragraph, index) => (
    <p key={`${imageSrc}-${index}`} className={paragraph.className}>
      {paragraph.text}
    </p>
  ));

  const content = wrapText ? (
    <div className={textWrapperClassName}>{paragraphNodes}</div>
  ) : (
    paragraphNodes
  );

  return (
    <div className={`relative ${wrapperClassName}`}>
      <div
        className={`flex ${
          reverse ? "flex-col-reverse" : "flex-col"
        } md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-30`}
      >
        {reverse ? (
          <>
            <div className={imageWrapperClassName}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
            <div className={contentWrapperClassName}>{content}</div>
          </>
        ) : (
          <>
            <div className={contentWrapperClassName}>{content}</div>
            <div className={imageWrapperClassName}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </>
        )}
      </div>
      {accentClassName ? <div className={accentClassName}></div> : null}
    </div>
  );
}
