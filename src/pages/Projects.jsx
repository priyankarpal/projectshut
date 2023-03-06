import React from "react";
import { ProjectCard } from "../components";
import projects from "../DB/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="my-32">
      <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            List of cool 🔥 Projects
          </h2>

          <p className="m-4 text-gray-300">
            It's designed to provide a space for individuals to showcase their
            work and connect with a global audience.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3 m-[4rem]">
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
  );
};

export default Projects;
