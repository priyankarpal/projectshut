import React from "react"
import { ProjectCard } from "../components"
import projects from "../DB/projects.json"

const ProjectsPage = () => {
  return (
    <section id="projects" className="my-20">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
        <div className="mx-auto  text-center">
          <h2 className="text-[3.5rem] font-bold  ">List of cool Projects </h2>

          <p className="m-2 text-gray-300 text-[1.2rem]">
            Want to add your projects?
            <a
              href="https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md"
              target={"_blank"}
              rel="noreferrer"
              className=" p-2 rounded-lg"
            >
              Check documentation <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>

      <div className="mt-15 grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3 m-[4rem] ">
        {/* Projects */}
        {projects.map((project, i) => (
          <ProjectCard
            gh={project["gh-username"]}
            link={project.link}
            title={project.title}
            description={project.description}
            tech={project.tech}
            key={i}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
