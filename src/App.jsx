import React, { useState, useEffect } from "react"
import { Navbar, Footer } from "./components"
import { ProjectsPage, HomePage, ContriButorsPage, AddYourProjectsGuide } from "./pages"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import SplashScreen from "./components/SplashScreen"
import PageNotFound from "./components/PageNotFound"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const showSplashScreen = location.pathname === "/"

  return (
    <div className="text-white font-mono">
      {showSplashScreen && isLoading ? (
        <SplashScreen />
      ) : (
        <>
          <ScrollToTop />
          <Navbar />

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
  )
}

export default App
