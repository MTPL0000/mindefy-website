"use client";

import Image from "next/image";

export default function TestAutomation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-[0.875rem] lg:text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Application test Automation
          </h1>

          {/* Main Title */}
          <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto px-4 xl:px-0">
            Application Test Automation and QA Services Ensuring Seamless
            Software Performance
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[61.375rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem] px-4 xl:px-0">
            <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed">
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
          <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30.125rem] mx-auto mb-6">
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
      <section className="mt-24 px-4 xl:px-0">
        <div className="max-w-[68.375rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-[3.75rem]">
            <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000] mb-4 px-4 xl:px-0">
              Explore Mindefy's Reliable Testing Services
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[1.75rem] max-w-[60.625rem] mx-auto">
            {/* Test Automation using Selenium */}
            <div className="flex flex-col lg:flex-row bg-[#EDF3FF] rounded-2xl overflow-hidden">
              <div className="flex-1 p-6 lg:py-[1.15rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <p className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Test Automation using Selenium
                </p>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
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
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5">
                  <Image
                    src="/images/TA1.svg"
                    alt="JavaScript Stack"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Behavior-Driven Development (BDD) and Cucumber */}
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-9 lg:ml-2.5">
                  <Image
                    src="/images/TA2.svg"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 lg:py-[1.15rem] lg:pl-4 lg:pr-6 xl:w-[36.06rem]">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Behavior-Driven Development (BDD) and Cucumber
                </h3>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
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

            {/* Customized Test Scripts */}
            <div className="flex flex-col lg:flex-row bg-[#EDF3FF] rounded-2xl overflow-hidden">
              <div className="flex-1 p-6 lg:py-[1.15rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Customized Test Scripts
                </h3>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
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
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5">
                  <Image
                    src="/images/TA3.svg"
                    alt="Rapid Development"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Test Framework Development */}
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-2.5 lg:ml-2.5">
                  <Image
                    src="/images/TA4.svg"
                    alt="Code Reusability"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 lg:py-[1.15rem] lg:pl-4 lg:pr-6 xl:w-[36.06rem]">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Test Framework Development
                </h3>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
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

            {/* Test Planning and Strategy */}
            <div className="flex flex-col lg:flex-row rounded-2xl bg-[#EDF3FF] overflow-hidden">
              <div className="flex-1 p-6 lg:py-[1.15rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Test Planning and Strategy
                </h3>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
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
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5">
                  <Image
                    src="/images/TA5.svg"
                    alt="Flexibility"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Test Execution and Reporting */}
            <div className="flex flex-col-reverse lg:flex-row overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-2.5 lg:ml-2.5">
                  <Image
                    src="/images/TA6.svg"
                    alt="Code Reusability"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 lg:py-[1.15rem] lg:pl-4 lg:pr-6 xl:w-[36.06rem]">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Test Execution and Reporting
                </h3>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
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

            {/* Seamless Integration */}
            <div className="flex flex-col lg:flex-row rounded-2xl bg-[#EDF3FF] overflow-hidden">
              <div className="flex-1 p-6 lg:py-[2.906rem] lg:pl-6 lg:pr-4 xl:w-[36.06rem]">
                <h3 className="text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4">
                  Seamless Integration
                </h3>
                <p className="text-[0.875rem] lg:text-[1rem] text-[#444444] leading-relaxed text-justify xl:w-[34.312rem]">
                  Low-Code platforms provide robust integration capabilities,
                  allowing for seamless integration with existing systems and
                  third-party applications. This enables organizations to
                  leverage their existing IT investments and extend the
                  functionality of their applications.
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center p-6 lg:p-0">
                <div className="w-[16rem] sm:w-[18rem] lg:w-[23.18rem] h-[12rem] sm:h-[13rem] lg:h-[16.56rem] relative lg:my-2.5 lg:mr-2.5">
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
      </section>

      {/* Why Mindefy is the Ideal Partner Section */}
      <section className="mt-20 px-4 xl:px-0">
        <div className="max-w-[62.75rem] mx-auto">
          {/* Section Header */}
          <div className="text-center w-full max-w-[33.5rem] mx-auto mb-[3rem]">
            <h2 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000]">
              Why Mindefy is the Ideal Partner for Application Test Automation
              and QA
            </h2>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-wrap w-full max-w-[62.75rem] mx-auto">
            {/* Expertise and Experience */}
            <div className="bg-white border border-[#332771] md:border-r md:border-b md:border-l-0 md:border-t-0 xl:flex-1 xl:max-w-[31.375rem] xl:border-r xl:border-b xl:border-l-0 xl:border-t-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-end xl:ml-[26.375rem] mb-4">
                <div className="relative w-15 h-15 mt-5">
                  <Image
                    src="/images/TA8.svg"
                    alt="Expertise and Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-[28.875rem]">
                <h3 className="text-center xl:ml-[9.875rem] xl:text-left mb-5 text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#332771]">
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

            {/* Advanced Tools and Technologies */}
            <div className="bg-white border border-[#332771] md:border-l md:border-b md:border-r-0 md:border-t-0 xl:flex-1 xl:max-w-[31.375rem] xl:border-l xl:border-b xl:border-r-0 xl:border-t-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-start mb-4">
                <div className="relative w-15 h-15 xl:ml-5 mt-5">
                  <Image
                    src="/images/TA9.svg"
                    alt="Advanced Tools and Technologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-[28.875rem]">
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

            {/* Agile Testing Methodologies */}
            <div className="bg-white border border-[#332771] md:border-r md:border-t md:border-l-0 md:border-b-0 xl:flex-1 xl:max-w-[31.375rem] xl:border-r xl:border-t xl:border-l-0 xl:border-b-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-end xl:ml-[26.375rem] mb-4">
                <div className="relative w-15 h-15 mt-5">
                  <Image
                    src="/images/TA10.svg"
                    alt="Agile Testing Methodologies"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-[28.875rem]">
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

            {/* Customer Satisfaction */}
            <div className="bg-white border border-[#332771] md:border-l md:border-t md:border-r-0 md:border-b-0 xl:flex-1 xl:max-w-[31.375rem] xl:border-l xl:border-t xl:border-r-0 xl:border-b-0 xl:basis-[calc(50%-1rem)]">
              <div className="flex items-center justify-center xl:justify-start mb-4">
                <div className="relative w-15 h-15 xl:ml-5 mt-5">
                  <Image
                    src="/images/TA11.svg"
                    alt="Customer Satisfaction"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mx-5 mb-5 xl:w-[28.875rem]">
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
    </div>
  );
}
