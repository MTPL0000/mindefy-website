import Image from "next/image";

export default function LowCodeHero() {
  return (
    <section className="mt-20 lg:mt-28 px-4 sm:px-6 lg:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm lg:text-base font-bold tracking-widest uppercase mb-4 lg:mb-5">
          Low Code Development
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000] mb-6 lg:mb-7 leading-tight max-w-full sm:max-w-2xl lg:max-w-200 mx-auto">
          <span className="font-normal">Transforming </span>Development
          <span className="font-normal"> with </span>Mindefy's Low-Code Platform
        </p>

        <div className="max-w-full sm:max-w-2xl lg:max-w-245.5 font-normal mx-auto mb-6 lg:mb-9 text-justify space-y-4 lg:space-y-5">
          <p className="text-sm lg:text-base text-[#444444] leading-relaxed">
            Experience the incredible possibilities of Low-Code Platform
            Development with Mindefy, where we offer cutting-edge solutions
            tailored to your needs. As a renowned leader in Low-Code development
            services, we excel in leveraging the capabilities of platforms like
            OutSystems, Appian, ServiceNow, Zoho Creator, and Magic XPA to
            provide you with fast, adaptable, and ingenious software solutions.
            Embrace Mindefy to unleash the true power of Low-Code platforms and
            transform your application development process.
          </p>
        </div>

        <div className="relative w-full max-w-full mx-auto mb-6 lg:mb-6">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-120.5">
            <Image
              src="/images/ARD.webp"
              alt="Web Application Development - Developer working with web applications"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="max-w-full sm:max-w-2xl lg:max-w-241 mx-auto mb-12 lg:mb-20">
          <p className="text-justify text-sm lg:text-base font-normal text-[#444444]">
            Low-Code Platform Development offers a powerful solution by enabling
            the rapid creation and deployment of enterprise-grade applications
            with minimal hand-coding. These platforms provide a visual
            development environment, pre-built components, and easy integration
            capabilities, empowering both professional developers and citizen
            developers to build robust applications faster than ever before.
          </p>
        </div>
      </div>
    </section>
  );
}
