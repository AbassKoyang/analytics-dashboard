import { DiscountIcon } from "../assets/icons"

const StatsCard = ({icon, graph, heading, value, percentage, trendIcon, text, textColor, backGroundColor}) => {
  return (
    <div className="p-4 rounded-xl bg-white border border-[#EDF2F7] col-span-2 md:col-span-1 self-start">
        <div className="flex items-center justify-between">
        <span className="border border-[#E6E6E6] rounded-full p-2">
            {icon}
        </span>
        <img src={graph} alt="Graph" />
        </div>
        <h2 className="text-[#898989] font-medium text-[16px] my-1.5">{heading}</h2>
        <h2 className="text-[#3A3F51 font-medium text-[22px]">{value}</h2>
        <div className="flex items-center justify-between mt-1.5">
        <span className={`px-2 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 ${textColor, backGroundColor}`}> {trendIcon}{percentage}</span>
        <p className="text-[#606060] text-[12px]">{text}</p>
        </div>
    </div>
  )
}

export default StatsCard