import { useContext } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeContext } from "../context/Theme"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className="text-white font-lato"
      style={{
        background: theme?.background,
        color: theme?.color,
        buttonBgColor: theme?.button?.buttonBgColor,
        buttonColor: theme?.button?.buttonColor,
      }}
    >
      <>
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </>
    </div>
  )
}
