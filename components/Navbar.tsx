"use client";
import React, { Suspense, useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for initial theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <Suspense>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-secondary/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 dark:text-white">
              Ph<span className="text-primary">.</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link
                href="/docs"
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Docs
              </Link>
              <a
                href="https://github.com/priyankarpal/ProjectsHut"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                GitHub
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme">
                {darkMode ? (
                  <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Suspense>
  );
};

export default Navbar;
