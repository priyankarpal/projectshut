import { Navbar, Footer, ProjectCard } from "./components";
import projects from "./DB/projects.json";

function App() {
  return (
    <div className="bg-secondary text-white">
      <Navbar />
      {/* ⚡ Main Section Starts */}
      <section className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl flex flex-col items-center text-center">
          <h1 className="font-mono text-[50px] sm:text-[60px] text-white font-bold -mt-16">
            ProjectsHut
          </h1>
          <h1 className="leading-3 text-[1rem] sm:text-[1rem] tracking-widest text-primary">
            Create & Explore
          </h1>

          <p className="mt-9 sm:text-[1.5rem] sm:leading-relaxed">
            ProjectsHut is an innovative platform that allows users to publish
            their projects 🤙 for free
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
              href="https://github.com/priyankarpal/ProjectsHut/fork"
              target="_blank"
              rel="noreferrer"
            >
              Add projects
            </a>

            <a
              className="inline-block rounded border border-primary px-12 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary "
              href="#projects"
            >
              Browse projects
            </a>
          </div>
        </div>
      </section>

      {/* ⚡ Main Section Ends */}

      {/* ⚡ Projects Section Starts */}
      <section id="projects">
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

      {/* ⚡ Projects Section Ends */}

      <Footer />
    </div>
  );
}

export default App;
