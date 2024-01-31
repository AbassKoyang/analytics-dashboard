import { useEffect, useState } from "react";
import { CalendarIcon, NotificationIcon, SearchIcon } from "../assets/icons"

const Header = () => {
  const [date, setDate] = useState('');
  const getDate = () => {
    let date = new Date();
    return `${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()},  ${date.getFullYear()}`;
  };

  useEffect(() => {
    setDate(getDate())
  }, [])
  
  return (
    <header className="w-full flex items-center justify-center py-4 xl:py-[18px] bg-[#FAFAFA]">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-4">
        <h1 className="text-[20px] leading-7 font-semibold">Dashboard</h1>
        <div className="flex items-center gap-7">
          <div className="flex gap-5 items-center">
            <form className='w-[300px] xl:w-[350px] flex items-center justify-between px-3 py-2 rounded-3xl bg-[#FFFFFF] border border-[#A3A3A3]'>
              <SearchIcon className={`mr-2`} />
              <input type="search" placeholder="Search..." className='w-full bg-transparent h-full py-0.5 outline-0 border-0 text-[#A3A3A3] text-[16px]'/>
            </form>
            <div className="flex items-center gap-3">
              <CalendarIcon />
              <p className="font-medium text-[#26282C] text-sm">{date}</p>
            </div>
          </div>

          <div className="flex">
            <button className="p-2 bg-transparent border-[0.77px] border-[#DADDDD] rounded-full">
              <NotificationIcon className='size-4 xl:size-[18px]'/>
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header