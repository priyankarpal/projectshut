import React, { useEffect, useState } from "react"
import process from "process"
import ContributorCard from "@/components/ContributorCard"
import ReactPaginate from "react-paginate"

function ContriButorsPage() {
  // hooks for contributor section
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(true)

  // variable for pagination
  const itemsPerPage = 40
  // hooks for pagination
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState(null)

  // fetch contributor data
  const getContributorData = async () => {
    setLoading(true) // set loading to true when the fetch request is initiated
    await fetch(`https://api.github.com/repos/priyankarpal/ProjectsHut/contributors?per_page=100`, {
      headers: {
        Authorization: ` ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // set contributor data
        setContributors(data)
        // calculate page counts
        setPageCount(Math.ceil(data.length / itemsPerPage))
        // stop loading display
        setLoading(false)
        // initially display items
        setCurrentItems(data.slice(itemOffset, itemOffset + itemsPerPage))
      })
      .catch((error) => {
        console.log(error)
        setLoading(false) // set loading to false when an error occurs
      })
  }

  // call function to fetch data on first render
  useEffect(() => {
    getContributorData()
  }, [])

  // changes the displayed cards to its respective page
  // on change in itemoffset
  useEffect(() => {
    setCurrentItems(contributors.slice(itemOffset, itemOffset + itemsPerPage))
  }, [itemOffset, itemsPerPage])

  // change in itemOffSet => change in page
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % contributors.length
    setItemOffset(newOffset)
  }

  return (
    <main className=" my-8 min-h-[65.75vh] max-w-6xl w-11/12 mx-auto sm:min-h-[73vh] lg:min-h-[78vh]">
      <h1 className=" text-[1.5rem] md:text-[3rem] pb-5 font-bold  text-center">
        Our <span className="text-primary">Contributors </span>
      </h1>
      {loading ? (
        // display this while loading
        <div className="flex justify-center items-center h-full col-span-10">
          <span className="text-primary text-xl font-semibold">Loading...</span>
        </div>
      ) : (
        // display contributors after loading
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 justify-items-center items-center ">
          {currentItems?.map((contributor) => (
            <ContributorCard
              id={contributor.id}
              login={contributor.login}
              html_url={contributor.html_url}
              avatar_url={contributor.avatar_url}
            />
          ))}
        </section>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </main>
  )
}

export default ContriButorsPage
