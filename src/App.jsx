import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"

// Layouts
import RootLayout from "./layouts/RootLayout"

// Pages
import Home from "./pages/Home"
import TrendsPage from "./pages/TrendsPage"
import ProfilePage from "./pages/ProfilePage"
import DiscountPage from "./pages/DiscountPage"
import ChartPage from "./pages/ChartPage"
import InfoPage from "./pages/InfoPage"


function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route element={<TrendsPage/>} />
      <Route element={<ProfilePage/>} />
      <Route element={<DiscountPage/>} />
      <Route element={<ChartPage/>} />
      <Route element={<InfoPage/>} />
    </Route>
  )
)
  return (
    <RouterProvider router={router} />
  )
}

export default App;
