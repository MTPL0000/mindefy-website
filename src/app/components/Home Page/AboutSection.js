import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="  py-20 font-poppins ">
      <div className="flex flex-col ">
        <div className="">
          <div className="text-center mb-8">
            <p className="text-sm font-bold text-[#FF5630] uppercase tracking-wider mb-8">
              About Mindefy
            </p>
            <h2 className="text-3xl font-light text-gray-800">
              We are A{" "}
              <span className="font-bold">Top-Notch IT Service Provider</span>{" "}
              And
              <br />
              <span className="font-bold">Product Development company</span>
            </h2>
          </div>
        </div>

        <div className="w-full px-36 flex flex-row justify-between items-center ">
          <div className="w-[50.6%]">
            <div className=" relative w-full aspect-[13.92/1] mb-7">
              <Image
                src="/images/Experience.svg"
                fill
                alt="Mindefy Experience"
              />
            </div>
            <p className="text-gray-600  text-justify mb-6 text-lg">
              Transform your business with Mindefy, a premier IT company
              committed to driving digital excellence and empowering
              organizations to thrive in the rapidly evolving digital landscape.
              With our cutting-edge solutions, experienced team, and
              customer-centric approach, we are the trusted partner you need to
              harness the full potential of technology and achieve outstanding
              results.
            </p>
            <a
              href="#about"
              className="text-indigo-600 font-medium hover:underline inline-flex items-center text-lg"
            >
              ABOUT US <span className="ml-2">→</span>
            </a>
          </div>

          <div className=" relative w-[29.75rem] aspect-square ">
            <Image src="/images/specs.svg" fill alt="Mindefy 3D Character" />
          </div>
        </div>
      </div>
    </section>
  );
}
