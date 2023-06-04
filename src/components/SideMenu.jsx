/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { X } from 'react-feather';
import { ThemeContext } from '../context/Theme';

function SideMenu(props) {
  const { theme } = useContext(ThemeContext);

  const sideLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projectspage',
    },
    {
      name: 'Documentation',
      path: '/docs',
    },
  ];

  const sideLinkEls = sideLinks.map((sideLink, i) => (
    <NavLink
      key={i.id}
      to={sideLink.path}
      className={({ isActive }) =>
        `flex py-2 px-3 m-2 text-center font-bold  rounded-md ${
          theme.mode === 'light'
            ? `hover:text-white hover:bg-black transition-all duration-200 ${isActive && 'text-white bg-black'}`
            : `hover:text-black hover:bg-white transition-all duration-200 ${isActive && 'text-black bg-white'}`
        }`
      }
      onClick={() => props.handleDrawerToggle()}
    >
      {sideLink.name}
    </NavLink>
  ));

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
            <X color={theme.mode === 'light' ? 'black' : 'white'} />
          </IconButton>
        </span>
        <div className="flex items-center ml-[25%]">
          <Link
            to="/"
            className="h-10 mb-5 items-center rounded-lg  font-extrabold text-[2rem] "
            onClick={() => props.handleDrawerToggle()}
          >
            Ph <span className="text-red-500">.</span>
          </Link>
        </div>
      </div>

      {/*  SideBar navlinks section */}
      <ul className="block">
        {sideLinkEls}

        <li>
          <a
            href="https://github.com/priyankarpal/ProjectsHut"
            target="_blank"
            rel="noreferrer"
            className={`block py-2 px-3 w-fit m-2 text-left font-bold rounded-md ${
              theme.mode === 'light'
                ? 'hover:text-white hover:bg-black transition-all duration-200'
                : 'hover:text-black hover:bg-white transition-all duration-200'
            }`}
            aria-label="Github"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
