import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Image from "next/image";

const MachONE = () => {
  return (
    <div className="m-auto bg-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center gap-[6rem] mx-auto pt-16">
        <div className="flex flex-col items-center justify-center max-w-[60rem] mx-auto gap-12 mt-8">
          <p className="text-[#000000] text-4xl font-semibold tracking-wider">
            MachONE
          </p>
          <span className="text-base font-normal text-[#000000] text-justify">
            Mindefy’s expert development team has crafted a powerful platform
            that seamlessly integrates with existing systems, allowing for a
            smooth transition towards workflow automation. Our flagship product,
            MachONE, is a powerful combination of speed and teamwork. With a
            strong presence in the UAE, we focus on delivering exceptional
            services to the GCC, India, and Africa regions. Machone empowers
            businesses to optimize their workflows and maximize their potential.
          </span>
        </div>
        {/* Main Image */}
        <div className="relative aspect-[2/1] w-full overflow-hidden">
          <Image
            src="/images/projects/mach-1.webp"
            alt="mach Screens"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-[#FF5225] text-base font-bold tracking-wider uppercase">
            Resource Management capabilities
          </p>
          <span className="text-4xl font-normal text-[#000000] text-center">
            <span className="text-4xl font-semibold text-[#000000] text-center">
              MachONE
            </span>{" "}
            Can{" "}
            <span className="text-4xl font-semibold text-[#000000] text-center">
              Transform Your Business
            </span>
            <br />
            With Its{" "}
            <span className="text-4xl font-semibold text-[#000000] text-center">
              PROCUREMENT
            </span>
          </span>
        </div>
        <div className="relative aspect-[2/1] w-[60rem] overflow-hidden">
          <Image
            src="/images/projects/mach-2.png"
            alt="mach Screens"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-[60rem]">
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Warehouse Management
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              MachONE's Warehouse Management solution offers advanced features
              such as Cycle Count, Consolidation, and Space Optimization. These
              functionalities optimize your inventory operations, leading to
              improved efficiency and reduced costs.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Business Transformation
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              Experience a remarkable business transformation with MachONE. Our
              procure-to-pay process and Hub & Spoke Model streamline your
              operations and drive organizational efficiency. We also provide
              expert guidance in organizational design, ensuring your business
              is structured for success.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              SRM (Supplier Relationship Management)
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              MachONE's Supplier Relationship Management (SRM) capabilities
              include Supplier Optimization, Supplier Onboarding, and tail-end
              supplier strategy. By optimizing your supplier relationships, we
              help you achieve cost savings and enhance your supply chain
              efficiency. supplier
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Industries Catered
            </h5>
            <p className="text-base font-normal text-[#000000]">
              MachONE caters to various industries, including Manufacturing,
              Logistics, Energy, Consulting, and Education. Our tailored
              solutions address the unique procurement needs of each industry,
              ensuring maximum impact and value.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-[#FF5225] text-base font-bold tracking-wider uppercase">
            Pillars of MachONE
          </p>
          <span className="text-4xl font-normal text-[#000000] text-center">
            <span className="text-4xl font-semibold text-[#000000] text-center">
              MachONE
            </span>{" "}
            Is{" "}
            <span className="text-4xl font-semibold text-[#000000] text-center">
              Built Upon Five Essential Pillars
            </span>
            <br />
            That{" "}
            <span className="text-4xl font-semibold text-[#000000] text-center">
              Drive Exceptional
            </span>{" "}
            Results
          </span>
        </div>

        <div className="w-[60rem]">
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Aligned to Customer and Market
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              We prioritize understanding your specific requirements and market
              dynamics to deliver customized solutions that align perfectly with
              your business goals.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Agile to Business
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              MachONE's agile approach ensures we adapt quickly to changing
              business needs, offering flexible solutions that keep you ahead of
              the competition.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Adaptable to Change
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              We embrace change as an opportunity for growth. Our adaptable
              solutions enable you to navigate market shifts and capitalize on
              emerging trends.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Seamless Execution
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              MachONE guarantees flawless project execution through meticulous
              planning and implementation, ensuring a smooth and hassle-free
              experience for our clients.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Efficient Delivery
            </h5>
            <p className="text-base font-normal text-[#000000] mb-[3rem]">
              Efficiency is at the core of MachONE's mission. Our solutions are
              designed to deliver superior performance, optimize processes, and
              drive efficient delivery, leading to tangible results and
              increased business value.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-5">
            <h5 className="text-[1.25rem] font-semibold text-[#000000]">
              Focused Areas
            </h5>
            <p className="text-base font-normal text-[#000000]">
              MachONE is dedicated to improving Business Efficiency and
              achieving Cost Reduction through our expertise in Process Mapping.
              We analyze your existing processes, identify areas for
              improvement, and implement strategies that enhance efficiency and
              profitability.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <h4 className="text-[2.125rem] font-semibold text-[#000000]">
            Lets Get in Touch
          </h4>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MachONE;
