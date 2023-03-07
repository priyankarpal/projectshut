import { Navbar, Footer } from "./components";
import { Projects, Home } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="bg-secondary text-white">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
