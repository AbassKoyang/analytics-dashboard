import { DiscountIcon } from "../assets/icons"

const StatsCard = ({icon, graph, heading, value, percentage, percentageIcon, text, color}) => {
  return (
    <div className="p-4 rounded-xl bg-white border border-[#EDF2F7]">
        <div className="flex items-center justify-between">
        <span className="border border-[#E6E6E6] rounded-full p-2">
            <DiscountIcon />
        </span>
        <img src={graph} alt="Graph" />
        </div>
        <h2 className="text-[#898989] font-medium text-lg mx-3">Total refund</h2>
        <h2 className="text-[#3A3F51 font-medium text-[22px]">270</h2>
        <div className="flex items-center justify-between mt-3">
        <span className="px-2 py-1 rounded-full text-[#ED544E] bg-[#ed534e50] text-[8px] font-medium">23,5%</span>
        <p className="text-[#606060] text-[8px]">vs. previous month</p>
        </div>
    </div>
  )
}

export default StatsCard