"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-sm sm:text-base lg:text-[1rem] font-bold tracking-widest uppercase mb-4 sm:mb-5 lg:mb-[1.25rem]">
            Enterprise Business Solutions
          </p>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[#000000] mb-4 sm:mb-6 lg:mb-7 leading-tight max-w-full sm:max-w-4xl lg:max-w-[55.25rem] mx-auto px-4 sm:px-0">
            <span className="font-normal">Empower </span>Your Business
            <span> With </span>Comprehensive Enterprise Business Solution
          </h1>

          {/* Description Paragraphs */}
          <div className="w-full max-w-4xl lg:w-[61.375rem] font-normal mx-auto mb-6 sm:mb-8 lg:mb-[2.25rem] text-justify space-y-4 sm:space-y-5 lg:space-y-[1.25rem] px-4 sm:px-6 lg:px-0">
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed">
              Unlock the full potential of your business with our comprehensive
              suite of enterprise business solutions. Combining innovative
              technologies with established platforms such as ERPNext, SugarCRM,
              Intellinx, Oracle, SAP B1, and Salesforce, we empower
              organizations to streamline operations, enhance productivity, and
              achieve sustainable growth. Our expert team delivers customized
              solutions to streamline your operations, enhance productivity, and
              drive growth. Explore our comprehensive suite of enterprise
              solutions today.
            </p>
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed">
              Mindefy, A leading provider of enterprise business solutions that
              empower organizations to achieve their strategic objectives. We
              specialize in transforming technology approaches by integrating
              cutting-edge innovations with well-established solutions such as
              ERPNext, SugarCRM, Intellinx, Oracle, SAP B1, and Salesforce. Our
              expert team is dedicated to delivering customized solutions
              tailored to your specific business needs.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[52.39%] aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10] lg:aspect-[16/9] mx-auto mb-6">
            <Image
              src="/images/MJA.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-[68.375rem] mx-auto">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
              Innovative Technology Solutions for Enhanced Business Performance:
            </h2>
            <p className="font-normal text-sm sm:text-base lg:text-[1rem] text-[#444444] text-justify tracking-wider leading-relaxed">
              We understand that staying ahead in today's competitive business
              landscape requires leveraging innovative technology solutions. Our
              team of experienced professionals combines industry expertise with
              the latest technological advancements to deliver comprehensive
              enterprise business solutions. By integrating leading-edge tools
              and platforms, we help optimize your business processes, automate
              workflows, and enhance collaboration across departments.
            </p>
          </div>

          {/* Advantages Content */}
          <div className="mb-6 sm:mb-8 lg:mb-9 w-full max-w-3xl lg:w-[55.31rem] mx-auto">
            <h2 className="text-center text-lg sm:text-xl lg:text-[1.75rem] font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
              Established Enterprise Business Solutions
            </h2>
            <p className="font-normal text-sm sm:text-base lg:text-[1rem] text-[#444444] text-justify leading-relaxed px-4 sm:px-0">
              We are proud to offer a range of well-established Enterprise
              Business Solutions that have proven their value in driving
              organizational success. These solutions include:
            </p>
          </div>
          
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[1.75rem] max-w-3xl lg:max-w-[55.31rem] mx-auto">
            {/* ERPNext */}
            <div className="flex flex-col lg:flex-row bg-[#FFF2F2] rounded-xl overflow-hidden">
              <div className="flex-1 p-6 sm:p-8 lg:w-[30.875rem] lg:my-11 lg:ml-5.5 lg:p-0">
                <p className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                  ERPNext
                </p>
                <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Streamline and automate your enterprise resource planning
                  processes with ERPNext. This powerful open-source ERP solution
                  covers areas such as finance, inventory management, sales, and
                  human resources, enabling you to make informed decisions and
                  optimize your operations.
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center lg:block">
                <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 lg:mr-2.5 lg:h-[16.56rem] relative">
                  <Image
                    src="/images/ES1.webp"
                    alt="ERPNext Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* SugarCRM */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex justify-center lg:block order-2 lg:order-1">
                <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 lg:ml-2.5 lg:h-[16.56rem] relative">
                  <Image
                    src="/images/ES2.webp"
                    alt="SugarCRM Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 sm:p-8 lg:w-[30.875rem] lg:my-[3.65rem] lg:mr-5.5 lg:p-0 order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                  SugarCRM
                </h3>
                <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Enhance your customer relationship management with SugarCRM, a
                  robust platform designed to streamline sales, marketing, and
                  customer service. Gain valuable insights into customer
                  behavior, improve lead management, and foster stronger
                  customer relationships.
                </p>
              </div>
            </div>

            {/* Intellinx */}
            <div className="flex flex-col lg:flex-row bg-[#FFF2F2] rounded-xl overflow-hidden">
              <div className="flex-1 p-6 sm:p-8 lg:w-[30.875rem] lg:my-[3.65rem] lg:ml-5.5 lg:p-0">
                <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                  Intellinx
                </h3>
                <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Safeguard your organization from fraud and data breaches with
                  Intellinx, an advanced security and compliance solution.
                  Monitor user activities, detect suspicious behavior, and
                  ensure regulatory compliance to protect sensitive information.
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center lg:block">
                <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 lg:mr-2.5 lg:h-[16.56rem] relative">
                  <Image
                    src="/images/ES3.webp"
                    alt="Intellinx Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Oracle */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex justify-center lg:block order-2 lg:order-1">
                <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 lg:ml-2.5 lg:h-[16.56rem] relative">
                  <Image
                    src="/images/ES4.webp"
                    alt="Oracle Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 sm:p-8 lg:w-[30.875rem] lg:my-[3.65rem] lg:mr-5.5 lg:p-0 order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                  Oracle
                </h3>
                <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Harness the power of Oracle's comprehensive suite of
                  enterprise solutions, including Oracle Database, Oracle ERP
                  Cloud, and Oracle HCM Cloud. These industry-leading solutions
                  offer scalability, security, and advanced analytics to drive
                  business growth.
                </p>
              </div>
            </div>

            {/* SAP B1 */}
            <div className="flex flex-col lg:flex-row bg-[#FFF2F2] rounded-xl overflow-hidden">
              <div className="flex-1 p-6 sm:p-8 lg:w-[30.875rem] lg:my-[3.65rem] lg:ml-5.5 lg:p-0">
                <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                  SAP B1
                </h3>
                <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Optimize your business operations with SAP Business One, an
                  integrated ERP solution designed for small and medium-sized
                  enterprises. From finance and sales to inventory management
                  and production planning, SAP B1 provides a holistic view of
                  your business processes.
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center lg:block">
                <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 lg:mr-2.5 lg:h-[16.56rem] relative">
                  <Image
                    src="/images/ES5.webp"
                    alt="SAP B1 Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Salesforce */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-shrink-0 flex justify-center lg:block order-2 lg:order-1">
                <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-[23.18rem] lg:my-3 lg:ml-2.5 lg:h-[16.56rem] relative">
                  <Image
                    src="/images/ES6.webp"
                    alt="Salesforce Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 p-6 sm:p-8 lg:w-[30.875rem] lg:my-[3.65rem] lg:mr-5.5 lg:p-0 order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                  Salesforce
                </h3>
                <p className="text-sm sm:text-base lg:text-[1rem] w-full lg:w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Transform your sales, marketing, and customer service
                  operations with Salesforce, the world's leading customer
                  relationship management platform. Increase efficiency,
                  streamline workflows, and engage customers through
                  personalized experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customized Solutions Section */}
      <div className="w-full max-w-4xl lg:w-[68.375rem] mx-auto px-4 sm:px-6 lg:px-3 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
        <div className="w-full lg:w-[36.18rem] lg:mx-1.5 lg:ml-3">
          <div className="lg:mx-3.5 mt-8 sm:mt-12 lg:mt-[5.09rem] mb-4">
            <p className="font-semibold tracking-wider text-lg sm:text-xl lg:text-2xl text-[#2C1010] text-center lg:text-left">
              Customized Solutions for Your Unique Business Needs
            </p>
          </div>
          <div className="lg:mx-3.5 mb-8 sm:mb-12 lg:mb-[5.093rem]">
            <p className="font-normal text-sm sm:text-base lg:text-[1rem] text-justify text-[#444444] leading-relaxed tracking-wide">
              Mindefy understands that every organization has unique
              requirements. That's why our team of experts works closely with
              you to develop customized enterprise solutions tailored to your
              specific business needs. From implementation and integration to
              customization and ongoing support, we provide end-to-end solutions
              that align with your strategic goals and drive operational
              excellence.
            </p>
          </div>
        </div>
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[23.25rem] lg:h-[23.375rem] relative flex-shrink-0">
          <Image
            src="/images/SIS11.webp"
            alt="Customized Solutions"
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
