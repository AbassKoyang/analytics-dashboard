import { Link } from "react-router-dom"
import { ChartIcon, DiscountIcon, HomeIcon, InfoIcon, LogoIcon, PageIdentifierIcon, ProfileIcon, TrendsIcon } from "../assets/icons"

const SideBar = () => {
  return (
    <aside className="py-5 flex flex-col items-center gap-2.5 bg-[#F7F8FA] border-r border-r-[#EBECF2] h-full">
      <Link to='/' className="flex items-center justify-center">
      <LogoIcon />
      </Link>

      <div className="flex flex-col items-center justify-center gap-1">
        <Link to='/' className="flex items-center justify-between sidebar-link">
        <button className="size-10 flex items-center justify-center mx-2.5">
          <HomeIcon />
        </button>
        <PageIdentifierIcon />
        </Link>

        <Link to='trends' className="flex items-center justify-between">
        <button className="size-10 flex items-center justify-center mx-2.5">
          <TrendsIcon />
        </button>
        <PageIdentifierIcon />
        </Link>

        <Link to='/' className="flex items-center justify-between">
        <button className="size-10 flex items-center justify-center mx-2.5">
          <ProfileIcon />
        </button>
        <PageIdentifierIcon />
        </Link>
        <Link to='/' className="flex items-center justify-between">
        <button className="size-10 flex items-center justify-center mx-2.5">
        <ChartIcon />
        </button>
        <PageIdentifierIcon />
        </Link>

        <Link to='/' className="flex items-center justify-between">
        <button className="size-10 flex items-center justify-center mx-2.5">
          <DiscountIcon />
        </button>
        <PageIdentifierIcon />
        </Link>

        <Link to='/' className="flex items-center justify-between group">
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