import React, { useContext } from "react"
import { ThemeContext } from "../context/Theme"

export default function Footer() {
  const { theme } = useContext(ThemeContext)
  const bgColor = theme.mode === "dark" ? theme.navbar.background : theme.background

  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900" style={{ backgroundColor: bgColor }}>
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-5xl mb-4">Built for collaboration 🤝</h2>
          <p className="max-w-sm mx-auto mt-4 text-gray-400">
            ProjectsHut is an open-source project. Feel free to contribute and help us make this project even better
          </p>
        </div>

        <div
          className="pt-8 mt-16 border-t flex flex-col gap-3 border-gray-100 dark:border-gray-800 justify-center lg:mt-24"
          style={{ borderColor: theme.color }}
        >
          <a
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE"
            target="_blank"
            className="text-white text-center"
            style={{ color: theme.color }}
          >
            Under MIT License
          </a>
          <p className="max-w-md mx-auto text-gray-400 text-center">
            Copyright &copy; {getCurrentYear()} by ProjectsHut. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
