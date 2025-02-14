'use client'

// This component serves as the light/dark mode toggle switch.

import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'light') setDarkMode(false)
    else document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FiSun className="text-white hover:text-primary" />
      ) : (
        <FiMoon className="text-gray-800 hover:text-primary" />
      )}
    </button>
  )
}