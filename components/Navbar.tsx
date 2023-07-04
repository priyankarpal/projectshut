import React, { useState } from "react";
import { NextPage } from "next";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Menu } from "react-feather";
import Link from "next/link";
import SideMenu from "./SideMenu";

const Navbar: NextPage = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Docs",
      path: "/docs",
    },
    {
      name: "GitHub",
      path: "https://github.com/priyankarpal/ProjectsHut",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-black top-0 z-10 sticky">
      <div className="flex justify-between md:justify-around p-5 w-full ">
        {/* Logo for project Hut */}
        <div className="item-navbar block md:hidden" id="dropdown-menu">
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <Menu className="w-7 h-7 text-white" />
          </IconButton>
        </div>
        <div className="item-navbar" id="logo-ph">
          <Link
            href="/"
            className="inline-flex h-10 items-center text-white rounded-lg font-extrabold text-[2rem]"
          >
            Ph <span className="text-primary">.</span>
          </Link>
        </div>

        {/* Main element of navbar */}
        <div className="item-navbar hidden md:block" id="elements-of-navbar">
          <ul className="flex items-center gap-5 text-[1rem]">
            {navLinks.map((navLink) => (
              <li key={navLink.path}>
                <Link
                  href={navLink.path}
                  className={`inline-block py-2 px-3 text-center text-white font-bold hover:text-primary rounded-lg`}
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
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
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "60%" },
          }}
        >
          <SideMenu handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
