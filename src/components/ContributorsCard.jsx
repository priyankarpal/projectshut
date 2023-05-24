import React, { useEffect, useState } from "react"
import process from "process"

function Contributors({ owner, repo }) {
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    setLoading(true) // set loading to true when th e fetch request is initiated
    async function fetchData() {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`, {
          headers: {
            Authorization: `${process.env.GITHUB_TOKEN}`,
          },
        })
        const data = await response.json()
        setContributors(data)
        setLoading(false) // set loading to false when the fetch request is completed
      } catch (error) {
        setError(error.message)
        setLoading(false) // set loading to false when an error occurs
      }
    }

    fetchData()
  }, [owner, repo])

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 justify-items-center items-center ">
      {loading ? (
        <div className="flex justify-center items-center h-full col-span-10">
          <span className="text-primary text-xl font-semibold">Loading...</span>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-full col-span-10">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      ) : (
        contributors?.map((contributor) => (
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
