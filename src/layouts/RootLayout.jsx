import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const RootLayout = () => {
  return (
    <main className="w-full bg-green-400 h-dvh transition-all duration-200 ease-in-out">
        <SideBar />
        <section className='pl-[80px] p-10 bg-red-300 w-full'>
        <Header />
        <Outlet />
        </section>
    </main>
  )
}

export default RootLayout