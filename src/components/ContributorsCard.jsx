import axios from "axios"
import process from "process"
import React, { useEffect, useState } from "react"

function Contributors({ owner, repo }) {
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchContributorsData = async () => {
    try {
      setLoading(true) // set loading to true when th e fetch request is initiated

      // fetch data asynchronously and assign it to a variable
      const contributorsData = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`,
        {
          headers: {
            Authorization: ` ${process.env.GITHUB_TOKEN}`,
          },
        },
      )

      // check for successfull status from fetch request then proceed with setting the contributors list
      if (contributorsData?.status === 200 || contributorsData?.status === 201) {
        setContributors(contributorsData?.data)
      }
    } catch (error) {
      console.log("Error fetching contributors data", error)
    } finally {
      setLoading(false) // set loading to false when an error occurs or data is loaded
    }
  }

  useEffect(() => {
    fetchContributorsData()
  }, [owner, repo])

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 justify-items-center items-center ">
      {loading ? (
        <div className="flex justify-center items-center h-full col-span-10">
          <span className="text-primary text-xl font-semibold">Loading...</span>
        </div>
      ) : (
        contributors.map((contributor) => (
          <div className="min-w-max p-2" key={contributor.id}>
            <a href={contributor.html_url} target="_blank">
              <img className="h-16 mb-3 rounded-full " src={contributor.avatar_url} alt={contributor.login} />
            </a>
          </div>
        ))
      )}
    </section>
  )
}

export default Contributors
