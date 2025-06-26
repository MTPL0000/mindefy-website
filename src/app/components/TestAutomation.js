"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function TestAutomation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Application test Automation
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto">
            Application Test Automation and QA Services Ensuring Seamless
            Software Performance
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[61.375rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              At Mindefy, we understand the importance of rigorous testing in
              delivering high-performing applications. Our Application Test
              Automation and QA Services encompass a range of advanced
              techniques and tools to enhance the quality of your software,
              optimize testing processes, and minimize time-to-market. With our
              expertise in Selenium, Cucumber, BDD, and scripting, we offer
              tailored solutions to meet your unique testing requirements.
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

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-24 ">
        <div className="max-w-[62.5rem] mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-[3.75rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-4">
              Explore Mindefy's Reliable Testing Services
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[2.75rem] max-w-[60.375rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div className="flex bg-[#EDF3FF] rounded-2xl  ">
              <div className="flex-1 w-[36.06rem]  my-[1.15rem] ml-2.5 ">
                <p className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Test Automation using Selenium
                </p>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We harness the power of Selenium, an open-source test
                  automation framework, to automate your application testing
                  process. Our experts create robust and scalable automation
                  scripts that accelerate test execution, improve test coverage,
                  and reduce the manual effort required for repetitive tasks. By
                  leveraging Selenium's capabilities, we ensure comprehensive
                  testing of your applications across different browsers,
                  platforms, and devices.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA1.svg"
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
                  <div className="w-[23.18rem] ml-2.5 my-9 h-[16.56rem] relative">
                    <Image
                      src="/images/TA2.svg"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem]  my-[1.15rem] ml-2.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Behavior-Driven Development (BDD) and Cucumber
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We adopt a BDD approach, combined with the popular Cucumber
                  framework, to facilitate effective collaboration between
                  stakeholders and streamline the testing process. Through BDD,
                  we align business requirements with test scenarios, creating a
                  shared understanding of the application's behavior. Cucumber
                  enables the creation of executable specifications that serve
                  as living documentation and drive automated tests, promoting
                  clarity and efficiency in the testing process.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div className="flex bg-[#EDF3FF] rounded-2xl">
              <div className="flex-1 w-[36.06rem] my-[1.15rem] ml-2.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Customized Test Scripts
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Our team of skilled professionals excels in creating
                  customized test scripts tailored to your specific application
                  requirements. By developing test scripts using
                  industry-standard scripting languages such as Java, Python, or
                  Ruby, we ensure maximum flexibility and compatibility with
                  your technology stack. Our scripts cover various testing
                  aspects, including functional, regression, performance, and
                  security testing, delivering comprehensive test coverage.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA3.svg"
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
                  <div className="w-[23.18rem] ml-2.5 my-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA4.svg"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem]  my-[1.15rem] ml-2.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Test Framework Development
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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
            <div className="flex rounded-2xl bg-[#EDF3FF]">
              <div className="flex-1 w-[36.06rem]  my-[1.15rem] ml-2.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Test Planning and Strategy
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
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
                  <div className="w-[23.18rem] my-2.5 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA5.svg"
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
                  <div className="w-[23.18rem] my-2.5 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA6.svg"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem]  my-[1.15rem] ml-2.5">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Test Execution and Reporting
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  We execute tests using automated frameworks and tools,
                  ensuring reliable and consistent test results. Our testing
                  experts meticulously analyze test outcomes, identify defects,
                  and provide detailed reports for effective bug tracking and
                  resolution. Our comprehensive test reports include key
                  metrics, test coverage details, and actionable insights,
                  enabling you to make informed decisions to improve the quality
                  of your applications.
                </p>
              </div>
            </div>
            {/* Flexibility and Extensibility */}
            <div className="flex rounded-2xl bg-[#EDF3FF]">
              <div className="flex-1 w-[36.06rem]  my-[2.906rem] ml-2.5 items">
                <h3 className="text-[1.5rem] ml-3.5 font-semibold text-[#000000] mb-4">
                  Seamless Integration
                </h3>
                <p className="text-[1rem]  mx-3.5 w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Low-Code platforms provide robust integration capabilities,
                  allowing for seamless integration with existing systems and
                  third-party applications. This enables organizations to
                  leverage their existing IT investments and extend the
                  functionality of their applications.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className=" flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5  mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/TA7.svg"
                      alt="Flexibility"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mindefy is the Ideal Partner Section */}
      <section className="  mt-20">
        <div className="max-w-[62.75rem] mx-auto">
          {/* Section Header */}
          <div className="text-center w-[33.5rem] mx-auto mb-[3rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000]">
              Why Mindefy is the Ideal Partner for Application Test Automation
              and QA
            </h2>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="flex flex-wrap  max-w-[62.75rem] mx-auto">
            {/* Expertise and Experience */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-r border-b border-[#332771]  basis-[calc(50%-1rem)]">
              <div className="flex items-center ml-[26.375rem] mb-6">
                <div className=" relative w-15 h-15 mr-5 mt-5">
                  <Image
                    src="/images/TA8.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-2.5 w-[28.875rem] ">
                <h3 className="ml-[9.875rem] mb-5 text-[1.5rem] font-semibold text-[#332771]">
                  Expertise and Experience
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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

            {/* Advanced Tools and Technologies */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-l border-b border-[#332771]  basis-[calc(50%-1rem)]">
              <div className="flex items-center  mb-6">
                <div className="relative w-15 h-15 ml-5 mt-5">
                  <Image
                    src="/images/TA9.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-2.5 w-[28.875rem]">
                <h3 className="mb-5 text-[1.5rem] font-semibold text-[#332771]">
                  Advanced Tools and Technologies
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                  We stay up-to-date with the latest advancements in test
                  automation and QA technologies. By utilizing industry-leading
                  tools such as Selenium, Cucumber, and scripting languages, we
                  deliver efficient and effective testing solutions that
                  optimize your testing efforts and enhance software.
                </p>
              </div>
            </div>

            {/* Agile Testing Methodologies */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-r border-t border-[#332771]  basis-[calc(50%-1rem)]">
              <div className="flex items-center ml-[26.375rem] mb-6">
                <div className="relative w-15 h-15 mr-5 mt-5">
                  <Image
                    src="/images/TA10.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-2.5 w-[28.875rem]">
                <h3 className="ml-[7.31rem] mb-5 text-[1.5rem] font-semibold text-[#332771]">
                  Agile Testing Methodologies
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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

            {/* Customer Satisfaction */}
            <div className="bg-white flex-1 max-w-[31.375rem] border-l border-t border-[#332771]  basis-[calc(50%-1rem)]">
              <div className="flex items-center mb-6">
                <div className="relative w-15 h-15 ml-5 mt-5">
                  <Image
                    src="/images/TA11.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-2.5 w-[28.875rem]">
                <h3 className="mb-5 text-[1.5rem] font-semibold text-[#332771]">
                  Customer Satisfaction
                </h3>

                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
