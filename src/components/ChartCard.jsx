import CustomBarChart from "./BarChart"
import { monthlyData } from "../assets/constants";

const ChartCard = () => {
  return (
    <div className="p-4 rounded-xl bg-white border border-[#EDF2F7] col-span-5 lg:col-span-3 overflow-x-auto lg:overflow-hidden flex justify-center items-center">
        <CustomBarChart data={monthlyData} />
    </div>
  )
}

export default ChartCard