import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl">
      <div
        className={`flex-1 w-full lg:w-165 ${
          service.reverse
            ? "my-4 lg:my-7 order-1 lg:order-2 mb-4 lg:mb-0"
            : "my-2 lg:my-4 mb-4 lg:mb-0"
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-[#000000] mb-2 sm:mb-2.5 text-center lg:text-left">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
          {service.description}
        </p>
      </div>
      <div
        className={`shrink-0 flex justify-center ${
          service.reverse
            ? "order-2 lg:order-1 lg:justify-start"
            : "lg:justify-end"
        }`}
      >
        <div className="flex items-center justify-center">
          <div
            className={`w-48 sm:w-56 md:w-[16rem] lg:w-68 ${
              service.reverse ? "lg:mr-8" : "lg:ml-8"
            } h-40 sm:h-48 md:h-56 lg:h-[15.26rem] relative`}
          >
            <Image
              src={service.image}
              alt={service.imageAlt}
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
