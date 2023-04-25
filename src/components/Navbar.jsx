import React, { useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaDiscord, FaGithub } from "react-icons/fa"
import "../CSS/index.css"
import SideMenu from "./SideMenu"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { ThemeContext } from "../context/Theme"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { navbar } = theme

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <nav
      aria-label="Site Nav"
      className=" mx-auto  justify p-4 w-full bg-gray-900"
      style={{
        background: navbar.background,
        color: navbar.color,
      }}
    >
      <div className="flex flex-row justify-between">
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
          <Link to="/" className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[2rem] ">
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5  text-[1rem]">
            <li>
              <NavLink
                to="/"
                className="inline-block py-2 px-3 text-center font-bold  rounded-md focus:outline-none focus:ring focus:ring-gray-800"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ProjectsPage"
                className="inline-block py-2 px-3 text-center font-bold rounded-md  focus:outline-none focus:ring focus:ring-gray-800 "
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AddYourProjectsGuide"
                className="inline-block py-2 px-3 text-center font-bold  rounded-md   focus:outline-none focus:ring focus:ring-gray-800"
              >
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContributorsPage"
                className="inline-block py-2 px-3 text-center font-bold  rounded-md   focus:outline-none focus:ring focus:ring-gray-800"
              >
                Contributors
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Additional elemnt of navbar */}
        <div className="flex justify-center">
          <ul className="flex items-center gap-5  text-[1rem]">
            <li>
              <a
                href="https://github.com/priyankarpal/ProjectsHut"
                target={"_blank"}
                rel={"noreferrer"}
                className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.3rem] "
                aria-label="Github"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/9qnF5esp"
                target={"_blank"}
                rel={"noreferrer"}
                className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.3rem] "
                aria-label="Discord"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <button onClick={toggleTheme} className="text-[1.3rem] ">
                {theme.icon}
              </button>
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
