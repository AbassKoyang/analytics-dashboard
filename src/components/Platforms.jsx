import React from 'react'

const Platforms = ({name, amount, percentage, progressPercentage, progressBarColor}) => {
  return (
    <div className="w-full py-2">
        <h1 className='font-bold text-[#22242C]'>{name}</h1>
        <div className="w-full h-3 rounded-xl overflow-hidden bg-[#F5F5F5] my-2">
            <div className={`${progressBarColor} ${progressPercentage} h-full rounded-xl`}></div>
        </div>
        <div className="flex items-center justify-between">
            <h2 className='text-lg text-[#525252]'>{amount}</h2>
            <h2 className='text-lg text-[#525252]'>{percentage}</h2>
        </div>
    </div>
  )
}

export default Platforms