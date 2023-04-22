/*eslint-disable*/
import { Link, NavLink } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import "../CSS/navbar.css"

const Navbar = () => {
  return (
    // <div>
    <nav aria-label="Site Nav" className=" mx-auto  justify p-4 w-full bg-gray-900" style={{}}>
      <div className="nav-item-container">
        {/* Logo for project Hunt */}
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
        <div className="item-navbar" id="additional-elm">
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
      </div>
    </nav>
    // </div>
  )
}

export default Navbar

// mx-auto
