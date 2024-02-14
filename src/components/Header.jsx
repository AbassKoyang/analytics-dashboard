import { useEffect, useRef, useState } from "react";
import { CalendarIcon, ChevronDownIcon, CloseIcon, LogoIcon, NotificationIcon, SearchIcon } from "../assets/icons";
import image from '../../src/assets/profile-image.png'
import { Link } from "react-router-dom";
import DarkModeToggleButton from "./DarkModeToggleButton";
import { toast } from "react-toastify";

const Header = () => {
  const [date, setDate] = useState('');
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isProfilePopUpOpen, setIsProfilePopUpOpen] = useState(false);
  const containerRef = useRef(null);
  const profilePopUpRef = useRef(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isLogOutPopUp, setIsLogOutPopUp] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY + 10;
       setIsScrolledUp(currentScrollPosition > prevScrollPos);
       setPrevScrollPos(currentScrollPosition);
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  
  const handleDocumentClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsPopUpOpen(false);
    }
    if (profilePopUpRef.current && !profilePopUpRef.current.contains(event.target)) {
      setIsProfilePopUpOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
  
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const getDate = () => {
    let date = new Date();
    return `${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()},  ${date.getFullYear()}`;
  };

  useEffect(() => {
    setDate(getDate())
  }, [])

  const handleLogOutButtonClick = ()  => {
    setIsLoggingOut(true)
    setTimeout(()=> {
      setIsLogOutPopUp(false)
      setIsLoggingOut(false)
      toast.success('Logged out successfully!', {
        position: 'bottom-right',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        draggable: true,
      })
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 2000)
  }
  
  return (
    <header className={`w-full flex items-center justify-center py-[18px] xl:py-[20px] p-0 lg:pl-[53.9px] xl:pl-[63px] bg-[#FAFAFA] dark:bg-[#1b1b1b] border-b border-b-[#E5EAEF] dark:border-b-white/35 fixed top-0 left-0 ${!isScrolledUp ? 'visible' : 'invisible'} z-40`}>
      <div className="w-full max-w-[1400px] flex justify-between items-center px-3 small:px-2 md:px-6 2xl:px-0">
        <Link to='/' aria-label="Logo(Link to home)" className="flex gap-2 items-center justify-center">
          <Link className="flex lg:hidden items-center justify-center">
            <LogoIcon className={'fill-[#34CAA5] dark:fill-[#34CAA5]'} />
          </Link>
          <h1 className="hidden md:block mini:hidden text-[20px] md:leading-7 font-bold text-black dark:text-white">Dashboard</h1>
        </Link>
        <div className="flex items-center gap-3 md:gap-7">
          <div className="flex gap-5 items-center">
            <form className='w-[200px] small:w-[180px] md:w-[300px] xl:w-[350px] flex items-center justify-between px-2 py-1 md:px-3 md:py-2 rounded-3xl bg-[#FFFFFF] dark:bg-black border dark:border-[2px] border-[#A3A3A3] focus-within:border-[#cac8c8]'>
              <SearchIcon className={`mr-2`} />
              <input type="search" placeholder="Search..." className='w-full bg-transparent h-full py-0.5 outline-0 border-0 text-[#A3A3A3] dark:text-[#78828A] text-sm xl:text-[16px]'/>
            </form>
            <div className="hidden md:flex items-center gap-3">
              <CalendarIcon className='stroke-[#26282C] dark:stroke-white/90' fill='fill-[#26282C] dark:fill-white/90' />
              <p className="font-medium text-[#26282C] dark:text-white/90 text-sm">{date}</p>
            </div>
          </div>

          <div className="flex gap-2 md:gap-5 items-center">
            <button ref={containerRef} onClick={() => setIsPopUpOpen(true)} aria-label="Notification button, click to open notification pop-up." aria-placeholder="Notifications" aria-haspopup={true} aria-expanded={isPopUpOpen} className="p-2 bg-transparent border-[0.77px] border-[#DADDDD] dark:border-white/35 rounded-full relative">
              <NotificationIcon className='size-4 xl:size-[18px] fill-[#0D062D] dark:fill-white'/>
              <div className={`${isPopUpOpen ? 'flex' : 'hidden'} flex-col w-[250px] flex-wrap absolute right-0 -bottom-[120px] flex bg-white dark:bg-black p-3 rounded-lg drop-shadow-md dark:border dark:border-white/35`}>
                <div className={`flex items-center w-full justify-between mb-3`}>
                  <h5 className="font-medium text-black dark:text-white/95">Notifications</h5>
                  <span onClick={(e)=> {e.stopPropagation(),setIsPopUpOpen(false)}} aria-label="click to close notification pop-up." className="bg-[#FAFAFA] rounded-md border hover:border-gray-400">
                    <CloseIcon className='size-5' />
                  </span>
                </div>
                <h3 className="font-semibold text-black dark:text-white text-[14px]">It is Quiet Here.</h3>
                <p className="font-normal text-black dark:text-white/75 text-[12px]">You do not have any notification yet.</p>
              </div>
            </button>

            <button onClick={() => setIsProfilePopUpOpen(!isProfilePopUpOpen)} ref={profilePopUpRef} aria-label="Profile button, click to open profile drop-down." aria-haspopup='true' aria-expanded={isProfilePopUpOpen} className="p-1 border border-[#DADDDD] dark:border-white/35 rounded-3xl xl:rounded-[40px] flex gap-3 items-center relative">
              <img src={image} alt="profile image" className="size-8 xl:size-12"/>
              <div className="hidden lg:flex flex-col">
                <h5 className="font-normal text-sm xl:text-[16px] text-[#26282C] dark:text-white/95">Justin Bergson</h5>
                <small className="text-[#AFAFBF] text-[10px] xl:text-[12px] dark:text-white/60">Justin@gmail.com</small>
              </div>
              <ChevronDownIcon className={`hidden lg:block fill-[#0D062D] dark:fill-white ${isProfilePopUpOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200 ease-in-out`} />
              <div onClick={(event) => (event.stopPropagation())} className={`${isProfilePopUpOpen ? 'flex' : 'hidden'} flex-col lg:w-full absolute -bottom-[200px] lg:-bottom-[120px] right-0 lg:left-0 rounded-xl flex-wrap bg-white dark:bg-black p-4 pb-2 text-left drop-shadow-md z-30 dark:border dark:border-white/35`}>
                <div className="flex w-full justify-center items-center lg:hidden rotate-90">
                  <DarkModeToggleButton />
                </div>
                <h5 className="font-medium text-[#26282C] dark:text-white/95 text-[12px] md:text-sm">Justin Bergson</h5>
                <h5 className="font-medium text-[#26282C] dark:text-white/95 text-[12px] md:text-sm">justin@gmail.com</h5>
                <button onClick={() => {setIsLogOutPopUp(true), setIsProfilePopUpOpen(false)}} className="w-full border-t border-t-[#DADDDD] p-2 text-sm text-red-600 mt-3">
                  Logout
                </button>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isLogOutPopUp ? 'flex' : 'hidden'} flex-col items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded-xl bg-white dark:bg-black drop-shadow-md z-30 dark:border dark:border-white/35`} onClick={(event) => (event.stopPropagation())}>
        <h1 className="text-lg font-medium text-black dark:text-white max-w-[200px] text-center">Are you sure you want to log out?</h1>
        <div className="w-full flex items-center justify-center gap-3 mt-3">
            <button onClick={handleLogOutButtonClick} className="bg-[#34CAA5] text-sm text-white font-semibold px-3 py-2 rounded-xl disabled:opacity-85" disabled={isLoggingOut}>{isLoggingOut ? 'Logging you out...' : 'Log out'}</button>
            <button onClick={() => setIsLogOutPopUp(false)} className="bg-gray-200 text-black text-sm font-medium px-3 py-2 rounded-xl disabled:opacity-85">Cancel</button>
        </div>
      </div>
    </header>
  )
}

export default Header