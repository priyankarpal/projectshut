import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex my-28 lg:items-center">
        <div className="mx-auto max-w-xl flex flex-col items-center text-center">
          <h1 className="font-mono text-[50px] sm:text-[60px] text-white font-light -mt-16">
            ProjectsHut
          </h1>
          <h1 className="leading-3 text-[11px] sm:text-[14px] tracking-widest text-primary">
            Create & Explore
          </h1>

          <p className="mt-9 sm:text-[1.5rem] sm:leading-relaxed">
            ProjectsHut is an innovative platform that allows users to publish
            their projects 🤙 for free
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="group relative inline-block focus:outline-none focus:ring"
              href="https://github.com/priyankarpal/ProjectsHut/fork"
              target="_blank"
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                Fork it
              </span>
            </a>

            <Link
              className="inline-block  border border-current px-8 py-3 text-sm font-bold text-white tracking-widest uppercase transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-primary"
              to="projects"
            >
              Browse
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
