import Image from "next/image";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";

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
      <Navbar />
      <section className="max-w-[90rem] mx-auto pt-16">
        {/* Heading section */}
        <div className="flex flex-col items-center justify-center gap-5 mt-8 mb-8">
          <p className="text-[#FF5225] text-base font-bold tracking-wider uppercase">
            ABOUT US
          </p>
          <span className="text-4xl font-normal text-[#000000]">
            Transforming{" "}
            <span className="text-4xl font-semibold text-[#000000]">
              Business Payments and Processes{" "}
            </span>
            for
          </span>
          <span className="text-4xl font-normal text-[#000000]">
            companies and financial institutions around the world.
          </span>
          <span className="text-4xl font-normal text-[#000000]">
            Obsessed with{" "}
            <span className="text-4xl font-semibold text-[#000000]">
              Removing Complexity. Automating and
              <br />
            </span>
          </span>
          <span className="text-4xl font-semibold text-[#000000]">
            {" "}
            Digitising all That is Possible.
          </span>

          <div className="m-auto relative aspect-[2/1] w-full overflow-hidden">
            <Image
              src="/images/abt-1.png"
              alt="soli-stack"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Main section */}
        <div className="flex flex-col items-center justify-center max-w-[72rem] mx-auto gap-9 mt-18">
          <span className="text-3xl font-semibold text-[#000000] text-center">
            Customer Delight Is The Foundation Of Our Business
          </span>

          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-base font-normal text-[#000000] text-center">
              It leads our guiding principles. It defines our innovation to
              address new opportunities and solve real problems now,
              anticipating ones that customers don’t even know they’ll have. It
              drives who and how we hire to create world-class products and
              experiences that help businesses and financial institutions pay
              and get paid.
            </span>
            <span className="text-base font-normal text-[#000000] text-center">
              At our core we share ideas, innovate together and support each
              other personally and professionally. It is through our guiding
              principles that we achieve our common goal of exceeding
              expectations and delighting customers.
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center max-w-[72rem] mx-auto gap-9 mt-21 mb-8">
          <span className="text-3xl font-bold text-[#000000] text-center">
            Our guiding principles
          </span>

          <section className="bg-white py-16 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {values.map((value, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div className="relative aspect-[1/1] w-[4.5rem] rounded-full border border-[#e2e2e2] flex items-center justify-center transition-all duration-300 group-hover:border-[#8ed1fc] group-hover:bg-[#8ed1fc] overflow-hidden">
                      <div className="m-auto relative aspect-[1/1] w-[2.5rem]">
                        <Image
                          src={value.icon}
                          alt="icon"
                          fill
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>
                    </div>
                    <h3 className="font-medium text-lg text-[#2b2b2b]">
                      {value.title}
                    </h3>
                    <p className="text-base font-normal text-[#444444] max-w-xs">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        {/* Footer */}
        <div className="text-center">
          <h4 className="text-[2.125rem] font-semibold text-[#000000]">
            Lets Get in Touch
          </h4>
        </div>
      </section>
      <Footer />
    </section>
  );
}
