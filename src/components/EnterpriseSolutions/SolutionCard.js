import Image from "next/image";

export default function SolutionCard({ solution }) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        solution.bgColor || ""
      } rounded-xl overflow-hidden`}
    >
      <div
        className={`flex-1 p-6 sm:p-8 ${
          solution.reverse
            ? "lg:w-123.5 lg:my-[3.65rem] lg:mr-5.5 lg:p-0 order-1 lg:order-2"
            : "lg:w-123.5 lg:my-11 lg:ml-5.5 lg:p-0"
        }`}
      >
        <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
          {solution.name}
        </h3>
        <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-117.5 text-[#444444] leading-relaxed text-justify">
          {solution.description}
        </p>
      </div>
      <div
        className={`shrink-0 flex justify-center lg:block ${
          solution.reverse ? "order-2 lg:order-1" : ""
        }`}
      >
        <div
          className={`w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 ${
            solution.reverse ? "lg:ml-2.5" : "lg:mr-2.5"
          } lg:h-[16.56rem] relative`}
        >
          <Image
            src={solution.image}
            alt={solution.imageAlt}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
