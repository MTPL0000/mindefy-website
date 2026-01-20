import Image from "next/image";
import { notes } from "./data";

export default function UXAuditSection() {
  return (
    <div className="w-full max-w-286 mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-6 lg:gap-0">
        <div>
          <h3 className="text-[#FC6B81] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2">
            <span className="w-6 sm:w-8" role="img" aria-label="pin">📍</span> Preparation
          </h3>
          <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold mt-2">UX Audit</h2>
        </div>
        <div>
          <h4 className="text-[#F98194] text-sm sm:text-base font-black mb-2">Design Flow</h4>
          <ul className="text-[#2B7575] list-disc list-inside leading-relaxed text-xs sm:text-sm font-normal">
            <li>Heat Map Testing</li>
            <li>Usability Testing</li>
            <li>Scenario Testing</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-1">
          <div className="relative">
            <Image src="/images/projects/EF-6.webp" alt="image" width={668} height={985} className="object-contain w-full h-auto" loading="lazy" />
          </div>
          <div className="relative">
            <Image src="/images/projects/EF-7.webp" alt="image" width={668} height={1094} className="object-contain w-full h-auto" loading="lazy" />
          </div>
        </div>
        <div className="w-full lg:w-[38%] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {notes.map((text, i) => (
            <div key={i} className="bg-[#FFD966] w-full aspect-square max-w-48 mx-auto text-[#222222] text-xs sm:text-sm lg:text-base font-normal rounded-sm p-2 sm:p-3 shadow-md flex items-center justify-center">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
