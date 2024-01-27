import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

const RootLayout = () => {
  return (
    <main className="">
        <Header />
        <SideBar />
        <Outlet />
    </main>
  )
}

export default RootLayout