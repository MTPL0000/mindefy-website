import Image from "next/image";
import { techStackData } from "./data";

export default function TechnologyStackSection() {
  return (
    <section
      id="technology-stack"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2B7575]">
            TECHNOLOGY STACK
          </h2>
        </div>

        {/* First Row - Languages, Monitoring, Data Storage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Languages */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Languages
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
              {techStackData.languages.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={item.icon} alt={item.alt} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Monitoring
            </h3>
            <div className="flex justify-center">
              {techStackData.monitoring.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={item.icon} alt={item.alt} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Storage */}
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Data Storage
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
              {techStackData.dataStorage.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={item.icon} alt={item.alt} fill loading="lazy" />
                  </div>
                  <p
                    className="text-xs sm:text-sm lg:text-base uppercase font-normal text-[#000000] leading-tight"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Deployment/Cloud and Front-End Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Deployment/Cloud */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-[#333333]">
              Deployment/Cloud
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:justify-center sm:gap-4 lg:gap-8 gap-4 sm:flex-wrap">
              {techStackData.deployment.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={item.icon} alt={item.alt} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Front-End Integration */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-[2rem] font-normal mb-6 sm:mb-8 lg:mb-10 text-gray-800">
              Front-End Integration
            </h3>
            <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8">
              {techStackData.frontEnd.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3">
                    <Image src={item.icon} alt={item.alt} fill loading="lazy" />
                  </div>
                  <p className="text-sm sm:text-base uppercase font-normal text-[#000000]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
