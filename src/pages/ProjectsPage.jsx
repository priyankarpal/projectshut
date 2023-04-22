import React, { useState } from "react"
import { ProjectCard } from "../components"
import projects from "../DB/projects.json"
import { paginate } from "../utils/paginate"

const paginatedArr = paginate(projects)

const ProjectsPage = () => {
  const [page, setPage] = useState(0)

  const currentItems = paginatedArr[page]

  const prevPage = () => {
    if (page - 1 < 0) {
      setPage(paginatedArr.length - 1)
      return
    }
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage((page + 1) % paginatedArr.length)
  }

  return (
    <main className=" my-8  max-w-6xl w-11/12 mx-auto sm:my-10 ">
      <h1 className="text-[3.5rem] font-bold  text-center">
        List of <span className="text-primary">cool </span>Projects
      </h1>
      <p className="mt-3 text-gray-300 text-[1.2rem] text-center mx-auto w-10/12">
        Want to add your projects?
        <a
          href="https://projectshut.vercel.app/AddYourProjectsGuide"
          rel="noreferrer"
          className="p-2 inline-block rounded-lg text-primary hover:underline focus:underline transition-all duration-300"
        >
          Check documentation <span aria-hidden="true">→</span>
        </a>
      </p>

      {/* As the number of cards may change, it is important to give a min-height to 'section' */}
      <section className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh]">
        {currentItems.map((project, i) => (
          <ProjectCard gh={project["gh-username"]} {...project} key={i} />
        ))}
      </section>
      <div className=" py-5 flex gap-2 flex-wrap justify-center text-black ">
        <button type="button" className="bg-white px-3 py-1 hover:bg-slate-200 rounded-md " onClick={prevPage}>
          Prev
        </button>
        {paginatedArr.map((ele, ind) => {
          return (
            <button
              type="button"
              className={`bg-white px-3 py-1 hover:bg-slate-200 rounded-md ${page === ind ? "text-primary" : null}`}
              onClick={() => setPage(ind)}
              key={ind}
            >
              {ind + 1}
            </button>
          )
        })}
        <button type="button" className="bg-white px-3 py-1 rounded-md hover:bg-slate-200" onClick={nextPage}>
          Next
        </button>
      </div>
    </main>
  )
}

export default ProjectsPage
