import Image from "next/image";

export default function UserJourneySection() {
  return (
    <div className="w-full mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-12 lg:mb-[3.185rem] gap-6 lg:gap-0">
          <div>
            <h3 className="text-[#F88598] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2 mb-2">
              <span>
                <Image src="/images/EF.png" alt="User Journey Map - Complete journey phases with touchpoints, doing, opportunities and needs sections" width={32} height={32} className="w-6 sm:w-8 h-6 sm:h-8 object-contain" loading="lazy" />
              </span>
              Define
            </h3>
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold">USER JOURNEY MAP</h2>
          </div>
          <div className="w-full lg:w-[10.68rem] mt-0 lg:mt-8">
            <h4 className="text-[#F88598] text-sm sm:text-base font-bold mb-2">Point take away</h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                <li>• Entice</li>
                <li>• Enter</li>
                <li>• Engage</li>
              </ul>
              <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                <li>• Exit</li>
                <li>• Extend</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="relative w-full">
            <Image src="/images/earlyfoods1.webp" alt="User Journey Map - Complete journey phases with touchpoints, doing, opportunities and needs sections" width={1200} height={800} className="w-full h-auto object-contain" loading="lazy" />
          </div>
          <div className="relative w-full mt-[3.1rem] mb-11.5">
            <Image src="/images/earlyfoods2.webp" alt="User Journey Map Summary - Satisfaction metrics and total respondent data" width={1200} height={200} className="w-full h-auto object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}
