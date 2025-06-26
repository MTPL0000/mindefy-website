"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function StartupIncubationConsulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Startup Incubation Services
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto">
            <span className="font-medium">Unlock Your </span>Startup Potential
            with <br></br>Mindefy's Incubation Services
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[61.375rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              <span className="font-semibold">
                Are you an aspiring entrepreneur brimming with groundbreaking
                ideas
              </span>
              , but not sure how to bring them to life?
            </p>
            <p className="text-[1rem] text-[#444444] leading-relaxed">
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
          <div className="relative  w-full h-[30.125rem] mx-auto mb-6">
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
      <section className="  mt-20">
        <div className="max-w-[62.75rem] mx-auto">
          {/* 2x2 Grid Layout */}
          <div className="flex flex-wrap  max-w-[62.75rem] mx-auto">
            {/* Expertise and Experience */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-r border-b border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center ml-[26.375rem] mb-4">
                <div className=" relative w-15 h-15 mr-5 mt-5">
                  <Image
                    src="/images/SIS1.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 w-[28.875rem] ">
                <h3 className="ml-[9.4375rem] mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Turning Ideas into Action
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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
            <div className="bg-white flex-1 max-w-[31.375rem] border-l border-b border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center  mb-4">
                <div className="relative w-15 h-15 ml-5 mt-5">
                  <Image
                    src="/images/SIS2.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 w-[28.875rem]">
                <h3 className="mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  End-to-End Support
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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
            <div className="bg-white flex-1 max-w-[31.375rem] border-r border-t border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center ml-[26.375rem] mb-4">
                <div className="relative w-15 h-15 mr-5 mt-5">
                  <Image
                    src="/images/SIS3.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 w-[28.875rem]">
                <h3 className="ml-[11.5rem] mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Prototyping Excellence
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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
            <div className="bg-white flex-1 max-w-[31.375rem] border-l border-t border-[#000000]  basis-[calc(50%-1rem)]">
              <div className="flex items-center mb-4">
                <div className="relative w-15 h-15 ml-5 mt-5">
                  <Image
                    src="/images/SIS4.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 w-[28.875rem]">
                <h3 className="mb-5 text-[1.5rem] font-semibold text-[#000000]">
                  Market Testing
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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
      <section className="mt-24 ">
        <div className="max-w-[68.375rem] mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-[3.75rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000] ">
              Mindefy offers a range of compelling reasons that make it a top
              choice for incubating startup ideas:
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[1.75rem] max-w-[60.625rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div
              className="flex bg-[#F4F4FF] rounded-2xl  "
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 w-[36.06rem] my-[4.125rem] ml-6 ">
                <p className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Experience and Expertise
                </p>
                <p className="text-[1rem]  w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  With years of experience in startup incubation, Mindefy has
                  accumulated invaluable knowledge and insights. We've
                  successfully shepherded numerous ideas to thriving businesses,
                  equipping us with the expertise to guide you effectively. We
                  understand the unique challenges and opportunities that
                  startups face, which enables us to provide tailored guidance
                  and solutions.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-11 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/SIS5.webp"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-11 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/SIS6.webp"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem] my-[3.25rem] ml-2.5 ">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Tailored Solutions
                </h3>
                <p className="text-[1rem]  w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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
              className="flex bg-[#F4F4FF] rounded-2xl"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 w-[36.06rem] my-[2.375rem] ml-6">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Comprehensive Resources
                </h3>
                <p className="text-[1rem]  w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-11 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/SIS7.webp"
                      alt="Rapid Development"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center ">
                  <div className="w-[23.18rem] my-11 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/SIS8.webp"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem] my-[3.25rem] ml-2.5">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Strategic Partnerships
                </h3>
                <p className="text-[1rem]  w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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
              className="flex rounded-2xl bg-[#F4F4FF]"
              style={{
                boxShadow:
                  "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex-1 w-[36.06rem] my-[3.25rem] ml-6">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Test Planning and Strategy
                </h3>
                <p className="text-[1rem]  w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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
              <div className="flex-shrink-0">
                <div className=" flex items-center justify-center">
                  <div className="w-[23.18rem] my-11 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/SIS9.webp"
                      alt="Flexibility"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Code Reusability */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center ">
                  <div className="w-[23.18rem] my-11 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/SIS10.webp"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem] my-[3.25rem] ml-6">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Test Execution and Reporting
                </h3>
                <p className="text-[1rem]  w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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

      <div className="w-[68.375rem] mx-auto px-3 flex flex-row justify-between">
        <div className="w-[36.18rem] mx-1.5 ml-3">
          <div className="mx-3.5 mt-[5.09rem] mb-8">
            <p className="font-semibold text-2xl text-[#2C1010] ">
              Proven Track Record
            </p>
          </div>
          <div className="mx-3.5 mb-[5.093rem]">
            <p className="font-normal text-[1rem] text-justify text-[#444444] leading-relaxed ">
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
        <div className="w-[23.25rem] h-[23.375rem] relative">
          <Image
            src="/images/SIS11.webp"
            alt="Code Reusability"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
