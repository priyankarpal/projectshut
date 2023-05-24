import React, { useEffect, useState } from "react"
import { ProjectCard } from "../components"
import projects from "../DB/projects.json"
import techStack from "../utils/techStack"
import { paginate } from "../utils/paginate"
import { Button } from "@mui/material"

const paginatedArr = paginate(projects)

const ProjectsPage = () => {
  //used the json format to avoid code repeatation
  const [page, setPage] = useState({ pageNo: 0, prev: false, next: false })
  const [currentItems, setItems] = useState([])
  const [selectedButton, setSelectedButton] = useState(null)

  // this useEffect is for when user click on pagination button then render only that page projects

  useEffect(() => {
    //checks if the current page is the last page
    page.next = page.pageNo === paginatedArr.length - 1 ? true : false
    //checks if the current page is the first page
    page.prev = page.pageNo === 0 ? true : false
    setPage({ ...page })

    const data = paginatedArr[page.pageNo]
    setItems(data)

    window.scrollTo(0, 0) // this makes the page scroll to top on page state changes
  }, [page.pageNo])

  // this useEffect is for when user clear the filter (double click) then render only that page projects

  useEffect(() => {
    if (selectedButton === null) {
      setItems(paginatedArr[page.pageNo])
      return
    }
  }, [selectedButton])

  // this function will filter project based on selected technology and set the state of items

  const handleQuery = (index) => {
    setSelectedButton((prev) => (prev === index ? null : index))
    const regexPattern = new RegExp(techStack[index], "i")
    let currProjects = []
    projects?.map((obj) => {
      let arr = obj["Projects"][0].tech
      for (let i = 0; i < arr.length; i++) {
        if (regexPattern.test(arr[i])) {
          currProjects.push(obj)
          break
        }
      }
    })
    setItems(currProjects)
  }

  const prevPage = () => {
    if (page.pageNo - 1 < 0) {
      page.pageNo = paginatedArr.length - 1
      setPage({ ...page })
      return
    }
    page.pageNo = page.pageNo - 1
    setPage({ ...page })
  }

  const nextPage = () => {
    page.pageNo = (page.pageNo + 1) % paginatedArr.length
    setPage({ ...page })
  }

  const handleSetPage = (ind) => {
    page.pageNo = ind
    setPage({ ...page })
  }

  return (
    <main className=" my-8  max-w-6xl w-11/12 mx-auto sm:my-10 ">
      <h1 className="text-[3.5rem] font-bold  text-center">
        List of <span className="text-primary">cool </span>Projects
      </h1>
      <p className="mt-3 text-[1.2rem] text-center mx-auto w-10/12">
        Want to add your projects?
        <a
          href="https://projectshut.vercel.app/AddYourProjectsGuide"
          rel="noreferrer"
          className="p-2 inline-block rounded-lg text-primary hover:underline focus:underline transition-all duration-300"
        >
          Check documentation <span aria-hidden="true">→</span>
        </a>
      </p>
      <p className="flex justify-center mt-6 text-primary text-center ">Sort project based on technology</p>
      <div className="flex flex-wrap justify-start md:justify-center m-4 gap-2 ">
        {techStack.map((tech, index) => (
          <Button
            key={index}
            onClick={() => handleQuery(index)}
            variant={selectedButton === index ? "contained" : "outlined"}
            className="bg-primary hover:bg-slate-200"
          >
            <span className={selectedButton == index ? "text-white" : "text-primary"}> {tech.toLowerCase()}</span>
          </Button>
        ))}
      </div>

      {/* As the number of cards may change, it is important to give a min-height to 'section' */}
      <section className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh] ">
        {currentItems.map((item, i) => (
          <ProjectCard
            github_username={item["github_username"]}
            listOfProjects={item["Projects"]}
            socaialMedia={item["Social_media"]}
            key={i}
          />
        ))}
      </section>

      {/* when user apply filter then show specific projects and hide prev and next page */}
      {selectedButton === null && (
        <div className=" py-5 flex gap-2 flex-wrap justify-center text-black ">
          <button
            type="button"
            className={`bg-white px-3 py-1 hover:bg-slate-200 rounded-md ${
              page.prev ? `disabled:cursor-not-allowed` : null
            }`}
            disabled={page.prev}
            onClick={prevPage}
          >
            Prev
          </button>
          {paginatedArr.map((ele, ind) => {
            return (
              <button
                type="button"
                className={`bg-white px-3 py-1 hover:bg-slate-200 rounded-md ${
                  page.pageNo === ind ? "text-primary" : null
                }`}
                onClick={() => handleSetPage(ind)}
                key={ind}
              >
                {ind + 1}
              </button>
            )
          })}
          <button
            type="button"
            className={`bg-white px-3 py-1 rounded-md hover:bg-slate-200 ${
              page.next ? `disabled:cursor-not-allowed` : null
            }`}
            disabled={page.next}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      )}
    </main>
  )
}

export default ProjectsPage
