import Image from "next/image";

export default function DTHero() {
  return (
    <section className="mt-28 mx-auto px-4 sm:px-6 lg:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm sm:text-base font-bold tracking-widest uppercase mb-5">
          Digital Transformation
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-200 mx-auto px-4 lg:px-0">
          Transforming Development <span className="font-normal">with </span>
          <br className="hidden sm:block"></br>
          Mindefy's Digital Transformation Services
        </p>

        <div className="w-full max-w-241 font-normal mx-auto mb-6 text-justify space-y-5 px-4 lg:px-0">
          <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
            As a leading provider of digital solutions, we specialize in helping
            businesses embark on their digital transformation journey and
            achieve remarkable results. With Mindefy, you can unlock the power
            of digital technologies and revolutionize your business for the
            digital age.We offer a comprehensive range of digital transformation
            services to help you navigate this transformative journey and seize
            the opportunities of the digital era.
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-124.5 mx-auto mb-8 sm:mb-12 lg:mb-18 px-4 lg:px-0">
          <Image
            src="/images/DT.webp"
            alt="digital transformation"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
