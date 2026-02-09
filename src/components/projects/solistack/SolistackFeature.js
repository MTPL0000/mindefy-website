import Image from "next/image";

export default function SolistackFeature({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  swapOnLg = false,
  imageFirst = false,
}) {
  const contentOrderClass = swapOnLg ? "order-2 lg:order-1" : "order-2";
  const imageOrderClass = swapOnLg ? "order-1 lg:order-2" : "order-1";

  const content = (
    <div
      className={`flex flex-col items-start justify-center gap-3 md:gap-5 flex-1 ${contentOrderClass}`}
    >
      <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000] relative w-fit">
        {title}
      </h4>
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${title}-paragraph-${index}`}
          className="text-sm md:text-base font-normal text-[#000000] text-justify leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );

  const image = (
    <div
      className={`relative aspect-square w-full max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden flex-1 ${imageOrderClass}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-contain"
        loading="lazy"
      />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full">
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
