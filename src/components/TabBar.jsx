import { Link, useLocation } from "react-router-dom"
import { ChartIcon, DiscountIcon, HomeIcon, InfoIcon, ProfileIcon, TrendsIcon } from "../assets/icons"
const TabBar = () => {
    const location = useLocation()
  return (
      <nav className="w-full flex lg:hidden fixed bottom-0 left-0 items-center justify-center gap-1 py-4 border-t border-t-[#EBECF2] dark:border-t-[#A3A3A3] bg-[#F7F8FA] dark:bg-[#1b1b1b]">
        <Link to='/' aria-label="Link to home page" className="flex flex-col items-center justify-between group">
          <button className={`size-9 xl:size-10 flex items-center justify-center rounded-sm hover:p-2 mx-2 xl:mx-2.5 ${location.pathname === '/' ? 'bg-[#0D062D] dark:bg-[#34CAA5] p-2' : 'bg-transparent'} group-hover:bg-[#0D062D] group-hover:dark:bg-[#34CAA5] transition-all duration-200 ease-in-out`} >
            <HomeIcon className={`${location.pathname === '/' ? 'dark:fill-white fill-white' : 'fill-[#B2ABAB]'} group-hover:dark:fill-white group-hover:fill-white transition-all duration-200 ease-in-out`} />
          </button>
        </Link>

        <Link to='trends' aria-label="Link to trends" className="flex flex-col items-center justify-between group">
          <button className={`size-9 xl:size-10 flex items-center justify-center rounded-sm hover:p-2 mx-2 xl:mx-2.5 ${location.pathname === '/trends' ? 'bg-[#0D062D] dark:bg-[#34CAA5] p-2' : 'bg-transparent'} group-hover:bg-[#0D062D] group-hover:dark:bg-[#34CAA5] transition-all duration-200 ease-in-out`}>
            <TrendsIcon className={`${location.pathname === '/trends' ? 'dark:stroke-white stroke-white' : 'stroke-[#B2ABAB]'} group-hover:dark:stroke-white group-hover:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
        </Link>

        <Link to='profile' aria-label="Link to profile page" className="flex flex-col items-center justify-between group">
          <button className={`size-9 xl:size-10 flex items-center justify-center rounded-sm hover:p-2 mx-2 xl:mx-2.5 ${location.pathname === '/profile' ? 'bg-[#0D062D] dark:bg-[#34CAA5] p-2' : 'bg-transparent'} group-hover:bg-[#0D062D] group-hover:dark:bg-[#34CAA5] transition-all duration-200 ease-in-out`}>
            <ProfileIcon className={`${location.pathname === '/profile' ? 'dark:stroke-white stroke-white' : 'stroke-[#B2ABAB]'} group-hover:dark:stroke-white group-hover:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
        </Link>
        <Link to='chart' aria-label="Link to chart page" className="flex flex-col items-center justify-between group">
          <button className={`size-9 xl:size-10 flex items-center justify-center rounded-sm hover:p-2 mx-2 xl:mx-2.5 ${location.pathname === '/chart' ? 'bg-[#0D062D] dark:bg-[#34CAA5] p-2' : 'bg-transparent'} group-hover:bg-[#0D062D] group-hover:dark:bg-[#34CAA5] transition-all duration-200 ease-in-out`}>
          <ChartIcon className={`${location.pathname === '/chart' ? 'dark:stroke-white stroke-white' : 'stroke-[#B2ABAB]'} group-hover:dark:stroke-white group-hover:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
        </Link>

        <Link to='discount' aria-label="Link to discount page" className="flex flex-col items-center justify-between group">
          <button className={`size-9 xl:size-10 flex items-center justify-center rounded-sm hover:p-2 mx-2 xl:mx-2.5 ${location.pathname === '/discount' ? 'bg-[#0D062D] dark:bg-[#34CAA5] p-2' : 'bg-transparent'} group-hover:bg-[#0D062D] group-hover:dark:bg-[#34CAA5] transition-all duration-200 ease-in-out`}>
            <DiscountIcon className={`${location.pathname === '/discount' ? 'dark:stroke-white stroke-white' : 'stroke-[#B2ABAB]'} group-hover:dark:stroke-white group-hover:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
        </Link>

        <Link to='info' aria-label="Link to info page" className="flex flex-col items-center justify-between group">
          <button className={`size-9 xl:size-10 flex items-center justify-center rounded-sm hover:p-2 mx-2 xl:mx-2.5 ${location.pathname === '/info' ? 'bg-[#0D062D] dark:bg-[#34CAA5] p-2' : 'bg-transparent'} group-hover:bg-[#0D062D] group-hover:dark:bg-[#34CAA5] transition-all duration-200 ease-in-out`}>
            <InfoIcon className={`${location.pathname === '/info' ? 'dark:stroke-white stroke-white' : 'stroke-[#B2ABAB]'} group-hover:dark:stroke-white group-hover:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
        </Link>
      </nav>
  )
}

export default TabBar