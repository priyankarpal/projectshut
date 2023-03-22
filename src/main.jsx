import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./CSS/index.css"
import { BrowserRouter } from "react-router-dom"
import { inject } from "@vercel/analytics"
inject()

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

