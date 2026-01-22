import Image from "next/image";

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

export default function AboutUsValues() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <div className="relative aspect-square w-16 sm:w-18 rounded-full border border-[#e2e2e2] flex items-center justify-center transition-all duration-300 group-hover:border-[#8ed1fc] group-hover:bg-[#8ed1fc] overflow-hidden">
                    <div className="m-auto relative aspect-square w-8 sm:w-10">
                      <Image
                        src={value.icon}
                        alt="icon"
                        fill
                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        loading="lazy"
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
  );
}
