import React, { useEffect, useState } from "react"
import process from "process"
import ContributorCard from "@/components/ContributorCard"

function ContriButorsPage() {
  // hooks for contributor section
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(true)

  const getContributorData = async () => {
    setLoading(true) // set loading to true when the fetch request is initiated
    await fetch(`https://api.github.com/repos/priyankarpal/ProjectsHut/contributors?per_page=100`, {
      headers: {
        Authorization: ` ${process.env.GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContributors(data)
        setLoading(false) // set loading to false when the fetch request is completed
      })
      .catch((error) => {
        console.log(error)
        setLoading(false) // set loading to false when an error occurs
      })
  }

  useEffect(() => {
    getContributorData()
  }, [])

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
          {contributors?.map((contributor) => (
            <ContributorCard
              id={contributor.id}
              login={contributor.login}
              html_url={contributor.html_url}
              avatar_url={contributor.avatar_url}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default ContriButorsPage
