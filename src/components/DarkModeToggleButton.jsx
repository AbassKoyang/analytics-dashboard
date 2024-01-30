import { useEffect, useState } from "react";
import { SunIcon } from "../assets/icons";

const DarkModeToggleButton = () => {
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
      localStorageState.theme = 'light';
      setTheme('light');
      setActiveTheme('light');
    }
  
    //set active theme to dark and also update localstorage
    const setDark = () => {
      localStorageState.setItem('theme', 'dark')
      localStorageState.theme = 'dark';
      setTheme('dark');
      setActiveTheme('dark');
    };

  return (
    <div role='radiogroup' className="flex gap-0 rounded-full p-2 bg-white">
        <button aria-checked={`${activeTheme === 'dark'? 'true' : 'false'}`} aria-label='Switch to dark theme' role='radio' onClick={setDark} className={`group rounded-full p-2  ${activeTheme === 'dark'? 'bg-[#E6E6E6] dark:bg-[#292929]' : ''}`}>
        <RiMoonLine className={`w-3 h-3 group-hover:text-black group-hover:dark:text-white ${activeTheme === 'dark'? 'text-black dark:text-white' : 'text-black/50 dark:text-white/50'}`} />
        </button>
        <button aria-checked={`${activeTheme === 'light'? 'true' : 'false'}`} aria-label='Switch to light theme' role='radio' onClick={setLight} className={`group rounded-full p-2 ${activeTheme === 'light'? 'bg-[#34CAA5] dark:bg-[#34CAA5]' : ''}`}>
        <SunIcon className={`w-3 h-3 group-hover:fill-white group-hover:dark:fill-white ${activeTheme === 'light'? 'fill-black dark:fill-white' : 'fill-[#B2ABAB] dark:fill-white/50'}`} />
        </button>
    </div>
  )
}

export default DarkModeToggleButton