import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import { ThemeContext } from "../context/Theme"

export default function SideMenu(props) {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className=" h-screen flex flex-col "
      id="elements-of-sidebar"
      style={{
        background: theme?.background,
        color: theme?.color,
      }}
    >
      {/*  Logo & Close icon section */}
      <div className="flex mt-4 mb-8 border-b border-gray-400">
        <span className="ml-[5%] my-1">
          <IconButton
            aria-label="close drawer"
            edge="start"
            onClick={() => props.handleDrawerToggle()}
            className="text-black"
            style={{
              color: theme.color,
            }}
          >
            <CloseIcon className="" />
          </IconButton>
        </span>
        <div className="flex items-center ml-[15%]">
          <Link
            to="/"
            className="h-10 mb-5 items-center rounded-lg  font-extrabold text-[2rem] "
            onClick={() => props.handleDrawerToggle()}
          >
            {"Ph"} <span className="text-red-500">.</span>
          </Link>
        </div>
      </div>

      {/*  SideBar navlinks section */}
      <ul className="block">
        <li>
          <NavLink
            to="/"
            className={`inline-block py-2 px-3 text-center font-bold rounded-md ${
              theme.mode === "light"
                ? "hover:text-white hover:bg-black focus:text-white focus:bg-black"
                : "hover:text-black hover:bg-white focus:text-black focus:bg-white"
            }`}
            onClick={() => props.handleDrawerToggle()}
          >
            {"Home"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ProjectsPage"
            className={`inline-block py-2 px-3 text-center font-bold rounded-md ${
              theme.mode === "light"
                ? "hover:text-white hover:bg-black focus:text-white focus:bg-black"
                : "hover:text-black hover:bg-white focus:text-black focus:bg-white"
            }`}
            onClick={() => props.handleDrawerToggle()}
          >
            {"Projects"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContributorsPage"
            className={`inline-block py-2 px-3 text-center font-bold rounded-md ${
              theme.mode === "light"
                ? "hover:text-white hover:bg-black focus:text-white focus:bg-black"
                : "hover:text-black hover:bg-white focus:text-black focus:bg-white"
            }`}
            onClick={() => props.handleDrawerToggle()}
          >
            {"Contributers"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddYourProjectsGuide"
            className={`inline-block py-2 px-3 text-center font-bold rounded-md ${
              theme.mode === "light"
                ? "hover:text-white hover:bg-black focus:text-white focus:bg-black"
                : "hover:text-black hover:bg-white focus:text-black focus:bg-white"
            }`}
            onClick={() => props.handleDrawerToggle()}
          >
            {"Documentation"}
          </NavLink>
        </li>
        <li>
          <a
            href="https://github.com/priyankarpal/ProjectsHut"
            target={"_blank"}
            rel={"noreferrer"}
            className={`inline-block py-2 px-3 text-center font-bold rounded-md ${
              theme.mode === "light"
                ? "hover:text-white hover:bg-black focus:text-white focus:bg-black"
                : "hover:text-black hover:bg-white focus:text-black focus:bg-white"
            }`}
            aria-label="Github"
          >
            {"GitHub"}
          </a>
        </li>
      </ul>

      {/* </ul> */}
    </div>
  )
}
