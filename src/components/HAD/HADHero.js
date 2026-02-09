import Image from "next/image";

export default function HADHero() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-28 mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm sm:text-base lg:text-base font-bold tracking-wider lg:tracking-widest uppercase mb-3 sm:mb-4 lg:mb-5">
          Hybrid Application Development
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000] mb-4 sm:mb-6 lg:mb-7 leading-tight max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-200 mx-auto px-2 sm:px-0">
          <span className="font-normal">Elevate </span>Your Mobile App
          Experience <span className="font-normal">with </span>
          <span className="font-medium">Hybrid App Development </span>
          <span className="font-normal">Services</span>
        </p>

        <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:w-241 font-normal mx-auto mb-6 sm:mb-8 lg:mb-9 text-center sm:text-justify lg:text-justify space-y-3 sm:space-y-4 lg:space-y-5 px-2 sm:px-0">
          <p className="text-sm sm:text-base lg:text-base text-[#444444] leading-relaxed">
            As a leading hybrid app development company, we pride ourselves on
            delivering top-notch solutions that redefine industry standards.
            With an impressive track record and a team of highly skilled
            developers, we specialize in creating exceptional experiences
            through React Native, Flutter, and Progressive Web Apps (PWAs). Our
            commitment to excellence and innovation sets us apart, making us the
            preferred choice for businesses looking to harness the full
            potential of hybrid app technologies.
          </p>
        </div>

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-120.5 mx-auto mb-8 sm:mb-12 lg:mb-18">
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
  );
}
