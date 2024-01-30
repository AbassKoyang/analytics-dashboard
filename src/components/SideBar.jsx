import { Link, useLocation } from "react-router-dom"
import { ChartIcon, DiscountIcon, HomeIcon, InfoIcon, LogoIcon, PageIdentifierIcon, ProfileIcon, TrendsIcon } from "../assets/icons"
import { useEffect, useState } from "react";

const SideBar = () => {
  const location = useLocation();
  const [localStorageState, setLocalStorageState] = useState({});
  const [theme, setTheme] = useState('dark');
  const [activeTheme, setActiveTheme] = useState('system');

  
// Get local storage theme,  if it is 'dark' add the dark class to the documentElement classList.
  useEffect(() => {
    setLocalStorageState(localStorage);
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
 
  }, [theme]);

  //On page mount  or update, check what the current active theme should be and apply it to the state.
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setActiveTheme('dark');
    } else if(localStorage.theme === 'light') {
      setActiveTheme('light');
    } else if (localStorage.theme === 'system') {
      setActiveTheme('system');
    }
  }, [activeTheme]);

  //set active theme to light and also update localstorage
  const setLight = () => {
    if(typeof window !== undefined){
    localStorageState.theme = 'light';
    }
    setTheme('light');
    setActiveTheme('light');
  }

  //set active theme to dark and also update localstorage
  const setDark = () => {
    if(typeof window !== undefined){
    localStorageState.setItem('theme', 'dark')
    localStorageState.theme = 'dark';
    }
    setTheme('dark');
    setActiveTheme('dark');
  };

  //set active theme to system and also update localstorage
  const setSystem = () => {
    if(typeof window !== undefined){
    localStorageState.removeItem('theme');
    }
    setTheme('system');
    setActiveTheme('system');
    console.log(localStorageState.font);
  }

  return (
    <aside className="py-5 flex flex-col items-center gap-5 bg-[#F7F8FA] border-r border-r-[#EBECF2] h-full">
      <Link to='/' aria-label="Logo(Link to home)" className="flex items-center justify-center">
        <LogoIcon />
      </Link>

      <div className="flex flex-col items-center justify-center gap-1">
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
      </div>
    </aside>
  )
}

export default SideBar