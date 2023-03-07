import { Navbar, Footer } from "./components";
import { Projects, Home, Error } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-secondary text-white">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
