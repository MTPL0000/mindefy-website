import Image from "next/image";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer
      className="w-full text-[#212353] relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #f2f2f5, #FFFFFF, #edbaad)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-[8.83rem] h-full flex flex-col justify-between pt-8 sm:pt-12 lg:pt-[3.94rem]">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-[6rem] flex-1">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
              {/* Main Mindefy Logo */}
              <div className="relative w-40 sm:w-48 lg:w-[15.63rem] h-10 sm:h-12 lg:h-[4.02rem]">
                <Image
                  src="/images/nav-logo.svg"
                  alt="Mindefy Technologies Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Additional Logos */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative w-32 sm:w-40 lg:w-[13.12rem] h-12 sm:h-16 lg:h-[4.92rem]">
                  <Image
                    src="/images/Footer.webp"
                    alt="Digital India Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Columns - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 flex-1 w-full">
            {/* India Office */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  INDIA OFFICE
                </h3>
                <div className="text-xs sm:text-sm opacity-90 space-y-1">
                  <p>201, Atulya IT Park,</p>
                  <p>Khandwa Road, Indore-452001</p>
                  <p>(M.P.) India</p>
                  <p className="mt-2 sm:mt-3">rahul@mindefy.tech</p>
                  <p>+91-731-2996160</p>
                  <p>+91-90961-26060</p>
                </div>
              </div>

              {/* UAE Office */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  UAE OFFICE
                </h3>
                <div className="text-xs sm:text-sm opacity-90 space-y-1">
                  <p>Dubai Silicon Oasis, DDP, Building A1,</p>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="mt-2 sm:mt-3">+971 52 232 4382</p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                COMPANY
              </h3>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm opacity-90">
                <a
                  href="/about-us"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  About
                </a>

                <a
                  href="/testimonials"
                  className=" block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Testimonials
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                PORTFOLIO
              </h3>
              <div className="space-y-4 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm opacity-90">
                <a
                  href="/your-hour"
                  className="block  hover:opacity-100 cursor-pointer transition-opacity"
                >
                  YourHour
                </a>
                <a
                  href="/spector"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Spector
                </a>
                <a
                  href="/early-foods"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Early Foods
                </a>
                <a
                  href="/jego"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  JEGO
                </a>
                <a
                  href="/digi-bill"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  GreenBill
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                SERVICES
              </h3>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm opacity-90">
                <a
                  href="/hybrid-app-development"
                  className=" block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Hybrid App Development
                </a>
                <a
                  href="/startup-support"
                  className=" block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Startup Support & Consulting
                </a>
                <a
                  href="/digital-transformation"
                  className=" block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Digital Transformation
                </a>
                <a
                  href="/mvp-development"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  MVP Dev. & PMF Test
                </a>
                <a
                  href="/staff-services"
                  className="block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Staff Augmenation Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 my-6 sm:my-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.05rem] lg:h-[2.05rem] bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <Image
              src="/images/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.05rem] lg:h-[2.05rem] bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <Image
              src="/images/twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.5rem] lg:h-[1.5rem] object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.05rem] lg:h-[2.05rem] bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <Image
              src="/images/ig.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.5rem] lg:h-[1.5rem] object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.05rem] lg:h-[2.05rem] bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <Image
              src="/images/linkden.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.5rem] lg:h-[1.5rem] object-contain"
            />
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.05rem] lg:h-[2.05rem] bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <Image
              src="/images/yt.svg"
              alt="YouTube"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[1.5rem] lg:h-[1.5rem] object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#212353] border-t pt-3 sm:pt-4 pb-3 sm:pb-4">
          <p className="text-sm sm:text-base lg:text-[1rem]">
            ©{" "}
            <span className="font-bold">
              Mindefy Technologies Private Limited
            </span>
            ™, {getYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
