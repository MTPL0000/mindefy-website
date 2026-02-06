export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  contentClassName = "",
}) {
  const contentClasses = [reverse ? "order-1 md:order-2" : "", contentClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {reverse ? (
        <>
          <div className="order-2 md:order-1">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-square w-full md:w-4xl object-contain mx-auto"
              loading="lazy"
            />
          </div>
          <div className={contentClasses}>
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              {title}
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-poppins font-normal text-[#444444] leading-relaxed text-center lg:text-left">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={contentClasses}>
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-poppins font-semibold text-[#000000] mb-6 xl:mb-10 text-center lg:text-left">
              {title}
            </h3>
            <p className="text-sm md:text-base xl:text-lg font-poppins font-normal text-[#444444] leading-relaxed text-center lg:text-left">
              {description}
            </p>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-square w-full md:w-4xl object-contain mx-auto"
            loading="lazy"
          />
        </>
      )}
    </div>
  );
}
