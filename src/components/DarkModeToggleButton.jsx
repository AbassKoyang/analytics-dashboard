import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../../src/assets/icons";

const DarkModeToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
      localStorage.theme = theme;
      if (theme === 'dark') {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
  }, [theme]);

  const setDark = () => {
      setTheme('dark');
  };
  const setLight = () => {
      setTheme('light');
  };

  return (
    <div role='radiogroup' className="flex flex-col gap-2 rounded-full p-1.5 bg-white dark:bg-black transition-all duration-200 ease-in-out">
        <button aria-checked={`${theme === 'dark'? 'true' : 'false'}`} aria-label='Switch to dark theme' role='radio' onClick={setDark} className={`group rounded-full p-1 ${theme === 'dark'? 'bg-[#34CAA5] dark:bg-[#34CAA5]' : ''} transition-all duration-200 ease-in-out`}>
        <MoonIcon className={`w-5 h-5 ${theme === 'dark'? 'fill-white dark:fill-white' : 'fill-[#B2ABAB] dark:fill-white/50 group-hover:fill-[#949191] group-hover:dark:fill-[#dad5d5]'} transition-all duration-200 ease-in-out`} />
        </button>
        <button aria-checked={`${theme === 'light'? 'true' : 'false'}`} aria-label='Switch to light theme' role='radio' onClick={setLight} className={`group rounded-full p-1 ${theme === 'light'? 'bg-[#34CAA5] dark:bg-[#34CAA5]' : ''} transition-all duration-200 ease-in-out`}>
        <SunIcon className={`w-5 h-5 ${theme === 'light'? 'fill-white dark:fill-white' : 'fill-[#B2ABAB] dark:fill-white/50 group-hover:fill-[#949191] group-hover:dark:fill-[#dad5d5]'} transition-all duration-200 ease-in-out`} />
        </button>
    </div>
  )
}

export default DarkModeToggleButton