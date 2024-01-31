import { useEffect, useState } from "react";
import { CalendarIcon, CloseIcon, NotificationIcon, SearchIcon } from "../assets/icons"

const Header = () => {
  const [date, setDate] = useState('');
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const getDate = () => {
    let date = new Date();
    return `${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()},  ${date.getFullYear()}`;
  };

  useEffect(() => {
    setDate(getDate())
  }, [])
  
  return (
    <header className="w-full flex items-center justify-center py-4 xl:py-[18px] bg-[#FAFAFA] dark:bg-[#1b1b1b]">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-4">
        <h1 className="text-[20px] leading-7 font-semibold text-black dark:text-white">Dashboard</h1>
        <div className="flex items-center gap-7">
          <div className="flex gap-5 items-center">
            <form className='w-[300px] xl:w-[350px] flex items-center justify-between px-3 py-2 rounded-3xl bg-[#FFFFFF] dark:bg-black border dark:border-[2px] border-[#A3A3A3]'>
              <SearchIcon className={`mr-2`} />
              <input type="search" placeholder="Search..." className='w-full bg-transparent h-full py-0.5 outline-0 border-0 text-[#A3A3A3] dark:text-[#78828A] text-[16px]'/>
            </form>
            <div className="flex items-center gap-3">
              <CalendarIcon className='stroke-[#26282C] dark:stroke-white/90' fill='fill-[#26282C] dark:fill-white/90' />
              <p className="font-medium text-[#26282C] dark:text-white/90 text-sm">{date}</p>
            </div>
          </div>

          <div className="flex">
            <button onClick={() => setIsPopUpOpen(true)} aria-label="Notification button, click to open notification pop-up." aria-placeholder="Notifications" aria-haspopup={true} className="p-2 bg-transparent border-[0.77px] border-[#DADDDD] rounded-full relative">
              <NotificationIcon className='size-4 xl:size-[18px] fill-[#0D062D] dark:fill-white'/>
              <div aria-expanded={isPopUpOpen} className={`${isPopUpOpen ? 'flex' : 'hidden'} flex-col w-[250px] absolute right-0 -bottom-[20px] flex bg-white dark:bg-black p-3 rounded-lg`}>
                <div className={`flex items-center w-full justify-between`}>
                  <h5 className="font-medium text-black dark:text-white">Notifications</h5>
                  <span onClick={(e)=> {e.stopPropagation(),setIsPopUpOpen(false)}} className="bg-[#FAFAFA] rounded-md border hover:border-gray-400">
                    <CloseIcon className='size-5' />
                  </span>
                </div>
              </div>
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header