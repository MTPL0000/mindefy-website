import { marketResearchColumns, problems, solutions } from "./data";

export default function MarketResearchSection() {
  const { column1, column2, column3 } = marketResearchColumns;
  const fullRows = problems.slice(0, Math.floor(problems.length / 3) * 3);
  const lastRow = problems.slice(fullRows.length);

  return (
    <>
      <div className="w-full mx-auto px-6 bg-[#E9F6F6] relative overflow-hidden">
        <div className="mx-auto pt-16">
          <div className="relative w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
            <div className="relative flex flex-col gap-2 items-center pb-24">
              <h2 className="text-[#52B7B7] text-5xl font-extrabold">Market Research</h2>
              <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-full md:w-150 lg:w-188">
                Market research involves gathering, analyzing, and interpreting information about a market, including a product's or service's nature, characteristics, and potential customer base.
              </p>
            </div>
          </div>
          <div className="bg-[#E9F6F6] p-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-5 gap-8 justify-center">
              {[column1, column2, column3].map((col, i) => (
                <div key={i} className="flex flex-col gap-16">
                  {col.map((text, j) => (
                    <div key={j} className="bg-[#FFD966] w-60 p-5 text-base font-normal rounded-sm shadow-md">{text}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-242 mx-auto mb-15">
            <p className="text-[#2B7575] text-[1.25rem] font-medium leading-relaxed text-justify">
              These findings indicate that there is a strong market for organic and healthier pre-prepared and ready-to-eat meals and snacks among parents and new mothers. It is likely that such a product would be successful in the market if it is backed by trusted sources, offers convenience and reduces stress (such as reductions in cost), and offers
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto mb-30 px-6 bg-[#E9F6F6] relative overflow-hidden">
        <div className="relative w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
          <div className="relative flex flex-col gap-2 items-center pt- pb-24">
            <h2 className="text-[#52B7B7] text-5xl font-extrabold">The Problems</h2>
            <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-full md:w-150 lg:w-188">
              After the extensive research, surveys, and interviews I was able to find out these problems in the current user experience and visual elements, below mentioned are only the high priority problems.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {fullRows.map((item, i) => (
            <div key={i} className="bg-[#FFD4DA] max-w-89.5 p-4.5 rounded-lg font-bold text-xl text-[#5F5456] shadow">{item}</div>
          ))}
        </div>
        {lastRow.length > 0 && (
          <div className="max-w-6xl mx-auto flex justify-center gap-6 flex-wrap">
            {lastRow.map((item, i) => (
              <div key={i} className="bg-[#FFD4DA] max-w-89.5 p-4.5 rounded-lg font-bold text-xl text-[#5F5456] shadow">{item}</div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full mx-auto mb-30 px-6 bg-[#E9F6F6] relative overflow-hidden">
        <div className="relative w-full overflow-hidden mb-12 bg-[#E9F6F6] md:shadow-[0_35px_44px_0_rgba(30,66,66,0.05)] md:border-b md:border-[#E9F6F6] md:rounded-bl-[50%_100%] md:rounded-br-[50%_100%]">
          <div className="relative flex flex-col gap-2 items-center pt- pb-24">
            <h2 className="text-[#52B7B7] text-5xl font-extrabold">The Solutions</h2>
            <p className="text-[#377D7D] leading-relaxed text-base font-normal text-center w-full md:w-150 lg:w-188">
              Based on the problems we found out below are the solutions that we proposed client in order to enhance the overall User experience and enhance the joy of shopping from the Early Foods.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="bg-[#CBEBEB] max-w-89.5 p-4.5 rounded-lg font-bold text-xl text-[#2B7575] shadow">{item}</div>
          ))}
        </div>
      </div>
    </>
  );
}
