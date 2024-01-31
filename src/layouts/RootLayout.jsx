import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const RootLayout = () => {
  return (
    <main className=" w-full max-w-[1400px] flex lg:gap-[5%] items-start h-dvh bg-blue-300 transition-all duration-200 ease-in-out">
        <SideBar />
        <section className='p-10 bg-red-300 w-full'>
        <Header />
        <Outlet />
        </section>
    </main>
  )
}

export default RootLayout