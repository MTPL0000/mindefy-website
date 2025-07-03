import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Image from "next/image";
import ContactUs from "../HomePage/ContactUs";

const MachONE = () => {
  return (
    <div className="m-auto bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-8 lg:gap-16 pt-16">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-6 lg:gap-12 mt-8 px-4 sm:px-6 lg:px-8">
          <p className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wider text-center">
            MachONE
          </p>
          <span className="text-sm sm:text-base font-normal text-black text-justify leading-relaxed">
            Mindefy's expert development team has crafted a powerful platform
            that seamlessly integrates with existing systems, allowing for a
            smooth transition towards workflow automation. Our flagship product,
            MachONE, is a powerful combination of speed and teamwork. With a
            strong presence in the UAE, we focus on delivering exceptional
            services to the GCC, India, and Africa regions. Machone empowers
            businesses to optimize their workflows and maximize their potential.
          </span>
        </div>
      </section>

      {/* Main Image - Full Width */}
      <div className="relative aspect-[2/1] w-full overflow-hidden mt-8 lg:mt-16">
        <Image
          src="/images/projects/mach-1.webp"
          alt="mach Screens"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Sections */}
      <section className="flex flex-col items-center justify-center gap-8 lg:gap-16 mt-8 lg:mt-16">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8">
          <p className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase text-center">
            Resource Management capabilities
          </p>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black text-center leading-tight max-w-5xl">
            <span className="font-semibold">
              MachONE
            </span>{" "}
            Can{" "}
            <span className="font-semibold">
              Transform Your Business
            </span>
            <br />
            With Its{" "}
            <span className="font-semibold">
              PROCUREMENT
            </span>
          </span>
        </div>
        
        <div className="relative aspect-[2/1] w-full max-w-5xl overflow-hidden px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/projects/mach-2.png"
            alt="mach Screens"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Warehouse Management
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              MachONE's Warehouse Management solution offers advanced features
              such as Cycle Count, Consolidation, and Space Optimization. These
              functionalities optimize your inventory operations, leading to
              improved efficiency and reduced costs.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Business Transformation
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              Experience a remarkable business transformation with MachONE. Our
              procure-to-pay process and Hub & Spoke Model streamline your
              operations and drive organizational efficiency. We also provide
              expert guidance in organizational design, ensuring your business
              is structured for success.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              SRM (Supplier Relationship Management)
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              MachONE's Supplier Relationship Management (SRM) capabilities
              include Supplier Optimization, Supplier Onboarding, and tail-end
              supplier strategy. By optimizing your supplier relationships, we
              help you achieve cost savings and enhance your supply chain
              efficiency.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Industries Catered
            </h5>
            <p className="text-sm sm:text-base font-normal text-black leading-relaxed">
              MachONE caters to various industries, including Manufacturing,
              Logistics, Energy, Consulting, and Education. Our tailored
              solutions address the unique procurement needs of each industry,
              ensuring maximum impact and value.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:gap-5 px-4 sm:px-6 lg:px-8 mt-8 lg:mt-16">
          <p className="text-[#FF5225] text-sm sm:text-base font-bold tracking-wider uppercase text-center">
            Pillars of MachONE
          </p>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black text-center leading-tight max-w-5xl">
            <span className="font-semibold">
              MachONE
            </span>{" "}
            Is{" "}
            <span className="font-semibold">
              Built Upon Five Essential Pillars
            </span>
            <br />
            That{" "}
            <span className="font-semibold">
              Drive Exceptional
            </span>{" "}
            Results
          </span>
        </div>

        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Aligned to Customer and Market
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              We prioritize understanding your specific requirements and market
              dynamics to deliver customized solutions that align perfectly with
              your business goals.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Agile to Business
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              MachONE's agile approach ensures we adapt quickly to changing
              business needs, offering flexible solutions that keep you ahead of
              the competition.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Adaptable to Change
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              We embrace change as an opportunity for growth. Our adaptable
              solutions enable you to navigate market shifts and capitalize on
              emerging trends.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Seamless Execution
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              MachONE guarantees flawless project execution through meticulous
              planning and implementation, ensuring a smooth and hassle-free
              experience for our clients.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Efficient Delivery
            </h5>
            <p className="text-sm sm:text-base font-normal text-black mb-8 lg:mb-12 leading-relaxed">
              Efficiency is at the core of MachONE's mission. Our solutions are
              designed to deliver superior performance, optimize processes, and
              drive efficient delivery, leading to tangible results and
              increased business value.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5">
            <h5 className="text-lg sm:text-xl font-semibold text-black">
              Focused Areas
            </h5>
            <p className="text-sm sm:text-base font-normal text-black leading-relaxed">
              MachONE is dedicated to improving Business Efficiency and
              achieving Cost Reduction through our expertise in Process Mapping.
              We analyze your existing processes, identify areas for
              improvement, and implement strategies that enhance efficiency and
              profitability.
            </p>
          </div>
        </div>
      </section>
      {/*contact us*/}
      <ContactUs />
      {/*footer*/}
      <Footer />
    </div>
  );
};

export default MachONE;
