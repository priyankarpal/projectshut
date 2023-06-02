import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../CSS/index.css';
import SideMenu from './SideMenu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { ThemeContext } from '../context/Theme';

import { Sun, Moon, Menu, GitHub } from 'react-feather';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { navbar } = theme;
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Projects',
      path: '/projectspage',
    },
    {
      name: 'Docs',
      path: '/docs',
    },
  ];

  const navLinkEls = navLinks.map((navLink) => (
    <li key={navLink.path}>
      <NavLink
        to={navLink.path}
        className={({ isActive }) =>
          `inline-block py-2 px-3 text-center font-bold  rounded-md ${
            theme.mode === 'light'
              ? `hover:text-white hover:bg-black transiton-all duration-200 ${isActive && 'text-white bg-black'}`
              : `hover:text-black hover:bg-white transiton-all duration-200 ${isActive && 'text-black bg-white'}`
          }`
        }
      >
        {navLink.name}
      </NavLink>
    </li>
  ));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let light = theme.mode === 'light';

  const switchTrackColor = theme.mode === 'dark' ? '#9CA3AF' : undefined;

  //  GitHub API to show the version number
  const [latestRelease, setLatestRelease] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/priyankarpal/projectshut/releases/latest');
        const data = await response.json();
        setLatestRelease(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="bg-inherit opacity-90 top-0 z-10 sticky ">
      <div aria-label="Site Nav" className="mx-auto p-5 lg:w-1/2  ">
        <div className="flex flex-row gap-4 justify-between w-full  ">
          {/* Logo for project Hut */}
          <div className="item-navbar block md:hidden" id="dropdown-menu">
            <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <Menu className={`w-7 h-7`} color={theme.mode === 'light' ? 'black' : 'white'} />
            </IconButton>
          </div>
          <div className="item-navbar" id="logo-ph">
            <Link to="/" className="inline-flex h-10 items-center rounded-lg font-extrabold text-[2rem]">
              Ph <span className="text-red-500">.</span>
            </Link>
          </div>

          {/* Main element of navbar */}
          <div className="item-navbar hidden md:block" id="elements-of-navbar">
            <ul className="flex items-center gap-5 text-[1rem]">{navLinkEls}</ul>
          </div>

          {/* GitHub icon and Dark/Light Mode Toggle */}
          <div className="item-navbar flex items-center">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/priyankarpal/ProjectsHut"
                target="_blank"
                rel="noreferrer"
                className={`flex justify-center items-center hover:scale-110 transition-all duration-200 w-10 h-10 rounded-full  ${
                  theme.mode === 'light' ? 'shadow-slate-900' : 'shadow-slate-100'
                } `}
                aria-label="Github"
              >
                <GitHub size={20} />
              </a>

              <li className="md:flex flex-col-reverse  hidden">
                <input
                  onChange={toggleTheme}
                  checked={light}
                  className="hidden w-0 h-0 checked:bg-[#ebebeb] transform:left-[78px] transform:translate-x-[-100%] transform:bg-gradient-to-b transform:from-white transform:to-white"
                  type="checkbox"
                  id="dark-mode-toggle"
                />
                <label
                  className="w-[82px] h-[42px] relative block bg-[#242424] cursor-pointer rounded-full after:after-util  "
                  htmlFor="dark-mode-toggle"
                >
                  <Sun className="sun absolute w-[50px] h-[20px] top-[10px] z-20 left-[36px]  transition-[0.3s] " />
                  <Moon className="moon absolute w-[50px] h-[20px] top-[10px] z-20 left-[-4px]  transition-[0.3s]" />
                </label>
              </li>
              {/*  To show the version number  */}
              <div className="hidden md:block">
                {latestRelease ? (
                  <div>
                    <a href={latestRelease.html_url} target="_blank" rel="noreferrer">
                      {latestRelease.tag_name}
                    </a>
                  </div>
                ) : (
                  <span>Loading...</span>
                )}
              </div>
            </div>
            <div className="md:hidden lg:hidden ml-2 flex items-center" onClick={toggleTheme}>
              {theme.mode === 'light' ? (
                <Sun className="sun w-8 h-8 z-20  fill-black transition-[0.3s] " />
              ) : (
                <Moon className="moon w-7 h-7 z-20  fill-white transition-[0.3s]" />
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' },
            }}
          >
            <SideMenu handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
