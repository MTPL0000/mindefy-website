import Image from "next/image";

export default function CustomizedSection({ data }) {
  return (
    <div className="w-full max-w-4xl lg:w-273.5 mx-auto px-4 sm:px-6 lg:px-3 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
      <div className="w-full lg:w-[36.18rem] lg:mx-1.5 lg:ml-3">
        <div className="lg:mx-3.5 mt-8 sm:mt-12 lg:mt-[5.09rem] mb-4">
          <p className="font-semibold tracking-wider text-lg sm:text-xl lg:text-2xl text-[#2C1010] text-center lg:text-left">
            {data.title}
          </p>
        </div>
        <div className="lg:mx-3.5 mb-8 sm:mb-12 lg:mb-[5.093rem]">
          <p className="font-normal text-sm sm:text-base lg:text-base text-justify text-[#444444] leading-relaxed tracking-wide">
            {data.description}
          </p>
        </div>
      </div>
      <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-93 lg:h-93.5 relative shrink-0">
        <Image
          src={data.image}
          alt={data.imageAlt}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
