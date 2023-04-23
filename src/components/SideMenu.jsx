import React from "react"
import { Link, NavLink } from "react-router-dom"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"

export default function SideMenu(props) {
  return (
    <div className=" h-screen bg-gray-900 flex flex-col " id="elements-of-sidebar">
      <div className="flex mt-4 mb-8 border-b border-gray-400">
        <span
          className=""
          style={{
            marginLeft: "5%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="close drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={() => props.handleDrawerToggle()}
          >
            <CloseIcon style={{ color: "white" }} />
          </IconButton>
        </span>
        <div
          className="flex items-center"
          style={{
            marginLeft: "18%",
          }}
        >
          <Link
            to="/"
            className="h-10 mb-5 items-center rounded-lg text-white font-extrabold text-[2rem] "
            onClick={() => props.handleDrawerToggle()}
          >
            {"Ph"} <span className="text-red-500">.</span>
          </Link>
        </div>
      </div>
      <ul className="block">
        <li>
          <NavLink
            to="/"
            className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Home"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ProjectsPage"
            className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Projects"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AddYourProjectsGuide"
            className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
            onClick={() => props.handleDrawerToggle()}
          >
            {"Docs"}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ContributorsPage"
            className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
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
