import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/Theme"

function ProjectCard({ github_username, listOfProjects, socaialMedia }) {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <article
        className="bg-white border border-gray-200 rounded-lg shadow p-6 hover:shadow-xl transition duration-300 ease-in-out"
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

        <div className=" text-gray-400 flex flex-row overflow-auto scrollbar items-center">
          {listOfProjects[0]["tech"].map((tag, i) => (
            <p className="line-clamp-1 text-gray-3  00  pr-[.5rem] mb-[1rem] text-[.7rem]" key={i}>
              {tag}
            </p>
          ))}
        </div>
        <p className="mb-3 line-clamp-2">{listOfProjects[0]["description"]}</p>

        <div className="flex flex-row justify-between">
          <div>
            <a
              href={listOfProjects[0]["link"]}
              target="_blank"
              rel="noreferrer"
              className="w-full px-4 items-center gap-2 justify-center text-center text-white from-indigo-500 to-violet-600 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-2"
            >
              GitHub Link<span aria-hidden="true">→</span>
            </a>
          </div>
          <div>
            <Link
              to={`/Projects/${github_username}`}
              className="w-full px-4   items-center gap-2 justify-center text-center text-white from-indigo-500 to-violet-600 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-2 "
            >
              More<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default ProjectCard
