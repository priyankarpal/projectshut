import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav aria-label="Site Nav" className="mx-auto flex max-w-3xl items-center justify-between p-4 ">
      <Link
        to="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white font-bold text-[1.3rem] "
      >
        🚀
      </Link>

      <ul className="flex items-center gap-2  text-[1.3rem] text-white">
        <li className="hidden lg:block  underline hover:no-underline">
          <Link className="rounded-lg px-3 py-2" to="/">
            🏠 Home
          </Link>
        </li>

        <li className=" underline hover:no-underline">
          <a
            className="rounded-lg px-3 py-2"
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md"
            target="_blank"
            rel="noreferrer"
          >
            📗 Docs
          </a>
        </li>

        <li className=" underline hover:no-underline">
          <a
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
            href="https://github.com/priyankarpal/ProjectsHut/"
            target="_blank"
            rel="noreferrer"
          >
            🥷 GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
