import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./CSS/index.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context/Theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
