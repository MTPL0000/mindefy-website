import Image from "next/image";

export default function Blog() {
  return (
    <section className="w-full py-[4rem] px-[1rem]">
      <div className="max-w-[72.5rem] mx-auto  rounded-[0.5rem]">
        {/* Blog Header */}
        <div className="text-center mb-[6.68rem]">
          <p className="tracking-widest text-[#FF5225] text-[1rem] font-bold mb-[0.5rem]">
            BLOG
          </p>
          <h2 className="text-[2.5rem] font-normal">
            <span className="text-gray-900 font-bold">Insights & Advice</span>{" "}
            From <span className="text-gray-900 font-bold">Our Team</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="flex md:flex-row gap-[1.875rem] mb-[3.12rem]">
          {/* Card 1 */}
          <div className="flex-1 overflow-hidden bg-white">
            <div className="relative aspect-[1.36/1] w-full rounded-3xl overflow-hidden ">
              <Image
                src="/images/blog1.png"
                alt="Microservices geometric pattern"
                fill
                className="object-contain grayscale"
              />
            </div>
            <div className=" px-[0.51rem] pt-[1.75rem] text-[#30233D]">
              <h3 className="text-2xl font-semibold mb-12 ">MICROSERVICES</h3>
              <p className="text-[1rem] text-justify w-[20.87rem] font-normal  mb-4">
                Micro-services in this era is getting so much attention from
                articles, social media, conference presentation
              </p>
              <div className="text-[#6A53E1] flex items-center text-lg font-medium cursor-pointer ">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1rem] w-[1rem] ml-[0.5rem]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1  overflow-hidden bg-white">
            <div className="relative aspect-[1.36/1] w-full rounded-3xl overflow-hidden">
              <Image
                src="/images/blog2.png"
                alt="Hand drawing upward curve"
                fill
                className="object-contain grayscale"
              />
            </div>
            <div className=" px-[0.51rem] pt-[1.75rem] text-[#30233D]">
              <h3 className="text-2xl font-semibold mb-4 ">
                THE DIFFERENCE BETWEEN "AVERAGE AND SUCCESS"
              </h3>
              <p className="text-base text-justify w-[20.87rem] font-normal  mb-4">
                The amount of free time, we as humans have now was never been
                the same as before.
              </p>
              <div className="text-[#6A53E1] flex items-center text-lg font-medium cursor-pointer ">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1rem] w-[1rem] ml-[0.5rem]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1  overflow-hidden bg-white ">
            <div className="relative aspect-[1.36/1] w-full rounded-3xl overflow-hidden">
              <Image
                src="/images/blog3.png"
                alt="Home office setup"
                fill
                className="object-contain grayscale"
              />
            </div>
            <div className=" px-[0.51rem] pt-[1.75rem] text-[#30233D]">
              <h3 className="text-2xl font-semibold mb-4 ">
                THE OFFICE AWAY FROM OFFICE!
              </h3>
              <p className="text-[1rem] text-justify w-[20.87rem] font-normal  mb-4">
                Companies, in the face of this global pandemic, have asked their
                employees to Work From Home.
              </p>
              <div className="text-[#6A53E1] flex items-center text-lg font-medium cursor-pointer ">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[1rem] w-[1rem] ml-[0.5rem]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-gray-900 text-white py-[0.75rem] px-[2rem] rounded-full hover:bg-gray-800 cursor-pointer transition-colors duration-300 text-[1rem] font-medium">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
