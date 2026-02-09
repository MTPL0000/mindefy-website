"use client";

import Image from "next/image";
import LowCodeFeatureCard from "./LowCodeFeatureCard";

const featureCards = [
  {
    title: "Accelerated Application Delivery",
    description:
      "Low-Code platforms allow for rapid application development, significantly reducing time-to-market. With visual modeling and pre-built components, developers can quickly assemble applications, reducing the need for extensive coding and streamlining the development process.",
    imageSrc: "/images/MARD2.svg",
    imageAlt: "JavaScript Stack",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#E5F8FB] rounded-2xl overflow-hidden",
    contentClassName:
      "flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-12 lg:ml-2.5 order-2 lg:order-1",
    imageWrapperClassName:
      "shrink-0 order-1 lg:order-2 flex justify-center items-center p-4 lg:p-0",
    imageSizeClassName:
      "w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative",
  },
  {
    title: "Enhanced Productivity",
    description:
      "By abstracting away complex coding tasks, Low-Code platforms enable developers to focus on solving business challenges and delivering value. This increased productivity translates into faster development cycles, reduced costs, and improved efficiency.",
    imageSrc: "/images/MARD3.svg",
    imageAlt: "Performance",
    containerClassName: "flex flex-col lg:flex-row overflow-hidden",
    contentClassName:
      "flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-12 lg:ml-2.5 order-2",
    imageWrapperClassName:
      "shrink-0 order-1 flex justify-center items-center p-4 lg:p-0",
    imageSizeClassName:
      "w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative",
  },
  {
    title: "Scalability and Future-Proofing",
    description:
      "Low-Code platforms are designed to support scalability and growth. As your business evolves, these platforms provide the flexibility to scale applications, handle increased user loads, and incorporate new features and functionalities.",
    imageSrc: "/images/IOS1.webp",
    imageAlt: "Rapid Development",
    containerClassName:
      "flex flex-col lg:flex-row bg-[#E5F8FB] rounded-2xl overflow-hidden",
    contentClassName:
      "flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-12 lg:ml-2.5 order-2 lg:order-1",
    imageWrapperClassName:
      "shrink-0 order-1 lg:order-2 flex justify-center items-center p-4 lg:p-0",
    imageSizeClassName:
      "w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative",
  },
  {
    title: "Flexibility and Agility",
    description:
      "Low-Code platforms offer flexibility in adapting to changing business requirements. With visual modeling and drag-and-drop capabilities, developers can easily modify and iterate on applications, allowing for quick adjustments and updates as needed.",
    imageSrc: "/images/WAD1.svg",
    imageAlt: "Code Reusability",
    containerClassName: "flex flex-col lg:flex-row overflow-hidden",
    contentClassName:
      "flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-12 lg:ml-2.5 order-2",
    imageWrapperClassName:
      "shrink-0 order-1 flex justify-center items-center p-4 lg:p-0",
    imageSizeClassName:
      "w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative",
  },
  {
    title: "Seamless Integration",
    description:
      "Low-Code platforms provide robust integration capabilities, allowing for seamless integration with existing systems and third-party applications. This enables organizations to leverage their existing IT investments and extend the functionality of their applications.",
    imageSrc: "/images/ARD1.webp",
    imageAlt: "Flexibility",
    containerClassName:
      "flex flex-col lg:flex-row rounded-2xl bg-[#E5F8FB] overflow-hidden",
    contentClassName:
      "flex-1 p-4 sm:p-6 lg:p-0 lg:w-[36.06rem] lg:my-12 lg:ml-2.5 order-2 lg:order-1",
    imageWrapperClassName:
      "shrink-0 order-1 lg:order-2 flex justify-center items-center p-4 lg:p-0",
    imageSizeClassName:
      "w-32 h-24 sm:w-40 sm:h-32 lg:w-[23.18rem] lg:h-[16.56rem] lg:my-2.5 relative",
  },
];

const platformCards = [
  {
    title: "OutSystems: Accelerate Your Digital Transformation",
    description:
      "OutSystems is a robust Low-Code platform that enables organizations to build, deploy, and manage enterprise applications with speed and agility. It works with its visual development environment and built-in features, OutSystems empowers both professional developers and citizen developers to collaborate and deliver applications rapidly. Partnering with Mindefy for OutSystems development ensures a seamless and efficient digital transformation journey for your organization.",
    imageSrc: "/images/LC1.webp",
    imageAlt: "OutSystems Platform",
  },
  {
    title: "Appian: Drive Business Process Automation",
    description:
      "Appian is a powerful Low-Code platform that combines business process management, artificial intelligence, and low-code development capabilities. With Appian, you can streamline and automate complex business processes, enhance collaboration, and deliver exceptional customer experiences. Mindefy's expertise in Appian development enables you to leverage the platform's capabilities to drive efficiency and innovation within your organization.",
    imageSrc: "/images/LC2.webp",
    imageAlt: "Appian Platform",
  },
  {
    title: "ServiceNow: Transform IT Service Management",
    description:
      "ServiceNow is a leading Low-Code platform for IT service management (ITSM) and digital workflows. With ServiceNow, you can streamline IT operations, automate service requests, and improve employee productivity. Mindefy's ServiceNow development services help you leverage this platform's features to optimize IT service delivery, enhance customer satisfaction, and drive organizational growth.",
    imageSrc: "/images/LC3.svg",
    imageAlt: "ServiceNow Platform",
  },
  {
    title: "Zoho Creator: Build Custom Business Applications",
    description:
      "Zoho Creator is a versatile Low-Code platform that empowers businesses to create custom applications without extensive coding. With its intuitive drag-and-drop interface and powerful features, Zoho Creator allows for rapid application development, data management, and workflow automation. At Mindefy, we harness the potential of Zoho Creator to deliver tailored solutions that meet your unique business requirements and drive operational efficiency.",
    imageSrc: "/images/LC4.svg",
    imageAlt: "Zoho Creator Platform",
  },
  {
    title: "Magic XPA: Accelerate Enterprise Application Development",
    description:
      "Magic XPA is a comprehensive Low-Code platform that enables rapid development of enterprise applications for web, mobile, and desktop environments. With its model-driven development approach and pre-built components, Magic XPA simplifies the development process and reduces time-to-market. Mindefy's expertise in Magic XPA development ensures seamless application delivery, efficient system integration and optimal performance.",
    imageSrc: "/images/LC5.svg",
    imageAlt: "Magic XPA Platform",
  },
];

export default function LowCodeFeatures() {
  return (
    <>
      <div className="mx-auto max-w-full sm:max-w-2xl lg:max-w-241 mb-12 lg:mb-20 px-4 sm:px-6 lg:px-0">
        <div className="text-[#000000] text-lg sm:text-xl lg:text-[1.5rem] font-semibold mb-4 lg:mb-6">
          <p>
            Collaborate with Mindefy for Low-Code
            <br className="hidden lg:block"></br>Platform Excellence
          </p>
        </div>
        <div className="font-normal text-sm lg:text-base text-justify text-[#444444] space-y-4 lg:space-y-5">
          <p>
            By partnering with Mindefy, you gain a trusted technology partner
            committed to your success.Whether you need to build custom
            applications, automate workflows, enhance customer experiences, or
            streamline business processes, our team will work closely with you
            to understand your needs and craft innovative solutions using the
            best-suited Low-Code platform for your project.
          </p>
          <p>
            We bring a wealth of experience in Low-Code Platform Development,
            ensuring that your applications are developed efficiently, with the
            highest quality standards.
          </p>
        </div>
      </div>

      <section className="px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-290 mx-auto">
          <div className="mb-12 lg:mb-20">
            <div className="relative w-full max-w-full mx-auto mb-12 lg:mb-29">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-120.5">
                <Image
                  src="/images/IOS.webp"
                  alt="MEAN MERN Stack Development - Developer working with web applications"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-24 px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-250 mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-[1.75rem] font-semibold text-[#000000] mb-4">
              Why Low-Code Platform Development ?
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:gap-11 max-w-full lg:max-w-241.5 mx-auto">
            {featureCards.map((feature) => (
              <LowCodeFeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                containerClassName={feature.containerClassName}
                contentClassName={feature.contentClassName}
                imageWrapperClassName={feature.imageWrapperClassName}
                imageSizeClassName={feature.imageSizeClassName}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-250 mx-auto">
          <div className="text-center mb-8 lg:mb-9">
            <h2 className="text-lg sm:text-xl lg:text-[2rem] font-semibold text-[#000000] mb-4">
              Our Expertise in Low-Code Platform
              <br className="hidden lg:block"></br> Development
            </h2>
            <p className="text-sm lg:text-base text-[#444444] leading-relaxed max-w-full lg:max-w-240 mx-auto text-justify">
              At Mindefy, we have a team of experienced Low-Code developers
              proficient in platforms such as OutSystems, Appian, ServiceNow,
              Zoho Creator, and Magic XPA. We leverage our expertise to deliver
              tailored solutions that align with your business goals and
              requirements.With Mindefy, you can unlock the full potential of
              Low-Code platforms and revolutionize your application development
              journey.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-7.5 max-w-full lg:max-w-250 mx-auto mb-12 lg:mb-15">
            {platformCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col lg:flex-row items-start bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="shrink-0 w-full lg:w-auto flex justify-center lg:block p-4 lg:p-0">
                  <div className="w-32 h-24 sm:w-40 sm:h-32 lg:w-[16.18rem] lg:h-55.5 lg:my-2.5 relative">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1 p-4 lg:mx-2.5">
                  <h3 className="text-base sm:text-lg lg:text-[1.25rem] lg:mt-2.5 font-semibold text-[#000000] mb-3 lg:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base font-normal text-[#444444] leading-relaxed text-justify mb-4 lg:mb-12">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
