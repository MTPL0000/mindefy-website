"use client";

import Image from "next/image";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";
import Footer from "./HomePage/Footer";

export default function HAD() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Matching the provided image */}
      <section className="mt-16 sm:mt-20 lg:mt-28 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-sm sm:text-base lg:text-[1rem] font-bold tracking-wider lg:tracking-widest uppercase mb-3 sm:mb-4 lg:mb-[1.25rem]">
            Hybrid Application Development
          </p>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[#000000] mb-4 sm:mb-6 lg:mb-7 leading-tight max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-[50rem] mx-auto px-2 sm:px-0">
            <span className="font-normal">Elevate </span>Your Mobile App
            Experience <span className="font-normal">with </span>
            <span className="font-medium">Hybrid App Development </span>
            <span className="font-normal">Services</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:w-[60.25rem] font-normal mx-auto mb-6 sm:mb-8 lg:mb-[2.25rem] text-center sm:text-justify lg:text-justify space-y-3 sm:space-y-4 lg:space-y-[1.25rem] px-2 sm:px-0">
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed">
              As a leading hybrid app development company, we pride ourselves on
              delivering top-notch solutions that redefine industry standards.
              With an impressive track record and a team of highly skilled
              developers, we specialize in creating exceptional experiences
              through React Native, Flutter, and Progressive Web Apps (PWAs).
              Our commitment to excellence and innovation sets us apart, making
              us the preferred choice for businesses looking to harness the full
              potential of hybrid app technologies.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[30.125rem] mx-auto mb-8 sm:mb-12 lg:mb-[4.5rem]">
            <Image
              src="/images/HAD.webp"
              alt="Hybrid App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefits of Choosing Hybrid Apps Section */}
      <section className="py-8 sm:py-12 lg:py-[4.5rem] px-4 sm:px-6 lg:px-0">
        <div className="max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-[75rem] mx-auto lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-[2.5rem]">
            <p className="text-[#FF5225] text-sm sm:text-base lg:text-[1rem] font-bold tracking-wider lg:tracking-widest uppercase mb-3 sm:mb-4 lg:mb-[1.25rem]">
              BENEFITS OF CHOOSING IN HYBRID APPS
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold text-[#000000] mb-6 sm:mb-8 lg:mb-[2.5rem]">
              Seamless Cross-Platform Compatibility
            </h2>
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] text-center sm:text-justify lg:text-justify leading-relaxed max-w-full lg:max-w-[60.25rem] mx-auto">
              Hybrid apps built using React Native, Flutter, and PWAs seamlessly
              work across various platforms, including iOS, Android, and the
              web. This unified approach eliminates the need for separate
              codebases, saving time and resources while ensuring consistent
              functionality and user experience across devices.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[3.44rem] lg:flex lg:flex-wrap lg:justify-center lg:max-w-[72.5rem] lg:mx-auto">
            {/* Native-Like Performance */}
            <div className="text-center lg:flex-1 lg:h-[35.75rem] lg:max-w-[21.875rem]">
              <div className="mb-4 sm:mb-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto">
                  <Image
                    src="/images/HAD1.webp"
                    alt="Native-Like Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                Native-Like Performance
              </h3>
              <p className="text-sm sm:text-base lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                With React Native and Flutter, you can create hybrid apps that
                offer native-like performance and user interfaces. These
                frameworks leverage the power of native components and optimized
                rendering, resulting in smooth animations, fast response times,
                and access to device-specific features. Users won't even notice
                the difference between a hybrid app and a native one.
              </p>
            </div>

            {/* Faster Time-to-Market */}
            <div className="text-center lg:flex-1 lg:h-[35.75rem] lg:max-w-[21.875rem]">
              <div className="mb-4 sm:mb-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto">
                  <Image
                    src="/images/HAD2.webp"
                    alt="Faster Time-to-Market"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                Faster Time-to-Market
              </h3>
              <p className="text-sm sm:text-base lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                Hybrid app development accelerates the time-to-market process by
                utilizing frameworks like React Native and Flutter. These
                frameworks enable code sharing and reusability, allowing
                developers to build apps for multiple platforms simultaneously.
                By streamlining your development efforts, you can launch your
                app faster and gain a competitive edge.
              </p>
            </div>

            {/* Cost-Effective Solution */}
            <div className="text-center md:col-span-2 lg:col-span-1 lg:flex-1 lg:h-[35.75rem] lg:max-w-[21.875rem]">
              <div className="mb-4 sm:mb-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto">
                  <Image
                    src="/images/HAD3.webp"
                    alt="Cost-Effective Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                Cost-Effective Solution
              </h3>
              <p className="text-sm sm:text-base lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                Choosing hybrid app development can significantly reduce costs
                compared to developing separate native apps. With a single
                codebase, you save on development time, resources, and ongoing
                maintenance expenses. This cost-effectiveness makes hybrid apps
                an attractive option for startups, small businesses, and
                projects with budget constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-[4.5rem] bg-white px-4 sm:px-6 lg:px-0">
        <div className="max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-[72.5rem] mx-auto">
          {/* Technologies Content */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-[3rem] lg:flex lg:flex-col lg:gap-[3rem] lg:max-w-[72.5rem] lg:mx-auto">
            {/* Versatility with Progressive Web Apps (PWAs) */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-7">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto lg:mx-0 flex items-center justify-center lg:block">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[4.875rem] lg:h-[4.875rem] relative">
                    <Image
                      src="/images/pwa1.webp"
                      alt="PWA Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                  Versatility with Progressive Web Apps (PWAs)
                </h3>
                <p className="text-sm sm:text-base lg:text-[1rem] font-normal text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                  Progressive Web Apps offer a unique hybrid solution, combining
                  the best features of web and mobile apps. PWAs can be accessed
                  through web browsers and provide an app-like experience with
                  offline functionality, push notifications, and home screen
                  installation. With PWAs, you can reach users across various
                  devices and platforms, including desktop and mobile.
                </p>
              </div>
            </div>

            {/* React Native */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-7">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto lg:mx-0 flex items-center justify-center lg:block">
                  <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-[6.95rem] lg:h-[6.46rem] relative">
                    <Image
                      src="/images/react.webp"
                      alt="React Native Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                  React Native
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    Mindefy stands out as the ideal choice for React Native app
                    development. With a wealth of experience and a highly skilled
                    team of developers, we have the expertise and knowledge to
                    deliver outstanding results. Our commitment to excellence,
                    personalized approach, agile development process, and seamless
                    integration with native features make us the preferred partner
                    for businesses looking to create cutting-edge React Native
                    applications.
                  </p>
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    React Native is powered by the robust React framework. React
                    Native allows developers to create native-like apps using
                    JavaScript. It offers a rich set of pre-built components,
                    libraries, and a supportive community. React Native enables
                    rapid development, code reusability, and seamless integration
                    with native device features, making it a popular choice for
                    hybrid app development.
                  </p>
                </div>
              </div>
            </div>

            {/* Flutter */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-7">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto lg:mx-0 flex items-center justify-center lg:block">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[6.5rem] lg:h-[6.5rem] relative">
                    <Image
                      src="/images/flutter.webp"
                      alt="Flutter Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                  Flutter
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    Discover the advantages of partnering with Mindefy for your
                    Flutter app development needs. With a proven track record and
                    a team of experienced Flutter developers, we offer unmatched
                    expertise in harnessing the power of this versatile framework.
                    As a trusted leader in the industry, our commitment to
                    delivering exceptional results sets us apart.
                  </p>
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    With our personalized solutions, collaborative approach, and
                    agile development methodologies, we ensure your Flutter app is
                    tailored to your unique requirements.
                  </p>
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    Benefit from Flutter's cross-platform capabilities to reach a
                    wider audience, while our focus on quality, innovation, and
                    timely delivery ensures a remarkable user experience. Choose
                    us as your Flutter development partner and unlock the full
                    potential of your app idea.
                  </p>
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    Flutter is a versatile UI toolkit for building natively
                    compiled apps for mobile, web, and desktop. Using the Dart
                    programming language, Flutter provides a highly performant and
                    visually appealing framework. With Flutter, you can create
                    stunning hybrid apps with smooth animations, customizable
                    widgets, and a single codebase for multiple platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Progressive Web Apps (PWAs) */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-7">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[13.875rem] lg:h-[13.875rem] mx-auto lg:mx-0 flex items-center justify-center lg:block">
                  <div className="w-24 h-8 sm:w-32 sm:h-10 md:w-36 md:h-12 lg:w-[9.375rem] lg:h-[3.529rem] relative">
                    <Image
                      src="/images/pwa2.webp"
                      alt="PWA Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 lg:mb-2.5">
                  Progressive Web Apps (PWAs)
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    Experience the transformative power of Progressive Web Apps
                    (PWAs) with Mindefy as your trusted development partner. As
                    industry leaders in PWA development, our experienced team of
                    developers combines cutting-edge technologies with best SEO
                    practices to deliver outstanding web experiences. By choosing
                    us you gain access to our expertise in leveraging PWAs' unique
                    features, such as offline functionality, fast loading speeds,
                    and seamless responsiveness across devices. We prioritize
                    customization, collaboration, and agile methodologies,
                    ensuring your PWA to your business goals and target audience.
                    With our commitment to delivering high-quality solutions,
                    exceptional user experiences, and improved discoverability, we
                    empower your brand to stand out in the digital landscape.
                    Partner with us for your PWA development needs and elevate
                    your web presence to new heights.
                  </p>
                  <p className="text-sm sm:text-base lg:text-[1rem] text-[#444444] leading-relaxed text-center sm:text-justify lg:text-justify">
                    PWAs combine the best of web and mobile app technologies,
                    delivering a seamless user experience. PWAs leverage modern
                    web capabilities such as service workers, web app manifests,
                    and push notifications, providing users with a native-like
                    experience directly from their browsers. PWAs are
                    platform-agnostic, ensuring compatibility across devices and
                    operating systems.
                  </p>
                </div>
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
