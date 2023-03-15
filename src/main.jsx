import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./CSS/index.css"
import { HashRouter } from "react-router-dom"
import { inject } from "@vercel/analytics"
inject()

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
