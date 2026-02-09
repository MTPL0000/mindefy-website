import Image from "next/image";

export default function EmpathyMapSection() {
  return (
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden">
        <div className="relative top-24 sm:top-32 lg:top-40 flex flex-col gap-2 items-center px-4 sm:px-6">
          <h2 className="text-[#52B7B7] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">
            Empathy Map
          </h2>
          <span className="w-full max-w-188 text-[#377D7D] text-sm sm:text-base font-normal text-center">
            An empathy map is a collaborative visualization used to articulate
            what we know about a particular type of user. It helps to synthesize
            research data to bit assist to understand how people make decisions.
          </span>
        </div>
        <Image
          src="/images/projects/EF-10.webp"
          alt="image"
          width={1440}
          height={1760}
          className="object-contain w-full"
          loading="lazy"
        />
      </div>
      <div className="w-full max-w-6xl mx-auto mt-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#CBEBEB] flex flex-col justify-center w-full max-w-xl mx-auto h-auto min-h-80 sm:min-h-88 lg:h-100 p-6 sm:p-8 lg:p-10 relative">
            <div className="absolute top-2 right-6 sm:right-9 text-[#377D7D] text-8xl md:text-9xl leading-none font-serif select-none">
              &rdquo;
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F690A1] mb-4 text-center">
              Gain
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Enhanced Accessibility of Help and Support",
                "Favourites and Wish List Feature",
                "Simplified Sign-Up/Sign-In Process",
                "Comprehensive and Sequential Product Imagery",
                "Estimated Delivery Time",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium"
                >
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#CBEBEB] flex flex-col justify-center w-full max-w-xl mx-auto h-auto min-h-80 sm:min-h-88 lg:h-100 p-6 sm:p-8 lg:p-10 relative">
            <div className="absolute top-2 right-6 sm:right-9 text-[#377D7D] text-8xl md:text-9xl leading-none font-serif select-none">
              &rdquo;
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F690A1] mb-4 text-center">
              Pain
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "Irrelevant Filter Options",
                "Misplaced Content in Product Information",
                "Inclusion of Product-Based FAQs",
                "Product Texture Details",
                "Age Group Specifications",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-[#377D7D] text-sm sm:text-base lg:text-lg font-medium"
                >
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
