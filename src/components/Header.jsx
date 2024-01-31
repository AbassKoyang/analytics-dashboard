import { SearchIcon } from "../assets/icons"

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center py-4 xl:py-[18px] bg-[#FAFAFA]">
      <div className="w-full max-w-[1400px] flex justify-between items-center px-4">
        <h1 className="text-[20px] leading-7 font-semibold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <form className='w-[300px] xl:w-[350px] flex items-center justify-between px-3 py-2 rounded-3xl bg-[#FFFFFF] border border-[#A3A3A3]'>
              <SearchIcon className={`mr-2`} />
              <input type="search" placeholder="Search..." className='w-full bg-transparent h-full py-0.5 outline-0 border-0 text-[#A3A3A3] text-[16px]'/>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header