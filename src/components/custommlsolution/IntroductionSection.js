import Image from "next/image";

export default function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 p-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <p className="text-sm sm:text-base font-bold text-center mb-3 sm:mb-4 text-[#2B7575] uppercase tracking-wide sm:tracking-widest">
            Early Foods: Boosting Sales and Trust
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12 text-[#000000] leading-tight">
            ML Driven Recommendations
          </p>
          <p className="text-[#000000] mb-4 sm:mb-6 font-normal text-sm sm:text-base leading-relaxed text-center lg:text-left px-2 sm:px-0">
            EarlyFoods, an e-commerce platform offering millet-based
            products for new and expecting mothers, found customers
            missing relevant items—limiting cart value. To solve this, we
            recommended them an AI-driven recommendation engine. They
            added it on product pages using a hybrid of collaborative and
            content-based filtering to deliver personalized suggestions.
            This has boosted average order value, enhanced product
            discovery, and strengthened customer trust.
          </p>
        </div>

        <div className="relative aspect-1002/552 w-full overflow-hidden">
          <Image
            src="/images/YH-CB.webp"
            alt="EarlyFoods AI recommendation system interface showing product suggestions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
