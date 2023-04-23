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
            aria-label="open drawer"
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
            className="h-10 items-center rounded-lg text-white font-extrabold text-[2rem] "
            onClick={() => props.handleDrawerToggle()}
          >
            {"Ph"} <span className="text-red-500">.</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
          onClick={() => props.handleDrawerToggle()}
        >
          {"Home"}
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/ProjectsPage"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
          onClick={() => props.handleDrawerToggle()}
        >
          {"Project Page"}
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/AddYourProjectsGuide"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
          onClick={() => props.handleDrawerToggle()}
        >
          {"Guide"}
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/ContributorsPage"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-gray-800 rounded-md active:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-800"
          onClick={() => props.handleDrawerToggle()}
        >
          {"Our Contributers"}
        </NavLink>
      </div>
      {/* </ul> */}
    </div>
  )
}
