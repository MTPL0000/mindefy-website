import Image from "next/image";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";
import ContactUs from "./HomePage/ContactUs";

export default function MindfulUX() {
  return (
    <section className="mx-auto bg-white">
      <Navbar />
      <section className="mx-auto pt-16">
        <div
          style={{
            background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
          }}
          className="h-[50.5rem] flex flex-col items-center justify-center gap-12"
        >
          <div className="relative aspect-[1/1] w-[7.5rem] overflow-hidden">
            <Image
              src="/images/logo/mindefy-logo.svg"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-[#342871] text-4xl font-bold tracking-wider">
              MindfulUX
            </p>
            <p className="text-[#D84326] text-2xl font-medium tracking-wider">
              A Design Studio
            </p>
          </div>
        </div>

        <div
          style={{
            background: `radial-gradient(circle at bottom, #eeeafc 1%, #f9f3f0 80%, #ffffff 90%)`,
          }}
        >
          <div className="m-auto w-[70rem] h-[35rem] flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-4xl font-semibold text-[#262626]">About</h3>
              <span className="text-[#262626] text-xl font-normal">
                Mindful UX - Design Studio
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-8">
              <p className="text-[#4D4D4D] text-base font-normal text-start">
                One-of-a-kind blend of comprehensive “All Designs” services,
                conveniently available under one umbrella.
              </p>
              <p className="text-[#4D4D4D] text-base font-normal text-start">
                Conducting meticulous UX research to crafting and delivering the
                final prototype, along with captivating graphics, we’ve got you
                covered.
              </p>
              <p className="text-[#4D4D4D] text-base font-normal text-start">
                Our team specializes in providing end-to-end design solutions,
                ensuring a seamless and cohesive design journey from start to
                finish.
              </p>
              <p className="text-[#4D4D4D] text-base font-normal text-start">
                A keen focus on user experience, we employ industry-leading
                methodologies to create intuitive and visually stunning designs
                that captivate your target audience.
              </p>
              <p className="text-[#4D4D4D] text-base font-normal text-start">
                Experience the convenience and expertise of our all-in-one
                design services as we bring your vision to life, leaving a
                lasting impression on your users.
              </p>
            </div>
          </div>
        </div>

        {/* First Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-52 items-center">
            <div className="relative aspect-[1.5/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-1.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-[35rem] flex flex-col items-start justify-center gap-5 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  Mindful Wellness
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Detox your digital habits
                </h3>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe&hl=en_IN&gl=US"
                target="_blank"
                className="text-[#1E4494] text-lg cursor-pointer font-semibold hover:underline"
              >
                (Link to Product)
              </a>
              <p className="text-[#000000] text-base font-normal">
                The ultimate mobile application designed to help you break your
                digital addictions and focus on what really matters. Over 10
                million users and 70,000+ positive feedbacks on the Play Store,
                Yourhour is the go-to solution for anyone looking to improve
                their digital wellness.
              </p>
              <a
                href="/your-hour"
                className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-1 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
              >
                Case Study
                {"->"}
              </a>
            </div>
          </div>
        </section>

        {/* Second Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">
            <div className="w-[35rem] flex flex-col items-start justify-center gap-8 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  AI Asset Management
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Automate System Maintenance
                </h3>
              </div>
              <a
                href="https://spector.ai/"
                target="_blank"
                className="text-[#1E4494] text-lg cursor-pointer font-semibold hover:underline"
              >
                (Link to Product)
              </a>
              <p className="text-[#000000] text-base font-normal">
                Spector.ai is a leader in 360o Asset Health Platform and
                solutions based on AI and AI Agents. Our platform and solutions
                help you capture more value while maximizing your asset
                performance and integrity and achieving sustainability goals.
              </p>
              {/* <button className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-1 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0">
                Case Study
                {"->"}
              </button>
              */}
            </div>

            <div className="relative aspect-[1.8/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-2.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* 3rd Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-50 items-center">
            <div className="relative aspect-[1.8/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-3.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-[35rem] flex flex-col items-start justify-center gap-8 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  OTT/Video Streaming
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Entertainment | EdTech
                </h3>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.miraclelensapp"
                target="_blank"
                className="text-[#1E4494] text-lg cursor-pointer font-semibold hover:underline"
              >
                (Link to Product)
              </a>
              <p className="text-[#000000] text-base font-normal">
                A video streaming platform designed to help you have access to
                precise courses and talks from world-renowned mentors in the
                fields of psychology, yoga, and the tools and knowledge you need
                to live your life in full spectrum, and achieve True Fulfilment.
              </p>
              {/*<a
                href=""
                className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-1 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
              >
                Case Study
                {"->"}
              </a>
              */}
            </div>
          </div>
        </section>

        {/* 4th Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-[35rem] flex flex-col items-start justify-center gap-8 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  E-Commerce
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Superfoods E-commerce
                </h3>
              </div>

              <a
                href="https://earlyfoods.com/"
                target="_blank"
                className="text-[#1E4494] text-lg cursor-pointer font-semibold hover:underline"
              >
                (Link to Product)
              </a>
              <p className="text-[#000000] text-base font-normal">
                A video streaming platform designed to help you have access to
                precise courses and talks from world-renowned mentors in the
                fields of psychology, yoga, and the tools and knowledge you need
                to live your life in full spectrum, and achieve True Fulfilment.
              </p>
            </div>

            <div className="relative aspect-[1.8/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-4.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* 5th Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
            <div className="relative aspect-[1.8/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-5.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-[35rem] flex flex-col items-start justify-center gap-8 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  Paperless Billing
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Digital Receipts for Everyone
                </h3>
              </div>

              <p className="text-[#000000] text-base font-normal">
                The app’s powerful OCR technology captures all necessary details
                from the hard copy bill and generates a digital bill. This not
                only helps to organize expenses but also contributes to the
                preservation of the planet.
              </p>
              <a
                href="/digi-bill"
                className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-1 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
              >
                Case Study
                {"->"}
              </a>
            </div>
          </div>
        </section>

        {/* 6th Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-[35rem] flex flex-col items-start justify-center gap-8 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  Business Suite
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Oil Industry OPS Management
                </h3>
              </div>

              <p className="text-[#000000] text-base font-normal">
                Machone is a Dubai based Oil Industry Consultants, To cater the
                need of Oil industry Machone provides strong end to end services
                from start to end that any Oil industry working at any level
                will need.
              </p>
              <a
                href="/mach-one"
                className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-1 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
              >
                Case Study
                {"->"}
              </a>
            </div>

            <div className="relative aspect-[2/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-6.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* 7th Case Study */}
        <section className="m-auto h-[32rem] mt-32 mb-5 w-full bg-gradient-to-bl from-gray-50 via-purple-50 to-pink-100 md:px-16">
          <div className="m-auto max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-48 items-center">
            <div className="relative aspect-[1.8/1] w-[37.5rem] overflow-hidden">
              <Image
                src="/images/mfux-7.webp"
                alt="image"
                fill
                className="object-contain"
              />
            </div>

            <div className="w-[35rem] flex flex-col items-start justify-center gap-8 lg:text-left">
              <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-5xl font-semibold text-[#262626]">
                  Delivery Suite
                </h2>
                <h3 className="text-4xl font-medium text-[#262626]">
                  Delivery Business Management
                </h3>
              </div>

              <p className="text-[#000000] text-base font-normal">
                Super Easy Optemize and manage your delivery business, Soliroute
                provides you auto optemize route for deliveries and assigns it
                to the drivers. There is a Driver App that help manage realtime
                data of delivery statuses for the admin and driver.
              </p>
              <a
                href="/soli-stack"
                className="bg-[#231F20] text-[#FFFFFF] px-6 py-4 rounded-sm text-3xl cursor-pointer font-semibold flex items-center gap-1 hover:bg-gray-800 transition-colors duration-300 mx-auto lg:mx-0"
              >
                Case Study
                {"->"}
              </a>
            </div>
          </div>
        </section>

        <ContactUs />
      </section>
      <Footer />
    </section>
  );
}
