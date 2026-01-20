import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className="relative max-w-360 mx-auto overflow-hidden pt-12 sm:pt-16 lg:pt-24">
        <div className="m-auto max-w-232 flex flex-col items-center justify-center gap-3 sm:gap-4 relative z-10 px-4 text-center">
          <h1 className="text-[#FC6B81] text-xl sm:text-2xl lg:text-3xl font-medium">
            CASE STUDY
          </h1>
          <div className="relative aspect-2/1 w-40 sm:w-44 lg:w-53">
            <Image
              src="/images/projects/EF-logo.png"
              alt="logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-normal text-center leading-relaxed px-2 sm:px-4">
            <span className="text-[#2B7575]">a</span>{" "}
            <span className="text-[#FC6B81]">mom-founded</span>{" "}
            <span className="text-[#92BA4D]">premium organic food company</span>{" "}
            <span className="text-[#2B7575]">that envisions to feed</span>{" "}
            <span className="text-[#92BA4D]">natural, fresh and chemical free food</span>{" "}
            <span className="text-[#2B7575]">to</span>{" "}
            <span className="text-[#FC6B81]">our children</span>
            <span className="text-[#2B7575]">.</span>
          </p>
        </div>
        <Image
          src="/images/projects/EF-bg-1.png"
          alt="bg-decor"
          width={1440}
          height={866}
          className="object-contain absolute top-0 left-0 hidden lg:block"
          priority
        />
        <div className="relative w-full max-w-360 mx-auto mt-6 sm:mt-8 lg:mt-10 px-4 z-10">
          <Image
            src="/images/projects/EF-1.webp"
            alt="device preview"
            width={1440}
            height={866}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
      <div className="m-auto w-full max-w-175 px-4 sm:px-6 flex flex-col items-center justify-center gap-2">
        <h3 className="text-[#FC6B81] text-lg sm:text-xl lg:text-2xl font-normal uppercase">
          INTRODUCTION
        </h3>
        <h3 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold text-center">
          About This Project
        </h3>
        <p className="text-[#2B7575] text-base sm:text-lg lg:text-xl font-normal text-center leading-normal">
          Early Foods is a mom-founded premium organic food company that envisions to feed natural, fresh and chemical free food to our children.
        </p>
      </div>
      <div className="max-w-286 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-15">
        <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-4 lg:gap-5">
          <h3 className="text-[#FC6B81] text-lg sm:text-xl lg:text-2xl font-normal uppercase tracking-wide">
            Get Started
          </h3>
          <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold leading-tight">
            Overview
          </h2>
          <p className="text-[#2B7575] text-base sm:text-lg font-normal text-justify leading-relaxed">
            When founder Shalini a new mom, struggled to find healthy food options for her own baby, she found her purpose: to re-introduce the traditional Indian foods for people. EarlyFoods is a very successful E-Commerce Store for buying healthy snacks for expecting mothers, breast-feeding mothers, infants and children who are beginning to develop their taste buds and also building their body.
          </p>
          <span className="block text-[#FC6B81] text-lg sm:text-xl font-normal mb-2">
            Platform
          </span>
          <a
            className="inline-flex items-center gap-3 bg-[#FC6B81] hover:bg-[#e65570] transition rounded-lg px-4 sm:px-6 py-2 sm:py-3"
            href="https://earlyfoods.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="relative aspect-[1.2/1] w-[1.2rem] sm:w-6 overflow-hidden">
              <Image src="/images/globe-icon.svg" alt="image" fill className="object-contain" />
            </div>
            <span className="text-white text-base sm:text-lg font-medium">Web</span>
          </a>
        </div>
        <div className="relative w-full lg:w-[80%] aspect-[1.3/1] max-w-[400px] lg:max-w-none">
          <Image src="/images/projects/EF-2.png" alt="EarlyFoods circular visual" fill className="object-contain" loading="lazy" />
        </div>
      </div>
      <div className="max-w-286 mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-15 mt-5">
        <div className="w-full lg:w-[60%] flex flex-col items-start justify-center gap-4 lg:gap-5">
          <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[2.65rem] font-semibold leading-tight uppercase">
            The STORY
          </h2>
          <div className="bg-[#BBE5E5] w-full h-0.5 leading-relaxed"></div>
          <p className="text-[#2B7575] text-base sm:text-lg font-normal text-justify leading-relaxed">
            We kicked off the discussion by asking how we can get folks to check out more of our products and make their journey with us super easy and enjoyable. As we kept talking, we also wondered how we could build trust, especially for first-time visitors to our WebApp.
          </p>
          <p className="text-[#2B7575] text-base sm:text-lg font-normal text-justify leading-relaxed">
            Think about Instagram—some people are a bit wary about buying stuff online because of bad experiences on other platforms. It gets even trickier when it's about health, especially for themselves and their kids. So, we need to figure out how to make them feel comfy and trust us right from the start.
          </p>
        </div>
        <div className="relative w-full lg:w-[80%] aspect-[1.3/1] max-w-[400px] lg:max-w-none">
          <Image src="/images/projects/EF-3.png" alt="EarlyFoods circular visual" fill className="object-contain" loading="lazy" />
        </div>
      </div>
    </>
  );
}
