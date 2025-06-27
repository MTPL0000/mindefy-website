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
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Enterprise Business Solutions
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[55.25rem] mx-auto">
            <span className="font-normal">Empower </span>Your Business
            <span> With </span>Comprehensive Enterprise Business Solution
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[61.375rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
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
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Mindefy, A leading provider of enterprise business solutions that
              empower organizations to achieve their strategic objectives. We
              specialize in transforming technology approaches by integrating
              cutting-edge innovations with well-established solutions such as
              ERPNext, SugarCRM, Intellinx, Oracle, SAP B1, and Salesforce. Our
              expert team is dedicated to delivering customized solutions
              tailored to your specific business needs.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[27.5rem] mx-auto mb-6">
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
      <section className="mt-24 ">
        <div className="max-w-[68.375rem] mx-auto ">
          {/* Section Header */}
          <div className=" mb-12">
            <h2 className="text-[1.5rem] font-semibold text-[#000000] mb-6 ">
              Innovative Technology Solutions for Enhanced Business Performance:
            </h2>
            <p className="font-normal text-[1rem]  text-[#444444] text-justify tracking-wider leading-relaxed">
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

          <div className=" mb-9 w-[55.31rem] mx-auto ">
            <h2 className=" text-center text-[1.75rem] font-semibold text-[#000000] mb-6 ">
              Established Enterprise Business Solutions
            </h2>
            <p className="font-normal text-[1rem]  text-[#444444] text-justify  leading-relaxed">
              We are proud to offer a range of well-established Enterprise
              Business Solutions that have proven their value in driving
              organizational success. These solutions include:
            </p>
          </div>
          <div className="flex flex-col gap-[1.75rem] max-w-[55.31rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div className="flex bg-[#FFF2F2] rounded-xl  ">
              <div className="flex-1 w-[30.875rem] my-11 ml-5.5 ">
                <p className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  ERPNext
                </p>
                <p className="text-[1rem]  w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Streamline and automate your enterprise resource planning
                  processes with ERPNext. This powerful open-source ERP solution
                  covers areas such as finance, inventory management, sales, and
                  human resources, enabling you to make informed decisions and
                  optimize your operations.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-3 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ES1.webp"
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
                  <div className="w-[23.18rem] my-3 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ES2.webp"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[30.875rem] my-[3.65rem] mr-5.5">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  SugarCRM
                </h3>
                <p className="text-[1rem]  w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Enhance your customer relationship management with SugarCRM, a
                  robust platform designed to streamline sales, marketing, and
                  customer service. Gain valuable insights into customer
                  behavior, improve lead management, and foster stronger
                  customer relationships.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div className="flex bg-[#FFF2F2] rounded-xl">
              <div className="flex-1 w-[30.875rem] my-[3.65rem] ml-5.5">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Intellinx
                </h3>
                <p className="text-[1rem]  w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Safeguard your organization from fraud and data breaches with
                  Intellinx, an advanced security and compliance solution.
                  Monitor user activities, detect suspicious behavior, and
                  ensure regulatory compliance to protect sensitive information.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[23.18rem] my-3 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ES3.webp"
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
                  <div className="w-[23.18rem] my-3 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ES4.webp"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[30.875rem] my-[3.65rem] mr-5.5">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Oracle
                </h3>
                <p className="text-[1rem]  w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Harness the power of Oracle's comprehensive suite of
                  enterprise solutions, including Oracle Database, Oracle ERP
                  Cloud, and Oracle HCM Cloud. These industry-leading solutions
                  offer scalability, security, and advanced analytics to drive
                  business growth.
                </p>
              </div>
            </div>

            {/* Flexibility and Extensibility */}
            <div className="flex bg-[#FFF2F2] rounded-xl">
              <div className="flex-1 w-[30.875rem] my-[3.65rem] ml-5.5">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  SAP B1
                </h3>
                <p className="text-[1rem]  w-[29.375rem] text-[#444444] leading-relaxed text-justify">
                  Optimize your business operations with SAP Business One, an
                  integrated ERP solution designed for small and medium-sized
                  enterprises. From finance and sales to inventory management
                  and production planning, SAP B1 provides a holistic view of
                  your business processes.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className=" flex items-center justify-center">
                  <div className="w-[23.18rem] my-3 mr-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ES5.webp"
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
                  <div className="w-[23.18rem] my-3 ml-2.5 h-[16.56rem] relative">
                    <Image
                      src="/images/ES6.webp"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-[30.875rem] my-[3.65rem] mr-5.5">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-4">
                  Salesforce
                </h3>
                <p className="text-[1rem]  w-[29.375rem] text-[#444444] leading-relaxed text-justify">
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

      <div className="w-[68.375rem] mx-auto px-3 flex flex-row justify-between">
        <div className="w-[36.18rem] mx-1.5 ml-3">
          <div className="mx-3.5 mt-[5.09rem] mb-4">
            <p className="font-semibold  tracking-wider text-2xl text-[#2C1010] ">
              Customized Solutions for Your Unique Business Needs
            </p>
          </div>
          <div className="mx-3.5 mb-[5.093rem]">
            <p className="font-normal text-[1rem] text-justify text-[#444444] leading-relaxed tracking-wide ">
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
