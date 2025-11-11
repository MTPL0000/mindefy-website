"use client";
import Image from "next/image";

export default function MindfulUX() {
  return (
    <section className="mx-auto">
      <div
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
        className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4 py-20 md:py-56"
      >
        <div className="relative aspect-[1/1] w-20 md:w-36 overflow-hidden">
          <Image
            src="/images/logo/mindefy-logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className="text-[#342871] text-5xl md:text-7xl font-semibold tracking-normal text-center">
            MindfulUX
          </h1>
          <p className="text-[#D84326] text-lg md:text-2xl font-medium tracking-wider text-center">
            A Design Studio
          </p>
        </div>
      </div>

      <div
        style={{
          background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
        }}
      >
        <div className="m-auto max-w-7xl px-4 md:px-8 py-16 md:py-56 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#262626] text-center">
              About
            </h3>
            <span className="text-[#262626] text-lg md:text-xl font-normal text-center">
              Mindful UX - Design Studio
            </span>
          </div>
          <div className="flex flex-col items-start justify-center gap-6 md:gap-8 max-w-4xl">
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              One-of-a-kind blend of comprehensive "All Designs" services,
              conveniently available under one umbrella.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              Conducting meticulous UX research to crafting and delivering the
              final prototype, along with captivating graphics, we've got you
              covered.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              Our team specializes in providing end-to-end design solutions,
              ensuring a seamless and cohesive design journey from start to
              finish.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              A keen focus on user experience, we employ industry-leading
              methodologies to create intuitive and visually stunning designs
              that captivate your target audience.
            </p>
            <p className="text-[#4D4D4D] text-sm md:text-base font-normal text-start">
              Experience the convenience and expertise of our all-in-one design
              services as we bring your vision to life, leaving a lasting
              impression on your users.
            </p>
          </div>
        </div>
      </div>

      {/* First Case Study */}
      <section className="m-auto w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="relative aspect-[1.5/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/images/mfux-1.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>

          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-5 text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                Mindful Wellness
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Detox your digital habits
              </h3>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe&hl=en_IN&gl=US"
              target="_blank"
              className="text-[#1E4494] text-base md:text-lg cursor-pointer font-semibold hover:underline"
            >
              {"{Link to Product}"}
            </a>
            <p className="text-[#000000] text-sm md:text-base font-normal">
              The ultimate mobile application designed to help you break your
              digital addictions and focus on what really matters. Over 10
              million users and 70,000+ positive feedbacks on the Play Store,
              Yourhour is the go-to solution for anyone looking to improve their
              digital wellness.
            </p>
            <a
              href="/your-hour"
              className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Second Case Study */}
      <section className="m-auto bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0 lg:order-1">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                Flashcard Learning
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Memory Training | Productivity
              </h3>
            </div>
            {/*<a
              href="https://play.google.com/store/apps/details?id=com.memolect.flashcards"
              target="_blank"
              className="text-[#1E4494] text-base md:text-lg cursor-pointer font-semibold hover:underline"
              rel="noopener noreferrer"
            >
              {"{Link to Product}"}
            </a>*/}
            <p className="text-[#000000] text-sm md:text-base font-normal">
              Memolect is a flashcard-based learning app designed to make
              knowledge retention easier through interactive and adaptive
              learning modes. It allows users to create personalized flashcards,
              explore chosen subjects, and enhance recall with engaging study
              experiences.
            </p>
            <a
              href="/flashcard-learning-app"
              className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-[2rem] overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          <div className="relative aspect-[1/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden lg:order-2">
            <Image
              src="/images/memolect.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3rd Case Study */}
      <section className="m-auto bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="relative aspect-[1.8/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden lg:order-1">
            <Image
              src="/images/mfux-2.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0 lg:order-2">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                AI Asset Management
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Automate System Maintenance
              </h3>
            </div>
            <a
              href="https://spector.ai/"
              target="_blank"
              className="text-[#1E4494] text-base md:text-lg cursor-pointer font-semibold hover:underline"
              rel="noopener noreferrer"
            >
              {"{Link to Product}"}
            </a>
            <p className="text-[#000000] text-sm md:text-base font-normal">
              Spector.ai is a leader in 360o Asset Health Platform and solutions
              based on AI and AI Agents. Our platform and solutions help you
              capture more value while maximizing your asset performance and
              integrity and achieving sustainability goals.
            </p>
            <a
              href="/spector"
              className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-[2rem] overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 4th Case Study */}
      <section className="m-auto w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                OTT/Video Streaming
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Entertainment | EdTech
              </h3>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.miraclelensapp"
              target="_blank"
              className="text-[#1E4494] text-base md:text-lg cursor-pointer font-semibold hover:underline"
            >
              {"{Link to Product}"}
            </a>
            <p className="text-[#000000] text-sm md:text-base font-normal">
              A video streaming platform designed to help you have access to
              precise courses and talks from world-renowned mentors in the
              fields of psychology, yoga, and the tools and knowledge you need
              to live your life in full spectrum, and achieve True Fulfilment.
            </p>
            <a
              href="/jego"
              className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
          <div className="relative aspect-[1.8/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/images/mfux-3.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 5th Case Study */}
      <section className="m-auto bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="relative aspect-[1.8/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden lg:order-1">
            <Image
              src="/images/mfux-4.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0 lg:order-2">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                E-Commerce
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Superfoods E-commerce
              </h3>
            </div>

            <a
              href="https://earlyfoods.com/"
              target="_blank"
              className="text-[#1E4494] text-base md:text-lg cursor-pointer font-semibold hover:underline"
            >
              {"{Link to Product}"}
            </a>
            <p className="text-[#000000] text-sm md:text-base font-normal">
              A video streaming platform designed to help you have access to
              precise courses and talks from world-renowned mentors in the
              fields of psychology, yoga, and the tools and knowledge you need
              to live your life in full spectrum, and achieve True Fulfilment.
            </p>
            <a
              href="/early-foods"
              className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 6th Case Study */}
      <section className="m-auto w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                Paperless Billing
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Digital Receipts for Everyone
              </h3>
            </div>

            <p className="text-[#000000] text-sm md:text-base font-normal">
              The app's powerful OCR technology captures all necessary details
              from the hard copy bill and generates a digital bill. This not
              only helps to organize expenses but also contributes to the
              preservation of the planet.
            </p>
            <a
              href="/digi-bill"
              className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
          <div className="relative aspect-[1.8/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/images/mfux-5.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 7th Case Study */}
      <section className="m-auto bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="relative aspect-[2/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden lg:order-1">
            <Image
              src="/images/mfux-6.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0 lg:order-2">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                Business Suite
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Oil Industry OPS Management
              </h3>
            </div>

            <p className="text-[#000000] text-sm md:text-base font-normal">
              Machone is a Dubai based Oil Industry Consultants, To cater the
              need of Oil industry Machone provides strong end to end services
              from start to end that any Oil industry working at any level will
              need.
            </p>
            <a
              href="/mach-one"
              className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 8th Case Study */}
      <section className="m-auto w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 px-4 md:px-16 py-12 md:py-32">
        <div className="m-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center">
          <div className="w-full max-w-lg lg:max-w-xl flex flex-col items-start justify-center gap-6 md:gap-8 text-center lg:text-left mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start justify-center gap-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626]">
                Delivery Suite
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#262626]">
                Delivery Business Management
              </h3>
            </div>

            <p className="text-[#000000] text-sm md:text-base font-normal">
              Super Easy Optemize and manage your delivery business, Soliroute
              provides you auto optemize route for deliveries and assigns it to
              the drivers. There is a Driver App that help manage realtime data
              of delivery statuses for the admin and driver.
            </p>
            <a
              href="/soli-stack"
              className="bg-[#231F20] text-[#FFFFFF] px-4 md:px-6 py-3 md:py-4 rounded-sm text-xl md:text-2xl lg:text-3xl cursor-pointer font-semibold flex items-center gap-4 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
            >
              Case Study
              <div className="relative aspect-[1.5/1] w-6 md:w-8 overflow-hidden">
                <Image
                  src="/images/arrow-icon.svg"
                  alt="image"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
          <div className="relative aspect-[1.8/1] w-full max-w-lg lg:max-w-2xl mx-auto lg:mx-0 overflow-hidden">
            <Image
              src="/images/mfux-7.webp"
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
