import Image from "next/image";

export default function YourHourDownloadBanner() {
  return (
    <section aria-label="Download YourHour" className="w-full mb-6 sm:mb-8 lg:mb-10">
      <div className="relative flex w-full flex-col overflow-hidden bg-[#e8f7f8]">
        <Image
          src="/images/YourHour-Download-Section.png"
          alt="YourHour Download Section"
          loading="lazy"
          width={1800}
          height={420}
          className="ml-[5%] h-auto w-[150%] max-w-none rounded-none md:ml-[8%] md:w-[140%] xl:ml-0 xl:w-full"
        />

        <div className="relative flex w-full flex-col items-center justify-center gap-3 px-4 pb-5 sm:flex-row sm:gap-4 sm:pb-6 xl:absolute xl:left-[57%] xl:right-[4%] xl:top-1/2 xl:w-auto xl:-translate-y-1/2 xl:px-0 xl:pb-0">
          <a
            href="https://play.google.com/store/apps/details?id=com.mindefy.phoneaddiction.mobilepe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get YourHour on Google Play"
            className="flex min-h-11 w-full min-w-0 max-w-64 cursor-pointer items-center transition-all duration-200 ease-out hover:-translate-y-1 hover:brightness-105 hover:drop-shadow-[0_8px_12px_rgba(0,150,160,0.35)] active:translate-y-0 active:scale-[0.98] active:brightness-95 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00b4c3]/50 motion-reduce:transition-none sm:flex-1 xl:max-w-[300px]"
          >
            <Image
              src="/images/Yourhour-Get-Android.png"
              alt="Get Android App"
              loading="lazy"
              width={280}
              height={80}
              className="block h-auto w-full"
            />
          </a>

          <a
            href="https://apps.apple.com/in/app/yourhour-screen-time-control/id6784166547"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get YourHour on the App Store"
            className="flex min-h-11 w-full min-w-0 max-w-64 cursor-pointer items-center transition-all duration-200 ease-out hover:-translate-y-1 hover:brightness-105 hover:drop-shadow-[0_8px_12px_rgba(0,150,160,0.35)] active:translate-y-0 active:scale-[0.98] active:brightness-95 focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00b4c3]/50 motion-reduce:transition-none sm:flex-1 xl:max-w-[300px]"
          >
            <Image
              src="/images/Yourhour-Get-iOS.png"
              alt="Get iOS App"
              loading="lazy"
              width={280}
              height={80}
              className="block h-auto w-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
}