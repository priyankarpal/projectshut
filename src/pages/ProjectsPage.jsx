import React, { useState } from "react"
import { ProjectCard } from "../components"
import projects from "../DB/projects.json"
import { paginate } from "../utils/paginate"

const ProjectsPage = () => {
  const [page, setPage] = useState(0)

  const paginatedArr = paginate(projects)

  const currentItems = paginatedArr[page]

  return (
    <main className=" my-8  max-w-6xl w-11/12 mx-auto sm:my-10 ">
      <h1 className="text-[3.5rem] font-bold  text-center">
        List of <span className="text-primary">cool </span>Projects
      </h1>
      <p className="mt-3 text-gray-300 text-[1.2rem] text-center mx-auto w-10/12">
        Want to add your projects?
        <a
          href="https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md"
          target={"_blank"}
          rel="noreferrer"
          className="p-2 inline-block rounded-lg text-primary hover:underline focus:underline transition-all duration-300"
        >
          Check documentation <span aria-hidden="true">→</span>
        </a>
      </p>

      {/* As the number of cards may change, it is important to give a min-height to 'section' */}
      <section className="mt-7 min-h-[33vh] sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[36vh] md:min-h-[56vh] md:gap-x-3 lg:grid-cols-3 xl:min-h-[71vh]">
        {currentItems.map((project, i) => (
          <ProjectCard gh={project["gh-username"]} {...project} key={i} />
        ))}
      </section>
      <div className=" py-5 flex gap-2 flex-wrap justify-center text-black ">
        <button
          className="bg-white px-3 py-1 rounded-md "
          onClick={() => (page - 1 < 0 ? setPage(paginatedArr.length - 1) : setPage(page - 1))}
        >
          Prev
        </button>
        {paginatedArr.map((ele, ind) => {
          return (
            <button
              className={`bg-white px-3 py-1  rounded-md ${page === ind ? "text-primary" : null}`}
              onClick={() => setPage(ind)}
            >
              {ind + 1}
            </button>
          )
        })}
        <button className="bg-white px-3 py-1 rounded-md " onClick={() => setPage((page + 1) % paginatedArr.length)}>
          Next
        </button>
      </div>
    </main>
  )
}

export default ProjectsPage
