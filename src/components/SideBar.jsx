import { Link } from "react-router-dom"
import { ChartIcon, DiscountIcon, HomeIcon, InfoIcon, LogoIcon, PageIdentifierIcon, ProfileIcon, TrendsIcon } from "../assets/icons"

const SideBar = () => {
  return (
    <aside className="py-5 flex flex-col items-center gap-2.5 bg-[#F7F8FA] border-r border-r-[#EBECF2] h-full">
      <Link to='/' aria-label="Logo(Link to home)" className="flex items-center justify-center">
        <LogoIcon />
      </Link>

      <div className="flex flex-col items-center justify-center gap-1">
        <Link to='/' aria-label="Link to home page" className="flex items-center justify-between sidebar-link">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <HomeIcon />
          </button>
          <PageIdentifierIcon />
        </Link>

        <Link to='trends' aria-label="Link to trends" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <TrendsIcon />
          </button>
          <PageIdentifierIcon />
        </Link>

        <Link to='/profile' aria-label="Link to profile page" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <ProfileIcon />
          </button>
          <PageIdentifierIcon />
        </Link>
        <Link to='/chart' aria-label="Link to chart page" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
          <ChartIcon />
          </button>
          <PageIdentifierIcon />
        </Link>

        <Link to='/discount' aria-label="Link to discount page" className="flex items-center justify-between">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <DiscountIcon />
          </button>
          <PageIdentifierIcon />
        </Link>

        <Link to='/info' aria-label="Link to info page" className="flex items-center justify-between group">
          <button className="size-10 flex items-center justify-center mx-2.5">
            <InfoIcon />
          </button>
          <PageIdentifierIcon />
        </Link>
      </div>
    </aside>
  )
}

export default SideBar