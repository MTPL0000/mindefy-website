import Image from "next/image";

export default function WebsiteDesignSection({ data }) {
  return (
    <div className="w-full pt-8 md:pt-20 pb-8 md:pb-20 flex flex-col items-center justify-center gap-8 md:gap-12 bg-[#EDF0FE] px-4">
      <p className="text-[#FF5722] text-2xl md:text-3xl lg:text-4xl font-medium uppercase">
        {data.title}
      </p>

      <div className="w-full max-w-360 flex flex-col items-center justify-center gap-8 md:gap-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          {data.pages.slice(0, 2).map((page, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-5 md:gap-7"
            >
              <span className="text-[#333333] text-xl md:text-2xl font-normal">
                {page.title}
              </span>
              <div className="relative overflow-hidden max-w-[400px] md:max-w-[500px] lg:max-w-[560px]">
                <Image
                  src={page.image}
                  alt="image"
                  width={page.width}
                  height={page.height}
                  className="object-contain w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 justify-items-center">
          {data.pages.slice(2, 4).map((page, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-5 md:gap-7"
            >
              <span className="text-[#333333] text-xl md:text-2xl font-normal">
                {page.title}
              </span>
              <div className="relative overflow-hidden max-w-[400px] md:max-w-[500px] lg:max-w-[560px]">
                <Image
                  src={page.image}
                  alt="image"
                  width={page.width}
                  height={page.height}
                  className="object-contain w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
