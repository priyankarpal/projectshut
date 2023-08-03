"use client";
import React, { Suspense } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
  external?: boolean;
}

const Navbar: NextPage = () => {
  const activePath = usePathname();
  const navLinks: NavLink[] = [
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
      external: true,
    },
  ];

  return (
    <Suspense>
      <nav className="top-0 z-10 sticky border-b border-gray-800 mx-auto bg-transparent backdrop-blur-sm">
        <div className="flex justify-between md:justify-around p-5 w-full ">
          {/* Logo for project Hut */}
          <div className="item-navbar" id="logo-ph">
            <Link
              href="/"
              className="inline-flex h-10 items-center text-white rounded-lg font-extrabold text-[2rem]"
            >
              Ph <span className="text-primary">.</span>
            </Link>
          </div>

          {/* Main element of navbar */}
          <div
            className="item-navbar hidden md:block"
            id="elements-of-navbar"
          >
            <ul className="flex items-center gap-5 text-[1rem]">
              {navLinks.map((navLink) => (
                <li key={navLink.path}>
                  {navLink.external ? (
                    <Link
                      href={navLink.path}
                      aria-label="desktop navbar link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        activePath === navLink.path ||
                          activePath === navLink.path + "/"
                          ? "inline-block py-2 px-3 text-center text-primary hover:text-primary rounded-lg"
                          : "inline-block py-2 px-3 text-center text-white hover:text-primary rounded-lg"
                      }
                    >
                      {navLink.name}
                    </Link>
                  ) : (
                    <Link
                      href={navLink.path}
                      className={
                        activePath === navLink.path ||
                          activePath === navLink.path + "/"
                          ? "inline-block py-2 px-3 text-center text-primary hover:text-primary rounded-lg"
                          : "inline-block py-2 px-3 text-center text-white hover:text-primary rounded-lg"
                      }
                    >
                      {navLink.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Suspense>
  );
};

export default Navbar;
