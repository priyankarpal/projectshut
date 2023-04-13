import React, { useEffect, useState } from "react"

function Contributors({ owner, repo }) {
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
      .then((response) => response.json())
      .then((data) => setContributors(data))
  }, [owner, repo])

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 ">
      {contributors.map((contributor) => (
        <div key={contributor.id}>
          <div className="min-w-max pl-5 pr-5  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img className="h-32 mb-3 rounded-full shadow-lg" src={contributor.avatar_url} alt={contributor.login} />

              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  className="inline-flex items-center font-medium text-center text-purple-400 hover:underline"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contributors
