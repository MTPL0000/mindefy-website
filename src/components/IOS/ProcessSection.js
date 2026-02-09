"use client";

import Image from "next/image";

const steps = [
  {
    title: "Brain-Mapping of requirements",
    description:
      "Our iOS app development process starts with a comprehensive brain mapping session to understand your app concept, goals and target audience. We lay the foundation for a clear vision for your iOS app.",
    imageSrc: "/images/IOS1.webp",
    imageAlt: "Brain-Mapping Requirements",
    rowClassName:
      "flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12",
    lineSrc: "/images/IOSLine1.svg",
  },
  {
    title: "User Stories and UI/UX Figma Creation",
    description:
      "We create compelling user stories and use Figma, a powerful UI/UX design tool, to create visually appealing and intuitive interfaces. Our goal is to engage your users and improve their experience.",
    imageSrc: "/images/AAD2.webp",
    imageAlt: "UI/UX Design Process",
    rowClassName:
      "flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12",
    lineSrc: "/images/IOSLine2.svg",
  },
  {
    title: "Agile Development",
    description:
      "Using an iterative development cycle and continuous feedback, we can speed your iOS app to market. Our flexible and adaptable approach allows us to respond quickly to changes, incorporate user feedback and deliver a great user experience",
    imageSrc: "/images/AAD4.webp",
    imageAlt: "Agile Development Process",
    rowClassName:
      "flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12",
    lineSrc: "/images/IOSLine1.svg",
  },
  {
    title: "QA Testing",
    description:
      "Quality assurance is essential. Our rigorous testing process identifies and resolves any issues or bugs. We ensure hassle-free functionality across various iOS devices and versions, thereby increasing user satisfaction.",
    imageSrc: "/images/AAD6.webp",
    imageAlt: "QA Testing Process",
    rowClassName:
      "flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12",
    lineSrc: "/images/IOSLine2.svg",
  },
  {
    title: "Maintenance and Support",
    description:
      "In addition to releases, we provide ongoing maintenance and support. Our dedicated team provides updates, bug fixes and user feedback to keep your apps running.",
    imageSrc: "/images/AAD8.webp",
    imageAlt: "Maintenance and Support",
    rowClassName:
      "flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12",
  },
];

const benefits = [
  {
    title: "Unmatched Expertise",
    description:
      "By leveraging our expertise in new technology and platforms, unlock the full potential of your design. Our team is always ahead of the curve, ensuring we provide the most effective and innovative solutions for your specific business requirements. From selecting the best technology stack to implementing advanced tools, we help you build a solid foundation for success.",
  },
  {
    title: "Ensuring App Success",
    description:
      "Our team of professionals understand the intricacies of the app market and know the knowledge you take to deliver outstanding results. By prioritizing user experience, applying data-driven strategies, rigorous testing and ongoing insights, Mindefy ensures that your applications are optimized for success. Trust us to turn your app ideas into cost-effective, widely adopted solutions that stand out in today's competitive environment.",
  },
  {
    title: "Customized Solutions",
    description:
      "We know that every app idea is unique. That's why we offer tailor-made solutions tailored to your specific requirements. Our team works closely with you to understand your vision and deliver a custom iOS app that perfectly matches your business goals.",
  },
  {
    title: "Quality-Driven Approach",
    description:
      "Quality is at the heart of everything we do. Our rigorous QA process ensures that your apps are thoroughly tested and optimized for flawless performance, an intuitive user experience, and strong security measures.",
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the importance of on-time delivery in a fast-paced application development environment. Our efficient project management approach and streamlined processes allow us to meet deadlines without compromising the quality of our work.",
  },
  {
    title: "Transparent Communication",
    description:
      "We believe in building strong relationships with our clients through open and transparent communication. You will have direct access to our team to ensure understanding and participation throughout the development process.",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "Our commitment to your app doesn't end with launch. We provide comprehensive support and maintenance services even after the application is launched. Whether you need to update functionality, fix bugs, or scale your application as your business grows, we're here to help you every step of the way.",
  },
  {
    title: "Client Satisfaction",
    description:
      "Your satisfaction is our main success. We measure our success based on the success of your applications and your overall experience with us. We take great care to ensure that you receive the highest level of service and achieve the results you expect.",
  },
];

export default function ProcessSection() {
  return (
    <>
      <section className="mt-8 sm:mt-12 lg:mt-18 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
              Insights into Our iOS App Development Process
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-[#444444] max-w-3xl mx-auto">
              Get ready to take advantage of our expertise and dedication to
              take your iOS apps to new heights of success.
            </p>
          </div>
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step) => (
              <div key={step.title}>
                <div className={step.rowClassName}>
                  <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF5225] mb-3 sm:mb-4 lg:mb-6">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-center sm:text-justify text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-52 xl:w-82.5 xl:h-53 shrink-0">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                {step.lineSrc ? (
                  <div className="hidden mt-12 lg:block relative lg:w-100 lg:h-20 xl:w-174.5 xl:h-28 mx-auto">
                    <Image
                      src={step.lineSrc}
                      alt="Process Flow Line"
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 sm:mt-16 lg:mt-20 xl:mt-28 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#000000]">
              Why choose Mindefy for iOS App Development?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
