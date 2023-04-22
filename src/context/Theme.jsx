// context/theme.js
import React, { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const lightTheme = {
  backgroundColor: "#FFFFFF",
  textColor: "#000000",
  icon: "☀️",
  color: "black",
  linkColor: "black",
}

export const darkTheme = {
  backgroundColor: "#000513",
  textColor: "#FFFFFF",
  icon: "🌙",
  color: "white",
  linkColor: "white",
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark")
  }

  const buttonBgColor = theme === lightTheme ? "#000000" : "#FFFFFF"
  const buttonTextColor = theme === lightTheme ? "#FFFFFF" : "#000000"
  const backgroundColor = theme === lightTheme ? "#000000" : "#ffffff"

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, buttonBgColor, buttonTextColor, backgroundColor }}>
      {children}
    </ThemeContext.Provider>
  )
}
