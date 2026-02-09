import Image from "next/image";
import { implementationSteps } from "./data";

export default function TechnicalImplementationSection() {
  return (
    <section
      id="technical-implementation"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold text-[#2B7575] mb-4">
            TECHNICAL IMPLEMENTATION
          </h2>
          <h2 className="text-xl font-normal text-[#333333]">
            The recommendation engine was built as follows (high-level
            overview):
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
          {implementationSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl border-2 border-[#3894FF40] w-[15.31rem] relative"
            >
              <div className="flex items-center justify-between">
                <div className="relative mb-5 ml-6 mt-6 w-20 h-20">
                  <Image src={step.icon} alt={step.alt} fill loading="lazy" />
                </div>
                <div className="text-7xl mr-7.5 font-normal text-[#3894FF26]">
                  {step.number}
                </div>
              </div>
              <h3
                className="text-base font-medium mx-6 mb-7 text-[#0D223A]"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
