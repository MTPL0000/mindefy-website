"use client";

import Image from "next/image";

export default function IOS() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive Design */}
      <section className="mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
        <div className="container mx-auto text-center max-w-7xl">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-sm sm:text-base lg:text-lg font-bold tracking-wider uppercase mb-4 sm:mb-5 lg:mb-6">
            iOS APP DEVELOPMENT
          </h1>

          {/* Main Title */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#000000] mb-6 sm:mb-7 lg:mb-8 leading-tight max-w-4xl mx-auto px-4">
            <span className="font-normal">Unlock Your </span>Business Potential{" "}
            <span className="font-normal">with Expert </span>
            <span className="font-medium">
              iOS Application Development Services
            </span>
          </p>

          {/* Description Paragraphs */}
          <div className="max-w-4xl font-normal mx-auto mb-6 sm:mb-8 lg:mb-9 text-center sm:text-justify space-y-4 sm:space-y-5 lg:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed">
              Unleash the full potential of iOS with our premium iOS app
              development services. As a leading company specializing in native
              iOS app development, we strive to turn your app ideas into amazing
              reality. With our talented team of developers and designers, we
              offer end-to-end solutions from concept to implementation.
            </p>
          </div>

          {/* Hero Image - Responsive */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-18">
            <Image
              src="/images/IOS.webp"
              alt="iOS App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* iOS App Development Process Section */}
      <section className="mt-8 sm:mt-12 lg:mt-18 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="container mx-auto max-w-6xl">
          {/* Process Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
              Insights into Our iOS App Development Process
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-[#444444] max-w-3xl mx-auto">
              Get ready to take advantage of our expertise and dedication to
              take your iOS apps to new heights of success.
            </p>
          </div>

          {/* Process Steps - Responsive Layout */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Step 1: Brain-Mapping of requirements */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF5225] mb-3 sm:mb-4 lg:mb-6">
                  Brain-Mapping of requirements
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-center sm:text-justify text-gray-600 leading-relaxed">
                  Our iOS app development process starts with a comprehensive
                  brain mapping session to understand your app concept, goals
                  and target audience. We lay the foundation for a clear vision
                  for your iOS app.
                </p>
              </div>
              <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-52 xl:w-[20.625rem] xl:h-[13.25rem] flex-shrink-0">
                <Image
                  src="/images/IOS1.webp"
                  alt="Brain-Mapping Requirements"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Connector Line 1 */}
            <div className="hidden lg:block relative lg:w-[25rem] lg:h-20 xl:w-[43.625rem] xl:h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine1.svg"
                alt="Process Flow Line"
                fill
                className="object-contain"
              />
            </div>

            {/* Step 2: User Stories and UI/UX Figma Creation */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF5225] mb-3 sm:mb-4 lg:mb-6">
                  User Stories and UI/UX Figma Creation
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-center sm:text-justify text-gray-600 leading-relaxed">
                  We create compelling user stories and use Figma, a powerful
                  UI/UX design tool, to create visually appealing and intuitive
                  interfaces. Our goal is to engage your users and improve their
                  experience.
                </p>
              </div>
              <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-52 xl:w-[20.625rem] xl:h-[13.25rem] flex-shrink-0">
                <Image
                  src="/images/AAD2.webp"
                  alt="UI/UX Design Process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Connector Line 2 */}
            <div className="hidden lg:block relative lg:w-[25rem] lg:h-20 xl:w-[43.625rem] xl:h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine2.svg"
                alt="Process Flow Line"
                fill
                className="object-contain"
              />
            </div>

            {/* Step 3: Agile Development */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF5225] mb-3 sm:mb-4 lg:mb-6">
                  Agile Development
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-center sm:text-justify text-gray-600 leading-relaxed">
                  Using an iterative development cycle and continuous feedback,
                  we can speed your iOS app to market. Our flexible and
                  adaptable approach allows us to respond quickly to changes,
                  incorporate user feedback and deliver a great user experience
                </p>
              </div>
              <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-52 xl:w-[20.625rem] xl:h-[13.25rem] flex-shrink-0">
                <Image
                  src="/images/AAD4.webp"
                  alt="Agile Development Process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Connector Line 3 */}
            <div className="hidden lg:block relative lg:w-[25rem] lg:h-20 xl:w-[43.625rem] xl:h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine1.svg"
                alt="Process Flow Line"
                fill
                className="object-contain"
              />
            </div>

            {/* Step 4: QA Testing */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF5225] mb-3 sm:mb-4 lg:mb-6">
                  QA Testing
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-center sm:text-justify text-gray-600 leading-relaxed">
                  Quality assurance is essential. Our rigorous testing process
                  identifies and resolves any issues or bugs. We ensure
                  hassle-free functionality across various iOS devices and
                  versions, thereby increasing user satisfaction.
                </p>
              </div>
              <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-52 xl:w-[20.625rem] xl:h-[13.25rem] flex-shrink-0">
                <Image
                  src="/images/AAD6.webp"
                  alt="QA Testing Process"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Connector Line 4 */}
            <div className="hidden lg:block relative lg:w-[25rem] lg:h-20 xl:w-[43.625rem] xl:h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine2.svg"
                alt="Process Flow Line"
                fill
                className="object-contain"
              />
            </div>

            {/* Step 5: Maintenance and Support */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF5225] mb-3 sm:mb-4 lg:mb-6">
                  Maintenance and Support
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-center sm:text-justify text-gray-600 leading-relaxed">
                  In addition to releases, we provide ongoing maintenance and
                  support. Our dedicated team provides updates, bug fixes and
                  user feedback to keep your apps running.
                </p>
              </div>
              <div className="relative w-64 h-40 sm:w-80 sm:h-48 lg:w-96 lg:h-52 xl:w-[20.625rem] xl:h-[13.25rem] flex-shrink-0">
                <Image
                  src="/images/AAD8.webp"
                  alt="Maintenance and Support"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mindefy Section */}
      <section className="mt-12 sm:mt-16 lg:mt-20 xl:mt-28 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#000000]">
              Why choose Mindefy for iOS App Development?
            </h2>
          </div>

          {/* Features Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Unmatched Expertise */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Unmatched Expertise
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                By leveraging our expertise in new technology and platforms,
                unlock the full potential of your design. Our team is always
                ahead of the curve, ensuring we provide the most effective and
                innovative solutions for your specific business requirements.
                From selecting the best technology stack to implementing
                advanced tools, we help you build a solid foundation for
                success.
              </p>
            </div>

            {/* Ensuring App Success */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Ensuring App Success
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                Our team of professionals understand the intricacies of the app
                market and know the knowledge you take to deliver outstanding
                results. By prioritizing user experience, applying data-driven
                strategies, rigorous testing and ongoing insights, Mindefy
                ensures that your applications are optimized for success. Trust
                us to turn your app ideas into cost-effective, widely adopted
                solutions that stand out in today's competitive environment.
              </p>
            </div>

            {/* Customized Solutions */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Customized Solutions
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                We know that every app idea is unique. That's why we offer
                tailor-made solutions tailored to your specific requirements.
                Our team works closely with you to understand your vision and
                deliver a custom iOS app that perfectly matches your business
                goals.
              </p>
            </div>

            {/* Quality-Driven Approach */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Quality-Driven Approach
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                Quality is at the heart of everything we do. Our rigorous QA
                process ensures that your apps are thoroughly tested and
                optimized for flawless performance, an intuitive user
                experience, and strong security measures.
              </p>
            </div>

            {/* Timely Delivery */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Timely Delivery
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                We understand the importance of on-time delivery in a fast-paced
                application development environment. Our efficient project
                management approach and streamlined processes allow us to meet
                deadlines without compromising the quality of our work.
              </p>
            </div>

            {/* Transparent Communication */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Transparent Communication
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                We believe in building strong relationships with our clients
                through open and transparent communication. You will have direct
                access to our team to ensure understanding and participation
                throughout the development process.
              </p>
            </div>

            {/* Ongoing Support and Maintenance */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Ongoing Support and Maintenance
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                Our commitment to your app doesn't end with launch. We provide
                comprehensive support and maintenance services even after the
                application is launched. Whether you need to update
                functionality, fix bugs, or scale your application as your
                business grows, we're here to help you every step of the way.
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-6 sm:p-8 h-auto">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6">
                Client Satisfaction
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                Your satisfaction is our main success. We measure our success
                based on the success of your applications and your overall
                experience with us. We take great care to ensure that you
                receive the highest level of service and achieve the results you
                expect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
