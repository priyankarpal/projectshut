import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../context/Theme"

function ProjectCard({ gh, link, title, description, tech }) {
  const { theme } = useContext(ThemeContext)

  return (
    <article
      className="border shadow-sm rounded-xl py-5 px-3 mb-3 max-w-md mx-auto sm:m-0  border-gray-700 shadow-slate-700/[.7] transition-all duration-200 hover:scale-95"
      style={{
        background: theme?.navbar?.background,
        color: theme?.color,
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 ">{title}</h3>
        <img src={`https://github.com/${gh}.png`} alt={`${gh}'s github profile`} className="h-10 w-10 rounded-full" />
      </div>

      <div className=" text-gray-400 flex flex-row overflow-auto scrollbar items-center">
        {tech.map((tag, i) => (
          <p className="line-clamp-1 text-gray-3  00  pr-[.5rem] mb-[1rem] text-[.7rem]" key={i}>
            {tag}
          </p>
        ))}
      </div>
      <p className="mb-3 line-clamp-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center gap-2 justify-center text-center text-white from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-2"
      >
        GitHub Link<span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default ProjectCard
