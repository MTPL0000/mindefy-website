import Image from "next/image";

export default function Content() {
  return (
    <div className="  mt-[5rem] ml-[13.56rem] mr-[13.56rem]  w-[62.87rem] h-[71.62rem] ">
      {/* Mission Section */}
      <section className="flex flex-col justify-items-center mb-[4.5rem] w-[62.87rem] h-[18.31rem]">
        <div>
          <h4 className="text-[1rem] text-[#FF5225] font-bold uppercase ml-10   ">
            Who We Are
          </h4>
        </div>
        <div className="flex flex-row items-start gap-2 px-10 py-10 mt-1">
          <div className="w-[2.93rem] h-[5.62rem] relative">
            <Image
              src="/images/1.svg"
              alt="Step 1"
              fill
              className="object-cotain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-normal text-black">Our</h2>
            <h1 className="text-3xl font-semibold text-black mb-[1.62rem]">
              Mission
            </h1>
            <p className="text-gray-600 w-[39.75rem] h-[8rem] mb-6 ">
              Our mission is to empower businesses with cutting-edge technology
              solutions that propel growth, enhance efficiency, and drive
              sustainable success. As a conscious and aware team, we always
              strive to make an effort to create and design modern apps that
              play a considerable role in enhancing the life of users and
              benefit society at large.
            </p>
            <a
              href="#"
              className="text-purple-600 font-semibold flex items-center gap-2"
            >
              READ MORE
              <span className="text-xl">&#8594;</span>
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/Switch.svg"
              alt="Mission Icon"
              className="w-[14.37rem] h-[13.28rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-items-center mb-[4.5rem] w-[62.87rem] h-[16.56rem]">
        <div>
          <div>
            <h4 className="text-[1rem] text-[#FF5225] font-bold uppercase ml-[20.1rem]">
              What We Strive For
            </h4>
          </div>
          <div className="flex flex-row justify-between  px-10 py-10  mt-1 ">
            <div className="flex justify-center  ">
              <img
                src="/images/binoculours.svg"
                alt="Vision Icon"
                className="w-[18rem] h-[13.28rem] object-contain"
              />
            </div>
            <div className=" flex flex-row justify-items-center ml-10">
              <div className="w-[4.56rem] h-[5.68rem] relative ">
                <img
                  src="/images/2.svg"
                  alt="Step 2"
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-[2rem] font-normal text-black">Our</h2>
                <h1 className="text-[2rem] font-semibold text-black mb-[1.62rem]">
                  Vision
                </h1>
                <p className="text-gray-600 w-[35.56rem] h-[3.75rem] mb-6">
                  Our goal at Mindefy is to be the top option for companies
                  looking for disruptive technology solutions worldwide.
                </p>
                <a
                  href="#"
                  className="text-purple-600 font-semibold flex items-center "
                >
                  READ MORE <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="flex flex-col justify-items-center mb-[4.5rem] w-[62.87rem] h-[18.31rem]">
        <div>
          <h4 className="text-[1rem] text-[#FF5225] font-bold uppercase ml-10">
            Guiding Principles
          </h4>
        </div>
        <div className="flex flex-row items-start gap-1 px-10 py-10 mt-1 ">
          <div className="w-[4.8rem] h-[5.62rem] relative ">
            <Image
              src="/images/3.svg"
              alt="Step 3"
              fill
              className="object-contain"
            />
          </div>

          <div className="">
            <div className=" mb-12">
              <h2 className="text-[2rem] font-normal text-black">Our</h2>
              <h1 className="text-[2rem] font-semibold text-black mb-[1.62rem]">
                Values
              </h1>
              <p className="text-gray-600 w-[35.56rem] h-[3.75rem] mb-6 font-normal text-[1.125rem]">
                With an emphasis on innovation, agility, and quality in
                execution, we are motivated by a client-centric philosophy.
              </p>
            </div>

            <div className="flex justify-between gap-6">
              <div className="text-center">
                <div className="relative w-[5rem] h-[5rem] mx-auto">
                  <Image
                    src="/images/bulb.svg"
                    alt="Innovation"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-semibold">Innovation</p>
              </div>
              <div className="text-center">
                <div className="relative w-[5rem] h-[5rem] mx-auto">
                  <Image
                    src="/images/growth.svg"
                    alt="Growth"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-semibold">Growth</p>
              </div>
              <div className="text-center">
                <div className="relative w-[5rem] h-[5rem] mx-auto">
                  <Image
                    src="/images/teamwork.svg"
                    alt="Teamwork"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-semibold">Teamwork</p>
              </div>
              <div className="text-center">
                <div className="relative w-[5rem] h-[5rem] mx-auto">
                  <Image
                    src="/images/commitment.svg"
                    alt="Commitment"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-semibold">Commitment</p>
              </div>
              <div className="text-center">
                <div className="relative w-[5rem] h-[5rem] mx-auto">
                  <Image
                    src="/images/positivity.svg"
                    alt="Positivity"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-2 font-semibold">Positivity</p>
              </div>
            </div>

            <a
              href="#"
              className=" mt-6 text-purple-600 font-semibold flex items-center gap-2"
            >
              READ MORE <span className="text-xl">→</span>
            </a>
          </div>

          <div className="relative w-[14.375rem] h-[13.28rem] ">
            <Image
              src="/images/diamond.svg"
              alt="Values Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
