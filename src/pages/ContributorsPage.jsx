import React, { Suspense, useState, useEffect } from "react"
import Contributors from "../components/ContributorsCard"
import { useLoaderData, Await, defer } from "react-router-dom"
import process from "process"
import ReactPaginate from "react-paginate"

const OWNER = "priyankarpal"
const REPO = "ProjectsHut"

async function fetchData() {
  const data = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contributors?per_page=300`, {
    headers: {
      Authorization: ` ${process.env.GITHUB_TOKEN}`,
    },
  })
  const res = await data.json()
  return res
}

export async function loader() {
  const data = fetchData()
  return defer({ data: data })
}

function ContributorsPage() {
  const dataPromise = useLoaderData()

  function renderContributors(contributors) {
    const itemsPerPage = 32
    const [pageCount, setPageCount] = useState(Math.ceil(contributors.length / itemsPerPage))
    const [itemOffset, setItemOffset] = useState(0)
    const [currentItems, setCurrentItems] = useState(contributors.slice(itemOffset, itemOffset + itemsPerPage))
    useEffect(() => {
      setCurrentItems(contributors.slice(itemOffset, itemOffset + itemsPerPage))
    }, [itemOffset, itemsPerPage])
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % contributors.length
      setItemOffset(newOffset)
    }
    return (
      <>
        <Contributors contributors={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="py-6 flex gap-2 flex-wrap justify-center align-baseline"
          pageLinkClassName="transition-all border border-solid rounded h-10 w-10 flex items-center justify-center hover:bg-slate-300 whitespace-nowrap"
          activeLinkClassName="bg-[rgb(166,110,252)] text-white hover:bg-[rgb(166,110,252)]"
          previousLinkClassName="transition-all border border-solid rounded h-10 px-2 flex items-center justify-center hover:bg-slate-300"
          nextLinkClassName="transition-all border border-solid rounded h-10 px-4 flex items-center justify-center hover:bg-slate-300 whitespace-nowrap"
        />
      </>
    )
  }

  return (
    <main className=" my-8 min-h-[65.75vh] max-w-6xl w-11/12 mx-auto sm:min-h-[73vh] lg:min-h-[78vh]">
      <h1 className=" text-[1.5rem] md:text-[3rem] pb-5 font-bold  text-center">
        Our <span className="text-primary">Contributors </span>
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-full col-span-10">
            <span className="text-primary text-xl font-semibold">Loading...</span>
          </div>
        }
      >
        <Await resolve={dataPromise.data}>{renderContributors}</Await>
      </Suspense>
    </main>
  )
}

export default ContributorsPage
