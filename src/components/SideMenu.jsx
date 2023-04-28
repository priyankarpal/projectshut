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
        background: theme.background,
        color: theme.color,
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
            className="inline-block py-2 px-3 text-center font-bold  hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Home"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ProjectsPage"
            className="inline-block py-2 px-3 text-center font-bold  hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Projects"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddYourProjectsGuide"
            className="inline-block py-2 px-3 text-center font-bold  hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Docs"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContributorsPage"
            className="inline-block py-2 px-3 text-center font-bold  hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Contributers"}
          </NavLink>
        </li>
      </ul>

      {/* </ul> */}
    </div>
  )
}
