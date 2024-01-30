import { Link, useLocation } from "react-router-dom"
import { ChartIcon, DiscountIcon, HomeIcon, InfoIcon, LogoIcon, PageIdentifierIcon, ProfileIcon, TrendsIcon } from "../assets/icons"

const SideBar = () => {
  const location = useLocation();

  return (
    <aside className="py-5 flex flex-col items-center gap-5 bg-[#F7F8FA] border-r border-r-[#EBECF2] h-full">
      <Link to='/' aria-label="Logo(Link to home)" className="flex items-center justify-center">
        <LogoIcon />
      </Link>

      <div className="flex flex-col items-center justify-center gap-1">
        <Link to='/' aria-label="Link to home page" className="flex items-center justify-between group transition-all duration-300 ease-in-out">
          <button className="size-10 flex items-center justify-center mx-2.5" >
            <HomeIcon fill={location.pathname === '/' ? '#0D062D' : '#B2ABAB'} />
          </button>
          <PageIdentifierIcon className={ `${location.pathname === '/' ? 'visible' : 'invisible'} group-hover:visible`} />
        </Link>

        <Link to='trends' aria-label="Link to trends" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <TrendsIcon />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/trends' ? 'block' : 'hidden'} />
        </Link>

        <Link to='profile' aria-label="Link to profile page" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <ProfileIcon />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/profile' ? 'block' : 'hidden'} />
        </Link>
        <Link to='chart' aria-label="Link to chart page" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
          <ChartIcon />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/chart' ? 'block' : 'hidden'} />
        </Link>

        <Link to='discount' aria-label="Link to discount page" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <DiscountIcon />
          </button>
          <PageIdentifierIcon className={ location.pathname === '/discount' ? 'block' : 'hidden'} />
        </Link>

        <Link to='info' aria-label="Link to info page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <InfoIcon />
          </button>
          <PageIdentifierIcon  className={ location.pathname === '/info' ? 'block' : 'hidden'}/>
        </Link>
      </div>
    </aside>
  )
}

export default SideBar