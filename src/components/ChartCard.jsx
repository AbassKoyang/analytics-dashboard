import CustomBarChart from "./BarChart"
import { monthlyData, weeklyData, yearlyData } from "../assets/constants";
import { useEffect, useState } from "react";

const ChartCard = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('weekly');
    const [barSize, setBarSize] = useState(30);
    const [chartWidth, setChartWidth] = useState(700);
    const [barRadius, setBarRadius] = useState(25)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 500) {
            setBarSize(25);
            setChartWidth(450)
            setBarRadius(15)
          } else if (window.innerWidth > 1400) {
            setBarSize(40); // Default bar size for larger screens
            setChartWidth(1000)
            setBarRadius(30)
          } else {
            setBarSize(35)
            setChartWidth(730)
            setBarRadius(23)
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        }, [selectedPeriod]);
      
    
    
    const onSelect =  (selectedPeriod) => {
        setSelectedPeriod(selectedPeriod);
    }

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 col-span-5 lg:col-span-3 flex flex-col items-center overflow-auto">
        <div className="w-full flex justify-between items-center  mb-10">
            <h3 className="font-bold text-lg text-[#26282C] dark:text-white">Sales Trend</h3>
            <div className="flex gap-3 items-center">
                <h5 className="font-medium text-sm text-[#3A3F51] dark:text-white/95">Sort by:</h5>
                <select onChange={(e) => onSelect(e.target.value)} className="bg-transparent h-9 px-3 cursor-pointer border border-gray/50 dark:border-white/35 rounded-3xl text-[12px] text-[#3A3F51] dark:text-white/95 focus:border-gray/50
                ">
                    <option value="weekly" className="text-[14px] text-[#3A3F51] hover:bg-[#34CAA5] hover:text-white cursor-pointer">Weekly</option>
                    <option value="monthly" className="text-[14px] text-[#3A3F51]">Monthly</option>
                    <option value="yearly" className="text-[14px] text-[#3A3F51]">Yearly</option>
                </select>
            </div>
        </div>
        {isLoading && (
            <div className="w-full h-[300px] px-2 lg:h-full flex items-end gap-[4%] justify-center border border-gray-300 dark:border-white/35 border-dashed">
                <div className="h-[55%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[35%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[45%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[75%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[47%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[90%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[40%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[60%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[20%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[70%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
                <div className="h-[45%] w-8 animate-pulse rounded-t-2xl bg-gray-200 dark:bg-slate-600"></div>
            </div>
        )}
        {!isLoading && (
            <>
        <div className="w-full h-full flex flex-col items-center justify-center overflow-x-visible lg:overflow-hidden">
            {selectedPeriod === 'weekly' && <CustomBarChart data={weeklyData} barsize={barSize} ticks={[0, 500, 1000, 2000, 3000, 4000, 5000]}  selectedPeriod='day' width={chartWidth} radius={barRadius}/>}
            {selectedPeriod === 'monthly' && <CustomBarChart data={monthlyData} barsize={barSize} ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000]} selectedPeriod='month' width={chartWidth}  radius={barRadius}/>}
            {selectedPeriod === 'yearly' && <CustomBarChart data={yearlyData} barsize={barSize} ticks={[0, 25000, 50000, 100000, 15000, 200000, 250000]} selectedPeriod='year' width={chartWidth} radius={barRadius} />}
        </div>
        </>
        )}
    </div>
  )
}

export default ChartCard