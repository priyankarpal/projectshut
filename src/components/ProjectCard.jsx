import React from "react"

function ProjectCard({ gh, link, title, description, tech }) {
  const maxLength_title = 25
  const maxLength_techtag = 6

  let newTitle = title.length > maxLength_title ? title.slice(0, maxLength_title) + "..." : title

  return (
    <article className="border shadow-sm rounded-xl py-5 px-3 mb-3 max-w-md mx-auto sm:m-0 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-all duration-200  hover:scale-105  cursor-pointer">
      <div className="flex justify-between items-center mb-3">
        <h3 className="capitalize text-lg/5 font-bold basis-full">{newTitle}</h3>
        <img src={`https://github.com/${gh}.png`} alt={`${gh}'s github profile`} className="h-10 w-10 rounded-full" />
      </div>
      <ul className="flex gap-2 mb-3 items-center">
        {tech.map((tag, i) => {
          let newTag = tag.length > maxLength_techtag ? tag.slice(0, maxLength_techtag) + "..." : tag
          return (
            <li className="text-sm cursor-pointer bg-red-500 rounded-full text-white px-3 py-0.5" key={i}>
              {newTag}
            </li>
          )
        })}
      </ul>
      <p className="mb-3 line-clamp-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center gap-2 justify-center text-center text-white bg-primary  xl:text-[1rem] md:text-[0.8rem] hover:scale-105 hover:bg-purple-700 rounded-md py-2"
      >
        GitHub Link<span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default ProjectCard
