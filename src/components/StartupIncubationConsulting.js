"use client";

import Image from "next/image";

export default function StartupIncubationConsulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-sm lg:text-base font-bold tracking-widest uppercase mb-5">
            Startup Incubation Services
          </h1>

          {/* Main Title */}
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-221 mx-auto px-4 xl:px-0">
            <span className="font-medium">Unlock Your </span>Startup Potential
            with <br className="hidden sm:block"></br>Mindefy's Incubation
            Services
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-245.5 font-normal mx-auto mb-9 text-justify space-y-5 px-4 xl:px-0">
            <p className="text-sm lg:text-base text-[#444444] leading-relaxed">
              <span className="font-semibold">
                Are you an aspiring entrepreneur brimming with groundbreaking
                ideas
              </span>
              , but not sure how to bring them to life?
            </p>
            <p className="text-sm lg:text-base text-[#444444] leading-relaxed">
              Look no further! At Mindefy, we specialize in incubating
              innovative concepts and nurturing them into successful ventures.
              Our Startup Incubation Services are designed to empower
              individuals with ideas, guiding them through every step of the
              journey, from{" "}
              <span className="font-semibold">
                concept inception to market validation
              </span>
              .
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-6">
            <Image
              src="/images/WAD.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Mindefy is the Ideal Partner Section */}
      <section className="mt-20 px-4 xl:px-0">
        <div className="max-w-251 mx-auto">
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-wrap w-full max-w-251 mx-auto">
            {/* Expertise and Experience */}
            <div className="bg-white border border-[#000000] md:border-r md:border-b md:border-l-0 md:border-t-0 xl:flex-1 xl:max-w-125.5 xl:border-r xl:border-b xl:border-l-0 xl:border-t-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-end xl:ml-105.5 mb-4">
                <div className="relative w-15 h-15 mt-5">
                  <Image
                    src="/images/SIS1.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:ml-37.75 xl:text-left mb-5 text-xl lg:text-2xl font-semibold text-[#000000]">
                  Turning Ideas into Action
                </h3>

                <p className="text-sm lg:text-base font-normal text-[#444444] leading-relaxed text-justify">
                  We specialize in taking these initial concepts and
                  transforming them into actionable strategies. Whether your
                  idea is in its infancy or well-formed, our team collaborates
                  closely with you to refine your vision, chart out a viable
                  business model, and create a clear and practical roadmap. Our
                  mission is to facilitate the transition from abstract ideas to
                  concrete, executable plans, making the entrepreneurial journey
                  accessible to all.
                </p>
              </div>
            </div>

            {/* Advanced Tools and Technologies */}
            <div className="bg-white border border-[#000000] md:border-l md:border-b md:border-r-0 md:border-t-0 xl:flex-1 xl:max-w-125.5 xl:border-l xl:border-b xl:border-r-0 xl:border-t-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-start mb-4">
                <div className="relative w-15 h-15 xl:ml-5 mt-5">
                  <Image
                    src="/images/SIS2.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:text-left mb-5 text-xl lg:text-2xl font-semibold text-[#000000]">
                  End-to-End Support
                </h3>

                <p className="text-sm lg:text-base font-normal text-[#444444] leading-relaxed text-justify">
                  Mindefy offers comprehensive, end-to-end services to assist
                  you in navigating the intricacies of transforming your idea
                  into a viable startup. This level of support covers every
                  phase, from the initial idea to execution. By standing
                  alongside you throughout the entire process, we ensure that no
                  critical detail is missed. This commitment means that you have
                  a reliable partner to guide you through the complexities of
                  building a successful startup, from conceptualization to
                  realization.
                </p>
              </div>
            </div>

            {/* Agile Testing Methodologies */}
            <div className="bg-white border border-[#000000] md:border-r md:border-t md:border-l-0 md:border-b-0 xl:flex-1 xl:max-w-125.5 xl:border-r xl:border-t xl:border-l-0 xl:border-b-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-end xl:ml-105.5 mb-4">
                <div className="relative w-15 h-15 mt-5">
                  <Image
                    src="/images/SIS3.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:ml-46 xl:text-left mb-5 text-xl lg:text-2xl font-semibold text-[#000000]">
                  Prototyping Excellence
                </h3>

                <p className="text-sm lg:text-base font-normal text-[#444444] leading-relaxed text-justify">
                  An essential stage in our incubation process involves creating
                  the first prototype of your product or service. This phase is
                  pivotal as it takes your concept from the abstract to the
                  tangible. The prototype not only allows you to visualize your
                  idea but also serves as a powerful tool for attracting
                  potential investors, partners, and customers. It bridges the
                  gap between the conceptual stage and a physical, market-ready
                  product, providing you with a concrete manifestation of your
                  innovative thinking.
                </p>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white border border-[#000000] md:border-l md:border-t md:border-r-0 md:border-b-0 xl:flex-1 xl:max-w-125.5 xl:border-l xl:border-t xl:border-r-0 xl:border-b-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-start mb-4">
                <div className="relative w-15 h-15 xl:ml-5 mt-5">
                  <Image
                    src="/images/SIS4.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-115.5">
                <h3 className="text-center xl:text-left mb-5 text-xl lg:text-2xl font-semibold text-[#000000]">
                  Market Testing
                </h3>

                <p className="text-sm lg:text-base font-normal text-[#444444] leading-relaxed text-justify">
                  Before making a full-scale commitment to production, it's
                  vital to test the market. Mindefy assists you in conducting
                  rigorous market research and validation. This step ensures
                  that your idea isn't just theoretically viable but is indeed
                  aligned with the needs and preferences of your target
                  audience. Market testing is a critical aspect of risk
                  mitigation and increases your confidence that your concept can
                  thrive in the real-world marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-24 px-4 xl:px-0">
        <div className="max-w-273.5 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-15">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] px-4 xl:px-0">
              Mindefy offers a range of compelling reasons that make it a top
              choice for incubating startup ideas:
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-7 max-w-242.5 mx-auto">
            {/* Full JavaScript Stack */}
            <div
              className="flex flex-col lg:flex-row bg-[#F4F4FF] rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 p-6 lg:py-16.5 lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <p className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
                  Experience and Expertise
                </p>
                <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  With years of experience in startup incubation, Mindefy has
                  accumulated invaluable knowledge and insights. We've
                  successfully shepherded numerous ideas to thriving businesses,
                  equipping us with the expertise to guide you effectively. We
                  understand the unique challenges and opportunities that
                  startups face, which enables us to provide tailored guidance
                  and solutions.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-11 lg:mr-2.5">
                  <Image
                    src="/images/SIS5.webp"
                    alt="JavaScript Stack"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
              <div className="shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-11 lg:ml-2.5">
                  <Image
                    src="/images/SIS6.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 lg:py-13 lg:pl-4 lg:pr-6 xl:w-[36.06rem]">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
                  Tailored Solutions
                </h3>
                <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  Mindefy understands that every startup idea is unique, and a
                  one-size-fits-all approach doesn't work. Our strength lies in
                  our ability to customize our services to fit your specific
                  needs. This tailored approach ensures that our support is
                  precisely aligned with your unique vision, challenges, and
                  goals. Whether your idea is in tech, healthcare, or any other
                  field, our customized approach guarantees that our solutions
                  are highly relevant and effective.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div
              className="flex flex-col lg:flex-row bg-[#F4F4FF] rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 p-6 lg:py-9.5 lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
                  Comprehensive Resources
                </h3>
                <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  Mindefy provides a wealth of resources to support your
                  entrepreneurial journey. This includes mentorship from
                  experienced professionals who offer invaluable guidance,
                  access to extensive networks that connect you with industry
                  influencers and potential partners, and state-of-the-art
                  facilities and tools that foster innovation and product
                  development. These resources not only accelerate your
                  startup's growth but also provide the infrastructure you need
                  to thrive.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-11 lg:mr-2.5">
                  <Image
                    src="/images/SIS7.webp"
                    alt="Rapid Development"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
              <div className="shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-11 lg:ml-2.5">
                  <Image
                    src="/images/SIS8.webp"
                    alt="Code Reusability"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 lg:py-13 lg:pl-4 lg:pr-6 xl:w-[36.06rem]">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
                  Strategic Partnerships
                </h3>
                <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  We develop scalable and maintainable test frameworks that
                  serve as a foundation for your test automation efforts. Our
                  frameworks provide a structured approach to test script
                  development, allowing for easy test maintenance, reusability,
                  and modularity. By establishing robust test frameworks, we
                  help you achieve consistency, reduce effort, and optimize the
                  scalability of your test automation initiatives.
                </p>
              </div>
            </div>

            {/* Flexibility and Extensibility */}
            <div
              className="flex flex-col lg:flex-row rounded-2xl bg-[#F4F4FF] overflow-hidden"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 p-6 lg:py-13 lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
                  Test Planning and Strategy
                </h3>
                <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  Our experienced QA professionals work closely with you to
                  create a comprehensive test plan and strategy. We conduct a
                  thorough analysis of your application, define testing
                  objectives, and identify the most suitable tools and
                  methodologies to meet your quality goals. Our tailored test
                  strategies encompass functional testing, performance testing,
                  security testing, and more, ensuring a comprehensive approach
                  to application quality assurance.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-11 lg:mr-2.5">
                  <Image
                    src="/images/SIS9.webp"
                    alt="Flexibility"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Code Reusability */}
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
              <div className="shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-48 sm:h-52 lg:h-[16.56rem] relative lg:my-11 lg:ml-2.5">
                  <Image
                    src="/images/SIS10.webp"
                    alt="Code Reusability"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 lg:py-13 lg:pl-4 lg:pr-6 xl:w-[36.06rem]">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#000000] mb-4">
                  Test Execution and Reporting
                </h3>
                <p className="text-sm lg:text-base text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  Mindefy has cultivated strategic partnerships with industry
                  leaders, investors, and seasoned mentors. These partnerships
                  offer a wealth of opportunities for your startup's success.
                  You gain access to funding options, expert guidance from
                  mentors who have navigated the entrepreneurial landscape, and
                  connections in your industry that can be invaluable in
                  building your business. These partnerships significantly
                  enhance your startup's chances of success and provide you with
                  a wealth of support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-273.5 mx-auto px-4 xl:px-3 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-[36.18rem] lg:mx-1.5 lg:ml-3">
          <div className="lg:mx-3.5 mt-8 lg:mt-[5.09rem] mb-6 lg:mb-8">
            <p className="font-semibold text-2xl lg:text-2xl text-[#2C1010] text-center lg:text-left">
              Proven Track Record
            </p>
          </div>
          <div className="lg:mx-3.5 mb-8 lg:mb-[5.093rem]">
            <p className="font-normal text-sm lg:text-base text-justify text-[#444444] leading-relaxed">
              Mindefy's portfolio of successful startups serves as a testament
              to our capabilities. These are entrepreneurs who entrusted Mindefy
              to incubate their ideas, and the results speak for themselves:
              thriving and profitable ventures. Our track record is more than a
              guarantee; it's a living demonstration of our commitment to
              helping innovative concepts evolve into concrete, successful
              realities
            </p>
          </div>
        </div>
        <div className="w-[18rem] lg:w-93 h-72 lg:h-93.5 relative shrink-0">
          <Image
            src="/images/SIS11.webp"
            alt="Code Reusability"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
