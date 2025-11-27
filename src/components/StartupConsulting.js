"use client";

import Image from "next/image";

export default function StartupConsulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-20 sm:mt-24 md:mt-28 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-[0.875rem] sm:text-[1rem] font-bold tracking-widest uppercase mb-[1rem] sm:mb-[1.25rem]">
            Startup Support and Consulting
          </h1>

          {/* Main Title */}
          <p className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] xl:text-[2.25rem] font-semibold text-[#000000] mb-5 sm:mb-6 md:mb-7 leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[50rem] mx-auto">
            <span className="font-normal">Your </span>Startup's Success{" "}
            <span className="font-normal"> from </span>
            <br className="hidden sm:block" /> Ideation{" "}
            <span className="font-normal">to </span>MVP
            <span className="font-normal"> with </span>Our Expertise
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60rem] xl:w-[60.25rem] font-normal mx-auto mb-[1.5rem] text-justify space-y-[1rem] sm:space-y-[1.25rem]">
            <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
              Our expertise will help your startup succeed from concept to MVP.
              Our team of experts combines prowess, platform knowledge, and
              business acumen to guide startups on their journey. By joining
              forces with our incubator collaboration, you can experience the
              range of support that accelerates your startup's growth.
            </p>
          </div>
          <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60rem] xl:w-[60.25rem] font-normal mx-auto mb-[1.5rem] text-center sm:text-justify space-y-[1rem] sm:space-y-[1.25rem]">
            <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed">
              We believe that guiding startups goes beyond simply telling them
              <span className="font-semibold">"what to do"</span> We also focus
              on sharing insights
              <br className="hidden lg:block" /> and lessons learned on{" "}
              <span className="font-semibold">"what not to do"</span>
              <br className="hidden lg:block" /> This guidance ensures that
              startups make informed decisions and steer clear of pitfalls.
            </p>
          </div>

          {/* Hero Image - Using placeholder until you add your image */}
          <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[28rem] xl:h-[31.125rem] mx-auto mb-[2rem] sm:mb-[3rem] md:mb-[4.5rem]">
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

      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75rem] xl:w-[72.5rem] mb-12 sm:mb-16 md:mb-20 mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="w-full lg:w-[47.875rem] mb-6 lg:mb-0">
          <div className="font-semibold text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] text-[#000000] mb-4 sm:mb-5 text-center lg:text-left">
            <p>Gaining User-Centric Insights into the Product</p>
          </div>
          <div className="font-normal text-[0.875rem] sm:text-[1rem] text-[#444444] text-justify leading-relaxed">
            <p className="mb-4 sm:mb-6">
              At Mindefy, we understand the significance of comprehending our
              product from the user's point of view. Unlike idea-driven startups
              we avoid falling into the trap of being enamored with our own
              ideas within the confines of our office. Instead, we prioritize
              understanding. Meeting the needs of our users as we recognize
              their enthusiasm, for our product is crucial. Our approach focuses
              on gathering feedback and meeting user needs than simply
              considering client requirements.
            </p>
            <p>
              As a service provider focused on delivering delivering the best
              quality products, Mindefy sets itself apart by offering solutions
              intended to enhance the probability of success. Our primary focus
              is on maximizing the market potential of our products. By adopting
              a user approach we prioritize understanding. Meeting the needs of
              our customers, which ultimately leads to a satisfying product
              experience.
            </p>
          </div>
        </div>
        <div className="relative w-[15rem] sm:w-[18rem] md:w-[20rem] lg:w-[23.25rem] lg:ml-5 my-3.5 h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[23.375rem] mx-auto">
          <Image
            src="/images/SC.svg"
            alt="digital transformation"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Why Choose Mindefy Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-opacity-1 bg-gradient-to-br from-[#f6d6ce] via-[#e6e2fc] to-[#dee6ff]">
        {/* Foreground Content */}
        <div className="relative z-10 max-w-[90rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-2">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] xl:text-[2.25rem] font-semibold text-[#000000]">
              Comprehensive Support for Startups
            </h2>
          </div>

          <div className="mb-[2rem] sm:mb-[3rem] md:mb-[3.75rem]">
            <p className="font-medium text-[0.875rem] sm:text-[1rem] w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[43.81rem] text-center mx-auto">
              At Mindefy, we offer comprehensive support and guidance services
              specifically tailored to meet the unique needs of startups. Our
              approach encompasses the following:
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3 max-w-[72.5rem] mx-auto">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Technology-driven Solutions:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-20 sm:mb-28 md:mb-36">
                By leveraging our expertise in new technology and platforms
                unlock the full potential of your startup. Our team is always
                ahead of the curve, ensuring we provide the most effective and
                innovative solutions for your specific business requirements.
                From selecting the best technology stack to implementing
                advanced tools, we help you build a solid foundation for
                success.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Strategic Business Acumen
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                Our team brings valuable business strategies to the table,
                offering guidance and insights to navigate your startup in the
                right direction. By aligning our strategies with user
                preferences, we empower you to make well-informed decisions that
                greatly enhance your chances of success. Our mission is to
                maximize your potential in the digital landscape by delivering
                user-centric solutions that capture hearts, minds, and market
                share.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Incubator Collaboration Experience:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                Our incubator collaboration experience provides startups with a
                lot of opportunity to connect with industry experts, mentors,
                and like-minded entrepreneurs. The collaborative environment is
                focused on knowledge sharing, innovation, and valuable
                networking opportunities, making startups grow in a supportive
                ecosystem.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Propel Your Idea to MVP:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                From the beginning of ideation to the development of a minimum
                viable product (MVP), our team guides you through each and every
                step of the process. We help you refine your ideas, validate
                concepts, and develop a robust strategy to bring your vision to
                life. Our goal is to accelerate your startup's growth by
                transforming your ideas into real MVPs that speaks with your
                target market.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                "What Not To Do" Insights:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                From our experience as a product company, we understand all the
                challenges startups face. Our guidance goes beyond the
                conventional advice of "what to do." We also share valuable
                insights on "what not to do" to help startups avoid common
                mistakes and make the best decisions. This unique perspective
                allows startups to navigate their journey with greater
                confidence and efficiency.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Lessons from Our Journey:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                We have encountered our own failures and successes on our own
                entrepreneurial journey. By openly sharing our experiences, we
                provide startups with experienced knowledge of all the
                challenges and obstacles they may face. Our lessons learned help
                startups make smarter decisions and avoid mistakes that we have
                already encountered, saving them valuable time and resources.
              </p>
            </div>

            {/* Card 7 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Strategic Decision-Making:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                We believe that informed decision-making is the key to a
                startup's success. Our team of experts works closely with
                startup clients, providing strategic guidance that aligns with
                their specific business goals. By understanding your vision and
                objectives, we help you make the best decisions that drive your
                growth and maximize your probability of success.
              </p>
            </div>

            {/* Card 8 */}
            <div className="bg-[#FFFFFF] rounded-2xl px-4 sm:px-5.5 pt-6 sm:pt-8 md:pt-10 flex-1 w-full sm:w-[calc(50%-0.5rem)] lg:w-[32.86rem] basis-full sm:basis-[calc(50%-1rem)]">
              <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4">
                Collaborative Partnership:
              </h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify mb-16 sm:mb-20 md:mb-25">
                We provide a collaborative partnership with startup clients,
                working hand in hand in achieving their goals. Our team is like
                an extension of your startup by providing support, feedback, and
                continuous guidance. We are dedicated to your success and
                invested in helping you overcome challenges and unlock your
                product's full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEAN and MERN Advantages Section */}
      <section className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[62.5rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-[2rem] sm:mb-[3rem] md:mb-[3.75rem]">
            <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] xl:text-[2.25rem] font-semibold text-[#1E1E1E]">
              Our Comprehensive IT partnership includes:
            </h2>
          </div>

          {/* Advantages Content */}
          <div className="flex flex-col gap-[2rem] sm:gap-[3rem] md:gap-[3.75rem] max-w-[60.375rem] mx-auto">
            {/* Full JavaScript Stack */}
            <div className="flex flex-col lg:flex-row rounded-2xl">
              <div className="flex-1 w-full lg:w-[41.25rem] mb-4 lg:mb-0">
                <p className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-2 sm:mb-2.5 text-center lg:text-left">
                  Ideation Stage Support
                </p>
                <p className="text-[0.875rem] sm:text-[1rem] w-full lg:w-[41.25rem] text-[#444444] leading-relaxed text-justify">
                  From the very beginning, Mindefy collaborates closely with
                  startups during the initial ideation stage. Our team of
                  experts helps you refine your ideas, analyze market trends,
                  and develop a strategy that aligns with your business goals.
                  By leveraging our experience, you can make best decisions and
                  lay a solid foundation for your startup's success.
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center lg:justify-end">
                <div className="flex items-center justify-center">
                  <div className="w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[17rem] lg:ml-8 h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[15.26rem] relative">
                    <Image
                      src="/images/SC1.svg"
                      alt="JavaScript Stack"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scalability and Performance */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-shrink-0 order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="flex items-center justify-center">
                  <div className="w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[17rem] lg:mr-8 h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[15.26rem] relative">
                    <Image
                      src="/images/SC2.svg"
                      alt="Performance"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[41.25rem] my-4 lg:my-7 order-1 lg:order-2 mb-4 lg:mb-0">
                <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-2 sm:mb-2.5 text-center lg:text-left">
                  Technology Expertise
                </h3>
                <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                  As your IT partner, we bring extensive technology expertise to
                  the table. We stay updated with all the latest trends and
                  advancements, ensuring that we suggest and develop the most
                  suitable technologies for your product. From selecting the
                  right technology to integrating essential tools and
                  frameworks, we help you build a scalable and efficient
                  infrastructure.
                </p>
              </div>
            </div>

            {/* Rapid Development */}
            <div className="flex flex-col lg:flex-row rounded-2xl">
              <div className="flex-1 w-full lg:w-[41.25rem] my-2 lg:my-4 mb-4 lg:mb-0">
                <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-2 sm:mb-2.5 text-center lg:text-left">
                  MVP Development and Launch
                </h3>
                <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                  We specialize in helping startups through the development and
                  launch of their minimum viable product (MVP). Our team of
                  experienced and skilled professionals uses agile methodologies
                  to deliver high-quality solutions within timelines. We work
                  collaboratively with you, ensuring that your MVP meets the
                  targeted market and their demands, captures user feedback, and
                  sets a strong foundation for future iterations
                </p>
              </div>
              <div className="flex-shrink-0 flex justify-center lg:justify-end">
                <div className="flex items-center justify-center">
                  <div className="w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[17rem] lg:ml-8 h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[15.26rem] relative">
                    <Image
                      src="/images/SC3.svg"
                      alt="Rapid Development"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Code Reusability */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-shrink-0 order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[17rem] lg:mr-8 h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[15.26rem] relative">
                    <Image
                      src="/images/SC4.svg"
                      alt="Code Reusability"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full lg:w-[41.25rem] my-4 lg:my-7 order-1 lg:order-2 mb-4 lg:mb-0">
                <h3 className="text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#000000] mb-3 sm:mb-4 text-center lg:text-left">
                  Continuous Support and Scalability
                </h3>
                <p className="text-[0.875rem] sm:text-[1rem] text-[#444444] leading-relaxed text-justify">
                  As your growing startup, we provide constant support and
                  scalability to meet your evolving needs. Our team offers
                  ongoing maintenance, enhancements, and the newest updates to
                  keep your product ahead of the competition. We help you scale
                  your infrastructure and adapt to changing user demands,
                  enabling your startup to prosper in the ever-changing business
                  world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
