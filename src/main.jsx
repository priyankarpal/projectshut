import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./CSS/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProjectsPage from "./pages/ProjectsPage"
import { inject } from "@vercel/analytics"
inject()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProjectsPage",
    element: <ProjectsPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />)
