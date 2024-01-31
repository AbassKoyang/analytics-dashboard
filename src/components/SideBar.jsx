import { Link, useLocation } from "react-router-dom"
import { ArrowRightIcon, ChartIcon, DiscountIcon, HomeIcon, InfoIcon, LogOutIcon, LogoIcon, PageIdentifierIcon, ProfileIcon, SettingsIcon, TrendsIcon } from "../assets/icons"
import DarkModeToggleButton from "./DarkModeToggleButton";

const SideBar = () => {
  const location = useLocation();


  return (
    <aside className="fixed top-0 left-0 py-5 flex flex-col items-center justify-between bg-[#F7F8FA] dark:bg-[#1b1b1b] border-r border-r-[#EBECF2] dark:border-r-[#A3A3A3] h-full">
      <div className="flex flex-col gap-5 xl:gap-8 items-center">
      <Link to='/' aria-label="Logo(Link to home)" className="flex items-center justify-center">
        <LogoIcon className={'fill-[#34CAA5] dark:fill-[#34CAA5]'} />
      </Link>

      <nav className="flex flex-col items-center justify-center gap-1">
        <Link to='/' aria-label="Link to home page" className="flex items-center justify-between group">
          <button className="size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5" >
            <HomeIcon className={`${location.pathname === '/' ? 'fill-[#0D062D] dark:fill-white' : 'fill-[#B2ABAB]'} group-hover:fill-[#0D062D] group-hover:dark:fill-white transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ `${location.pathname === '/' ? 'visible' : 'invisible'}`} />
        </Link>

        <Link to='trends' aria-label="Link to trends" className="flex items-center justify-between group">
          <button className="size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5">
            <TrendsIcon className={`${location.pathname === '/trends' ? 'stroke-[#0D062D] dark:stroke-white' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] group-hover:dark:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/trends' ? 'visible' : 'invisible'} />
        </Link>

        <Link to='profile' aria-label="Link to profile page" className="flex items-center justify-between group">
          <button className="size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5">
            <ProfileIcon className={`${location.pathname === '/profile' ? 'stroke-[#0D062D] dark:stroke-white' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] group-hover:dark:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/profile' ? 'visible' : 'invisible'} />
        </Link>
        <Link to='chart' aria-label="Link to chart page" className="flex items-center justify-between group">
          <button className="size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5">
          <ChartIcon className={`${location.pathname === '/chart' ? 'stroke-[#0D062D] dark:stroke-white' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] group-hover:dark:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/chart' ? 'visible' : 'invisible'} />
        </Link>

        <Link to='discount' aria-label="Link to discount page" className="flex items-center justify-between group">
          <button className="size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5">
            <DiscountIcon className={`${location.pathname === '/discount' ? 'stroke-[#0D062D] dark:stroke-white' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] group-hover:dark:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/discount' ? 'visible' : 'invisible'} />
        </Link>

        <Link to='info' aria-label="Link to info page" className="flex items-center justify-between group">
          <button className="size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5">
            <InfoIcon className={`${location.pathname === '/info' ? 'stroke-[#0D062D] dark:stroke-white' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] group-hover:dark:stroke-white transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon  className={ location.pathname === '/info' ? 'visible' : 'invisible'}/>
        </Link>
      </nav>

      <DarkModeToggleButton />
      </div>

      <div className="flex flex-col gap-1 items-center transition-all duration-200 ease-in-out">
        <button aria-label="Arrow right button" className="group size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5 transition-all duration-200 ease-in-out">
          <ArrowRightIcon className='stroke-[#B2ABAB] group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-200 ease-in-out' />
        </button>
        <button aria-label="Settings button, click to open settings" className="group size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5 transition-all duration-200 ease-in-out">
          <SettingsIcon className='stroke-[#B2ABAB] group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-200 ease-in-out' />
        </button>
        <button aria-label="Logout button, click to logout" className="group size-9 xl:size-10 flex items-center justify-center mx-2 xl:mx-2.5 transition-all duration-200 ease-in-out">
          <LogOutIcon className='stroke-[#B2ABAB] group-hover:stroke-black group-hover:dark:stroke-white transition-all duration-200 ease-in-out' />
        </button>
      </div>
    </aside>
  )
}

export default SideBar;