import { Navbar, Footer } from "./components";
import { ProjectsPage, Home } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="bg-secondary text-white">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="ProjectsPage" element={<ProjectsPage />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
