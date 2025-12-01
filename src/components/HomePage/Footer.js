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
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-[6rem] flex-1 pb-5">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex flex-col gap-4 sm:gap-5 items-start">
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
              <div className="relative lg:left-[-5%] w-32 sm:w-40 lg:w-[13.12rem] h-12 sm:h-16 lg:h-[4.92rem]">
                <Image
                  src="/images/Footer.webp"
                  alt="Digital India Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center items-center gap-3">
                <a
                  className="bg-[#edbaad] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all"
                  href="https://www.linkedin.com/company/mindefytechnologies/?viewAsMember=true"
                  target="_blank"
                >
                  <Image
                    src="/images/linkden.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </a>
                <a
                  className="bg-[#edbaad] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all"
                  href="https://www.instagram.com/mindefy_technologies?igsh=MThpZGRkeWNxdHhnaA=="
                  target="_blank"
                >
                  <Image
                    src="/images/ig.svg"
                    alt="Instagram"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Content Columns - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 flex-1 w-full">
            {/* India Office */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  INDIA OFFICE
                </h2>
                <div className="text-xs sm:text-sm opacity-90 space-y-1">
                  <p>201, Atulya IT Park,</p>
                  <p>Khandwa Road, Indore-452001</p>
                  <p>(M.P.) India</p>
                  <a
                    href="mailto:rahul@mindefy.tech"
                    className="mt-2 sm:mt-3 w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                  >
                    Email Us
                  </a>
                  <p>+91-731-2996160</p>
                  <p>+91-90961-26060</p>
                </div>
              </div>

              {/* UAE Office */}
              <div>
                <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  UAE OFFICE
                </h2>
                <div className="text-xs sm:text-sm opacity-90 space-y-1">
                  <p>Dubai Silicon Oasis, DDP, Building A1,</p>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="mt-2 sm:mt-3">+971 52 232 4382</p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                COMPANY
              </h2>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm opacity-90">
                <a
                  href="/about-us-technology-innovators"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  About
                </a>

                <a
                  href="/customer-testimonials-reviews"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Testimonials
                </a>

                <a
                  href="https://www.yourhourapp.com/blogs"
                  target="_blank"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  YourHour Blogs
                </a>
                <a
                  href="/site-map"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Sitemap
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                PORTFOLIO
              </h2>
              <div className="space-y-4 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm opacity-90">
                <a
                  href="/yourhour-screentime-app"
                  className="w-fit block  hover:opacity-100 cursor-pointer transition-opacity"
                >
                  YourHour
                </a>
                <a
                  href="/spector-analytics-software"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Spector
                </a>
                <a
                  href="/early-foods-e-commerce"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  EarlyFoods
                </a>
                <a
                  href="/jego-ott-platform"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  JEGO
                </a>
                <a
                  href="/greenbill-paperless-billing-software"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  GreenBill
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                SERVICES
              </h2>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm opacity-90">
                <a
                  href="/hybrid-app-development-services"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Hybrid App Development
                </a>
                <a
                  href="/startup-support-consulting"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Startup Support & Consulting
                </a>
                <a
                  href="/digital-transformation-consulting"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Digital Transformation
                </a>
                <a
                  href="/mvp-development-startup-support"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  MVP Development
                </a>
                <a
                  href="/staff-augmentation-services"
                  className="w-fit block hover:opacity-100 cursor-pointer transition-opacity"
                >
                  Staff Augmenation Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#212353] border-t pt-3 sm:pt-4 pb-3 sm:pb-4">
          <p className="text-sm sm:text-base lg:text-[1rem]">
            ©{" "}
            <span className="font-bold">
              Mindefy Technologies Private Limited
            </span>
            ™, 2015-{getYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
