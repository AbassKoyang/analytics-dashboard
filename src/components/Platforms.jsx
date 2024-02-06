import { useEffect, useState } from 'react'

const Platforms = ({name, amount, percentage, progressPercentage, progressBarColor}) => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsPageLoading(false);
    }, 2000);
    }, []);

  return (
    <div className="w-full py-2">
        {isPageLoading && (
          <>
          <div className='w-20 lg:w-24  h-5 rounded-xl bg-gray-200 dark:bg-slate-600 animate-pulse'></div>
          <div className="w-full h-3 rounded-xl overflow-hidden bg-gray-200 dark:bg-slate-600 animate-pulse my-2">
              <div className={`bg-transparent ${progressPercentage} h-full rounded-xl`}></div>
          </div>
          <div className="flex items-center justify-between">
              <div className='w-20 lg:w-28  h-4 rounded-xl bg-gray-200 dark:bg-slate-600 animate-pulse'></div>
              <div className='w-16 lg:w-20  h-4 rounded-xl bg-gray-200 dark:bg-slate-600 animate-pulse'></div>
          </div>
          </>
        )}
        {!isPageLoading && (
          <>
          <h1 className='font-bold text-[#22242C] dark:text-white'>{name}</h1>
          <div className="w-full h-3 rounded-xl overflow-hidden bg-[#F5F5F5] dark:bg-[#1b1b1b] my-2">
              <div className={`${progressBarColor} ${progressPercentage} h-full rounded-xl`}></div>
          </div>
          <div className="flex items-center justify-between">
              <h2 className='text-lg text-[#525252] dark:text-white/85'>{amount}</h2>
              <h2 className='text-lg text-[#525252] dark:text-white/85'>{percentage}</h2>
          </div>
          </>
        )}
    </div>
  )
}

export default Platforms