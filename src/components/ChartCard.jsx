import CustomBarChart from "./BarChart"
import { monthlyData } from "../assets/constants";

const ChartCard = () => {
  return (
    <div className="p-4 rounded-xl bg-white border border-[#EDF2F7] col-span-5 lg:col-span-3 overflow-x-auto lg:overflow-hidden flex flex-col items-center">
    <div className="w-full flex justify-between items-center  mb-10">
        <h3 className="font-bold text-lg text-[#26282C]">Sales Trend</h3>
        <div className="flex gap-3 items-center">
            <h5 className="font-medium text-sm text-[#3A3F51]">Sort by:</h5>
            <select className="bg-white h-9 px-3 cursor-pointer border border-gray/50 dark:border-transparent rounded-3xl text-[12px] text-[#3A3F51] focus:border-gray/50
            ">
                <option value="value" className="text-[14px] text-[#3A3F51]">Weekly</option>
                <option value="value">Monthly</option>
                <option value="value">Yearly</option>
            </select>
        </div>
    </div>
        <CustomBarChart data={monthlyData} />
    </div>
  )
}

export default ChartCard