"use client";

import Image from "next/image";
import TestingServiceCard from "./TestingServiceCard";

const testingServices = [
  {
    title: "Test Automation using Selenium",
    description:
      "We harness the power of Selenium, an open-source test automation framework, to automate your application testing process. Our experts create robust and scalable automation scripts that accelerate test execution, improve test coverage, and reduce the manual effort required for repetitive tasks. By leveraging Selenium's capabilities, we ensure comprehensive testing of your applications across different browsers, platforms, and devices.",
    imageSrc: "/images/TA1.svg",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#EDF3FF] rounded-2xl overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[1.15rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5",
    titleTag: "p",
  },
  {
    title: "Behavior-Driven Development (BDD) and Cucumber",
    description:
      "We adopt a BDD approach, combined with the popular Cucumber framework, to facilitate effective collaboration between stakeholders and streamline the testing process. Through BDD, we align business requirements with test scenarios, creating a shared understanding of the application's behavior. Cucumber enables the creation of executable specifications that serve as living documentation and drive automated tests, promoting clarity and efficiency in the testing process.",
    imageSrc: "/images/TA2.svg",
    imageAlt: "Performance",
    containerClassName: "flex flex-col-reverse lg:flex-row overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[1.15rem] lg:pl-4 lg:pr-6 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-9 lg:ml-2.5",
    imageFirst: true,
  },
  {
    title: "Customized Test Scripts",
    description:
      "Our team of skilled professionals excels in creating customized test scripts tailored to your specific application requirements. By developing test scripts using industry-standard scripting languages such as Java, Python, or Ruby, we ensure maximum flexibility and compatibility with your technology stack. Our scripts cover various testing aspects, including functional, regression, performance, and security testing, delivering comprehensive test coverage.",
    imageSrc: "/images/TA3.svg",
    imageAlt: "Rapid Development",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#EDF3FF] rounded-2xl overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[1.15rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5",
  },
  {
    title: "Test Framework Development",
    description:
      "We develop scalable and maintainable test frameworks that serve as a foundation for your test automation efforts. Our frameworks provide a structured approach to test script development, allowing for easy test maintenance, reusability, and modularity. By establishing robust test frameworks, we help you achieve consistency, reduce effort, and optimize the scalability of your test automation initiatives.",
    imageSrc: "/images/TA4.svg",
    imageAlt: "Code Reusability",
    containerClassName: "flex flex-col-reverse lg:flex-row overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[1.15rem] lg:pl-4 lg:pr-6 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-2.5 lg:ml-2.5",
    imageFirst: true,
  },
  {
    title: "Test Planning and Strategy",
    description:
      "Our experienced QA professionals work closely with you to create a comprehensive test plan and strategy. We conduct a thorough analysis of your application, define testing objectives, and identify the most suitable tools and methodologies to meet your quality goals. Our tailored test strategies encompass functional testing, performance testing, security testing, and more, ensuring a comprehensive approach to application quality assurance.",
    imageSrc: "/images/TA5.svg",
    imageAlt: "Flexibility",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl bg-[#EDF3FF] overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[1.15rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5",
  },
  {
    title: "Test Execution and Reporting",
    description:
      "We execute tests using automated frameworks and tools, ensuring reliable and consistent test results. Our testing experts meticulously analyze test outcomes, identify defects, and provide detailed reports for effective bug tracking and resolution. Our comprehensive test reports include key metrics, test coverage details, and actionable insights, enabling you to make informed decisions to improve the quality of your applications.",
    imageSrc: "/images/TA6.svg",
    imageAlt: "Code Reusability",
    containerClassName: "flex flex-col-reverse lg:flex-row overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[1.15rem] lg:pl-4 lg:pr-6 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-2.5 lg:ml-2.5",
    imageFirst: true,
  },
  {
    title: "Seamless Integration",
    description:
      "Low-Code platforms provide robust integration capabilities, allowing for seamless integration with existing systems and third-party applications. This enables organizations to leverage their existing IT investments and extend the functionality of their applications.",
    imageSrc: "/images/TA7.svg",
    imageAlt: "Flexibility",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl bg-[#EDF3FF] overflow-hidden",
    contentClassName:
      "flex-1 p-6 lg:py-[2.906rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]",
    imageWrapperClassName:
      "shrink-0 flex items-center justify-center p-6 lg:p-0",
    imageSizeClassName:
      "w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5",
  },
];

export default function TestingServices() {
  return (
    <>
      <section className="mt-24 px-4 xl:px-0">
        <div className="max-w-273.5 mx-auto">
          <div className="text-center mb-15">
            <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000] mb-4 px-4 xl:px-0">
              Explore Mindefy's Reliable Testing Services
            </h2>
          </div>
          <div className="flex flex-col gap-7 max-w-242.5 mx-auto">
            {testingServices.map((service) => (
              <TestingServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                containerClassName={service.containerClassName}
                contentClassName={service.contentClassName}
                imageWrapperClassName={service.imageWrapperClassName}
                imageSizeClassName={service.imageSizeClassName}
                titleTag={service.titleTag}
                imageFirst={service.imageFirst}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 xl:px-0">
        <div className="max-w-251 mx-auto">
          <div className="text-center w-full max-w-134 mx-auto mb-12">
            <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000]">
              Why Mindefy is the Ideal Partner for Application Test Automation
              and QA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-wrap w-full max-w-251 mx-auto">
            <div className="bg-white border border-[#332771] md:border-r md:border-b md:border-l-0 md:border-t-0 xl:flex-1 xl:max-w-125.5 xl:border-r xl:border-b xl:border-l-0 xl:border-t-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-end xl:ml-105.5 mb-4">
                <div className="relative w-15 h-15 mt-5 xl:mr-3">
                  <Image
                    src="/images/TA8.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:ml-39.5 xl:text-left mb-5 text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#332771]">
                  Expertise and Experience
                </h3>

                <p className="text-[0.875rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy has a team of highly skilled QA professionals with
                  extensive experience in application testing and quality
                  assurance. Our expertise spans across diverse industries,
                  enabling us to understand the unique challenges and
                  requirements of various domains. With our experience, we
                  ensure that your applications meet the highest quality
                  standards.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#332771] md:border-l md:border-b md:border-r-0 md:border-t-0 xl:flex-1 xl:max-w-125.5 xl:border-l xl:border-b xl:border-r-0 xl:border-t-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-start mb-4">
                <div className="relative w-15 h-15 xl:ml-4 mt-5">
                  <Image
                    src="/images/TA9.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:text-left mb-5 text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#332771]">
                  Advanced Tools and Technologies
                </h3>

                <p className="text-[0.875rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  We stay up-to-date with the latest advancements in test
                  automation and QA technologies. By utilizing industry-leading
                  tools such as Selenium, Cucumber, and scripting languages, we
                  deliver efficient and effective testing solutions that
                  optimize your testing efforts and enhance software.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#332771] md:border-r md:border-t md:border-l-0 md:border-b-0 xl:flex-1 xl:max-w-125.5 xl:border-r xl:border-t xl:border-l-0 xl:border-b-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-end xl:ml-105.5 mb-4">
                <div className="relative w-15 h-15 mt-5 xl:mr-5">
                  <Image
                    src="/images/TA10.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:ml-[7.31rem] xl:text-left mb-5 text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#332771]">
                  Agile Testing Methodologies
                </h3>

                <p className="text-[0.875rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  We embrace agile testing methodologies that emphasize
                  collaboration, adaptability, and responsiveness. Our agile
                  approach allows us to quickly respond to changing
                  requirements, provide frequent feedback, and ensure that
                  testing aligns with your development cycles. By adopting agile
                  practices, we enable faster time-to-market and improved
                  software quality.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#332771] md:border-l md:border-t md:border-r-0 md:border-b-0 xl:flex-1 xl:max-w-125.5 xl:border-l xl:border-t xl:border-r-0 xl:border-b-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-start mb-4">
                <div className="relative w-15 h-15 xl:ml-4 mt-5">
                  <Image
                    src="/images/TA11.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:text-left mb-5 text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#332771]">
                  Customer Satisfaction
                </h3>

                <p className="text-[0.875rem] lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  At Mindefy, customer satisfaction is our top priority. We are
                  dedicated to understanding your unique business requirements,
                  providing personalized attention, and delivering solutions
                  that meet or exceed your expectations. Our commitment to
                  excellence, customer-centric approach, and focus on long-term
                  partnerships make us a trusted choice for Application Test
                  Automation and QA Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
