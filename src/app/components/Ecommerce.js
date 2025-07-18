"use client";

import Image from "next/image";

export default function Ecommerce() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="mx-auto text-center">
          {/* Header Tag */}
          <h1 className="text-[#FF5225] text-[1rem] font-bold tracking-widest uppercase mb-[1.25rem]">
            Ecommerce and Market Place
          </h1>

          {/* Main Title */}
          <p className="text-xl md:text-2xl xl:text-[2.25rem] font-semibold text-[#000000] mb-7 leading-tight max-w-[50rem] mx-auto px-4 xl:px-0">
            Mindefy: Your Ecommerce & Marketplace Transformation Partner
          </p>

          {/* Description Paragraphs */}
          <div className="w-full max-w-2xl xl:w-[60.25rem] font-normal mx-auto mb-[2.25rem] text-justify space-y-[1.75rem] px-4 xl:px-0">
            <p className="text-[1rem] text-[#444444] leading-relaxed">
              In the fast-paced realm of eCommerce and online marketplaces, your
              ability to adapt and thrive depends on two crucial elements:
              having the right platform and partnering with the right expert.
              Mindefy is that trusted partner, dedicated to delivering eCommerce
              solutions that not only meet your expectations but also drive
              tangible, measurable results. Our core focus revolves around two
              eCommerce giants - Shopify and Magento - and we've mastered these
              platforms to unlock your business's true potential
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-[30.125rem] mx-auto mb-[5rem]">
            <Image
              src="/images/MMS.webp"
              alt="Hybrid App Development - Developer working with mobile app design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-full max-w-2xl xl:w-[43.56rem] mx-auto px-4 xl:px-0">
        <div className="mt-5 mb-3">
          <p className="font-semibold text-lg xl:text-[1.75rem] text-[#000000] mb-4">
            Experience Ecommerce Excellence with Mindefy
          </p>
          <p className="ml-0 xl:ml-2.5 font-normal text-[1rem]">
            <span className="font-semibold text-lg xl:text-[1.25rem]">
              Shopify and Magento
            </span>{" "}
            are two platforms are pivotal to your success.{" "}
          </p>
        </div>
        <div
          className="w-full max-w-2xl xl:w-[41.25rem] mx-auto rounded-xl p-5 bg-[#FFFFFF]"
          style={{
            boxShadow:
              "1px 1px 4px rgba(0, 0, 0, 0.1), 4px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p className="font-semibold text-lg xl:text-[1.25rem]">
            Mindefy is committed to elevating these platforms beyond the
            ordinary to deliver the best eCommerce solution
          </p>
        </div>
      </div>

      {/* Shopify Section */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="max-w-6xl xl:max-w-[72.5rem] mx-auto">
          <div className="flex flex-col lg:flex-row bg-[#F3FFF4] rounded-xl py-10 px-4 xl:px-2.5">
            <div className="flex-1 w-full xl:w-[35.25rem] ml-0 xl:ml-2.5 mb-6 lg:mb-0">
              <p className="text-xl xl:text-[1.75rem] font-semibold uppercase text-[#033505]">
                Shopify
              </p>
              <p className="text-xl xl:text-[1.75rem] mb-3 font-normal text-[#033505]">
                Seamless Commerce at Your Fingertips
              </p>
              <p className="text-[1rem] w-full xl:w-[35.25rem] font-normal text-[#033505] leading-relaxed text-justify">
                Shopify is synonymous with its simplicity and versatility.
                Whether you're an emerging startup or an established brand
                looking to broaden your digital footprint, Mindefy's Shopify
                specialists craft a bespoke solution tailored to your unique
                needs.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm xl:w-[35.06rem] h-32 md:h-48 xl:h-[14.125rem] relative">
                  <Image
                    src="/images/shopify.webp"
                    alt="JavaScript Stack"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services Sections */}
          <div className="mt-[3.75rem] w-full max-w-3xl xl:w-[46.375rem] mx-auto space-y-[3.75rem]">
            {/* Shopify Store Setup */}
            <h3 className="text-lg xl:text-[1.25rem] font-semibold text-[#000000] text-center mb-9">
              Shopify Store Setup
            </h3>
            <div className="space-y-9">
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                We go beyond the basics. Our experts design visually stunning
                online stores that not only reflect your brand's identity but
                also provide an intuitive and engaging shopping experience for
                visitors. We understand that a great store isn't just about
                aesthetics; it's about turning visitors into loyal customers.
              </p>
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                We optimize every element of your Shopify store for conversion,
                from the user interface to the checkout process. This ensures
                that visitors not only have a memorable shopping experience but
                also become long-term customers.
              </p>
            </div>

            {/* Custom Development */}
            <h3 className="text-lg xl:text-[1.25rem] font-semibold text-[#000000] text-center mb-9">
              Custom Development
            </h3>
            <div className="space-y-9">
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                Mindefy specializes in tailoring your Shopify store with bespoke
                features and functionalities that align perfectly with your
                business goals.
              </p>
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                Our team can tackle a variety of custom development tasks, such
                as developing unique payment gateways, integrating third-party
                services, or enhancing your store's functionality to meet
                specific business requirements. This specific business approach
                ensures that your Shopify store doesn't just function well, but
                it also works seamlessly with your business processes.
              </p>
            </div>

            {/* Shopify SEO */}
            <h3 className="text-lg xl:text-[1.25rem] font-semibold text-[#000000] text-center mb-9">
              Shopify SEO
            </h3>
            <div className="space-y-9">
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                In the crowded online marketplace, visibility is everything.
                <br className="hidden xl:block" />
                Mindefy offers SEO optimization services specifically designed
                for Shopify, ensuring that your products are easily discoverable
                by your target audience.
              </p>
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                Our team applies advanced SEO strategies to enhance your store's
                search engine rankings, drive organic traffic, and ultimately
                boost your eCommerce sales. We're committed to ensuring that
                your store stands out and attracts the right audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Magento Section */}
      <section className="mt-28 mx-auto px-4 xl:px-0">
        <div className="max-w-6xl xl:max-w-[72.5rem] mx-auto">
          <div className="flex flex-col lg:flex-row bg-[#F4E5FF] rounded-xl py-10 px-4 xl:px-2.5">
            <div className="flex-1 w-full xl:w-[34rem] ml-0 xl:ml-2.5 mb-6 lg:mb-0">
              <p className="text-xl xl:text-[1.75rem] font-semibold uppercase text-[#2D0150]">
                Magento
              </p>
              <p className="text-xl xl:text-[1.75rem] mb-3 font-normal text-[#2D0150]">
                Scaling Your Ecommerce Heights
              </p>
              <p className="text-[1rem] w-full xl:w-[34rem] tracking-wide font-normal text-[#444444] leading-relaxed text-justify">
                For businesses with grand ambitions and complex needs, Magento
                is the platform of choice. Our Magento experts harness the full
                power of this platform to revolutionize your eCommerce
                experience.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-sm xl:w-[35.06rem] h-32 md:h-48 xl:h-[14.125rem] relative">
                  <Image
                    src="/images/magneto.webp"
                    alt="JavaScript Stack"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services Sections */}
          <div className="mt-[3.75rem] w-full max-w-3xl xl:w-[46.375rem] mx-auto space-y-[3.75rem]">
            {/* Magento Development */}
            <h3 className="text-lg xl:text-[1.25rem] font-semibold text-[#000000] text-center mb-9">
              Magento Development
            </h3>
            <div className="space-y-9">
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                We build robust, high-performance eCommerce platforms that are
                designed to scale seamlessly alongside your business. Our goal
                is to ensure that your Magento store can handle increasing
                traffic, growing product catalogs, and evolving customer demands
                without a hitch.
              </p>
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                Whether you're starting from scratch or migrating an existing
                store to Magento, our approach is highly adaptable, ensuring
                that the development process aligns with your specific needs and
                business goals.
              </p>
            </div>

            {/* Custom Extensions */}
            <h3 className="text-lg xl:text-[1.25rem] font-semibold text-[#000000] text-center mb-9">
              Custom Extensions
            </h3>
            <div className="space-y-9">
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                Enhance your Magento store with tailored extensions that cater
                to your unique business processes and requirements. Our experts
                have the expertise to create custom Magento extensions that can
                expand the functionality of your online store.
              </p>
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left tracking-wide">
                These extensions can range from personalized shopping
                experiences to specialized payment solutions. We work closely
                with you to understand your unique requirements and design
                solutions that meet them precisely.
              </p>
            </div>

            {/* Migration Services */}
            <h3 className="text-lg xl:text-[1.25rem] font-semibold text-[#000000] text-center mb-9">
              Migration Services
            </h3>
            <div className="space-y-9">
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left xl:text-justify">
                Transitioning your existing eCommerce store to Magento is a
                complex task that can be daunting. Mindefy's migration
                specialists have the experience and expertise to ensure the
                process is seamless and free from disruptions. .
              </p>
              <p className="text-[1rem] font-normal text-[#000000] leading-relaxed text-left xl:text-justify">
                Our migration services are designed to minimize downtime, data
                loss, and disruptions, providing a smooth path to leveraging
                Magento's robust features. We take every step necessary to
                ensure that your data, design, and functionality are retained
                throughout the migration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
