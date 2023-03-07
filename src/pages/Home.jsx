import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex my-28 lg:items-center ">
        <div className="mx-auto max-w-xl flex flex-col items-center text-center">
          <h1 className=" text-[3rem] flex-wrap xl:text-[5rem] text-white font-bold -mt-16">
            ProjectsHut
          </h1>
          <h1 className="leading-3 text-[1rem] tracking-widest text-primary ">
            Show your projects to the world 🌎
          </h1>

          <p className="mt-9 sm:text-[1.5rem] sm:leading-relaxed">
            ProjectsHut is an innovative platform that allows users to publish
            their projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="group relative inline-block focus:outline-none focus:ring"
              href="https://github.com/priyankarpal/ProjectsHut/fork"
              target="_blank"
            >
              <span className="inline-block rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary">
                🧑‍💻 Add projects
              </span>
            </a>

            <Link
              className="inline-block rounded border border-primary px-12 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary "
              to="ProjectsPage"
            >
              👀 Browse projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
