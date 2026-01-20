import Image from "next/image";
import { competitors } from "./data";

export default function CompetitorAnalysisSection() {
  return (
    <div className="w-full mx-auto mt-12 sm:mt-16 lg:mt-20 bg-[#E9F6F6]">
      <div className="mx-auto py-8 sm:py-10 lg:py-12">
        <div className="relative w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
          <div className="relative flex flex-col gap-2 items-center pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6">
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center">Competitor Analysis</h2>
            <p className="text-[#377D7D] leading-relaxed text-sm sm:text-base font-normal text-center w-full md:w-150 lg:w-188 px-4">
              To evaluate the features, usability, and user experience of competitors' products or services. This analysis helps identify strengths, weaknesses, opportunities, and threats in the market, enabling designers and companies to uncover gaps, differentiate their offerings, and enhance user satisfaction.
            </p>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-7 w-full max-w-[45.81rem] mx-auto px-4 sm:px-6 lg:px-0">
          {competitors.map((comp, idx) => (
            <div key={idx} className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-0 ${comp.position === "right" ? "" : ""}`}>
              {comp.position === "left" && (
                <div className="shrink-0 order-1 sm:order-1">
                  <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square mr-0 sm:mr-7 mx-auto">
                    <Image src={comp.logo} alt={comp.name} fill className="object-contain" loading="lazy" />
                  </div>
                </div>
              )}
              <div className={`flex-1 w-full ${comp.position === "left" ? "sm:w-[28.06rem] order-2 sm:order-2" : "order-2 sm:order-1"}`}>
                <h3 className="text-[#2B7575] text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">{comp.name}</h3>
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">Unique value proposition</h4>
                  <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">{comp.uvp}</p>
                </div>
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">Advantages</h4>
                  <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">{comp.advantages}</p>
                </div>
                <div>
                  <h4 className="text-[#333333] text-lg sm:text-xl font-semibold mb-2">Disadvantages</h4>
                  <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed mb-2 text-justify">{comp.disadvantages}</p>
                </div>
              </div>
              {comp.position === "right" && (
                <div className="shrink-0 order-1 sm:order-2">
                  <div className="relative w-16 sm:w-20 lg:w-3xs aspect-square ml-0 sm:ml-7 mx-auto">
                    <Image src={comp.logo} alt={comp.name} fill className="object-contain" loading="lazy" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
