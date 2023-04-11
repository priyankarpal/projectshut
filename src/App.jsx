import { Navbar, Footer } from "./components"
import { ProjectsPage, HomePage } from "./pages"

function App() {
  return (
    <div className=" text-white">
      <Navbar />
      <HomePage />
      <ProjectsPage />
      <Footer />
    </div>
  )
}

export default App
