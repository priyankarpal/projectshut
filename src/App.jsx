import React, { useState, useEffect, useContext } from "react"
import { Navbar, Footer } from "./components"
import { ProjectsPage, HomePage, ContriButorsPage, AddYourProjectsGuide } from "./pages"
import { Route, Routes, useLocation } from "react-router-dom"
import SplashScreen from "./components/SplashScreen"
import PageNotFound from "./components/PageNotFound"
import ProjectList from "./components/ProjectList"
import { ThemeContext } from "./context/Theme"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const { theme } = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const showSplashScreen = location.pathname === "/"

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
      {showSplashScreen && isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/projects/:username" element={<ProjectList />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/projectspage" element={<ProjectsPage />} />
            <Route path="/contributorspage" element={<ContriButorsPage />} />
            <Route path="/docs" element={<AddYourProjectsGuide />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
