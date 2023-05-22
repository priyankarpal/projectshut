import React, { useState, useEffect, useContext } from "react"
import { Navbar, Footer } from "./components"
import { ProjectsPage, HomePage, ContriButorsPage, AddYourProjectsGuide } from "./pages"
import { Route, Routes, useLocation } from "react-router-dom"
import SplashScreen from "./components/SplashScreen"
import PageNotFound from "./components/PageNotFound"
import ProjectList from "./components/ProjectList"
import { ThemeContext } from "./context/Theme"
import ScrollToTop from "./components/ScrollToTop"

import { useTranslation } from "react-i18next"
import i18next from "i18next"
import LanguageDropDown from "./components/LanguageDropDown"

function App() {
  const { t } = useTranslation()
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value)
  }

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
          <Navbar home={t("home")} projects={t("projects")} docs={t("docs")} contributors={t("Contributors")} />
          <LanguageDropDown onChange={(e) => handleClick(e)} />
          <ScrollToTop />
          <Routes>
            <Route path="/Projects/:username" element={<ProjectList />} />
            <Route
              path="/"
              element={
                <HomePage
                  hero1={t("hero1")}
                  hero2={t("hero2")}
                  btn={t("btn")}
                  banner_h1={t("banner_h1")}
                  banner_p={t("banner_p")}
                  banner_btn1={t("banner_btn1")}
                  banner_btn2={t("banner_btn2")}
                />
              }
            />
            <Route
              path="/ProjectsPage"
              element={
                <ProjectsPage
                  project_sort={t("project_sort")}
                  project_check={t("project_check")}
                  project_want_to_add={t("project_want_to_add")}
                  list_of={t("list_of")}
                  cool={t("cool")}
                  projects={t("projects")}
                />
              }
            />
            <Route
              path="/ContributorsPage"
              element={<ContriButorsPage our={t("our")} contributors={t("Contributors")} />}
            />
            <Route
              path="/AddYourProjectsGuide"
              element={
                <AddYourProjectsGuide
                  follow={t("follow")}
                  fork={t("fork")}
                  add={t("add")}
                  commit={t("commit")}
                  create={t("create")}
                  fill={t("fill")}
                  create2={t("create2")}
                  fill2={t("fill2")}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer h2={t("footer_h2")} p={t("footer_p")} />
        </>
      )}
    </div>
  )
}

export default App
