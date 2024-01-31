
const Header = () => {
  return (
    <header className="w-full flex items-center justify-center py-4 xl:py-[18px] bg-[#FAFAFA]">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <h1 className="text-[20px] leading-7 font-semibold">Dashboard</h1>
        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <div>
              
              <input type="search" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header