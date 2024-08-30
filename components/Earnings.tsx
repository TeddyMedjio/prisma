import { ArrowPathIcon } from "@heroicons/react/16/solid";
import ProgressBar from "./ProgressBar";

const dates = [
  {
    date: "5 Aug",
    referrals: "1518",
    bonus: "2500",
    networks: "7075",
    percentage: [{ referral: 75, bonus: 25, network: 25 }],
    total: "1.9k",
  },
  {
    date: "6 Aug",
    referrals: "2518",
    bonus: "1530",
    networks: "3075",
    percentage: [{ referral: 25, bonus: 15, network: 25 }],
    total: "1.9k",
  },
  {
    date: "7 Aug",
    referrals: "1718",
    bonus: "530",
    networks: "3075",
    percentage: [{ referral: 25, bonus: 15, network: 30 }],
    total: "1.9k",
  },
  {
    date: "8 Aug",
    referrals: "918",
    bonus: "2500",
    networks: "3075",
    percentage: [{ referral: 25, bonus: 25, network: 30 }],
    total: "1.9k",
  },
  {
    date: "9 Aug",
    referrals: "5918",
    bonus: "1000",
    networks: "2375",
    percentage: [{ referral: "15%", bonus: 25, network: 15 }],
    total: "1.9k",
  },
];

export default function Earnings() {
  return (
    <div className="bg-[#212121] flex items-center justify-center h-screen p-24">
      <div className="bg-[#272727] border border-black p-4 rounded-lg w-full">
        {/* TITLE */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-semibold text-lg text-white">
            Earnings Statistics
          </h1>
          <button className="flex items-center text-base font-semibold text-white bg-[#404040] px-2 rounded-md">
            Refresh
            <ArrowPathIcon className="size-6 ml-2" />
          </button>
        </div>
        {/* GRAPHE */}
        <ProgressBar BackgroundColor="green-600" Pourcent={45} />

        {/* <div className="flex items-end justify-between h-[224px] ">
          {dates.map((item) => {
            return (
              <div
                key={item.date}
                className="rounded-[6px] h-full flex flex-col-reverse justify-center"
              >
                <p className="text-[#a1a1a1] text-[12px] self-center text-center font-semibold mt-2">
                  {item.date}
                </p>
                {item.percentage.map((item) => (
                  <span
                    className={` h-[${item.referral}] bg-[#abf600] border border-gray-400 grid grid-rows-1 justify-end pt-[2px] items-center `}
                  />
                ))}

                {item.percentage.map((item) => (
                  <span
                    className={`h-[${item.bonus}] bg-[#559915] border border-gray-400 grid grid-rows-1 justify-end pt-[2px] items-center `}
                  />
                ))}

                {item.percentage.map((item) => (
                  <span
                    className={` h-[${item.network}] bg-[#e6ff92] border border-gray-400 grid grid-rows-1 justify-end pt-[2px] items-center `}
                  />
                ))}
                <p className="text-[#a1a1a1] text-[12px] self-center font-semibold mb-2">
                  {item.total}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

// <div className="grid grid-rows-1 h-full justify-end relative pt-6 gap-1 items-center">
//   <div className="h-full flex flex-col justify-end">
//     <div className="flex flex-col-reverse gap-[1px] h-full max-h-[] relative">
//       <p className="text-[#a1a1a1] text-xs left-[50%] -translate-x-[50%]  font-semibold">
//         12,1k
//       </p>
//       <div className="w-[18px] h-[12,5527%] bg-[#559915] border border-gray-400"></div>
//       <div className="w-[18px] h-[66.7742%] bg-[#abf600] border border-gray-400"></div>
//       <div className="w-[18px] h-[20.6731%] bg-[#e6ff92] border border-gray-400"></div>
//     </div>
//   </div>
// </div>;
