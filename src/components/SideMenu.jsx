import React from "react"
import { Link, NavLink } from "react-router-dom"
export default function SideMenu(props) {
  const onSelectFromSideBar = () => {
    setMobileOpen(false)
  }
  return (
    <div className=" h-screen bg-gray-900 " id="elements-of-sidebar">
      <div className="flex justify-center mt-4 mb-8 border-b border-gray-400">
        <Link
          to="/"
          className="inline-flex h-10 items-center rounded-lg text-white font-extrabold text-[2rem] "
          onClick={() => props.handleDrawerToggle()}
        >
          Ph <span className="text-red-500">.</span>
        </Link>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
          onClick={() => props.handleDrawerToggle()}
        >
          Home
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/ProjectsPage"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
          onClick={() => props.handleDrawerToggle()}
        >
          Project Page
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/AddYourProjectsGuide"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
          onClick={() => props.handleDrawerToggle()}
        >
          Guide
        </NavLink>
      </div>
      <div className="flex justify-center">
        <NavLink
          to="/ContributorsPage"
          className="inline-block py-2 px-3 text-center font-bold text-white hover:bg-[##FFFFFF]"
          onClick={() => props.handleDrawerToggle()}
        >
          Our Contributers
        </NavLink>
      </div>
      {/* </ul> */}
    </div>
  )
}
