import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const RootLayout = () => {
  return (
    <main className="w-full bg-green-400 dark:bg-[#1b1b1b] h-dvh transition-all duration-200 ease-in-out">
        <SideBar />
        <section className='p-0 m-0 pl-[53.9px] xl:pl-[63px]'>
        <Header />
        <Outlet />
        </section>
    </main>
  )
}

export default RootLayout