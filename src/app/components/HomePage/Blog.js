"use client";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="tracking-widest text-[#FF5225] text-sm sm:text-base font-bold mb-4 sm:mb-6 uppercase">
            BLOGS
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal leading-tight">
            <span className="text-gray-900 font-bold">Insights & Advice</span>{" "}
            From <span className="text-gray-900 font-bold">Our Team</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 lg:mb-16">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-[1.28/1] w-full overflow-hidden">
              <Image
                src="/images/MS-1.webp"
                alt="Microservices geometric pattern"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-3 p-4 sm:p-6 lg:py-8 lg:px-2 text-[#30233D]">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold">
                Mastering Microservices: A Modern Approach
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-justify font-normal leading-relaxed">
                Micro-services in this era is getting so much attention from
                articles, social media, conference presentation
              </p>
              <div className="text-[#6A53E1] flex items-center text-base sm:text-lg font-medium cursor-pointer hover:underline transition-colors">
                <Link href="/blog/microservices" className="flex items-center">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
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
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-[1.28/1] w-full overflow-hidden">
              <Image
                src="/images/TDB-1.webp"
                alt="Hand drawing upward curve"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-3 p-4 sm:p-6 lg:py-8 lg:px-2 text-[#30233D]">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight lg:mb-1">
                The Difference Between "Average And Success"
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-justify font-normal leading-relaxed">
                The amount of free time, we as humans have now was never been
                the same as before.
              </p>
              <div className="text-[#6A53E1] flex items-center text-base sm:text-lg font-medium cursor-pointer hover:underline transition-colors">
                <Link
                  href="/blog/average-and-success"
                  className="flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
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
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="relative aspect-[1.28/1] w-full overflow-hidden">
              <Image
                src="/images/TOA-1.webp"
                alt="Home office setup"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-3 p-4 sm:p-6 lg:py-8 lg:px-2 text-[#30233D]">
              <h3 className="text-xl sm:text-2xl lg:text-2xl lg:mb-8 font-semibold">
                The Office Away From Office!
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-justify font-normal leading-relaxed">
                Companies, in the face of this global pandemic, have asked their
                employees to Work From Home.
              </p>
              <div className="text-[#6A53E1] flex items-center text-base sm:text-lg font-medium cursor-pointer hover:underline transition-colors">
                <Link
                  href="/blog/the-office-away"
                  className="flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
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
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="flex justify-center">
          <button className="bg-gray-900 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full hover:bg-gray-800 cursor-pointer transition-colors duration-300 text-sm sm:text-base lg:text-lg font-medium">
            View All
          </button>
        </div> */}
      </div>
    </section>
  );
}
