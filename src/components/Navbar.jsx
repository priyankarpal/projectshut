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
      <ul className="flex items-center gap-5  text-white text-[1rem]">
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
            className="inline-block rounded-md border border-transparent bg-[#FFFFFF] py-2 px-3 text-center font-bold text-black hover:bg-[##FFFFFF]"
import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import "../CSS/index.css"
import SideMenu from "./SideMenu"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <nav aria-label="Site Nav" className=" mx-auto  justify p-4 w-full bg-gray-900" style={{}}>
      <div className="flex flex-row justify-between">
        {/* Logo for project Hunt */}
        <div className="item-navbar block md:hidden" id="dropdown-menu">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="item-navbar" id="logo-ph">
          <Link to="/" className="inline-flex h-10 items-center rounded-lg text-white font-extrabold text-[2rem] ">
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5 text-white text-[1rem]">
            <li>
              <NavLink to="/" className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ProjectsPage"
                className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
              >
                Project Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddYourProjectsGuide"
                className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
              >
                Guide
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContributorsPage"
                className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
              >
                Our Contributers
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Additional elemnt of navbar */}
        <div className="flex justify-center">
          <ul className="flex items-center gap-5 text-white text-[1rem]">
            <li>
              <a
                href="https://github.com/priyankarpal/ProjectsHut"
                target={"_blank"}
                rel={"noreferrer"}
                className="inline-flex h-10 items-center rounded-lg text-white font-extrabold text-[2rem] "
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "56%" },
          }}
        >
          <SideMenu handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar
