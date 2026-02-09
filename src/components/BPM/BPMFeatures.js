"use client";

import Image from "next/image";
import BPMAdvantageCard from "./BPMAdvantageCard";

const BPMItem = [
  {
    title: "Process Efficiency",
    desc: "Mindefy acts as a perceptive diagnostician for your business, identifying bottlenecks, redundancies, and inefficiencies within your processes. Once identified, we systematically streamline these processes, resulting in a reduction in costs and an increase in productivity. In essence, we transform your processes into lean and efficient mechanisms that drive your business forward.",
    img: "/images/BPM1.webp",
  },
  {
    title: "Improved Visibility",
    desc: "With Mindefy's advanced BPM tools, you gain real-time insights into your operations. You can monitor key performance indicators (KPIs) and make data-driven decisions that lead to more favorable outcomes. This visibility enables you to stay agile and responsive in a rapidly changing business environment.",
    img: "/images/BPM2.webp",
  },
  {
    title: "Enhanced Collaboration",
    desc: "Mindefy's BPM solutions foster seamless collaboration among teams and departments, breaking down silos and improving communication. The result is increased innovation and elevated levels of customer satisfaction. When your teams can work harmoniously and communicate effectively, it enhances your organization's ability to adapt and serve customers more effectively. ",
    img: "/images/BPM3.webp",
  },
  {
    title: "Flexibility and Scalability",
    desc: "As your business evolves and grows, your processes must adapt to support these changes. Mindefy's BPM solutions are flexible and scalable, ensuring that they not only keep pace with your business but also facilitate your expansion. This adaptability is crucial in helping your business remain agile and responsive in a dynamic marketplace.",
    img: "/images/BPM4.webp",
  },
  {
    title: "Compliance and Risk Management",
    desc: "Staying compliant with industry regulations and mitigating risks effectively is of paramount importance in today's business landscape. Mindefy's BPM tools include robust compliance and risk management features, which help ensure that your processes adhere to relevant regulations and are equipped to manage and mitigate risks effectively.",
    img: "/images/BPM5.webp",
  },
];

const advantageCards = [
  {
    title: "Process Discovery",
    description:
      "We work closely with your team to identify existing processes, pinpoint pain points, and identify opportunities for improvement. This phase sets the stage for transformation.",
    imageSrc: "/images/TA4.svg",
    imageAlt: "Process Discovery",
    containerClassName:
      "flex flex-col lg:flex-row xl:flex-row bg-[#E6E6E7] rounded-xl overflow-hidden",
    contentClassName:
      "flex-1 w-full lg:w-auto xl:w-123.5 p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5",
    imageWrapperClassName: "shrink-0 p-4 lg:p-0",
    imageContainerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:mr-2.5 xl:h-[16.56rem] relative",
  },
  {
    title: "Process Design",
    description:
      "Leveraging industry best practices, we design optimized processes that align with your business objectives. Our designs are not just improvements; they are tailored to enhance your strategic goals.",
    imageSrc: "/images/BPM6.webp",
    imageAlt: "Process Design",
    containerClassName: "flex flex-col lg:flex-row xl:flex-row",
    contentClassName:
      "flex-1 w-full lg:w-auto xl:w-123.5 p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5 order-1 lg:order-2 xl:order-2",
    imageWrapperClassName: "shrink-0 order-2 lg:order-1 xl:order-1 p-4 lg:p-0",
    imageContainerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:ml-2.5 xl:h-[16.56rem] relative",
  },
  {
    title: "Process Automation",
    description:
      "Automation is the cornerstone of efficiency. Mindefy leverages automation to reduce manual tasks, minimize errors, and elevate the overall efficiency of your processes. Automation allows your team to focus on high-value tasks while routine operations are handled seamlessly.",
    imageSrc: "/images/BPM7.webp",
    imageAlt: "Process Automation",
    containerClassName:
      "flex flex-col lg:flex-row xl:flex-row bg-[#E6E6E7] rounded-xl overflow-hidden",
    contentClassName:
      "flex-1 w-full lg:w-auto xl:w-123.5 p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5",
    imageWrapperClassName: "shrink-0 p-4 lg:p-0",
    imageContainerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:mr-2.5 xl:h-[16.56rem] relative",
  },
  {
    title: "Monitoring and Analytics",
    description:
      "Real-time monitoring and data analytics provide you with insights into process performance. This transparency empowers you to make data-driven decisions, pivot as needed, and optimize your operations continually.",
    imageSrc: "/images/BPM8.webp",
    imageAlt: "Monitoring and Analytics",
    containerClassName: "flex flex-col lg:flex-row xl:flex-row",
    contentClassName:
      "flex-1 w-full lg:w-auto xl:w-123.5 p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5 order-1 lg:order-2 xl:order-2",
    imageWrapperClassName: "shrink-0 order-2 lg:order-1 xl:order-1 p-4 lg:p-0",
    imageContainerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:ml-2.5 xl:h-[16.56rem] relative",
  },
  {
    title: "Continuous Improvement",
    description:
      "We embrace the philosophy of continuous improvement. Our team collaborates closely with you to refine processes as your business evolves, ensuring that they remain aligned with your dynamic business goals.",
    imageSrc: "/images/BPM9.webp",
    imageAlt: "Continuous Improvement",
    containerClassName:
      "flex flex-col lg:flex-row xl:flex-row bg-[#E6E6E7] rounded-xl overflow-hidden",
    contentClassName:
      "flex-1 w-full lg:w-auto xl:w-123.5 p-4 md:p-5 lg:p-6 xl:my-[3.781rem] xl:mx-0 xl:ml-5.5",
    imageWrapperClassName: "shrink-0 p-4 lg:p-0",
    imageContainerClassName: "flex items-center justify-center",
    imageSizeClassName:
      "w-40 h-24 md:w-48 md:h-28 lg:w-64 lg:h-36 xl:w-[23.18rem] xl:my-2.5 xl:mr-2.5 xl:h-[16.56rem] relative",
  },
];

export default function BPMFeatures() {
  return (
    <>
      <section className="px-4 md:px-6 lg:px-8 xl:px-0">
        <div className="max-w-[95%] md:max-w-220 lg:max-w-260 xl:max-w-289.5 mx-auto">
          <div className="text-center">
            <h2 className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#000000] mb-8 md:mb-10 lg:mb-11 px-2">
              The Upsides of Opting for Mindefy's BPM Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap xl:justify-center gap-4 md:gap-5 lg:gap-6">
            {BPMItem.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 md:p-5 lg:p-6 xl:px-6 xl:py-5 w-full h-auto min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:w-[23.12rem] xl:h-auto flex flex-col items-center text-center justify-start overflow-hidden"
                style={{
                  boxShadow:
                    "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="w-full h-auto mb-4 xl:mb-4.5 flex items-center justify-center">
                  <h3 className="font-semibold text-base md:text-lg lg:text-xl xl:text-2xl leading-tight text-center px-2 py-2 wrap-break-word hyphens-auto">
                    {item.title}
                  </h3>
                </div>

                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-55.5 xl:h-49.5 mb-4 xl:mb-4.5 shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 w-full flex items-start">
                  <p className="text-xs md:text-sm lg:text-sm xl:text-sm font-normal w-full text-[#444444] leading-relaxed text-justify px-1 wrap-break-word hyphens-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-18 lg:mt-20 xl:mt-24 px-3 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full max-w-[98%] md:max-w-220 lg:max-w-240 xl:max-w-252 mx-auto">
          <div className="w-full max-w-[98%] md:max-w-180 lg:max-w-200 xl:w-235.5 mx-auto text-center mb-8 md:mb-9 lg:mb-10 xl:mb-10">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#000000] mb-4 md:mb-6 lg:mb-7 px-3">
              The Upsides of Opting for Mindefy's BPM Solutions
            </h2>
            <h2 className="text-sm md:text-base lg:text-base font-normal text-[#000000] px-3">
              At Mindefy, we take a comprehensive and systematic approach to
              BPM, with a focus on delivering tangible results
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-6 md:gap-7 lg:gap-8 xl:gap-11.5 w-full max-w-[98%] md:max-w-200 lg:max-w-220 xl:max-w-225 mx-auto">
            {advantageCards.map((card) => (
              <BPMAdvantageCard
                key={card.title}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                containerClassName={card.containerClassName}
                contentClassName={card.contentClassName}
                imageWrapperClassName={card.imageWrapperClassName}
                imageContainerClassName={card.imageContainerClassName}
                imageSizeClassName={card.imageSizeClassName}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-18 lg:mt-20 px-3 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full max-w-[98%] md:max-w-220 lg:max-w-240 xl:max-w-251 mx-auto">
          <div className="text-center w-full max-w-[98%] md:max-w-md lg:max-w-120 xl:w-134 mx-auto mb-8 md:mb-10 lg:mb-12 xl:mb-12">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#000000] px-3">
              Why Mindefy Excels in BPM ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:flex xl:flex-wrap w-full max-w-[98%] md:max-w-full lg:max-w-full xl:max-w-251 mx-auto gap-4 md:gap-0 lg:gap-0 xl:gap-0">
            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-125.5 border-2 md:border lg:border xl:border border-[#000000] md:border-r md:border-b md:border-l-0 md:border-t-0 lg:border-r lg:border-b lg:border-l-0 lg:border-t-0 xl:border-r xl:border-b xl:border-l-0 xl:border-t-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-end xl:justify-end mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 mr-0 md:mr-0 lg:mr-5 xl:mr-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm1.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-4 md:mb-5 lg:mb-6 xl:mb-6 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#000000] wrap-break-word">
                  Expertise
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify wrap-break-word hyphens-auto">
                  Mindefy's team of seasoned BPM professionals brings a proven
                  track record of delivering results to businesses across a
                  diverse range of industries. Our collective expertise ensures
                  that you receive actionable solutions backed by real-world
                  experience.
                </p>
              </div>
            </div>

            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-125.5 border-2 md:border lg:border xl:border border-[#000000] md:border-l md:border-b md:border-r-0 md:border-t-0 lg:border-l lg:border-b lg:border-r-0 lg:border-t-0 xl:border-l xl:border-b xl:border-r-0 xl:border-t-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-start xl:justify-start mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 ml-0 md:ml-0 lg:ml-5 xl:ml-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm2.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-4 md:mb-5 lg:mb-6 xl:mb-6 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#000000] wrap-break-word">
                  Tailored Solutions
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify wrap-break-word hyphens-auto">
                  We firmly believe in the principle that there is no
                  one-size-fits-all solution in BPM. As such, our BPM offerings
                  are never off-the-shelf; they are always customized to meet
                  your unique requirements. Your business is unique, and your
                  BPM solutions should reflect that uniqueness.
                </p>
              </div>
            </div>

            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-125.5 border-2 md:border lg:border xl:border border-[#000000] md:border-r md:border-t md:border-l-0 md:border-b-0 lg:border-r lg:border-t lg:border-l-0 lg:border-b-0 xl:border-r xl:border-t xl:border-l-0 xl:border-b-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-end xl:justify-end mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 mr-0 md:mr-0 lg:mr-5 xl:mr-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm3.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-2 md:mb-3 lg:mb-2.5 xl:mb-2.5 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#000000] wrap-break-word">
                  Cutting-Edge Technology
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify wrap-break-word hyphens-auto">
                  Mindefy consistently leverages the latest BPM tools and
                  technologies to keep your business ahead of the competition.
                  With the rapid pace of technological change, our commitment to
                  staying at the forefront ensures that your BPM solutions are
                  always at the cutting edge.
                </p>
              </div>
            </div>

            <div className="bg-white flex-1 w-full md:w-auto lg:w-auto xl:max-w-125.5 border-2 md:border lg:border xl:border border-[#000000] md:border-l md:border-t md:border-r-0 md:border-b-0 lg:border-l lg:border-t lg:border-r-0 lg:border-b-0 xl:border-l xl:border-t xl:border-r-0 xl:border-b-0 rounded-lg md:rounded-none lg:rounded-none xl:rounded-none p-4 md:p-5 lg:p-6 xl:p-6 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center md:justify-center lg:justify-start xl:justify-start mb-4 md:mb-5 lg:mb-6 xl:mb-6">
                <div className="relative w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-14 xl:h-14 ml-0 md:ml-0 lg:ml-5 xl:ml-5 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                  <Image
                    src="/images/bpm4.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="px-2 md:px-4 lg:px-6 xl:px-6 mb-2 md:mb-3 lg:mb-2.5 xl:mb-2.5 w-full">
                <h3 className="text-center md:text-center lg:text-left xl:text-left mb-3 md:mb-4 lg:mb-5 xl:mb-5 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#000000] wrap-break-word">
                  Client-Centric Approach
                </h3>

                <p className="text-sm md:text-sm lg:text-base xl:text-base font-normal text-[#444444] leading-relaxed text-justify wrap-break-word hyphens-auto">
                  Your success is our success. We work closely with you to
                  achieve your goals and drive business growth. Our commitment
                  to your success is unwavering, and we consider ourselves not
                  just your service provider but your strategic partner in your
                  journey toward BPM excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
