import React from "react"
import Contributors from "../components/ContributorsCard"

function ContriButorsPage() {
  return (
    <main className=" my-8 min-h-[65.75vh] max-w-6xl w-11/12 mx-auto sm:min-h-[73vh] lg:min-h-[78vh]">
      <h1 className=" text-[1.5rem] md:text-[3rem] pb-5 font-bold  text-center">
        Our <span className="text-primary">Contributors </span>
      </h1>
      <Contributors owner="priyankarpal" repo="ProjectsHut" />
    </main>
  )
}

export default ContriButorsPage
