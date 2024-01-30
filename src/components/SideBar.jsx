import { Link, useLocation } from "react-router-dom"
import { ChartIcon, DiscountIcon, HomeIcon, InfoIcon, LogoIcon, PageIdentifierIcon, ProfileIcon, TrendsIcon } from "../assets/icons"
import DarkModeToggleButton from "./DarkModeToggleButton";

const SideBar = () => {
  const location = useLocation();


  return (
    <aside className="py-5 flex flex-col items-center gap-5 bg-[#F7F8FA] border-r border-r-[#EBECF2] h-full">
      <Link to='/' aria-label="Logo(Link to home)" className="flex items-center justify-center">
        <LogoIcon />
      </Link>

      <nav className="flex flex-col items-center justify-center gap-1">
        <Link to='/' aria-label="Link to home page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5" >
            <HomeIcon className={`${location.pathname === '/' ? 'fill-[#0D062D]' : 'fill-[#B2ABAB]'} group-hover:fill-[#0D062D] transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ `${location.pathname === '/' ? 'visible' : 'invisible'}`} />
        </Link>

        <Link to='trends' aria-label="Link to trends" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <TrendsIcon className={`${location.pathname === '/trends' ? 'stroke-[#0D062D]' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/trends' ? 'visible' : 'invisible'} />
        </Link>

        <Link to='profile' aria-label="Link to profile page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <ProfileIcon className={`${location.pathname === '/profile' ? 'stroke-[#0D062D]' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/profile' ? 'visible' : 'invisible'} />
        </Link>
        <Link to='chart' aria-label="Link to chart page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
          <ChartIcon className={`${location.pathname === '/chart' ? 'stroke-[#0D062D]' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/chart' ? 'visible' : 'invisible'} />
        </Link>

        <Link to='discount' aria-label="Link to discount page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <DiscountIcon className={`${location.pathname === '/discount' ? 'stroke-[#0D062D]' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/discount' ? 'visible' : 'invisible'} />
        </Link>

        <Link to='info' aria-label="Link to info page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <InfoIcon className={`${location.pathname === '/info' ? 'stroke-[#0D062D]' : 'stroke-[#B2ABAB]'} group-hover:stroke-[#0D062D] transition-all duration-200 ease-in-out`} />
          </button>
          <PageIdentifierIcon  className={ location.pathname === '/info' ? 'visible' : 'invisible'}/>
        </Link>
      </nav>
      <DarkModeToggleButton />
    </aside>
  )
}

export default SideBar;