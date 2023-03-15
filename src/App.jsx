import { Navbar, Footer } from "./components"
import { ProjectsPage, HomePage } from "./pages"
import { Route, Routes, Navigate } from "react-router-dom"

function App() {
  return (
    <div className=" text-white">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ProjectsPage" element={<ProjectsPage />} />
        <Route exact path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
