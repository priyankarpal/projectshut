import React from "react"

function ContributorCard({ contributors }) {
  return (
    <>
      {contributors?.map((contributor) => (
        <div className="min-w-max p-2" key={contributor.id}>
          <a href={contributor.html_url} target="_blank">
            <img className="h-16 mb-3 rounded-full " src={contributor.avatar_url} alt={contributor.login} />
          </a>
        </div>
      ))}
    </>
  )
}

export default ContributorCard
