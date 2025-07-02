import Image from "next/image";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";

export default function MindfulUX() {
  return (
    <section className="mx-auto bg-white">
      <Navbar />
      <section className="max-w-[90rem] mx-auto pt-16">
        {/* Heading section */}
        <div className="flex flex-col items-center justify-center gap-5 mt-8 mb-8">
          <p className="text-[#FF5225] text-base font-bold tracking-wider uppercase">
            Mindful UX
          </p>
          <div className="m-auto relative aspect-[2/1] w-full overflow-hidden">
            <Image
              src="/images/abt-1.png"
              alt="soli-stack"
              fill
              className="object-contain"
            />
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
    </section>
  );
}
