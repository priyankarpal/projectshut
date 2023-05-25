import React, { useContext } from "react"
import { ThemeContext } from "../context/Theme"
import ScrollToTop from "./ScrollToTop"

export default function Footer() {
  const { theme } = useContext(ThemeContext)
  const bgColor = theme.mode === "dark" ? theme.navbar.background : theme.background

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900 glass" style={{ backgroundColor: bgColor }}>
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-5xl mb-4">Built for collaboration 🤝</h2>
          <p className="max-w-sm mx-auto mt-4 text-gray-400">
            ProjectsHut is an open-source project. Feel free to contribute and help us to make this project even better.
          </p>
        </div>
      </div>

      <div
        className="bg-black flex justify-center items-center px-[7vw] sm:flex-row flex-col py-1 sm:py-2"
        style={{ height: "79px" }}
      >
        <div className="flex flex-col items-center">
          <a
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE"
            target="_blank"
            className="text-white flex items-center justify-center"
            style={{ color: "white", textAlign: "center", marginBottom: "6px", marginTop: "6px" }}
          >
            Under MIT License
          </a>
          <p className="max-w-md mx-auto text-gray-400 text-center">
            Copyright &copy; {getCurrentYear()} by ProjectsHut. All right reserved.
          </p>
        </div>
      </div>
      {window.innerWidth > 768 && <ScrollToTop />}
    </footer>
  )
}
