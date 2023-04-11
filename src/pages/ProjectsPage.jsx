import React from "react"
import { ProjectCard } from "../components"
import projects from "../DB/projects.json"

const ProjectsPage = () => {
  return (
    <main className=" my-8 min-h-[65.75vh] max-w-6xl w-11/12 mx-auto sm:min-h-[73vh] lg:min-h-[78vh]">
      {/* As the number of cards may change, it is important to give a min-height to 'main' */}
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
      <section className="mt-7 sm:grid sm:grid-cols-2 sm:gap-x-3 sm:gap-y-3 sm:justify-items-center sm:items-center lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
        {projects.map((project, i) => (
          <ProjectCard gh={project["gh-username"]} {...project} key={i} />
        ))}
      </section>
    </main>
  )
}

export default ProjectsPage
