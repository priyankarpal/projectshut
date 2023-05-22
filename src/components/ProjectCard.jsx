import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../context/Theme"
import { Link } from "react-router-dom"

function ProjectCard({ github_username, listOfProjects, socaialMedia }) {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <article
        className="border shadow-sm rounded-xl py-5 px-3 mb-3 max-w-md mx-auto sm:m-0  border-gray-700 shadow-slate-700/[.7]"
        style={{
          background: theme?.navbar?.background,
          color: theme?.color,
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 ">{listOfProjects[0]["title"]}</h3>
          <img
            src={`https://github.com/${github_username}.png`}
            alt={`${github_username}'s github profile`}
            className="h-10 w-10 rounded-full"
          />
        </div>

        {/* <div className=" text-gray-400 flex flex-row overflow-auto scrollbar items-center">
          {listOfProjects[0]["tech"].map((tag, i) => (
            <p className="line-clamp-1 text-gray-3  00  pr-[.5rem] mb-[1rem] text-[.7rem]" key={i}>
              {tag}
            </p>
          ))}
        </div> */}
        <p className="mb-2 line-clamp-2">{listOfProjects[0]["description"]}</p>

        <div className="flex flex-row justify-between">
          <div>
            <a
              href={listOfProjects[0]["link"]}
              target="_blank"
              rel="noreferrer"
              className="w-full px-4 items-center group flex gap-2 justify-center text-center text-white from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-[0.35rem]"
            >
              GitHub Link
              <span className="group-hover:translate-x-1 duration-300 block" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <div>
            <Link
              to={`/projects/${github_username.toLowerCase()}`}
              className="w-full px-4 items-center group flex gap-2 justify-center text-center text-white from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-[0.35rem]"
            >
              More
              <span className="group-hover:translate-x-1 duration-300 block" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default ProjectCard
