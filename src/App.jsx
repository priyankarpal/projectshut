import React, { useState, useEffect, useContext, lazy, Suspense } from "react"
import { Navbar, Footer } from "./components"
import { Route, Routes, useLocation } from "react-router-dom"
import SplashScreen from "./components/SplashScreen"
import PageNotFound from "./components/PageNotFound"
import ProjectList from "./components/ProjectList"
import { ThemeContext } from "./context/Theme"
import ScrollToTop from "./components/ScrollToTop"

const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ContriButorsPage = lazy(() => import("./pages/ContributorsPage"));
const AddYourProjectsGuide = lazy(() => import("./pages/AddYourProjectsGuide"));

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
            <Route path="/" element={
              <Suspense fallback={<SplashScreen />}>
                <HomePage />
              </Suspense>
            } />
            <Route path="/projectspage" element={
              <Suspense fallback={<SplashScreen />}>
                <ProjectsPage />
              </Suspense>
            } />
            <Route path="/contributorspage" element={
              <Suspense fallback={<SplashScreen />}>
                <ContriButorsPage />
              </Suspense>
            } />
            <Route path="/docs" element={
              <Suspense fallback={<SplashScreen />}>
                <AddYourProjectsGuide />
              </Suspense>
            } />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
