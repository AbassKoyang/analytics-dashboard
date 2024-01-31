import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../assets/icons";

const DarkModeToggleButton = () => {
    const [theme, setTheme] = useState('dark');
    const [activeTheme, setActiveTheme] = useState('system');
  
    
  // Get local storage theme,  if it is 'dark' add the dark class to the documentElement classList.
    useEffect(() => {
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
      } else {
        setActiveTheme('light');
        }
    }, [activeTheme]);
  
    //set active theme to light and also update localstorage
    const setLight = () => {
      localStorage.theme = 'light';
      setTheme('light');
      setActiveTheme('light');
    }
  
    //set active theme to dark and also update localstorage
    const setDark = () => {
      localStorage.setItem('theme', 'dark')
      localStorage.theme = 'dark';
      setTheme('dark');
      setActiveTheme('dark');
    };

  return (
    <div role='radiogroup' className="flex flex-col gap-2 rounded-full p-1.5 bg-white  transition-all duration-200 ease-in-out">
        <button aria-checked={`${activeTheme === 'dark'? 'true' : 'false'}`} aria-label='Switch to dark theme' role='radio' onClick={setDark} className={`group rounded-full p-1 ${activeTheme === 'dark'? 'bg-[#34CAA5] dark:bg-[#34CAA5]' : ''} transition-all duration-200 ease-in-out`}>
        <MoonIcon className={`w-5 h-5 ${activeTheme === 'dark'? 'fill-white dark:fill-white' : 'fill-[#B2ABAB] dark:fill-white/50 group-hover:fill-[#949191] group-hover:dark:fill-[#dad5d5]'} transition-all duration-200 ease-in-out`} />
        </button>
        <button aria-checked={`${activeTheme === 'light'? 'true' : 'false'}`} aria-label='Switch to light theme' role='radio' onClick={setLight} className={`group rounded-full p-1 ${activeTheme === 'light'? 'bg-[#34CAA5] dark:bg-[#34CAA5]' : ''} transition-all duration-200 ease-in-out`}>
        <SunIcon className={`w-5 h-5 ${activeTheme === 'light'? 'fill-white dark:fill-white' : 'fill-[#B2ABAB] dark:fill-white/50 group-hover:fill-[#949191] group-hover:dark:fill-[#dad5d5]'} transition-all duration-200 ease-in-out`} />
        </button>
    </div>
  )
}

export default DarkModeToggleButton