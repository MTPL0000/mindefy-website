"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function MVPDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            product development
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[63.56rem] mx-auto">
            <span className="font-normal">Accelerate Your </span>Product
            Development
            <span className="font-normal"> with </span>Innovative Solutions
            <span className="font-normal"> and </span>Product Development
            <span className="font-normal"> as-a-Service</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[60.125rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Mindefy is your trusted partner for efficient and seamless product
              development solutions. We offer comprehensive services that cater
              to every stage of the product development lifecycle. Our unique
              Product Development as-a-Service offering is designed to expedite
              the entire process, ensuring swift progress and outstanding
              results. With our Innovation Lab as the heart of creativity, We
              combine{" "}
              <span className="font-semibold">
                Agile methodologies, prototyping, MVP design, market research,
                and innovation to accelerate your product development journey.
              </span>{" "}
              Accelerate Your Product Development Journey with Innovation and
              Expertise..
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[30.125rem] mx-auto mb-7">
            <Image
              src="/images/MVP.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-[60.25rem] mx-auto mb-20 tracking-wide leading-relaxed">
            <p className="text-justify text-[1rem] font-normal text-[#444444] mb-7 ">
              Unleash the transformative potential of our comprehensive product
              development services. From Agile methodology-based prototyping to
              MVP design, market research, launch, and our state-of-the-art
              Innovation Lab, we provide the tools and expertise to expedite
              your product development process. Partner with Mindefy to unlock
              the full potential of your product ideas. Contact us today to
              explore our innovative solutions and take your product development
              to new heights.
            </p>
            <p className="text-justify text-[1rem] font-normal text-[#444444] ">
              Embark on a faster and more efficient product development journey
              with Mindefy. Our comprehensive services and specialized expertise
              empower you to overcome challenges, mitigate risks, and propel
              your products to market success. Harness the collective knowledge
              of our multidisciplinary team in our collaborative Innovation Lab.
              Together, we will transform your ideas into groundbreaking,
              market-leading products that drive your business growth.
            </p>
          </div>
        </div>
      </section>

      <div className="w-[63.875rem] mx-auto">
        <div className=" mx-auto w-[53.25rem] mb-[1.125rem]">
          <div>
            <p className=" text-center font-semibold text-3xl">
              <span className="font-normal">Comprehensive </span>Product
              Development <span className="font-normal">Services</span>
            </p>
          </div>
          <div className="w-[36.25rem] mx-auto">
            <p className="font-normal text-center text-lg text-[#444444]">
              Our team of experts is dedicated to delivering comprehensive
              solutions that cater to your unique requirements.
            </p>
          </div>
        </div>
        <div className="w-[63.875rem] mx-auto">
          <p className="text-center font-normal text-2xl text-[#444444]">
            We offer a range of services which includes
          </p>
        </div>
      </div>

      {/* Product Development Services Section */}
      <section className="mt-[3.75rem]">
        <div className="max-w-[75rem] mx-auto px-6 relative">
          {/* Central Rocket Image */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-full  h-full z-10">
            <Image
              src="/images/MVP1.webp"
              alt="Rocket Development Process"
              fill
              className="object-contain"
            />
          </div>

          {/* Services Timeline Layout */}
          <div className="relative z-10 space-y-[6rem]">
            {/* Service 1: Agile Methodology - Left Side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-12">
                <div className="">
                  <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] flex-shrink-0">
                    <Image
                      src="/images/MVP2.webp"
                      alt="Agile Methodology Prototyping"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-start w-[30.75rem] ">
                    <div className="flex-1">
                      <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                        Agile Methodology-based Prototyping
                      </h3>
                      <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                        We follow Agile methodologies to streamline the
                        prototyping phase of your product development journey.
                        By adopting an iterative and collaborative approach, we
                        ensure quick feedback cycles, efficient resource
                        utilization, and rapid validation of ideas. Our
                        prototyping process enables you to visualize and refine
                        your product concept, saving time and reducing
                        development costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-"></div>
            </div>

            {/* Service 2: MVP Design - Right Side */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="w-1/2 pl-12">
                <div className="">
                  <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] flex-shrink-0">
                    <Image
                      src="/images/MVP3.webp"
                      alt="MVP Design and Development"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-start w-[30.75rem]">
                    <div className="flex-1">
                      <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                        MVP Design and Development
                      </h3>
                      <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                        Our MVP (Minimum Viable Product) design and development
                        services work closely with you to identify the core
                        features and functionalities that will resonate with
                        your target audience. By focusing on the essential
                        elements, we help you quickly validate your product in
                        the market, gather user feedback, and iterate based on
                        real user insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3: Market Research - Left Side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-12">
                <div className="">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] flex-shrink-0">
                      <Image
                        src="/images/market-research-illustration.png"
                        alt="MVP Launch and Market Research"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.125rem] font-bold text-[#000000] mb-3 leading-tight">
                        MVP Launch and Market Research
                      </h3>
                      <p className="text-[0.875rem] text-[#444444] leading-relaxed text-justify">
                        We provide support throughout the MVP launch phase,
                        conducting comprehensive market research to identify
                        target audiences, analyze competitor trends, and ensure
                        a successful launch that resonates with your target
                        market. Our strategic planning helps refine your product
                        strategy for maximum impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>

            {/* Service 4: Product Development as-a-Service - Right Side */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="w-1/2 pl-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-[1.125rem] font-bold text-[#000000] mb-3 leading-tight">
                        Product Development as-a-Service
                      </h3>
                      <p className="text-[0.875rem] text-[#444444] leading-relaxed text-justify">
                        We offer Product Development as-a-Service, a
                        comprehensive solution designed to support companies
                        throughout their entire product development journey. Our
                        experienced team becomes an extension of your
                        organization, providing end-to-end support from ideation
                        to launch with flexible engagement models and deep
                        industry expertise.
                      </p>
                    </div>
                    <div className="relative w-[8rem] h-[8rem] flex-shrink-0">
                      <Image
                        src="/images/product-service-illustration.png"
                        alt="Product Development as-a-Service"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: Innovation Lab - Left Side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-12">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-[8rem] h-[8rem] flex-shrink-0">
                      <Image
                        src="/images/innovation-lab-illustration.png"
                        alt="Innovation Lab"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[1.125rem] font-bold text-[#000000] mb-3 leading-tight">
                        Innovation Lab
                      </h3>
                      <p className="text-[0.875rem] text-[#444444] leading-relaxed text-justify">
                        Our Innovation Lab serves as a collaborative space where
                        creative ideas and cutting-edge technologies come
                        together to drive breakthrough innovations. Our
                        dedicated team of experts works closely with you to
                        explore innovative solutions, providing access to
                        multidisciplinary expertise, state-of-the-art tools, and
                        rapid prototyping capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>

          {/* Bottom Astronaut */}
          <div className="relative z-20 flex justify-center mt-12">
            <div className="relative w-[6rem] h-[6rem]">
              <Image
                src="/images/astronaut-figure.png"
                alt="Astronaut Innovation"
                fill
                className="object-contain"
              />
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
