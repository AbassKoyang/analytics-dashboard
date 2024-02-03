import CustomBarChart from "./BarChart"
import { monthlyData, weeklyData, yearlyData } from "../assets/constants";
import { useEffect, useState } from "react";

const ChartCard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('weekly');
    const [barSize, setBarSize] = useState(30);
    const [chartWidth, setChartWidth] = useState(700)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 600) {
            setBarSize(25);
            setChartWidth(450)
          } else {
            setBarSize(30); // Default bar size for larger screens
            setChartWidth(700)
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    
    const onSelect =  (selectedPeriod) => {
        setSelectedPeriod(selectedPeriod);
    }
  return (
    <div className="p-4 rounded-xl bg-white border border-[#EDF2F7] col-span-5 lg:col-span-3 flex flex-col items-center overflow-auto">   <div className="w-full flex justify-between items-center  mb-10">
        <h3 className="font-bold text-lg text-[#26282C]">Sales Trend</h3>
        <div className="flex gap-3 items-center">
            <h5 className="font-medium text-sm text-[#3A3F51]">Sort by:</h5>
            <select onChange={(e) => onSelect(e.target.value)} className="bg-white h-9 px-3 cursor-pointer border border-gray/50 dark:border-transparent rounded-3xl text-[12px] text-[#3A3F51] focus:border-gray/50
            ">
                <option value="weekly" className="text-[14px] text-[#3A3F51] hover:bg-[#34CAA5] hover:text-white cursor-pointer">Weekly</option>
                <option value="monthly" className="text-[14px] text-[#3A3F51]">Monthly</option>
                <option value="yearly" className="text-[14px] text-[#3A3F51]">Yearly</option>
            </select>
        </div>
    </div>
    <div className="w-full h-full flex flex-col items-center justify-center overflow-x-visible lg:overflow-hidden">
        {selectedPeriod === 'weekly' && <CustomBarChart data={weeklyData} barsize={barSize} ticks={[0, 500, 1000, 2000, 3000, 4000, 5000]}  selectedPeriod='day' width={chartWidth}/>}
        {selectedPeriod === 'monthly' && <CustomBarChart data={monthlyData} barsize={barSize} ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000]} selectedPeriod='month' width={chartWidth} />}
        {selectedPeriod === 'yearly' && <CustomBarChart data={yearlyData} barsize={barSize} ticks={[0, 25000, 50000, 100000, 15000, 200000, 250000]} selectedPeriod='year' width={chartWidth} />}
    </div>
    </div>
  )
}

export default ChartCard