import React, { Suspense } from "react"
import Contributors from "../components/ContributorsCard"
import { useLoaderData, Await, defer } from "react-router-dom"
import process from "process"

const OWNER = "priyankarpal"
const REPO = "ProjectsHut"

async function fetchData() {
  const data = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contributors?per_page=100`, {
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

function ContriButorsPage() {
  const dataPromise = useLoaderData()
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
        <Await resolve={dataPromise.data}>{(data) => <Contributors contributors={data} />}</Await>
      </Suspense>
    </main>
  )
}

export default ContriButorsPage
