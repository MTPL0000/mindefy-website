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
      <div className="container mx-auto px-[8.83rem] h-full flex flex-col justify-between mb- pt-[3.94rem]">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-[6rem] flex-1">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <div className="flex flex-col gap-4">
              {/* Main Mindefy Logo */}
              <div className="relative w-[15.63rem] h-[4.02rem]">
                <Image
                  src="/images/nav-logo.svg"
                  alt="Mindefy Technologies Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Additional Logos */}
              <div className="flex items-center gap-6">
                <div className="relative w-[13.12rem] h-[4.92rem]">
                  <img
                    src="/images/Footer.webp"
                    alt="Digital India Logo"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Columns - Using flex instead of grid */}
          <div className="flex flex-wrap flex-1 gap-x-8 gap-y-10">
            {/* India Office */}
            <div className="flex-1 ">
              <h3 className="text-lg font-semibold mb-4">INDIA OFFICE</h3>
              <div className="text-sm opacity-90">
                <p>201, Atulya IT Park,</p>
                <p>Khandwa Road, Indore-452001</p>
                <p>(M.P.) India</p>
                <p className="mt-3">rahul@mindefy.tech</p>
                <p>+91-731-4023242</p>
                <p>+91-90961-26060</p>
              </div>

              {/* UAE Office */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">UAE OFFICE</h3>
                <div className="text-sm opacity-90">
                  <p>Dubai Silicon Oasis, DDP, Building A1,</p>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="mt-3">+971 52 232 4382</p>
                </div>
              </div>
            </div>

            {/* Company */}
            <div className="flex-1 min-w-[12rem]">
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <div className="space-y-6 text-sm opacity-90">
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  About
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Career
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Testimonials
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Infrastructure
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Blog
                </p>
              </div>
            </div>

            {/* Product */}
            <div className="flex-1 min-w-[12rem]">
              <h3 className="text-lg font-semibold mb-4">PRODUCT</h3>
              <div className="space-y-6 text-sm opacity-90">
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  YourHour
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Jego
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  MachONE
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  SoliStack
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  GreenBill
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="flex-1 ">
              <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
              <div className="space-y-6 text-sm opacity-90">
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Android App Development
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Hybrid App Development
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  Enterprise Business Development
                </p>
                <p className="hover:opacity-100 cursor-pointer transition-opacity">
                  IT/Staff Augmentation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 my-8">
          <div className="w-[2.05rem] h-[2.05rem] bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              className=" w-[2.05rem] h-[2.05rem] object-cotain"
            />
          </div>
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <img
              src="/images/twitter.svg"
              alt="Facebook"
              className=" w-[2.05rem] h-[2.05rem] object-cotain"
            />
          </div>
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <img
              src="/images/ig.svg"
              alt="Facebook"
              className=" w-[2.05rem] h-[2.05rem] object-cotain"
            />
          </div>
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <img
              src="/images/linkden.svg"
              alt="Facebook"
              className=" w-[2.05rem] h-[2.05rem] object-cotain"
            />
          </div>
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all">
            <img
              src="/images/yt.svg"
              alt="Facebook"
              className=" w-[2.05rem] h-[2.05rem] object-cotain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center  text-[#212353] border-t  border-opacity-20 pt-4 pb-4">
          <p className="text-[1rem] opacity-75">
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
