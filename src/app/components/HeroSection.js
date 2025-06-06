// src/app/components/HeroSection.js
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#f3f4ff] via-white to-[#fff3f0] flex items-center justify-center relative overflow-hidden px-6">
      {/* Floating 3D Characters */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[29.45rem] h-[36.095rem] animate-">
        <Image
          src="/images/boy.svg"
          alt="Character Left"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[29.45rem] h-[36.095rem] animate ">
        <Image
          src="/images/girl.svg"
          alt="Character Right"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto text-center z-10">
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-semibold text-center">
          <span className="text-[#F6BC34]">Ideation</span>{" "}
          <span className="text-black">to</span>
          <br />
          <span className="text-[#0BB1E9] font-semibold">Realization</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
          Supporting Enterprises & Startups by Providing Solutions Based on
          Proven Technology Frameworks and Acting as Native Accelerators.
        </p>
        <div className="mt-16">
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
            Learn More →
          </button>
        </div>

        {/* Client Logos */}
        <div className="mt-14">
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Client and Partner Alliances
          </p>
          {/* <div className="overflow-x-auto  mt-4 w-full"> */}
          <div className="flex  justify-center items-center gap-13">
            <div className="relative w-44 aspect-[2.39/1]">
              <Image src="/images/Kotak.svg" alt="Kotak" fill />
            </div>
            <div className="relative w-44 aspect-[2.39/1]">
              <Image src="/images/netlink.svg" alt="Netlink" fill />
            </div>
            <div className="relative w-44 aspect-[2.39/1]">
              <Image src="/images/krungthai.svg" alt="Krungthai" fill />
            </div>
            <div className="relative w-21 aspect-[7/6]">
              <Image src="/images/mst.svg" alt="MST" fill />
            </div>
            <div className="relative w-44 aspect-[2.39/1]">
              <Image src="/images/Bottomline.svg" alt="Bottomline" fill />
            </div>
            <div className="relative w-44 aspect-[2.39/1]">
              <Image src="/images/solistack.svg" alt="Solistack" fill />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
