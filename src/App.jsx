/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import React, { lazy, Suspense } from 'react';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PageNotFound from './components/PageNotFound';
import Layout from './components/Layout';
import { ThemeProvider } from './context/Theme';
import Loader from './utils/Loader';
import { FilterProvider } from './context/FilterContext';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AddYourProjectsGuide = lazy(() => import('./pages/AddYourProjectsGuide'));
const ProjectList = lazy(() => import('./components/ProjectList'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/projectspage"
        element={
          <FilterProvider>
            <Suspense fallback={<Loader />}>
              <ProjectsPage />
            </Suspense>
          </FilterProvider>
        }
      />
      <Route
        path="/projects/:username"
        element={
          <Suspense fallback={<Loader />}>
            <ProjectList />
          </Suspense>
        }
      />
      <Route
        path="/docs"
        element={
          <Suspense fallback={<Loader />}>
            <AddYourProjectsGuide />
          </Suspense>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
