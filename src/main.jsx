import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./CSS/index.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context/theme"

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
)
