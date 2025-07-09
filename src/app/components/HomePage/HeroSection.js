// src/app/components/HeroSection.js
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#f3f4ff] via-[#FFFFFF] to-[#fff3f0] flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Floating 3D Characters - Hidden on mobile and small tablets */}
      {/* <div className="absolute left-4 lg:left-8 xl:left-10 top-1/2 -translate-y-1/2 w-40 h-48 lg:w-[18rem] lg:h-[22rem] xl:w-[25rem] xl:h-[30rem] 2xl:w-[29.45rem] 2xl:h-[36.095rem] animate-pulse hidden md:block">
        <Image
          src="/images/boy.png"
          alt="Character Left"
          fill
          className="object-contain"
        />
      </div> */}

      {/* <div className="absolute right-4 lg:right-8 xl:right-10 top-1/2 -translate-y-1/2 w-40 h-48 lg:w-[18rem] lg:h-[22rem] xl:w-[25rem] xl:h-[30rem] 2xl:w-[29.45rem] 2xl:h-[36.095rem] animate-pulse hidden md:block">
        <Image
          src="/images/girl.png"
          alt="Character Right"
          fill
          className="object-contain"
        />
      </div> */}

      <div className="mx-auto text-center z-10 max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-semibold text-center leading-tight">
          <span className="text-[#F6BC34]">Ideation</span>{" "}
          <span className="text-black">to</span>
          <br />
          <span className="text-[#0BB1E9] font-semibold">Realization</span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed">
          Supporting Enterprises & Startups by Providing Solutions Based on
          Proven Technology Frameworks and Acting as Native Accelerators.
        </p>
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition">
            Learn More →
          </button>
        </div>

        {/* Client Logos */}
        <div className="mt-10 sm:mt-14">
          <p className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
            Client and Partner Alliances
          </p>
          
          {/* Mobile: Scrollable logos */}
          <div className="block sm:hidden overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              <div className="relative w-32 aspect-[2.39/1] flex-shrink-0">
                <Image src="/images/Kotak.svg" alt="Kotak" fill className="object-contain" />
              </div>
              <div className="relative w-32 aspect-[2.39/1] flex-shrink-0">
                <Image src="/images/netlink.svg" alt="Netlink" fill className="object-contain" />
              </div>
              <div className="relative w-32 aspect-[2.39/1] flex-shrink-0">
                <Image src="/images/krungthai.svg" alt="Krungthai" fill className="object-contain" />
              </div>
              <div className="relative w-16 aspect-[7/6] flex-shrink-0">
                <Image src="/images/mst.svg" alt="MST" fill className="object-contain" />
              </div>
              <div className="relative w-32 aspect-[2.39/1] flex-shrink-0">
                <Image src="/images/Bottomline.svg" alt="Bottomline" fill className="object-contain" />
              </div>
              <div className="relative w-32 aspect-[2.39/1] flex-shrink-0">
                <Image src="/images/solistack.png" alt="Solistack" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Tablet and Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center max-w-6xl mx-auto px-6">
            <div className="relative w-16 sm:w-24 lg:w-32 aspect-[2.39/1] p-2 sm:p-3 lg:p-4">
              <Image src="/images/Kotak.svg" alt="Kotak" fill className="object-contain" />
            </div>
            <div className="relative w-16 sm:w-24 lg:w-32 aspect-[2.39/1] p-2 sm:p-3 lg:p-4">
              <Image src="/images/netlink.svg" alt="Netlink" fill className="object-contain" />
            </div>
            <div className="relative w-16 sm:w-24 lg:w-32 aspect-[2.39/1] p-2 sm:p-3 lg:p-4">
              <Image src="/images/krungthai.svg" alt="Krungthai" fill className="object-contain" />
            </div>
            <div className="relative w-8 sm:w-12 lg:w-16 aspect-[7/6] p-2 sm:p-3 lg:p-4">
              <Image src="/images/mst.svg" alt="MST" fill className="object-contain" />
            </div>
            <div className="relative w-16 sm:w-24 lg:w-32 aspect-[2.39/1] p-2 sm:p-3 lg:p-4">
              <Image src="/images/Bottomline.svg" alt="Bottomline" fill className="object-contain" />
            </div>
            <div className="relative w-16 sm:w-24 lg:w-32 aspect-[2.39/1] p-2 sm:p-3 lg:p-4">
              <Image src="/images/solistack.png" alt="Solistack" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
