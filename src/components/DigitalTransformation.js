"use client";

import Image from "next/image";

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-[0.875rem] sm:text-[1rem] font-bold tracking-widest uppercase mb-5">
            Digital Transformation
          </h1>

          {/* Main Title */}
          <p className="text-[1.5rem] sm:text-[1.875rem] lg:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-200 mx-auto px-4 lg:px-0">
            Transforming Development <span className="font-normal">with </span>
            <br className="hidden sm:block"></br>
            Mindefy's Digital Transformation Services
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-241 font-normal mx-auto mb-6 text-justify space-y-5 px-4 lg:px-0">
            <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
              As a leading provider of digital solutions, we specialize in
              helping businesses embark on their digital transformation journey
              and achieve remarkable results. With Mindefy, you can unlock the
              power of digital technologies and revolutionize your business for
              the digital age.We offer a comprehensive range of digital
              transformation services to help you navigate this transformative
              journey and seize the opportunities of the digital era.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-80 sm:h-100 lg:h-124.5 mx-auto mb-8 sm:mb-12 lg:mb-18 px-4 lg:px-0">
            <Image
              src="/images/DT.webp"
              alt="digital transformation"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Digital Transformation Services Timeline */}
      <section className="px-4 sm:px-6 lg:px-0">
        <div className="max-w-290 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-[1.375rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000]">
              Mindefy's Digital Transformation Services
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Vertical Line - Hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-9 bg-gray-800 rounded-xl h-full hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-6 lg:-space-y-8">
              {/* Strategy and Roadmap - Right Side on Desktop, Single Column on Mobile */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0"></div>
                <div className="relative z-10 flex items-start lg:-mr-18 justify-center mb-4 lg:mb-0">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowleft.png"
                      alt="Arrow Left"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-17">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Strategy and Roadmap
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We work closely with you to develop a tailored digital
                      transformation strategy and roadmap aligned with your
                      business goals and objectives. Our experts assess your
                      current digital maturity, identify areas for improvement,
                      and create a strategic plan to guide your digital
                      transformation initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research-Driven UI/UX - Left Side on Desktop, Single Column on Mobile */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-17 mb-4 lg:mb-0 lg:order-1">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Research-Driven UI/UX
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We take a research-driven approach to identify the
                      essential elements that will elevate your application's
                      internet visibility. Through meticulous analysis of user
                      behavior, market trends, and search engine algorithms, we
                      design an interface that captivates and engages your
                      target audience.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start lg:-ml-18 justify-center mb-4 lg:mb-0 lg:order-2">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowright.png"
                      alt="Arrow Right"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:order-3"></div>
              </div>

              {/* Customer Experience Enhancement - Right Side on Desktop */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0"></div>
                <div className="relative z-10 flex items-start lg:-mr-18 justify-center mb-4 lg:mb-0">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowleft.png"
                      alt="Arrow Left"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-17">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Customer Experience Enhancement
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We help you elevate your customer experience by leveraging
                      digital technologies and data insights. From User-Centric
                      Design to Personalized Engagement, Mindful UX creates
                      seamless and immersive customer experiences that drive
                      loyalty and satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Process Optimization and Automation - Left Side on Desktop */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-17 mb-4 lg:mb-0 lg:order-1">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Process Optimization and Automation
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We streamline your business processes and automate manual
                      tasks using cutting-edge technologies such as Robotic
                      Process Automation (RPA) and Business Process Management
                      (BPM). This enables operational efficiency, cost savings,
                      and faster time-to-market.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start lg:-ml-18 justify-center mb-4 lg:mb-0 lg:order-2">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowright.png"
                      alt="Arrow Right"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:order-3"></div>
              </div>

              {/* Data-driven Insights and Analytics - Right Side on Desktop */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0"></div>
                <div className="relative z-10 flex items-start lg:-mr-18 justify-center mb-4 lg:mb-0">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowleft.png"
                      alt="Arrow Left"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-17">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Data-driven Insights and Analytics
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We harness the power of data to drive informed
                      decision-making and business growth. Our data analytics
                      services enable you to extract valuable insights from your
                      data, uncover trends, and make data-driven strategic
                      choices
                    </p>
                  </div>
                </div>
              </div>

              {/* Cloud Migration and Infrastructure Modernization - Left Side on Desktop */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-17 mb-4 lg:mb-0 lg:order-1">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Cloud Migration and Infrastructure Modernization
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We help you transition to the cloud, enabling scalability,
                      flexibility, and cost optimization. Our experts guide you
                      through cloud migration, infrastructure modernization, and
                      the adoption of cloud-native technologies to unlock the
                      full potential of the cloud.
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start lg:-ml-18 justify-center mb-4 lg:mb-0 lg:order-2">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowright.png"
                      alt="Arrow Right"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 lg:order-3"></div>
              </div>

              {/* Agile Development and DevOps - Right Side on Desktop */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0"></div>
                <div className="relative z-10 flex items-start lg:-mr-18 justify-center mb-4 lg:mb-0">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowleft.png"
                      alt="Arrow Left"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-17">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Agile Development and DevOps
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We harness the power of data to drive informed
                      decision-making and business growth. Our data analytics
                      services enable you to extract valuable insights from your
                      data, uncover trends, and make data-driven strategic
                      choices
                    </p>
                  </div>
                </div>
              </div>

              {/* Change Management and Training - Left Side on Desktop */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 lg:pr-17 mb-4 lg:mb-0 lg:order-1">
                  <div className="bg-[#F3F3FF] p-4 sm:p-6 rounded-lg">
                    <h3 className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                      Change Management and Training
                    </h3>
                    <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                      We support your organization through the cultural and
                      organizational changes that come with digital
                      transformation. Our change management strategies and
                      training programs ensure smooth adoption of new
                      technologies and practices across your workforce.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start lg:-ml-18 justify-center mb-4 lg:mb-0 lg:order-2">
                  <div className="w-16 h-10 lg:w-24 lg:h-14 relative hidden lg:block">
                    <Image
                      src="/images/arrowright.png"
                      alt="Arrow Right"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:order-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mindefy Section */}
      <section className="mt-16 lg:mt-28 mb-10 lg:mb-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-290 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-7">
            <h2 className="text-[1.375rem] sm:text-[1.5rem] lg:text-[1.75rem] font-semibold text-[#000000]">
              What Sets Mindefy Apart and Why Choose Us?
            </h2>
          </div>
          <div className="mb-8 lg:mb-15">
            <p className="mb-4 lg:mb-7 font-medium text-[1rem] lg:text-[1.25rem] text-[#444444]">
              Mindefy offers an unrivaled USP as a Service-Based Product
              Development Company. Our key differentiator lies in treating your
              projects with the same passion and dedication as our own products,
              resulting in a holistic vision and innovative solutions. With a
              quality-centric mindset and a proven track record, we reduce
              time-to-market and enhance product value, all while fostering a
              collaborative partnership with you.
            </p>
            <p className="font-semibold text-[1rem] lg:text-[1.25rem] w-full lg:w-[57.93rem] text-center mx-auto">
              Experience the power of our expertise, as we execute your projects
              with precision and drive, surpassing your goals and propelling
              your success to new heights.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-3 max-w-290 mx-auto">
            {/* Unmatched Expertise */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Expertise in Diverse Industries:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                Mindefy has extensive experience working with clients across a
                wide range of industries. Our team has deep knowledge and
                understanding of industry-specific challenges and opportunities,
                enabling us to provide tailored solutions that address your
                unique needs. Whether you operate in healthcare, finance,
                retail, or any other sector, we have the expertise to deliver
                results-driven digital transformation strategies.
              </p>
            </div>

            {/* Ensuring App Success */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Holistic Approach
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                At Mindefy, we take a holistic approach to digital
                transformation. We go beyond implementing technology solutions
                by considering the entire ecosystem of your business. Our team
                examines your processes, people, and technology landscape to
                identify areas for improvement and develop comprehensive
                strategies that drive holistic transformation. We focus on
                optimizing your operations, enhancing customer experiences, and
                unlocking new revenue streams.
              </p>
            </div>

            {/* Customized Solutions */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Customer-Centric Solutions
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                We believe in putting our clients at the center of everything we
                do. Our team takes the time to understand your unique business
                requirements, challenges, and goals. We then tailor our
                solutions to meet your specific needs, ensuring that we deliver
                tangible value and measurable outcomes. With Mindefy, you can
                expect personalized attention and solutions that align with your
                vision and objectives.
              </p>
            </div>

            {/* Quality-Driven Approach */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Strong Technological Expertise
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                Mindefy stays ahead of the curve when it comes to technology
                trends and advancements. Our team is well-versed in the latest
                technologies and industry best practices. We leverage
                cutting-edge tools, platforms, and frameworks to create
                innovative solutions that drive digital transformation. With our
                strong technological expertise, we ensure that you are equipped
                with the most effective and future-proof solutions for your
                business.
              </p>
            </div>

            {/* Timely Delivery */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Agile and Collaborative Approach
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                We embrace an agile methodology that emphasizes flexibility,
                collaboration, and iterative development. Our team works closely
                with you, ensuring constant communication and feedback
                throughout the project lifecycle. We believe in fostering a
                collaborative partnership, where your insights and ideas are
                valued. This approach allows us to deliver solutions that not
                only meet your requirements but also exceed your expectations.
              </p>
            </div>

            {/* Transparent Communication */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Emphasis on User Experience
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                Mindefy understands the significance of user experience (UX) in
                digital transformation. We prioritize creating intuitive,
                seamless, and engaging user experiences for your customers,
                employees, and stakeholders. Our team employs user-centered
                design principles and conducts extensive usability testing to
                ensure that our solutions are user-friendly, visually appealing,
                and drive user adoption. .
              </p>
            </div>

            {/* Ongoing Support and Maintenance */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Commitment to Quality and Timely Delivery
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                At Mindefy, we are committed to delivering high-quality
                solutions within the agreed timelines. Our rigorous quality
                assurance processes, testing methodologies, and project
                management practices ensure that your project is executed
                efficiently and with the utmost attention to detail.
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="bg-[#F0F0FF] rounded-2xl p-4 sm:p-6 lg:p-8 h-auto lg:h-[22.31rem]">
              <h3 className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] font-semibold text-[#000000] mb-4 lg:mb-6">
                Long-Term Partnership
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                Mindefy aims to build long-lasting partnerships with our
                clients. We view each engagement as a long-term relationship and
                are invested in your success. Our team provides ongoing support,
                maintenance, and continuous improvement services to ensure that
                your digital transformation initiatives remain effective and
                adaptable as your business evolves. With Mindefy, you gain a
                strategic partner dedicated to your growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
