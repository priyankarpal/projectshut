import { BiGitRepoForked } from "react-icons/bi"
import { AiTwotoneFile } from "react-icons/ai"
import { RiGitRepositoryCommitsFill } from "react-icons/ri"

export default function AddYourProjectsGuide() {
  const codeString = `{
    "gh-username": "YOUR-GITHUB-USERNAME",
    "link": "LINK-TO-GITHUB-OR-DEMO",
    "title": "PROJECT-TITLE",
    "description": "PROJECT-DESCRIPTION",
    "tech": ["some tech 1", "some tech 2", "etc"]
  }`

  return (
    <section className="relative isolate overflow-hidden bg-[#000513] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* For Grid Background  */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <article className="grid justify-center items-center max-w-5xl mx-auto ">
        <div className="  text-base leading-7 text-white">
          <p className="mb-5 text-xl font-bold tracking-tight text-white ">Follow these steps to add your projects</p>
          <div className="flex items-center gap-5">
            <span>
              <BiGitRepoForked />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Fork this repository</p>
          </div>
          <img
            src="https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png"
            alt="Fork the repo"
            className="mt-5"
          />
          <div className="mt-5 flex items-center gap-5">
            <span>
              <AiTwotoneFile />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {" "}
              Click on Go to file(I'm doing from{" "}
              <span className="bg-gray-700 text-white p-1 rounded-md">priyankarpal/projectshut</span> )
            </p>
          </div>

          <img
            src="https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png"
            alt="Fork the repo"
            className="mt-5"
          />

          <div className="mt-5 flex items-center gap-5">
            <span>
              <AiTwotoneFile />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Add following code to end of{" "}
              <span className="bg-gray-800 p-1 rounded-md text-white">src/DB/projects.json</span>
            </p>
          </div>
          <code className="block">{codeString}</code>
          <div className="flex items-center gap-5 mt-5">
            <span>
              <RiGitRepositoryCommitsFill />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Commit your changes</p>
          </div>
          <img
            src="https://user-images.githubusercontent.com/88102392/232192543-5fcc2711-7693-4dba-8993-75e3528b8530.png"
            alt="add professional commits like this"
            className="mt-5"
          />
          <div className="flex items-center gap-5 mt-5">
            <span>
              <RiGitRepositoryCommitsFill />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Create Pull Request & wait for merge</p>
          </div>
          <span>Fill up the description</span>
          <img
            src="https://user-images.githubusercontent.com/88102392/232193469-dcc2b0b8-ec6b-4023-a9f4-bb6900ae8aff.png"
            alt="add professional commits like this"
            className="mt-5"
          />
          <div className="flex items-center gap-5 mt-5">
            <span>
              <RiGitRepositoryCommitsFill />
            </span>
            <p className="text-base font-semibold leading-7 text-indigo-600"> Create Pull Request & wait for merge</p>
          </div>
          <span>
            Fill up the description & create PR by clicking on the{" "}
            <span className="bg-green-600 rounded-md p-1">Create Pull Request</span> button
          </span>
          <img
            src="https://user-images.githubusercontent.com/88102392/232193469-dcc2b0b8-ec6b-4023-a9f4-bb6900ae8aff.png"
            alt="add professional commits like this"
            className="mt-5"
          />
        </div>
      </article>
    </section>
  )
}
