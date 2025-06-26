"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function LowCode() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Low Code Development
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto">
            <span className="font-normal">Transforming </span>Development
            <span className="font-normal"> with </span>Mindefy's Low-Code
            Platform
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[61.375rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Experience the incredible possibilities of Low-Code Platform
              Development with Mindefy, where we offer cutting-edge solutions
              tailored to your needs. As a renowned leader in Low-Code
              development services, we excel in leveraging the capabilities of
              platforms like OutSystems, Appian, ServiceNow, Zoho Creator, and
              Magic XPA to provide you with fast, adaptable, and ingenious
              software solutions. Embrace Mindefy to unleash the true power of
              Low-Code platforms and transform your application development
              process.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[30.125rem] mx-auto mb-6">
            <Image
              src="/images/ARD.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-[60.25rem] mx-auto mb-20">
            <p className="text-justify text-[1rem] font-normal text-[#444444] ">
              Low-Code Platform Development offers a powerful solution by
              enabling the rapid creation and deployment of enterprise-grade
              applications with minimal hand-coding. These platforms provide a
              visual development environment, pre-built components, and easy
              integration capabilities, empowering both professional developers
              and citizen developers to build robust applications faster than
              ever before.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[60.25rem] mb-[5rem]">
        <div className=" text-[#000000] w-[60.25rem]  text-[1.5rem] font-semibold mb-6 ">
          <p>
            Collaborate with Mindefy for Low-Code<br></br>Platform Excellence
          </p>
        </div>
        <div className="font-normal  text-[1rem] text-justify text-[#444444]">
          <p className="mb-5">
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

      {/* React and Angular Detailed Section */}
      <section className=" ">
        <div className="max-w-[72.5rem] mx-auto ">
          {/* Header Illustration */}
          <div className=" mb-[5rem]">
            <div className="relative  w-full h-[30.125rem] mx-auto mb-[7.25rem]">
              <Image
                src="/images/IOS.webp"
                alt="MEAN MERN Stack Development - Developer working with web applications"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-24 ">
        <div className="max-w-[62.5rem] mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-[2.5rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-4">
              Why Low-Code Platform Development ?
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[2.75rem] max-w-[60.375rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div className="flex bg-[#E5F8FB] rounded-2xl  ">
              <div className="flex-1 w-[36.06rem]  my-[3rem] ml-2.5 ">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] pb-4">
                  Accelerated Application Delivery
                </h3>
                <p className="text-[1rem] w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Low-Code platforms allow for rapid application development,
                  significantly reducing time-to-market. With visual modeling
                  and pre-built components, developers can quickly assemble
                  applications, reducing the need for extensive coding and
                  streamlining the development process.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/MARD2.svg"
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
                  <div className="w-[23.18rem] my-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/MARD3.svg"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem]  my-[3rem] ml-2.5">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] pb-4">
                  Enhanced Productivity
                </h3>
                <p className="text-[1rem] w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  By abstracting away complex coding tasks, Low-Code platforms
                  enable developers to focus on solving business challenges and
                  delivering value. This increased productivity translates into
                  faster development cycles, reduced costs, and improved
                  efficiency.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div className="flex bg-[#E5F8FB] rounded-2xl">
              <div className="flex-1 w-[36.06rem]  my-[3rem] ml-2.5">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] pb-4">
                  Scalability and Future-Proofing
                </h3>
                <p className="text-[1rem] w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Low-Code platforms are designed to support scalability and
                  growth. As your business evolves, these platforms provide the
                  flexibility to scale applications, handle increased user
                  loads, and incorporate new features and functionalities.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/IOS1.webp"
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
                  <div className="w-[23.18rem] my-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/WAD1.svg"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[36.06rem]  my-[3rem] ml-2.5">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] pb-4">
                  Flexibility and Agility
                </h3>
                <p className="text-[1rem] w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Low-Code platforms offer flexibility in adapting to changing
                  business requirements. With visual modeling and drag-and-drop
                  capabilities, developers can easily modify and iterate on
                  applications, allowing for quick adjustments and updates as
                  needed.
                </p>
              </div>
            </div>

            {/* Flexibility and Extensibility */}
            <div className="flex rounded-2xl bg-[#E5F8FB]">
              <div className="flex-1 w-[36.06rem]  my-[3rem] ml-2.5">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] pb-4">
                  Seamless Integration
                </h3>
                <p className="text-[1rem] w-[34.312rem] text-[#444444] leading-relaxed text-justify">
                  Low-Code platforms provide robust integration capabilities,
                  allowing for seamless integration with existing systems and
                  third-party applications. This enables organizations to
                  leverage their existing IT investments and extend the
                  functionality of their applications.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className=" flex items-center justify-center">
                  <div className="w-[23.18rem] my-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ARD1.webp"
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

      {/* Our Expertise in Low-Code Platform Development Section */}
      <section className=" mt-20">
        <div className="max-w-[62.5rem] mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-[2.25rem]">
            <h2 className="text-[2rem] font-semibold text-[#000000] mb-4">
              Our Expertise in Low-Code Platform<br></br> Development
            </h2>
            <p className="text-[1rem] text-[#444444] leading-relaxed max-w-[60rem] mx-auto text-justify">
              At Mindefy, we have a team of experienced Low-Code developers
              proficient in platforms such as OutSystems, Appian, ServiceNow,
              Zoho Creator, and Magic XPA. We leverage our expertise to deliver
              tailored solutions that align with your business goals and
              requirements.With Mindefy, you can unlock the full potential of
              Low-Code platforms and revolutionize your application development
              journey.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="flex flex-col gap-[1.875rem] max-w-[62.5rem] mx-auto mb-[3.75rem]">
            {/* OutSystems */}
            <div className="flex items-start gap-6.25 bg-white px-1.5 rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="w-[16.18rem] my-2.5 h-[13.875rem] relative">
                  <Image
                    src="/images/LC1.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 mx-2.5">
                <h3 className="text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  OutSystems: Accelerate Your Digital Transformation
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-12">
                  OutSystems is a robust Low-Code platform that enables
                  organizations to build, deploy, and manage enterprise
                  applications with speed and agility. It works with its visual
                  development environment and built-in features, OutSystems
                  empowers both professional developers and citizen developers
                  to collaborate and deliver applications rapidly. Partnering
                  with Mindefy for OutSystems development ensures a seamless and
                  efficient digital transformation journey for your
                  organization.
                </p>
              </div>
            </div>

            {/* Appian */}
            <div className="flex items-start gap-6.25 bg-white px-1.5 rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="w-[16.18rem] my-2.5 h-[13.875rem] relative">
                  <Image
                    src="/images/LC2.webp"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 mx-2.5">
                <h3 className="text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Appian: Drive Business Process Automation
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-12">
                  Appian is a powerful Low-Code platform that combines business
                  process management, artificial intelligence, and low-code
                  development capabilities. With Appian, you can streamline and
                  automate complex business processes, enhance collaboration,
                  and deliver exceptional customer experiences. Mindefy's
                  expertise in Appian development enables you to leverage the
                  platform's capabilities to drive efficiency and innovation
                  within your organization.
                </p>
              </div>
            </div>

            {/* ServiceNow */}
            <div className="flex items-start gap-6.25 bg-white px-1.5 rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="w-[16.18rem]  my-2.5 h-[13.875rem] relative">
                  <Image
                    src="/images/LC3.svg"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 mx-2.5">
                <h3 className="text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  ServiceNow: Transform IT Service Management
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-12">
                  ServiceNow is a leading Low-Code platform for IT service
                  management (ITSM) and digital workflows. With ServiceNow, you
                  can streamline IT operations, automate service requests, and
                  improve employee productivity. Mindefy's ServiceNow
                  development services help you leverage this platform's
                  features to optimize IT service delivery, enhance customer
                  satisfaction, and drive organizational growth.
                </p>
              </div>
            </div>

            {/* Zoho Creator */}
            <div className="flex items-start gap-6.25 bg-white px-1.5 rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="w-[16.18rem] my-2.5 h-[13.875rem] relative">
                  <Image
                    src="/images/LC4.svg"
                    alt="Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 mx-2.5">
                <h3 className="text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Zoho Creator: Build Custom Business Applications
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-12">
                  Zoho Creator is a versatile Low-Code platform that empowers
                  businesses to create custom applications without extensive
                  coding. With its intuitive drag-and-drop interface and
                  powerful features, Zoho Creator allows for rapid application
                  development, data management, and workflow automation. At
                  Mindefy, we harness the potential of Zoho Creator to deliver
                  tailored solutions that meet your unique business requirements
                  and drive operational efficiency.
                </p>
              </div>
            </div>

            {/* Magic XPA */}
            <div className="flex items-start gap-6.25 bg-white px-1.5 rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div>
                  <div className="w-[16.18rem] my-2.5 h-[13.875rem] relative">
                    <Image
                      src="/images/LC5.svg"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 mx-2.5">
                <h3 className="text-[1.25rem] mt-2.5 font-semibold text-[#000000] mb-4">
                  Magic XPA: Accelerate Enterprise Application Development
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify mb-12">
                  Magic XPA is a comprehensive Low-Code platform that enables
                  rapid development of enterprise applications for web, mobile,
                  and desktop environments. With its model-driven development
                  approach and pre-built components, Magic XPA simplifies the
                  development process and reduces time-to-market. Mindefy's
                  expertise in Magic XPA development ensures seamless
                  application delivery, efficient system integration and optimal
                  performance.
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
