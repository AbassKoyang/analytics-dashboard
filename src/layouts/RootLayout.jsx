import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import TabBar from "../components/TabBar"

const RootLayout = () => {
  return (
    <main className="w-full h-dvh transition-all duration-200 ease-in-out bg-[#FAFAFA] dark:bg-[#1b1b1b]">
        <SideBar />
        <Header />
        <section className='w-full min-h-full p-3 lg:px-5 lg:py-0 lg:pl-[73.9px] xl:pl-[83px] bg-[#FAFAFA] dark:bg-[#1b1b1b]'>
        <Outlet />
        <TabBar />
        </section>
    </main>
  )
}

export default RootLayout