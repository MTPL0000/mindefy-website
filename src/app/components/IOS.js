"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function IOS() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Ios Development
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto">
            <span className="font-normal">Unlock Your </span>Business Potential{" "}
            <span className="font-normal">with Expert </span>
            <span className="font-medium">
              iOS Application Development Services
            </span>
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[60.25rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Unleash the full potential of iOS with our premium iOS app
              development services. As a leading company specializing in native
              iOS app development, we strive to turn your app ideas into amazing
              reality. With our talented team of developers and designers, we
              offer end-to-end solutions from concept to implementation.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[30.125rem] mx-auto mb-[4.5rem]">
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

      {/* iOS Development Process Section */}
      <section className="  mt-[4.5rem]">
        <div className="  max-w-[75rem] mx-auto">
          {/* Process Header */}
          <div className="text-center mb-[3rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000] mb-[1.25rem]">
              Insights into Our iOS Development Process
            </h2>
            <p className="text-[1rem] font-normal text-[#444444]  mx-auto">
              Get ready to take advantage of our expertise and dedication to
              take your iOS apps to new heights of success.
            </p>
          </div>

          {/* Process Steps */}
          <div className="   mx-[6.125rem] space-y-[4rem]">
            {/* Step 1: Brain-Mapping of requirements */}
            <div className="flex flex-row items-center  w-[60.25rem] gap-49 ">
              <div className="w-[26.0625rem] p-2.5  ">
                <h3 className="text-[1.5rem] font-semibold text-[#FF5225] mb-[1rem]">
                  Brain-Mapping of requirements
                </h3>
                <p className="text-[1rem] text-justify text-gray-600 leading-relaxed">
                  Our iOS app development process starts with a comprehensive
                  brain mapping session to understand your app concept, goals
                  and target audience. We lay the foundation for a clear vision
                  for your iOS app.
                </p>
              </div>
              <div className="relative w-[20.625rem]  h-[13.25rem] mx-auto">
                <Image
                  src="/images/IOS1.webp"
                  alt="Brain-Mapping Requirements"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Step 2: Brain-Mapping of requirements */}
            <div className="relative w-[43.625rem] h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine1.svg"
                alt="Brain-Mapping Requirements"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-row items-center  w-[60.25rem] gap-49 ">
              <div className="relative w-[20.625rem]  h-[13.25rem] mx-auto">
                <Image
                  src="/images/AAD2.webp"
                  alt="Brain-Mapping Requirements"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[26.0625rem] p-2.5 ">
                <h3 className="text-[1.5rem] font-semibold text-[#FF5225] mb-[1rem]">
                  User Stories and UI/UX Figma Creation
                </h3>
                <p className="text-[1rem] text-justify text-gray-600 leading-relaxed">
                  We create compelling user stories and use Figma, a powerful
                  UI/UX design tool, to create visually appealing and intuitive
                  interfaces. Our goal is to engage your users and improve their
                  experience.
                </p>
              </div>
            </div>
            {/* Step 3: Brain-Mapping of requirements */}
            <div className="relative w-[43.625rem] h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine2.svg"
                alt="Brain-Mapping Requirements"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-row items-center  w-[60.25rem] gap-49 ">
              <div className="w-[26.0625rem] p-2.5  ">
                <h3 className="text-[1.5rem] font-semibold text-[#FF5225] mb-[1rem]">
                  Agile Development
                </h3>
                <p className="text-[1rem] text-justify text-gray-600 leading-relaxed">
                  Using an iterative development cycle and continuous feedback,
                  we can speed your iOS app to market. Our flexible and
                  adaptable approach allows us to respond quickly to changes,
                  incorporate user feedback and deliver a great user experience
                </p>
              </div>
              <div className="relative w-[20.625rem]  h-[13.25rem] mx-auto">
                <Image
                  src="/images/AAD4.webp"
                  alt="Brain-Mapping Requirements"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Step 4: Brain-Mapping of requirements */}
            <div className="relative w-[43.625rem] h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine1.svg"
                alt="Brain-Mapping Requirements"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-row items-center  w-[60.25rem] gap-49 ">
              <div className="relative w-[20.625rem]  h-[13.25rem] mx-auto">
                <Image
                  src="/images/AAD6.webp"
                  alt="Brain-Mapping Requirements"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-[26.0625rem] p-2.5  ">
                <h3 className="text-[1.5rem] font-semibold text-[#FF5225] mb-[1rem]">
                  QA Testing
                </h3>
                <p className="text-[1rem] text-justify text-gray-600 leading-relaxed">
                  Quality assurance is essential. Our rigorous testing process
                  identifies and resolves any issues or bugs. We ensure
                  hassle-free functionality across various iOS devices and
                  versions, thereby increasing user satisfaction.
                </p>
              </div>
            </div>
            {/* Step 5: Brain-Mapping of requirements */}
            <div className="relative w-[43.625rem] h-[7rem] mx-auto">
              <Image
                src="/images/IOSLine2.svg"
                alt="Brain-Mapping Requirements"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-row items-center  w-[60.25rem] gap-49 ">
              <div className="w-[26.0625rem] p-2.5  ">
                <h3 className="text-[1.5rem] font-semibold text-[#FF5225] mb-[1rem]">
                  Maintenance and Support
                </h3>
                <p className="text-[1rem] text-justify text-gray-600 leading-relaxed">
                  In addition to releases, we provide ongoing maintenance and
                  support. Our dedicated team provides updates, bug fixes and
                  user feedback to keep your apps running.
                </p>
              </div>
              <div className="relative w-[20.625rem]  h-[13.25rem] mx-auto">
                <Image
                  src="/images/AAD8.webp"
                  alt="Brain-Mapping Requirements"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Mindefy Section */}
      <section className="mt-[7rem] mb-20 ">
        <div className="max-w-[72.5rem] mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-[3rem]">
            <h2 className="text-[1.75rem] font-semibold text-[#000000]  ">
              Why choose Mindefy for iOS Development?
            </h2>
          </div>

          {/* Features fkex */}
          <div className="flex  flex-wrap gap-7 max-w-[72.5rem] mx-auto">
            {/* Unmatched Expertise */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Unmatched Expertise
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
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
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Ensuring App Success
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
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
            <div className="bg-[#F0F0FF] shadow-xl  rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Customized Solutions
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
                We know that every app idea is unique. That's why we offer
                tailor-made solutions tailored to your specific requirements.
                Our team works closely with you to understand your vision and
                deliver a custom iOS app that perfectly matches your business
                goals.
              </p>
            </div>

            {/* Quality-Driven Approach */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Quality-Driven Approach
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
                Quality is at the heart of everything we do. Our rigorous QA
                process ensures that your apps are thoroughly tested and
                optimized for flawless performance, an intuitive user
                experience, and strong security measures.
              </p>
            </div>

            {/* Timely Delivery */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Timely Delivery
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
                We understand the importance of on-time delivery in a fast-paced
                application development environment. Our efficient project
                management approach and streamlined processes allow us to meet
                deadlines without compromising the quality of our work.
              </p>
            </div>

            {/* Transparent Communication */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Transparent Communication
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
                We believe in building strong relationships with our clients
                through open and transparent communication. You will have direct
                access to our team to ensure understanding and participation
                throughout the development process.
              </p>
            </div>

            {/* Ongoing Support and Maintenance */}
            <div className="bg-[#F0F0FF] shadow-xl rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Ongoing Support and Maintenance
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
                Our commitment to your app doesn't end with launch. We provide
                comprehensive support and maintenance services even after the
                application is launched. Whether you need to update
                functionality, fix bugs, or scale your application as your
                business grows, we're here to help you every step of the way.
              </p>
            </div>

            {/* Client Satisfaction */}
            <div className="bg-[#F0F0FF] shadow-xl   rounded-2xl p-8  flex-1 w-[35.37rem] h-[22.31rem] basis-[calc(50%-1rem)]">
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                Client Satisfaction
              </h3>
              <p className="text-[1rem] h-48  text-[#444444] leading-relaxed text-justify">
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
      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
