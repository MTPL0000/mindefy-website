import Image from "next/image";

export default function TestAutomationHero() {
  return (
    <section className="mt-28 mx-auto px-4 xl:px-0">
      <div className="mx-auto text-center">
        <h1 className="text-[#FF5225] text-sm lg:text-base font-bold tracking-widest uppercase mb-5">
          Application test Automation
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000] mb-7 leading-tight max-w-221 mx-auto px-4 xl:px-0">
          Application Test Automation and QA Services Ensuring Seamless Software
          Performance
        </p>

        <div className="w-full max-w-245.5 font-normal mx-auto mb-9 text-justify space-y-5 px-4 xl:px-0">
          <p className="text-sm lg:text-base text-[#444444] leading-relaxed">
            At Mindefy, we understand the importance of rigorous testing in
            delivering high-performing applications. Our Application Test
            Automation and QA Services encompass a range of advanced techniques
            and tools to enhance the quality of your software, optimize testing
            processes, and minimize time-to-market. With our expertise in
            Selenium, Cucumber, BDD, and scripting, we offer tailored solutions
            to meet your unique testing requirements.
          </p>
        </div>

        <div className="relative w-full h-80 sm:h-100 lg:h-120.5 mx-auto mb-6">
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
  );
}
