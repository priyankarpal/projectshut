import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import { ThemeContext } from "../context/theme"

const Navbar = () => {
  const { theme, toggleTheme, buttonBgColor, buttonTextColor } = useContext(ThemeContext)
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
      }}
    >
      <nav aria-label="Site Nav" className="mx-auto flex max-w-3xl items-center justify-between p-4 ">
        <Link
          to="/"
          className="inline-flex h-10 items-center justify-center rounded-lg  font-extrabold text-[2rem] style"
        >
          Ph <span className="text-red-500">.</span>
        </Link>

        <ul className="flex items-center gap-5 text-[1rem]">
          <li>
            <a
              href="https://github.com/priyankarpal/ProjectsHut"
              target={"_blank"}
              rel={"noreferrer"}
              className="text-[1.5rem] "
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <Link
              to="/ContributorsPage"
              className="inline-flex h-10 items-center justify-center rounded-md  font-bold  p-1"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              Contributors
            </Link>
          </li>
        </ul>

        <button className="p-2 rounded-full text-3xl" onClick={toggleTheme}>
          {theme.icon}
        </button>
      </nav>
    </div>
  )
}

export default Navbar
