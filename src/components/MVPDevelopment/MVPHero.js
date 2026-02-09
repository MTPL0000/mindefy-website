import Image from "next/image";

export default function MVPHero() {
  return (
    <section className="mt-16 sm:mt-20 md:mt-24 xl:mt-28 mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm sm:text-base xl:text-base font-bold tracking-widest uppercase mb-4 sm:mb-5 xl:mb-5">
          product development
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000] mb-4 sm:mb-5 md:mb-6 xl:mb-7 leading-tight max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[63.56rem] mx-auto px-2 sm:px-4 xl:px-0">
          <span className="font-normal">Accelerate Your </span>Product
          Development
          <span className="font-normal"> with </span>Innovative Solutions
          <span className="font-normal"> and </span>Product Development
          <span className="font-normal"> as-a-Service</span>
        </p>

        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-240.5 font-normal mx-auto mb-6 sm:mb-8 xl:mb-9 text-justify space-y-4 sm:space-y-5 xl:space-y-5 px-2 sm:px-4 xl:px-0">
          <p className="text-sm sm:text-base xl:text-base text-[#444444] leading-relaxed">
            Mindefy is your trusted partner for efficient and seamless product
            development solutions. We offer comprehensive services that cater to
            every stage of the product development lifecycle. Our unique Product
            Development as-a-Service offering is designed to expedite the entire
            process, ensuring swift progress and outstanding results. With our
            Innovation Lab as the heart of creativity, We combine{" "}
            <span className="font-semibold">
              Agile methodologies, prototyping, MVP design, market research, and
              innovation to accelerate your product development journey.
            </span>{" "}
            Accelerate Your Product Development Journey with Innovation and
            Expertise..
          </p>
        </div>

        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-120.5 mx-auto mb-4 sm:mb-5 md:mb-6 xl:mb-7">
          <Image
            src="/images/MVP.webp"
            alt="Web Application Development - Developer working with web applications"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:w-241 mx-auto mb-12 sm:mb-16 md:mb-20 xl:mb-20 tracking-wide leading-relaxed px-2 sm:px-4 xl:px-0">
          <p className="text-justify text-sm sm:text-base xl:text-base font-normal text-[#444444] mb-4 sm:mb-5 md:mb-6 xl:mb-7">
            Unleash the transformative potential of our comprehensive product
            development services. From Agile methodology-based prototyping to
            MVP design, market research, launch, and our state-of-the-art
            Innovation Lab, we provide the tools and expertise to expedite your
            product development process. Partner with Mindefy to unlock the full
            potential of your product ideas. Contact us today to explore our
            innovative solutions and take your product development to new
            heights.
          </p>
          <p className="text-justify text-sm sm:text-base xl:text-base font-normal text-[#444444]">
            Embark on a faster and more efficient product development journey
            with Mindefy. Our comprehensive services and specialized expertise
            empower you to overcome challenges, mitigate risks, and propel your
            products to market success. Harness the collective knowledge of our
            multidisciplinary team in our collaborative Innovation Lab.
            Together, we will transform your ideas into groundbreaking,
            market-leading products that drive your business growth.
          </p>
        </div>
      </div>
    </section>
  );
}
