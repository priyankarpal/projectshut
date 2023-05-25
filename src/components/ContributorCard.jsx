import React from "react"

function ContributorCard({ id, login, html_url, avatar_url }) {
  return (
    <>
      <div className="min-w-max p-2" key={id}>
        <a href={html_url} target="_blank">
          <img className="h-16 mb-3 rounded-full " src={avatar_url} alt={login} />
        </a>
      </div>
    </>
  )
}

export default ContributorCard
