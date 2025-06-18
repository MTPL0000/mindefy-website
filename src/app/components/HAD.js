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
      <section className=" mt-28 mx-auto ">
        <div className=" mx-auto text-center">
          {/* Header Tag */}
          <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Hybrid Application Development
          </p>

          {/* Main Title */}
          <h1 className="text-[2.25rem]  font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto">
            <span className="font-normal">Elevate </span>Your Mobile App
            Experience <span className="font-normal">with </span>
            <span className="font-medium">Hybrid App Development </span>
            <span className="font-normal">Services</span>
          </h1>

          {/* Description Paragraphs */}
          <div className="w-[60.25rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.25rem]">
            <p className="text-[1rem] text-[#444444] leading-relaxed ">
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
          <div className="relative  w-full h-[30.125rem] mx-auto mb-[4.5rem]">
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
      <section className="py-[4.5rem] ">
        <div className="max-w-[75rem] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-[2.5rem]">
            <p className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
              BENEFITS OF CHOOSING IN HYBRID APPS
            </p>
            <h2 className="text-[2.25rem] font-semibold text-[#000000] mb-[2.5rem]">
              Seamless Cross-Platform Compatibility
            </h2>
            <p className="text-[1rem] text-[#444444] text-justify leading-relaxed max-w-[60.25rem] mx-auto">
              Hybrid apps built using React Native, Flutter, and PWAs seamlessly
              work across various platforms, including iOS, Android, and the
              web. This unified approach eliminates the need for separate
              codebases, saving time and resources while ensuring consistent
              functionality and user experience across devices.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="flex flex-wrap justify-center gap-[3.44rem] max-w-[72.5rem] mx-auto">
            {/* Native-Like Performance */}
            <div className=" flex-1 h-[35.75rem] max-w-[21.875rem] text-center">
              <div className="mb-6">
                <div className="relative w-[13.875rem] h-[13.875rem] mx-auto">
                  <Image
                    src="/images/HAD1.webp"
                    alt="Native-Like Performance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-2.5 ">
                Native-Like Performance
              </h3>
              <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                With React Native and Flutter, you can create hybrid apps that
                offer native-like performance and user interfaces. These
                frameworks leverage the power of native components and optimized
                rendering, resulting in smooth animations, fast response times,
                and access to device-specific features. Users won't even notice
                the difference between a hybrid app and a native one.
              </p>
            </div>

            {/* Faster Time-to-Market */}
            <div className="flex-1 h-[35.75rem] max-w-[21.875rem] text-center">
              <div className="mb-6">
                <div className="relative w-[13.875rem] h-[13.875rem]  mx-auto">
                  <Image
                    src="/images/HAD2.webp"
                    alt="Faster Time-to-Market"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-2.5">
                Faster Time-to-Market
              </h3>
              <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
                Hybrid app development accelerates the time-to-market process by
                utilizing frameworks like React Native and Flutter. These
                frameworks enable code sharing and reusability, allowing
                developers to build apps for multiple platforms simultaneously.
                By streamlining your development efforts, you can launch your
                app faster and gain a competitive edge.
              </p>
            </div>

            {/* Cost-Effective Solution */}
            <div className="flex-1 h-[35.75rem] max-w-[21.875rem] text-center">
              <div className="mb-6">
                <div className="relative  w-[13.875rem] h-[13.875rem]  mx-auto">
                  <Image
                    src="/images/HAD3.webp"
                    alt="Cost-Effective Solution"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-[1.5rem] font-semibold text-[#000000] mb-2.5">
                Cost-Effective Solution
              </h3>
              <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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

      <section className="py-[4.5rem] bg-white">
        <div className="max-w-[72.5rem]  mx-auto ">
          {/* Technologies Content */}
          <div className="flex flex-col gap-[3rem] max-w-[72.5rem] mx-auto">
            {/* Versatility with Progressive Web Apps (PWAs) */}
            <div className="flex items-start gap-7  ">
              <div className="">
                <div className="w-[13.875rem] h-[13.875rem]  flex  justify-center">
                  <div className="w-[4.875rem] h-[4.875rem] relative">
                    <Image
                      src="/images/pwa1.webp"
                      alt="PWA Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-2.5">
                  Versatility with Progressive Web Apps (PWAs)
                </h3>
                <p className="text-[1rem] font-normal text-[#444444] leading-relaxed text-justify">
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
            <div className="flex items-start gap-7 ">
              <div className="flex-shrink-0">
                <div className="w-[13.875rem] h-[13.875rem]  flex  justify-center">
                  <div className="w-[6.95rem] h-[6.46rem] relative">
                    <Image
                      src="/images/react.webp"
                      alt="React Native Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-2.5">
                  React Native
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify mb-4">
                  Mindefy stands out as the ideal choice for React Native app
                  development. With a wealth of experience and a highly skilled
                  team of developers, we have the expertise and knowledge to
                  deliver outstanding results. Our commitment to excellence,
                  personalized approach, agile development process, and seamless
                  integration with native features make us the preferred partner
                  for businesses looking to create cutting-edge React Native
                  applications.
                </p>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
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

            {/* Flutter */}
            <div className="flex items-start gap-7 ">
              <div className="flex-shrink-0">
                <div className="w-[13.875rem] h-[13.875rem]  flex  justify-center">
                  <div className="w-[6.5rem] h-[6.5rem] relative">
                    <Image
                      src="/images/flutter.webp"
                      alt="Flutter Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-2.5">
                  Flutter
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify mb-4">
                  Discover the advantages of partnering with Mindefy for your
                  Flutter app development needs. With a proven track record and
                  a team of experienced Flutter developers, we offer unmatched
                  expertise in harnessing the power of this versatile framework.
                  As a trusted leader in the industry, our commitment to
                  delivering exceptional results sets us apart.
                </p>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify mb-4">
                  With our personalized solutions, collaborative approach, and
                  agile development methodologies, we ensure your Flutter app is
                  tailored to your unique requirements.
                </p>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify mb-4">
                  Benefit from Flutter's cross-platform capabilities to reach a
                  wider audience, while our focus on quality, innovation, and
                  timely delivery ensures a remarkable user experience. Choose
                  us as your Flutter development partner and unlock the full
                  potential of your app idea.
                </p>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
                  Flutter is a versatile UI toolkit for building natively
                  compiled apps for mobile, web, and desktop. Using the Dart
                  programming language, Flutter provides a highly performant and
                  visually appealing framework. With Flutter, you can create
                  stunning hybrid apps with smooth animations, customizable
                  widgets, and a single codebase for multiple platforms.
                </p>
              </div>
            </div>

            {/* Progressive Web Apps (PWAs) */}
            <div className="flex items-start gap-7 ">
              <div className="flex-shrink-0">
                <div className="w-[13.875rem] h-[13.875rem]  flex  justify-center">
                  <div className="w-[9.375rem] h-[3.529rem] relative">
                    <Image
                      src="/images/pwa2.webp"
                      alt="PWA Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-[1.5rem]  font-semibold text-[#000000] mb-2.5">
                  Progressive Web Apps (PWAs)
                </h3>
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify mb-4">
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
                <p className="text-[1rem] text-[#444444] leading-relaxed text-justify">
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
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
