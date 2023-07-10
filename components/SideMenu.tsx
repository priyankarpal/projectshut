import React from "react";
import IconButton from "@mui/material/IconButton";
import { VscClose } from "react-icons/vsc";
import Link from "next/link";

function SideMenu(props: { handleDrawerToggle: () => void }) {
  const sideLinks = [
    {
      name: "Docs",
      path: "/docs",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "GitHub",
      path: "https://github.com/priyankarpal/ProjectsHut",
    },
  ];

  const linksComponent = sideLinks.map((link, index) => (
    <li key={index}>
      <Link
        href={link.path}
        rel="noreferrer"
        className={`block py-2 px-3 w-fit m-2 text-left rounded-md`}
        aria-label="Github"
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <div
      className=" h-screen flex flex-col bg-secondary text-white "
      id="elements-of-sidebar"
    >
      {/*  Logo & Close icon section */}
      <div className="flex mt-4 mb-8 border-b ">
        <span className="ml-[5%] my-1 text-white">
          <IconButton
            aria-label="close drawer"
            edge="start"
            onClick={() => props.handleDrawerToggle()}
            className="text-white"
          >
            <VscClose className="text-white" />
          </IconButton>
        </span>
        <div className="flex items-center ml-[25%]">
          <Link
            href="/"
            className="h-10 mb-5 items-center rounded-lg  font-extrabold text-[2rem] "
            onClick={() => props.handleDrawerToggle()}
          >
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>
      </div>

      {/*  SideBar navlinks section */}
      <ul className="block">{linksComponent}</ul>
    </div>
  );
}

export default SideMenu;
