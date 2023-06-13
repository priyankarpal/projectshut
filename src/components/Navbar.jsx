import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/Theme";
import Switch from "@mui/material/Switch";
import SideMenu from "./SideMenu";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { navbar } = theme;
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
  ];

  const navLinkEls = navLinks.map((navLink) => (
    <li key={navLink.path}>
      <NavLink
        to={navLink.path}
        className={`inline-block py-2 px-3 text-center font-bold rounded-md ${
          theme.mode === "light"
            ? "text-white bg-black"
            : "text-black bg-white"
        }`}
        activeClassName="text-white bg-black"
      >
        {navLink.name}
      </NavLink>
    </li>
  ));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const light = theme.mode === "light";

  return (
    <nav aria-label="Site Nav" className="mx-auto p-5 lg:w-1/2">
      <div className="flex flex-row justify-between">
        <div className="item-navbar block md:hidden" id="dropdown-menu">
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon style={{ color: navbar.color }} />
          </IconButton>
        </div>
        <div className="item-navbar" id="logo-ph">
          <Link to="/" className="inline-flex h-10 items-center rounded-lg font-extrabold text-[2rem]">
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5 text-[1rem]">{navLinkEls}</ul>
        </div>
        <div className="item-navbar flex items-center">
          <a
            href="https://github.com/priyankarpal/ProjectsHut"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-lg font-extrabold text-[1.3rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <div className="flex items-center gap-3">
            <Switch
              checked={light}
              onChange={toggleTheme}
              color="default"
              inputProps={{ "aria-label": "toggle theme" }}
            />
            {light ? (
              <LightModeIcon className="bg-[#ebebeb] rounded-full p-1" />
            ) : (
              <DarkModeIcon className="bg-[#242424] rounded-full p-1 " />
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
  );
};

export default Navbar;
