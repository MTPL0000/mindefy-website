import Image from "next/image";
import { designProcessList, dataList, roleList } from "./data";

export default function DesignProcessSection() {
  return (
    <>
      <div className="w-full max-w-286 mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-12 gap-6 lg:gap-0">
          <div className="w-full lg:w-auto">
            <h3 className="text-[#F690A1] text-lg sm:text-xl lg:text-3xl font-normal flex items-center gap-2">
              <span className="w-6 sm:w-8" role="img" aria-label="pin">
                📍
              </span>{" "}
              Preparation
            </h3>
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-6xl font-bold mt-2">
              DESIGN PROCESS
            </h2>
          </div>
          <div className="w-full lg:w-auto">
            <h4 className="text-[#F88598] text-sm sm:text-base font-bold mb-2">
              Design Flow
            </h4>
            <ul className="text-[#2B7575] list-disc list-inside leading-relaxed text-xs sm:text-sm font-normal">
              <li>Research & Ideation</li>
              <li>Design & Prototype</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {designProcessList.map((step, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="flex flex-col items-center relative">
                <span className="w-6 h-6 bg-[#FA798D] rounded-full mb-2"></span>
                {i !== 3 && (
                  <div className="h-px w-full border-dashed border-t-2 border-[#FC6B81] absolute top-2 left-[50%] translate-x-3 z-[-1] sm:w-[120%] hidden lg:block"></div>
                )}
              </div>
              <h4 className="text-[#F8889A] text-lg sm:text-xl font-semibold mt-3">
                {step.title}
              </h4>
              <p className="text-[#2B7575] text-sm sm:text-base mt-1 max-w-[250px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-286 mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 items-start">
          <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-2">
            Design Timeline
          </h2>
          <span className="text-[#2B7575] text-base sm:text-lg font-normal">
            Our achievement in the journey depicted in numbers
          </span>
          <div className="relative aspect-2/1 w-full overflow-hidden">
            <Image
              src="/images/projects/EF-4.webp"
              alt="image"
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-286 mx-auto px-4 sm:px-6">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {dataList.map((section, index) => (
            <div key={index}>
              <div className="bg-[#CBEBEB] text-[#52B7B7] text-sm sm:text-base px-3 sm:px-4 py-2 rounded-md font-semibold mb-3 sm:mb-4">
                {section.title}
              </div>
              <ul className="text-[#2B7575] list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm font-normal">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 mt-4">
        <div className="relative md:aspect-3/1 w-full overflow-hidden">
          <div className="relative z-10 flex flex-col gap-2 items-center">
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-2 mb-4">
              My Role
            </h2>
            <span className="w-full max-w-188 px-4 text-[#377D7D] text-sm sm:text-base font-normal text-center">
              This process provided me with clear visibility to move the project
              forward, including creating backlogs, wireframes, branding, and
              ultimately designing the interface.
            </span>
          </div>
          <Image
            src="/images/projects/EF-5.png"
            alt="image"
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="w-full mt-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-15 text-center px-4 sm:px-6">
          {roleList.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-100 mx-auto flex flex-col items-center gap-3"
            >
              <div className="relative aspect-square w-8 overflow-hidden">
                <Image
                  src={item.icon || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <h4 className="text-[#52B7B7] font-semibold text-lg sm:text-xl lg:text-2xl">
                {item.title}
              </h4>
              <p className="text-[#2B7575] text-sm sm:text-base leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
