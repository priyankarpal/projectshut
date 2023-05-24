import { ProjectsPage, HomePage, ContriButorsPage, AddYourProjectsGuide } from "./pages"
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom"
import PageNotFound from "./components/PageNotFound"
import ProjectList from "./components/ProjectList"
import Layout from "./components/Layout"
import { ThemeProvider } from "./context/Theme"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="projectspage" element={<ProjectsPage />} />
      <Route path="projects/:username" element={<ProjectList />} />
      <Route path="docs" element={<AddYourProjectsGuide />} />
      <Route path="contributorspage" element={<ContriButorsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
)

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
