import Image from "next/image";

export default function ExtensiveResearchSection() {
  return (
    <div className="w-full lg:w-6xl mx-auto lg:mt-12 md:mt-12 sm:mt-16 bg-[#E8F4F4]">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-6 lg:gap-0">
          <div>
            <h3 className="text-[#F690A1] text-lg sm:text-xl lg:text-[2rem] font-normal flex items-center gap-2 mb-2">
              <span className="w-6 sm:w-8" role="img" aria-label="pin">📍</span>Define
            </h3>
            <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-[4rem] font-bold">Extensive Research</h2>
          </div>
          <div className="w-full lg:w-[22.31rem] mt-0 lg:mt-8">
            <h4 className="text-[#F690A1] text-left text-sm sm:text-base font-bold mb-2">Research Plan</h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                <li>• Methodology</li>
                <li>• Competitor Research</li>
                <li>• Extensive Survey</li>
              </ul>
              <ul className="text-[#2B7575] text-xs sm:text-sm font-normal space-y-1">
                <li>• Behaviour Psychology</li>
                <li>• Gaps & Fixes</li>
                <li>• Backlogs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-6 sm:mb-8 w-full max-w-286 mx-auto">
          <h3 className="text-[#52B7B7] text-xl sm:text-2xl lg:text-[2rem] font-bold mb-4">Introduction</h3>
          <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-4">
            This research uses the <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">Stimulus-Organism-Response (S-O-R)</span> paradigm to understand online consumer behaviour, particularly in the context of baby foods e-Stores, with the intention to explore the effect of perceived value as a mediator.
          </p>
          <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-4">
            <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">Stimulus</span> in this context is the Baby Food E-Store image for ages 0-3. The research uses four dimensions of the image: <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">e-store design, order fulfilment, communication services, and security and confidentiality.</span> These parameters are chosen to reflect consumers' perception of the online store's functionality.
          </p>
          <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-4">
            <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">The organism</span> in this context is <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">the Perceived Value</span>, seen as a comparison of the benefits received versus the cost paid during the buying process. This extends beyond simply the income-cost comparison, it also incorporates consumers' expectations and feelings towards a specific product or service. The research adopts Hallem and Barth's division of consumers' perceived value into emotional and functional values.
          </p>
          <p className="text-[#2B7575] font-medium text-sm sm:text-base leading-relaxed mb-6">
            <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">Response</span> refers to <span className="text-base sm:text-lg lg:text-[1.25rem] font-semibold text-[#2B7575]">consumers' purchase intention</span>, which will be measured against the baby food e-store image and the perceived value derived from it. The S-O-R model aims to provide insights into what features can genuinely capture consumers' intentions, satisfy their needs, and increase their online consumer behaviours, particularly in the continuously evolving online market.
          </p>
        </div>
        <div className="bg-[#C8E6E6] rounded-3xl p-6 mb-20 text-center">
          <h3 className="text-[#52B7B7] text-xl font-semibold">Baby Food E-Store Image</h3>
        </div>
        <div className="hidden lg:block">
          <div className="w-242 mx-auto flex flex-row justify-between">
            {["S", "O", "R"].map((letter) => (
              <div key={letter} className="w-35 h-16.5 bg-[#CBEBEB] rounded-3xl flex items-center justify-center mb-11 mx-auto">
                <span className="text-[#52B7B7] text-2xl font-bold">{letter}</span>
              </div>
            ))}
          </div>
          <div className="w-242 mx-auto mb-8">
            <div className="flex justify-center items-center">
              <div className="space-y-5">
                {["E-Store Design", "Order Fulfilment", "Communication", "Security"].map((item) => (
                  <div key={item} className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl border-l-4 border-[#F88598]">
                    <span className="text-sm w-[9.06rem] font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-full">
                  <Image src="/images/EF-ER1.png" alt="arrow" width={133} height={288} className="object-contain" loading="lazy" />
                </div>
              </div>
              <div className="space-y-5">
                {["Emotional Value", "Functional Value"].map((item) => (
                  <div key={item} className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl border-l-4 border-[#F88598]">
                    <span className="text-sm w-[9.06rem] font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-full">
                  <Image src="/images/EF-ER2.png" alt="arrow" width={133} height={288} className="object-contain" loading="lazy" />
                </div>
              </div>
              <div className="bg-[#F4F1FB] w-[12.31rem] mx-auto pl-9 py-5 rounded-3xl border-l-4 border-[#F88598]">
                <span className="text-sm w-[9.06rem] font-semibold">Purchase Intention</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-justify mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base text-[#2B7575] mt-8 sm:mt-10 font-medium px-4 sm:px-6 lg:px-0">
          This research focuses on the impact of different aspects of e-commerce platforms on the perceived value of the customer and their subsequent purchase intention. The hypotheses can be summarized as follows:
        </p>
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 px-4 sm:px-6 lg:px-0">
          {[
            { title: "E-store Design:", desc: "The design of an online shop, including elements like page layout, art design, search functions, and convenience, significantly affects the customers' perceived emotional and functional value. Poorly designed stores can lead to customer rejection." },
            { title: "Order Fulfillment:", desc: "The consistency of an e-commerce platform in fulfilling its promises to customers impacts the perceived functional and emotional value. Inconsistencies can lead to a decrease in perceived value and customer trust." },
            { title: "Communication Service:", desc: "The quality of the customer service, including timely and professional responses, affects the perceived emotional and functional value. Frequent communication and exchanges between buyers and sellers can increase trust and, therefore, perceived value." },
            { title: "Security:", desc: "The image of security and confidentiality is crucial for easy and safe online shopping. Concerns about personal data leaks, unsafe payment methods, and unclear commissions can impact the perceived emotional and functional value." },
          ].map((item) => (
            <div key={item.title} className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-9">
              <h4 className="text-[#2B7575] w-full lg:w-55 text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 shrink-0">{item.title}</h4>
              <p className="text-[#2B7575] text-justify w-full lg:w-[55.43rem] font-medium text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
          <div className="mt-6 sm:mt-8 lg:mt-10">
            <h4 className="text-[#2B7575] text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Perceived Value and Purchase Intention:</h4>
            <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed">
              A positive perceived value, both emotional and functional, can significantly drive consumers' purchasing behavior. Higher perceived benefits compared to costs result in stronger purchase intention.
            </p>
          </div>
          <div>
            <h4 className="text-[#2B7575] text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Mediating Effect of Perceived Value:</h4>
            <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed">
              The image of the online store can impact customers' perceived value, which in turn influences their purchase intentions. Both emotional and functional value play a mediating role between the online store image and customer purchase intentions.
            </p>
          </div>
          <p className="text-[#2B7575] text-sm sm:text-base font-medium leading-relaxed">
            In the context of a baby food online store, these hypotheses suggest that factors like design, order fulfillment, communication service, and security strongly influence the customer's overall experience and their decision to make a purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
