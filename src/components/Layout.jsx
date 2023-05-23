import { useContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeContext } from "../context/Theme"
import ScrollToTop from "./ScrollToTop"
import SplashScreen from "./SplashScreen"

export default function Layout() {
  const { theme } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

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
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  )
}
