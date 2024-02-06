import { useState } from "react";
import Platforms from "./Platforms";
import { platforms } from "../assets/constants";

const TopPlatformCard = () => {
    const [viewAll, setViewAll] = useState(false);
  return (
    <section className="col-span-5 lg:col-span-2 p-4 rounded-xl bg-white dark:bg-black border border-[#EDF2F7] dark:border-white/35 self-start transition-all duration-300 ease-in-out">
        <div className="w-full flex justify-between items-center">
            <h3 className='font-bold text-lg text-[#26282C] dark:text-white'>Top Platforms</h3>
            <button aria-haspopup={true} aria-expanded={viewAll} aria-label="Click to show all orders"  onClick={() => setViewAll(!viewAll)} className="p-0 bg-transparent border-0 outline-0 text-[16px] text-[#34CAA5] font-medium">See {viewAll ? 'Less' : 'All'}</button>
        </div>
        <div className="w-full transition-all duration-300 ease-in-out">
                {viewAll && (
                   platforms.map((platform) => (
                    <Platforms key={platform.id} name={platform.name} amount={platform.amount} progressPercentage={platform.progressPercentage} progressBarColor={platform.progressBrColor} percentage={platform.percentage}/>
                ))
                )}
                {viewAll === false && (
                    platforms.slice(0,4).map((platform) => (
                        <Platforms key={platform.id} name={platform.name} amount={platform.amount} progressPercentage={platform.progressPercentage} progressBarColor={platform.progressBrColor} percentage={platform.percentage}/>
                    ))
                )}
            </div>
    </section>
  )
}

export default TopPlatformCard