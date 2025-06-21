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

      {/* Hero Section - Matching the provided image */}
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Web Application Development
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto">
            <span className="font-normal "> Empower </span>Your Business{" "}
            <span className="font-normal">with </span>
            Custom Web Application Development{" "}
            <span className="font-normal">Services</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[60.25rem] font-normal mx-auto  mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              Your gateway to custom web application development services that
              empower your business to reach new heights of success. Our team of
              seasoned professionals excels in crafting custom web applications
              that are precisely tailored to meet your specific requirements. We
              leverage the latest technologies, frameworks, and industry best
              practices to build robust, scalable, and secure web applications
              that align with your business goals.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative  w-full h-[30.125rem] mx-auto mb-[7.25rem]">
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

      <div className="mx-auto max-w-[60.25rem] mb-24">
        <div className="w-[39.56rem] text-2xl font-semibold mb-5 ">
          <p>
            Revolutionize Your Business with<br></br> Cutting-Edge Enterprise
            Java Web Applications
          </p>
        </div>
        <div className="font-normal text-[1rem] text-justify text-[#444444]">
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

      <div className="mx-auto max-w-[60.25rem] mb-24">
        <div className="w-[39.56rem] text-2xl font-semibold mb-5 ">
          <p>
            Stay Ahead of the Curve with React and <br></br>Angular Web
            Application Development Services
          </p>
        </div>
        <div className="space-y-10 font-normal text-[1rem] text-justify text-[#444444]">
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

      {/* React and Angular Detailed Section */}
      <section className=" bg-white">
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

          {/* React Section */}
          <div className="max-w-[60.25rem] mx-auto mb-[2.5rem]">
            <h2 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
              Empower Your Business with <br></br>Next-Generation React Web
              Applications
            </h2>
            <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
              React has gained immense popularity for its component-based
              architecture and efficient rendering capabilities. Our experienced
              developers utilize React to build highly responsive and scalable
              web applications. By breaking down complex UIs into reusable
              components, we create seamless user experiences that adapt
              seamlessly across devices and platforms.
            </p>
          </div>

          {/* Angular Section */}
          <div className="max-w-[60.25rem] mx-auto mb-[2.5rem]">
            <h2 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
              Amplify Your Online Presence with<br></br> High-Performance
              Angular Web Applications
            </h2>
            <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
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
      <section className="mt-24">
        <div className="max-w-[72.5rem] mx-auto ">
          {/* Section Header */}
          <div className="text-center mb-[3.75rem]">
            <h2 className="text-[2rem] font-semibold text-[#000000] ">
              <span className="font-normal">Advantages </span>of React and
              Angular Web <span className="font-normal">Applications</span>
            </h2>
          </div>

          {/* Advantages flex - 2x2 Layout */}
          <div className="flex flex-wrap gap-[1.25rem] max-w-[72.5rem] mx-auto">
            {/* Enhanced User Experience */}
            <div className="flex items-center gap-5   flex-1 w-[35.5rem] basis-[calc(50%-1.5rem)]">
              <div className="flex-shrink-0">
                <div className=" flex items-center justify-center ">
                  <div className="w-[11.25rem] h-[11.25rem] relative">
                    <Image
                      src="/images/WAD1.svg"
                      alt="Enhanced User Experience"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-6">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                  Enhanced User Experience
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                  React and Angular enable the creation of highly interactive
                  and user-friendly web applications, resulting in improved
                  engagement and satisfaction for your users.
                </p>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex items-center gap-5   flex-1 w-[35.5rem] basis-[calc(50%-1.5rem)]">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[11.25rem] h-[11.25rem] relative">
                    <Image
                      src="/images/WAD2.svg"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-6">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                  Code Reusability
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                  React's component-based architecture and Angular's modular
                  approach promote code reusability, reducing development time
                  and effort while maintaining consistency across your
                  application.
                </p>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex items-center gap-5   flex-1 w-[35.5rem] basis-[calc(50%-1.5rem)]">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[11.25rem] h-[11.25rem] relative">
                    <Image
                      src="/images/WAD3.svg"
                      alt="Scalability and Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-6">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                  Scalability and Performance
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                  Both frameworks offer robust solutions for scalability,
                  ensuring your web application can handle increasing traffic
                  and data while maintaining optimal performance.
                </p>
              </div>
            </div>

            {/* SEO-Friendly */}
            <div className="flex items-center gap-5   flex-1 w-[35.5rem] basis-[calc(50%-1.5rem)]">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center">
                  <div className="w-[11.25rem] h-[11.25rem] relative">
                    <Image
                      src="/images/WAD4.svg"
                      alt="SEO-Friendly"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 py-6">
                <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-5">
                  SEO-Friendly
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
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
