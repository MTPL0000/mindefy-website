import Image from "next/image";

export default function WhiteLabelHero() {
  return (
    <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm sm:text-base font-bold tracking-widest uppercase mb-5">
          White Label App Solution
        </h1>

        <p className="text-3xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-[90%] sm:max-w-[80%] lg:max-w-200 mx-auto px-4 sm:px-0">
          White Label App Solutions <br className="hidden sm:block" /> for
          Various Industries
        </p>

        <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-241 font-normal mx-auto mb-9 text-justify space-y-6 px-4 sm:px-0">
          <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
            At Mindefy, we strive to provide superior white label app solutions
            you can trust. With our extensive knowledge and experience, we
            provide excellent services in multiple areas, enabling businesses to
            excel in the digital environment.
          </p>
          <p className="text-sm sm:text-base font-normal text-[#444444] leading-relaxed">
            Our white label app solutions are fully customizable to match your
            brand image, providing a seamless and engaging user experience. From
            app design and functionality to color schemes and logos, we work
            closely with you to create unique branding solutions. Our
            customizable and end-to-end applications address a variety of
            industry needs, including Digital Health, Payments and Point of
            Sale, School Automation, Live Streaming and OTT, Food Delivery, Taxi
            and Ride Sharing, Unity 3D Gaming and Edtech
          </p>
        </div>

        <div className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-full h-80 sm:h-100 lg:h-120.5 xl:h-120.5 mx-auto mb-12 sm:mb-16 lg:mb-20">
          <Image
            src="/images/WL.webp"
            alt="WHITE LABEL"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60.43rem] mx-auto mb-16 sm:mb-20 px-4 sm:px-0">
        <p className="font-medium text-sm sm:text-base text-[#000000] tracking-normal text-center sm:text-left">
          We further unlock your business potential by providing customized
          white label application solutions to increase productivity and
          optimize operations
        </p>
      </div>

      <div
        className="w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-171 mx-auto mb-15 rounded-xl bg-[#FFFFFF] p-4 sm:p-5 shadow-lg"
        style={{
          boxShadow: `
                   1px 1px 4px rgba(0, 0, 0, 0.2), 8px 8px 18px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <p className="w-full xl:w-161 text-center font-medium text-xl sm:text-2xl lg:text-2xl tracking-normal text-[#2F2175] px-2 sm:px-0">
          Partner with us and experience the transformative Power of Our
          Cutting-Edge Technology
        </p>
      </div>
    </section>
  );
}
