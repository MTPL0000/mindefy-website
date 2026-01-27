import Image from "next/image";

export default function IOSHero() {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-28 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
      <div className="container mx-auto text-center max-w-7xl">
        <h1 className="text-[#FF5225] text-sm sm:text-base lg:text-lg font-bold tracking-wider uppercase mb-4 sm:mb-5 lg:mb-6">
          iOS APP DEVELOPMENT
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#000000] mb-6 sm:mb-7 lg:mb-8 leading-tight max-w-4xl mx-auto px-4">
          <span className="font-normal">Unlock Your </span>Business Potential{" "}
          <span className="font-normal">with Expert </span>
          <span className="font-medium">
            iOS Application Development Services
          </span>
        </p>

        <div className="max-w-4xl font-normal mx-auto mb-6 sm:mb-8 lg:mb-9 text-center sm:text-justify space-y-4 sm:space-y-5 lg:space-y-6">
          <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed">
            Unleash the full potential of iOS with our premium iOS app
            development services. As a leading company specializing in native
            iOS app development, we strive to turn your app ideas into amazing
            reality. With our talented team of developers and designers, we
            offer end-to-end solutions from concept to implementation.
          </p>
        </div>

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-120 mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-18">
          <Image
            src="/images/IOS.webp"
            alt="iOS App Development - Developer working with mobile app design"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
