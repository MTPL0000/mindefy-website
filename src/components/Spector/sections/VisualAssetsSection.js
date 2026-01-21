import Image from "next/image";

export default function VisualAssetsSection({ data }) {
  return (
    <div className="mt-12 md:mt-20 m-auto flex flex-col items-center justify-center gap-12 md:gap-18 px-4">
      {/* Icons */}
      <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-7">
        <p className="text-[#FF5722] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
          {data.icons.title}
        </p>
        <div className="relative aspect-3/1 w-full overflow-hidden">
          <Image
            src={data.icons.image}
            alt={data.icons.imageAlt}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Product Illustrations */}
      <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-7">
        <p className="text-[#FF5722] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
          {data.productIllustrations.title}
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-46 justify-items-center max-w-6xl mx-auto">
          {data.productIllustrations.images.map((img, index) => (
            <div
              key={index}
              className={`relative aspect-square w-40 sm:w-48 lg:w-50 overflow-hidden ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Process Illustrations */}
      <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-7">
        <p className="text-[#FF5722] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
          {data.processIllustrations.title}
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-[2.4rem] justify-items-center max-w-7xl mx-auto">
          {data.processIllustrations.images.map((img, index) => (
            <div
              key={index}
              className="relative aspect-square w-48 sm:w-52 lg:w-[14.7rem] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Application Interface */}
      <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-7">
        <p className="text-[#FF5722] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
          {data.applicationInterface.title}
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20 justify-items-center max-w-6xl mx-auto">
          {data.applicationInterface.images.map((img, index) => (
            <div
              key={index}
              className={`relative aspect-square w-48 sm:w-56 lg:w-60 overflow-hidden ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Data Visualization */}
      <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-7">
        <p className="text-[#FF5722] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
          {data.dataVisualization.title}
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[4.3rem] justify-items-center max-w-6xl mx-auto">
          {data.dataVisualization.images.map((img, index) => (
            <div
              key={index}
              className={`relative aspect-square w-56 sm:w-[16rem] lg:w-68 overflow-hidden ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
