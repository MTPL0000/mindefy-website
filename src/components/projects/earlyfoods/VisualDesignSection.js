import Image from "next/image";

export default function VisualDesignSection() {
  return (
    <>
      <div className="bg-[#eaf6f6] w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full lg:w-287 mx-auto">
          <div className="flex flex-col flex-wrap w-full">
            <h3 className="text-[#F690A1] text-3xl font-normal flex items-center gap-2 mb-2">
              <span className="w-8" role="img" aria-label="pin">
                📍
              </span>
              UI Design
            </h3>
            <h2 className="text-[#52B7B7] text-5xl md:text-6xl lg:text-6xl font-bold">
              Visual Design
            </h2>
          </div>
          <div className="w-[22.31rem] pl-0 lg:pl-40 mt-8">
            <h4 className="text-[#F690A1] text-left text-base font-bold mb-2">
              Point take away
            </h4>
            <div className="flex gap-8">
              <ul className="text-[#2B7575] text-sm font-normal space-y-1">
                <li>• UI Screens</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-18">
          <Image
            src="/images/EF-Laptop1.webp"
            alt="Main UI with annotations"
            width={1147}
            height={506}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-6xl mx-auto mb-18">
          <Image
            src="/images/EF-Laptop2.webp"
            alt="Product detail UI"
            width={559}
            height={400}
            className="object-contain"
            loading="lazy"
          />
          <Image
            src="/images/EF-Laptop3.webp"
            alt="Category UI"
            width={559}
            height={400}
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="text-center mb-6">
          <h3 className="text-5xl font-bold text-[#52B7B7]">Before</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-7 max-w-6xl mx-auto">
          <Image
            src="/images/EF-Laptop4.webp"
            alt="Old homepage"
            width={559}
            height={400}
            className="object-contain"
            loading="lazy"
          />
          <Image
            src="/images/EF-Laptop5.webp"
            alt="Old product page"
            width={559}
            height={400}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
      <div className="bg-[#eaf6f6] py-12 px-4">
        <div className="mb-10 relative">
          <div>
            <p className="text-[#F690A1] font-normal text-3xl">📍 UI Design</p>
            <p className="text-6xl font-bold text-[#52B7B7]">Style Guide</p>
          </div>
          <p className="absolute right-0 top-0 font-normal text-[#2B7575] text-sm text-left mt-7">
            <span className="text-[#F88598] font-bold text-base">
              Point take away
            </span>{" "}
            <br />• Typography <br />• Color <br />• Iconography
          </p>
        </div>
        <div className="flex flex-row">
          <div className="bg-[#F88CA2] w-10 h-86 mt-2.5 mr-12 flex items-center justify-center">
            <p className="text-white font-bold text-2xl px-2 py-15 rotate-180 writing-vertical-lr">
              COLOR STYLE GUIDE
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-[#3BB7AC] text-3xl font-medium font-noto">
                Primary - Main
              </h3>
              <p className="text-xs font-normal text-[#F690A1] mt-2 font-noto">
                Colors that represent EarlyFood brand, used as primary color.
              </p>
              <div className="mt-4 space-y-0.5">
                {[
                  {
                    name: "Main 01 (EF Light Pink)",
                    color: "#FFB6C1",
                    code: "#FFB6C1 | EF-Light Pink/06-base",
                  },
                  {
                    name: "Main 02 (EF Sky Blue)",
                    color: "#87CEFA",
                    code: "#87CEFA | EF-Sky Blue/06-base",
                  },
                  {
                    name: "Main 03 (EF Green)",
                    color: "#B4E2E2",
                    code: "#B4E2E2 | EF-Green/06-base",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="bg-white p-4 flex items-center gap-4"
                  >
                    <div
                      className="w-9 h-9 rounded-full"
                      style={{ backgroundColor: c.color }}
                    ></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">{c.name}</p>
                      <p className="text-[#666666] text-xs">{c.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[#3BB7AC] text-3xl font-medium font-noto">
                Primary - Supplementary
              </h3>
              <p className="text-xs font-normal text-[#F690A1] mt-2 font-noto">
                Colors that complement the use of primary colors.
              </p>
              <div className="mt-4 space-y-0.5">
                {[
                  {
                    name: "Supplementary 01 (Lavender Blue)",
                    color: "#D5C7FF",
                    code: "#D5C7FF | Lavender Blue/06-base",
                  },
                  {
                    name: "Supplementary 02 (Yellow)",
                    color: "#FFEEA2",
                    code: "#FFEEA2 | Yellow/06-base",
                  },
                  {
                    name: "Supplementary 03 (Caramel)",
                    color: "#FFD9A0",
                    code: "#FFD9A0 | Caramel/06-base",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="bg-white p-4 flex items-center gap-4"
                  >
                    <div
                      className="w-9 h-9 rounded-full"
                      style={{ backgroundColor: c.color }}
                    ></div>
                    <div className="text-sm font-normal font-noto">
                      <p className="font-medium text-base">{c.name}</p>
                      <p className="text-[#666666] text-xs">{c.code}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 mb-12 sm:mb-16">
          <p className="text-[#F690A1] font-bold text-lg sm:text-xl lg:text-3xl mb-8 sm:mb-11">
            📍 Typography
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Fredoka One",
                styles: "01 LOWER CASE | 02 REGULAR",
                fontClass: "font-fredoka",
              },
              {
                name: "Noto Sans",
                styles: "01 REGULAR | 02 SEMI BOLD | 03 BOLD",
                fontClass: "font-noto",
              },
            ].map((font) => (
              <div key={font.name} className="bg-[#CBEBEB] rounded-lg">
                <div className="flex flex-row items-center py-4 sm:py-7 px-6 sm:px-12">
                  <div className="w-3 h-3 mr-4 sm:mr-7 bg-[#377D7D]"></div>
                  <div>
                    <p className="text-xs font-normal text-[#377D7D]">
                      Primary Typeface
                    </p>
                    <p className="text-lg sm:text-2xl font-bold text-[#377D7D]">
                      {font.name}
                    </p>
                    <p className="text-xs font-normal text-[#377D7D]">
                      {font.styles}
                    </p>
                  </div>
                </div>
                <div
                  className={`text-lg sm:text-xl lg:text-3xl text-justify ${font.fontClass} font-semibold text-[#377D7D] w-full max-w-100 mx-auto px-6 sm:px-21.5 tracking-widest leading-relaxed mb-8 sm:mb-12`}
                >
                  a b c d e f g h i j <br />k l m n o p q r s<br /> t u v w x y
                  z
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#F690A1] font-bold text-lg sm:text-xl lg:text-3xl mb-8 sm:mb-12">
            📍 ICONOGRAPHY
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/Icons.webp"
              alt="Main UI with annotations"
              width={1168}
              height={220}
              className="object-contain w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
