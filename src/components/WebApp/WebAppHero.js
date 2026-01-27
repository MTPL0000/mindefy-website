import Image from "next/image";

export default function WebAppHero() {
  return (
    <>
      <section className="mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8 xl:px-16 bg-white">
        <div className="container mx-auto text-center max-w-7xl">
          <h1 className="text-[#FF5225] text-sm sm:text-base lg:text-lg font-bold tracking-wider uppercase mb-4 sm:mb-5 lg:mb-6">
            Web Application Development
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#000000] mb-6 sm:mb-7 lg:mb-8 leading-tight max-w-4xl mx-auto px-4">
            <span className="font-normal"> Empower </span>Your Business{" "}
            <span className="font-normal">with </span>
            Custom Web Application Development{" "}
            <span className="font-normal">Services</span>
          </p>

          <div className="max-w-4xl font-normal mx-auto mb-6 sm:mb-8 lg:mb-9 text-center sm:text-justify space-y-4 sm:space-y-5 lg:space-y-6">
            <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed">
              Your gateway to custom web application development services that
              empower your business to reach new heights of success. Our team of
              seasoned professionals excels in crafting custom web applications
              that are precisely tailored to meet your specific requirements. We
              leverage the latest technologies, frameworks, and industry best
              practices to build robust, scalable, and secure web applications
              that align with your business goals.
            </p>
          </div>

          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-120 mx-auto mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <Image
              src="/images/WAD.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 xl:px-16 mb-12 sm:mb-16 lg:mb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#000000] leading-tight">
              Revolutionize Your Business with
              <br className="hidden sm:block" /> Cutting-Edge Enterprise Java
              Web Applications
            </h2>
          </div>
          <div className="font-normal text-sm sm:text-base lg:text-lg text-center sm:text-justify text-[#444444] leading-relaxed">
            <p>
              Mindefy, The leading provider of enterprise Java web applications.
              We specialize in delivering high-quality solutions that leverage
              the power of Java to drive your business forward. Whether you're a
              small startup or a large corporation, our enterprise Java web
              applications are tailored to meet your specific needs and empower
              your organization for success. With Mindefy harness the power of
              enterprise Java web applications and stay ahead of the
              competition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
