import React, { useState, useEffect, useContext } from "react"
import { Navbar, Footer } from "./components"
import { ProjectsPage, HomePage, ContriButorsPage, AddYourProjectsGuide } from "./pages"
import { Route, Routes, useLocation } from "react-router-dom"
import SplashScreen from "./components/SplashScreen"
import PageNotFound from "./components/PageNotFound"
import { ThemeProvider } from "./context/Theme"
import { ThemeContext } from "./context/Theme"

function App() {
  const { theme } = useContext(ThemeContext)
  const { backgroundColor, textColor } = theme

  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const showSplashScreen = location.pathname === "/"

  return (
    <ThemeProvider>
      <div
        className="text-white font-mono "
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <Navbar />
        {showSplashScreen && isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/ProjectsPage" element={<ProjectsPage />} />
              <Route exact path="/ContributorsPage" element={<ContriButorsPage />} />
              <Route exact path="/AddYourProjectsGuide" element={<AddYourProjectsGuide />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
      {showSplashScreen && isLoading ? (
        <SplashScreen />
      ) : (
        <div className=" text-white font-mono">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/ProjectsPage" element={<ProjectsPage />} />
            <Route exact path="/ContributorsPage" element={<ContriButorsPage />} />
            <Route exact path="/AddYourProjectsGuide" element={<AddYourProjectsGuide />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
