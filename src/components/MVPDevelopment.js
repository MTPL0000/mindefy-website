"use client";

import Image from "next/image";

export default function MVPDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-16 sm:mt-20 md:mt-24 xl:mt-28 mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-sm sm:text-base xl:text-[1rem] font-bold tracking-widest uppercase mb-4 sm:mb-5 xl:mb-5">
            product development
          </h1>

          {/* Main Title */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.25rem] font-semibold text-[#000000] mb-4 sm:mb-5 md:mb-6 xl:mb-7 leading-tight max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[63.56rem] mx-auto px-2 sm:px-4 xl:px-0">
            <span className="font-normal">Accelerate Your </span>Product
            Development
            <span className="font-normal"> with </span>Innovative Solutions
            <span className="font-normal"> and </span>Product Development
            <span className="font-normal"> as-a-Service</span>
          </p>

          {/* Description Paragraphs */}
          <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-240.5 font-normal mx-auto mb-6 sm:mb-8 xl:mb-9 text-justify space-y-4 sm:space-y-5 xl:space-y-5 px-2 sm:px-4 xl:px-0">
            <p className="text-sm sm:text-base xl:text-[1rem] text-[#444444] leading-relaxed">
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

          {/* Hero Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-120.5 mx-auto mb-4 sm:mb-5 md:mb-6 xl:mb-7">
            <Image
              src="/images/MVP.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-241 mx-auto mb-12 sm:mb-16 md:mb-20 xl:mb-20 tracking-wide leading-relaxed px-2 sm:px-4 xl:px-0">
            <p className="text-justify text-sm sm:text-base xl:text-[1rem] font-normal text-[#444444] mb-4 sm:mb-5 md:mb-6 xl:mb-7">
              Unleash the transformative potential of our comprehensive product
              development services. From Agile methodology-based prototyping to
              MVP design, market research, launch, and our state-of-the-art
              Innovation Lab, we provide the tools and expertise to expedite
              your product development process. Partner with Mindefy to unlock
              the full potential of your product ideas. Contact us today to
              explore our innovative solutions and take your product development
              to new heights.
            </p>
            <p className="text-justify text-sm sm:text-base xl:text-[1rem] font-normal text-[#444444]">
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

      {/* Services Header Section */}
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-255.5 mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:w-213 mb-4 sm:mb-5 xl:mb-4.5">
          <div>
            <p className="text-center font-semibold text-xl sm:text-2xl md:text-3xl xl:text-3xl px-2 sm:px-4 xl:px-0">
              <span className="font-normal">Comprehensive </span>Product
              Development <span className="font-normal">Services</span>
            </p>
          </div>
          <div className="max-w-full sm:max-w-lg md:max-w-xl xl:w-145 mx-auto px-2 sm:px-4 xl:px-0">
            <p className="font-normal text-center text-base sm:text-lg xl:text-lg text-[#444444]">
              Our team of experts is dedicated to delivering comprehensive
              solutions that cater to your unique requirements.
            </p>
          </div>
        </div>
        <div className="max-w-full xl:w-255.5 mx-auto px-2 sm:px-4 xl:px-0">
          <p className="text-center font-normal text-lg sm:text-xl md:text-2xl xl:text-2xl text-[#444444]">
            We offer a range of services which includes
          </p>
        </div>
      </div>

      {/* Product Development Services Section */}
      <section className="mt-8 sm:mt-12 md:mt-16 xl:mt-15 mb-10 sm:mb-10 md:mb-20 xl:mb-80 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* Mobile and Tablet Layout */}
        <div className="xl:hidden">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            {/* Service 1: Agile Methodology */}
            <div className="text-center">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 mx-auto">
                <Image
                  src="/images/MVP2.webp"
                  alt="Agile Methodology Prototyping"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 leading-tight">
                  Agile Methodology-based Prototyping
                </h3>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
                  We follow Agile methodologies to streamline the prototyping
                  phase of your product development journey. By adopting an
                  iterative and collaborative approach, we ensure quick feedback
                  cycles, efficient resource utilization, and rapid validation
                  of ideas. Our prototyping process enables you to visualize and
                  refine your product concept, saving time and reducing
                  development costs.
                </p>
              </div>
            </div>

            {/* Service 2: MVP Design */}
            <div className="text-center">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 mx-auto">
                <Image
                  src="/images/MVP3.webp"
                  alt="MVP Design and Development"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 leading-tight">
                  MVP Design and Development
                </h3>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
                  Our MVP (Minimum Viable Product) design and development
                  services work closely with you to identify the core features
                  and functionalities that will resonate with your target
                  audience. By focusing on the essential elements, we help you
                  quickly validate your product in the market, gather user
                  feedback, and iterate based on real user insights.
                </p>
              </div>
            </div>

            {/* Service 3: Market Research */}
            <div className="text-center">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 mx-auto">
                <Image
                  src="/images/MVP4.webp"
                  alt="MVP Launch and Market Research"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 leading-tight">
                  MVP Launch and Market Research
                </h3>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
                  We provide support throughout the MVP launch phase, conducting
                  comprehensive market research to identify target audiences,
                  analyze competitor trends, and ensure a successful launch that
                  resonates with your target market. Our strategic planning
                  helps refine your product strategy for maximum impact.
                </p>
              </div>
            </div>

            {/* Service 4: Product Development as-a-Service */}
            <div className="text-center">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 mx-auto">
                <Image
                  src="/images/MVP5.webp"
                  alt="Product Development as-a-Service"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 leading-tight">
                  Product Development as-a-Service
                </h3>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
                  We offer Product Development as-a-Service, a comprehensive
                  solution designed to support companies throughout their entire
                  product development journey. Our experienced team becomes an
                  extension of your organization, providing end-to-end support
                  from ideation to launch with flexible engagement models and
                  deep industry expertise.
                </p>
              </div>
            </div>

            {/* Service 5: Innovation Lab */}
            <div className="text-center">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 mx-auto">
                <Image
                  src="/images/MVP6.webp"
                  alt="Innovation Lab"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 leading-tight">
                  Innovation Lab
                </h3>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed text-justify">
                  Our Innovation Lab serves as a collaborative space where
                  creative ideas and cutting-edge technologies come together to
                  drive breakthrough innovations. Our dedicated team of experts
                  works closely with you to explore innovative solutions,
                  providing access to multidisciplinary expertise,
                  state-of-the-art tools, and rapid prototyping capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (1440px and above) - Original Design */}
        <div className="hidden xl:block">
          <div className="max-w-300 mx-auto relative">
            {/* Central Rocket Image */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-380 h-610 z-10">
              <Image
                src="/images/MVProcket.webp"
                alt="Rocket Development Process"
                fill
                className="object-contain"
              />
            </div>

            {/* Services Timeline Layout */}
            <div className="relative z-10 -space-y-44">
              {/* Service 1: Agile Methodology - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pl-12">
                  <div className="">
                    <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] shrink-0">
                      <Image
                        src="/images/MVP2.webp"
                        alt="Agile Methodology Prototyping"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-start w-123 ">
                      <div className="flex-1">
                        <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                          Agile Methodology-based Prototyping
                        </h3>
                        <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                          We follow Agile methodologies to streamline the
                          prototyping phase of your product development journey.
                          By adopting an iterative and collaborative approach,
                          we ensure quick feedback cycles, efficient resource
                          utilization, and rapid validation of ideas. Our
                          prototyping process enables you to visualize and
                          refine your product concept, saving time and reducing
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
                <div className="w-1/2 pl-15">
                  <div className="">
                    <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] shrink-0">
                      <Image
                        src="/images/MVP3.webp"
                        alt="MVP Design and Development"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-start w-123">
                      <div className="flex-1">
                        <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                          MVP Design and Development
                        </h3>
                        <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                          Our MVP (Minimum Viable Product) design and
                          development services work closely with you to identify
                          the core features and functionalities that will
                          resonate with your target audience. By focusing on the
                          essential elements, we help you quickly validate your
                          product in the market, gather user feedback, and
                          iterate based on real user insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3: Market Research - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pl-12">
                  <div className="">
                    <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] shrink-0">
                      <Image
                        src="/images/MVP4.webp"
                        alt="MVP Launch and Market Research"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-start w-123">
                      <div className="flex-1">
                        <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                          MVP Launch and Market Research
                        </h3>
                        <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                          We provide support throughout the MVP launch phase,
                          conducting comprehensive market research to identify
                          target audiences, analyze competitor trends, and
                          ensure a successful launch that resonates with your
                          target market. Our strategic planning helps refine
                          your product strategy for maximum impact.
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
                <div className="w-1/2 pl-15">
                  <div className="">
                    <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] shrink-0">
                      <Image
                        src="/images/MVP5.webp"
                        alt="Product Development as-a-Service"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-start w-123">
                      <div className="flex-1">
                        <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                          Product Development as-a-Service
                        </h3>
                        <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                          We offer Product Development as-a-Service, a
                          comprehensive solution designed to support companies
                          throughout their entire product development journey.
                          Our experienced team becomes an extension of your
                          organization, providing end-to-end support from
                          ideation to launch with flexible engagement models and
                          deep industry expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 5: Innovation Lab - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pl-12">
                  <div className="">
                    <div className="relative w-[15.81rem] h-[15.31rem] mb-11 mx-[7.468rem] shrink-0">
                      <Image
                        src="/images/MVP6.webp"
                        alt="Innovation Lab"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex items-start w-123">
                      <div className="flex-1">
                        <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-3 leading-tight">
                          Innovation Lab
                        </h3>
                        <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                          Our Innovation Lab serves as a collaborative space
                          where creative ideas and cutting-edge technologies
                          come together to drive breakthrough innovations. Our
                          dedicated team of experts works closely with you to
                          explore innovative solutions, providing access to
                          multidisciplinary expertise, state-of-the-art tools,
                          and rapid prototyping capabilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>

              {/* Bottom Astronaut */}
              <div className="flex items-center">
                <div className="w-1/2"></div>
                <div className="w-1/2 pl-12">
                  <div className="">
                    <div className="relative w-58.5 h-83 mb-11 mx-[7.468rem] shrink-0">
                      <Image
                        src="/images/Astronout.webp"
                        alt="Product Development as-a-Service"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
