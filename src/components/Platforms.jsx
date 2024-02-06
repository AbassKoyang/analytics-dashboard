import React from 'react'

const Platforms = ({name, amount, percentage, progressPercentage, progressBarColor}) => {
  return (
    <div className="w-full py-2">
        <h1 className='font-bold text-[#22242C] dark:text-white'>{name}</h1>
        <div className="w-full h-3 rounded-xl overflow-hidden bg-[#F5F5F5] dark:bg-[#1b1b1b] my-2">
            <div className={`${progressBarColor} ${progressPercentage} h-full rounded-xl`}></div>
        </div>
        <div className="flex items-center justify-between">
            <h2 className='text-lg text-[#525252] dark:text-white/85'>{amount}</h2>
            <h2 className='text-lg text-[#525252] dark:text-white/85'>{percentage}</h2>
        </div>
    </div>
  )
}

export default Platforms