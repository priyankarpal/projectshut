import React, { useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import "../CSS/index.css"
import "./componentStyle/navbar.css"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import SideMenu from "./SideMenu"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { ThemeContext } from "../context/Theme"
import { MoonIcon, SunIcon } from "../assets/svgIcons"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { navbar } = theme
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projectspage",
    },
    {
      name: "Docs",
      path: "/docs",
    },
    {
      name: "Contributors",
      path: "/contributorspage",
    },
  ]

  const navLinkEls = navLinks.map((navLink) => (
    <li key={navLink.path}>
      <NavLink
        to={navLink.path}
        className={({ isActive }) =>
          `inline-block py-2 px-3 text-center font-bold  rounded-md ${
            theme.mode === "light"
              ? `hover:text-white hover:bg-black transiton-all duration-200 ${isActive && "text-white bg-black"}`
              : `hover:text-black hover:bg-white transiton-all duration-200 ${isActive && "text-black bg-white"}`
          }`
        }
      >
        {navLink.name}
      </NavLink>
    </li>
  ))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  let light = theme.mode === "light"

  const switchTrackColor = theme.mode === "dark" ? "#9CA3AF" : undefined

  return (
    <nav aria-label="Site Nav" className="mx-auto p-5 lg:w-1/2">
      <div className="flex flex-row gap-4 justify-between w-full">
        {/* Logo for project Hut */}
        <div className="item-navbar block md:hidden" id="dropdown-menu">
          <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon
              style={{
                color: navbar.color,
              }}
            />
          </IconButton>
        </div>
        <div className="item-navbar" id="logo-ph">
          <Link to="/" className="inline-flex h-10 items-center rounded-lg font-extrabold text-[2rem]">
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5 text-[1rem]">{navLinkEls}</ul>
        </div>

        {/* GitHub icon and Dark/Light Mode Toggle */}
        <div className="item-navbar flex items-center">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/priyankarpal/ProjectsHut"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center rounded-lg font-extrabold text-[1.3rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
              aria-label="Github"
            >
              <FaGithub />
            </a>

            <li className="md:flex flex-col-reverse  hidden">
              <input
                onChange={toggleTheme}
                checked={light}
                className="hidden w-0 h-0 checked:bg-[#ebebeb] transform:left-[78px] transform:translate-x-[-100%] transform:bg-gradient-to-b transform:from-white transform:to-white"
                type="checkbox"
                id="dark-mode-toggle"
              />
              <label
                className="w-[82px] h-[42px] relative block bg-[#242424] cursor-pointer rounded-full after:after-util  "
                htmlFor="dark-mode-toggle"
              >
                <SunIcon className="sun absolute w-[50px] h-[20px] top-[10px] z-20 left-[-4px] fill-white transition-[0.3s] " />
                <MoonIcon className="moon absolute w-[50px] h-[20px] top-[10px] z-20 left-[37px] fill-[#7e7e7e] transition-[0.3s]" />
              </label>
            </li>
          </div>
          <div className="md:hidden lg:hidden ml-2 flex items-center" onClick={toggleTheme}>
            {theme.mode === "light" ? (
              <div>
                <LightModeIcon className="bg-[#ebebeb] rounded-full p-1" />
              </div>
            ) : (
              <div>
                <DarkModeIcon className="bg-[#242424] rounded-full p-1 " />
              </div>
            )}
          </div>
        </div>
        <Drawer
          className="block md:hidden"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
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
