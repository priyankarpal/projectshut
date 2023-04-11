import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import ProjectsPage from "./pages/ProjectsPage"
import Footer from "./components/Footer"

import "./CSS/index.css"
import { inject } from "@vercel/analytics"
inject()
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
