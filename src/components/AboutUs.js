import Image from "next/image";

export default function AboutUsPage() {
  const values = [
    {
      icon: "/images/abtIcon1.svg",
      title: "Delight customers",
      description:
        "Customer delight is at the heart of who we are. It informs all we do from bringing product innovation to our customers before they ask for it (or think of it) to making sure every interaction exceeds their expectations.",
    },
    {
      icon: "/images/abtIcon2.svg",
      title: "Do the right thing",
      description:
        "In every interaction and at every opportunity our compass is simple – do the right thing.",
    },
    {
      icon: "/images/abtIcon3.svg",
      title: "Innovate, communicate, win and grow",
      description:
        "We foster an environment that encourages open communication among all levels of our team by encouraging team members to lead from where they stand and be a role model regardless of title or seniority.",
    },
    {
      icon: "/images/abtIcon4.svg",
      title: "Work with and for each other",
      description:
        "We know we can't do it alone. The best ideas, innovations and solutions come from creative minds coming together, teams that feel supported and celebrated and rally around one another to create great work.",
    },
    {
      icon: "/images/abtIcon5.svg",
      title: "Be a company of which all can be proud",
      description:
        "We are proud of the work we do for our customers, the environment we create for our team, the support we provide for our communities and the value we create for our shareholders.",
    },
    {
      icon: "/images/abtIcon6.svg",
      title: "Create and grow sustained business value",
      description:
        "Our business model and plan are designed to grow the business and its value for years and decades to come.",
    },
  ];

  return (
    <section className="mx-auto bg-white">
      <section className="max-w-7xl mx-auto pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8">
        {/* Heading section */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-8 mb-6 sm:mb-8">
          <h1 className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase">
            ABOUT US
          </h1>

          {/* Responsive heading with better text flow */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-normal text-[#000000] leading-tight">
              <span className="block sm:inline">Transforming </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000]">
                Business Payments and Processes{" "}
              </span>
              <span className="block sm:inline">
                for companies and financial institutions around the world.
              </span>
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-normal text-[#000000] leading-tight mt-4 sm:mt-6">
              <span className="block sm:inline">Obsessed with </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#000000]">
                Removing Complexity. Automating and Digitising all That is
                Possible.
              </span>
            </h2>
          </div>

          {/* Responsive image container */}
          <div className="m-auto relative aspect-[2/1] w-full max-w-5xl overflow-hidden mt-6 sm:mt-8 lg:mt-10">
            <Image
              src="/images/abt-1.png"
              alt="soli-stack"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Main section */}
        <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-5xl mx-auto gap-6 sm:gap-8 lg:gap-9 mt-12 sm:mt-16 lg:mt-18">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#000000] text-center px-4 sm:px-0">
            Customer Delight Is The Foundation Of Our Business
          </h2>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-0">
            <p className="text-sm sm:text-base lg:text-base font-normal text-[#000000] text-center leading-relaxed">
              It leads our guiding principles. It defines our innovation to
              address new opportunities and solve real problems now,
              anticipating ones that customers don't even know they'll have. It
              drives who and how we hire to create world-class products and
              experiences that help businesses and financial institutions pay
              and get paid.
            </p>
            <p className="text-sm sm:text-base lg:text-base font-normal text-[#000000] text-center leading-relaxed">
              At our core we share ideas, innovate together and support each
              other personally and professionally. It is through our guiding
              principles that we achieve our common goal of exceeding
              expectations and delighting customers.
            </p>
          </div>
        </div>

        {/* Guiding principles section */}
        <div className="flex flex-col items-center justify-center max-w-4xl lg:max-w-5xl mx-auto gap-6 sm:gap-8 lg:gap-9 mt-16 sm:mt-20 lg:mt-21 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000000] text-center px-4 sm:px-0">
            Our guiding principles
          </h2>

          <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-center max-w-6xl mx-auto">
              {values.map((value, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 sm:gap-4 group"
                  >
                    <div className="relative aspect-[1/1] w-[4rem] sm:w-[4.5rem] rounded-full border border-[#e2e2e2] flex items-center justify-center transition-all duration-300 group-hover:border-[#8ed1fc] group-hover:bg-[#8ed1fc] overflow-hidden">
                      <div className="m-auto relative aspect-[1/1] w-[2rem] sm:w-[2.5rem]">
                        <Image
                          src={value.icon}
                          alt="icon"
                          fill
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    </div>
                    <h3 className="font-medium text-base sm:text-lg text-[#2b2b2b] px-2 sm:px-0">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base font-normal text-[#444444] max-w-xs leading-relaxed px-2 sm:px-0">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
