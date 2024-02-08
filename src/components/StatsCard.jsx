import { useEffect, useState } from "react";
import { DiscountIcon } from "../../src/assets/icons"

const StatsCard = ({icon, graph, heading, value, percentage, trendIcon, text, textColor, backGroundColor}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        }, []);
      
  return (
    <div className="p-4 rounded-xl bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 col-span-2 md:col-span-1 self-start">

        {isLoading && (
        <>
        <div className="flex items-center justify-between" aria-label='Skeleton loader'>
        <span className="size-10 bg-gray-200 dark:bg-slate-600 rounded-[50%]" aria-label='Skeleton loader'></span>
        <div className="w-28 lg:w-24  h-7 rounded-md bg-gray-200 dark:bg-slate-600" aria-label='Skeleton loader'></div>
        </div>
        <div className="w-24 lg:w-20  h-5 rounded-xl bg-gray-200 dark:bg-slate-600 my-2.5" aria-label='Skeleton loader'></div>
        <div className="w-14 lg:w-12  h-7 rounded-xl bg-gray-200 dark:bg-slate-600" aria-label='Skeleton loader'></div>
        <div className="flex items-center justify-between mt-2.5">
        <div className='w-24 lg:w-20 h-5 rounded-xl bg-gray-200 dark:bg-slate-600' aria-label='Skeleton loader'></div>
        <div className="w-32 lg:w-28  h-4 rounded-xl bg-gray-200 dark:bg-slate-600" aria-label='Skeleton loader'></div>
        </div>
        </>
    )}
    {!isLoading && (
        <>
        <div className="flex items-center justify-between">
        <span className="border border-[#E6E6E6] dark:border-white/35 rounded-full p-2">
            {icon}
        </span>
        <img src={graph} alt="Graph" />
        </div>
        <h2 className="text-[#898989] dark:text-white/85 font-medium text-[16px] my-1.5">{heading}</h2>
        <h2 className="text-[#3A3F51] dark:text-white font-semibold text-[22px]">{value}</h2>
        <div className="flex items-center justify-between mt-1.5">
        <span className={`px-2 py-1 rounded-full text-[10px] font-medium flex items-center gap-1 ${backGroundColor} ${textColor}`}> {trendIcon}{percentage}</span>
        <p className="text-[#606060] dark:text-white/85 text-[12px]">{text}</p>
        </div>
        </>
    )}
    </div>
  )
}

export default StatsCard