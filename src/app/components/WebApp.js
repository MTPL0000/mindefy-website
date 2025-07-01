"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function WebApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Responsive Design */}
      <section className="mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
        <div className="container mx-auto text-center max-w-7xl">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-sm sm:text-base lg:text-lg font-bold tracking-wider uppercase mb-4 sm:mb-5 lg:mb-6">
            Web Application Development
          </p>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#000000] mb-6 sm:mb-7 lg:mb-8 leading-tight max-w-4xl mx-auto px-4">
            <span className="font-normal"> Empower </span>Your Business{" "}
            <span className="font-normal">with </span>
            Custom Web Application Development{" "}
            <span className="font-normal">Services</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="max-w-4xl font-normal mx-auto mb-6 sm:mb-8 lg:mb-9 text-center sm:text-justify space-y-4 sm:space-y-5 lg:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed">
              Your gateway to custom web application development services that
              empower your business to reach new heights of success. Our team of
              seasoned professionals excels in crafting custom web applications
              that are precisely tailored to meet your specific requirements. We
              leverage the latest technologies, frameworks, and industry best
              practices to build robust, scalable, and secure web applications
              that align with your business goals.
            </p>
          </div>

          {/* Hero Image - Responsive */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
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

      {/* Enterprise Java Section */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 mb-12 sm:mb-16 lg:mb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000] leading-tight">
              Revolutionize Your Business with<br className="hidden sm:block" /> Cutting-Edge Enterprise
              Java Web Applications
            </h2>
          </div>
          <div className="font-normal text-sm sm:text-base lg:text-lg text-center sm:text-justify text-[#444444] leading-relaxed">
            <p>
              Mindefy, The leading provider of enterprise Java web applications.
              We specialize in delivering high-quality solutions that leverage the
              power of Java to drive your business forward. Whether you're a small
              startup or a large corporation, our enterprise Java web applications
              are tailored to meet your specific needs and empower your
              organization for success. With Mindefy harness the power of
              enterprise Java web applications and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* React and Angular Introduction Section */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 mb-12 sm:mb-16 lg:mb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000] leading-tight">
              Stay Ahead of the Curve with React and <br className="hidden sm:block" />Angular Web
              Application Development Services
            </h2>
          </div>
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 font-normal text-sm sm:text-base lg:text-lg text-center sm:text-justify text-[#444444] leading-relaxed">
            <p>
              Experience the power of cutting-edge web applications developed
              using the industry-leading frameworks, React and Angular. We
              specialize in delivering innovative, high-performance web solutions.
              With our expertise in React and Angular, we create custom web
              applications that drive engagement, boost productivity, and propel
              your business forward. From intuitive user interfaces to scalable
              enterprise solutions, our skilled team of developers is committed to
              delivering exceptional results tailored to your unique needs.
            </p>
            <p>
              At Mindefy, we have a talented team of developers proficient in both
              React and Angular. These cutting-edge frameworks empower us to
              create dynamic and interactive web applications with ease. We stay
              up to date with the latest advancements in the field, ensuring that
              our clients receive state-of-the-art solutions that leverage the
              full potential of React and Angular.
            </p>
            <p>
              We understand that each business has unique requirements, which is
              why we offer tailored web application development services. Our team
              works closely with you to understand your specific goals and create
              customized solutions that align perfectly with your business needs.
              From conceptualization to deployment, we ensure that your web
              application is built to your exact specifications, providing a
              seamless user experience and achieving your desired outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* React and Angular Detailed Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="container mx-auto max-w-6xl">
          {/* Header Illustration */}
          <div className="mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] mx-auto">
              <Image
                src="/images/IOS.webp"
                alt="MEAN MERN Stack Development - Developer working with web applications"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* React Section */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6 text-center lg:text-left leading-tight">
              Empower Your Business with <br className="hidden sm:block" />Next-Generation React Web
              Applications
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
              React has gained immense popularity for its component-based
              architecture and efficient rendering capabilities. Our experienced
              developers utilize React to build highly responsive and scalable
              web applications. By breaking down complex UIs into reusable
              components, we create seamless user experiences that adapt
              seamlessly across devices and platforms.
            </p>
          </div>

          {/* Angular Section */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000] mb-4 sm:mb-5 lg:mb-6 text-center lg:text-left leading-tight">
              Amplify Your Online Presence with<br className="hidden sm:block" /> High-Performance
              Angular Web Applications
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
              Angular, known for its comprehensive framework and robust
              features, is ideal for building large-scale and enterprise-grade
              web applications. Our skilled team harnesses the power of Angular
              to develop secure, scalable, and feature-rich web applications.
              With Angular's extensive library of pre-built components, we
              deliver rapid development without compromising on quality.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000] leading-tight">
              <span className="font-normal">Advantages </span>of React and
              Angular Web <span className="font-normal">Applications</span>
            </h2>
          </div>

          {/* Advantages Grid - Responsive 2x2 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Enhanced User Experience */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 relative">
                  <Image
                    src="/images/WAD1.svg"
                    alt="Enhanced User Experience"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-5">
                  Enhanced User Experience
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                  React and Angular enable the creation of highly interactive
                  and user-friendly web applications, resulting in improved
                  engagement and satisfaction for your users.
                </p>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 relative">
                  <Image
                    src="/images/WAD2.svg"
                    alt="Code Reusability"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-5">
                  Code Reusability
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                  React's component-based architecture and Angular's modular
                  approach promote code reusability, reducing development time
                  and effort while maintaining consistency across your
                  application.
                </p>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 relative">
                  <Image
                    src="/images/WAD3.svg"
                    alt="Scalability and Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-5">
                  Scalability and Performance
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                  Both frameworks offer robust solutions for scalability,
                  ensuring your web application can handle increasing traffic
                  and data while maintaining optimal performance.
                </p>
              </div>
            </div>

            {/* SEO-Friendly */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 relative">
                  <Image
                    src="/images/WAD4.svg"
                    alt="SEO-Friendly"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-5">
                  SEO-Friendly
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed text-center sm:text-justify">
                  React and Angular applications can be optimized for search
                  engines, ensuring better visibility and ranking in search
                  results, ultimately driving organic traffic to your website.
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
