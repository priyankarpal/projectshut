import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav aria-label="Site Nav" className="mx-auto flex max-w-3xl items-center justify-between p-4 "> 
      <Link
        to="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white font-bold text-[2.3rem] "
      >
        Ph <span className="text-red-500">.</span>
      </Link>

      <ul className="flex items-center gap-2  text-white text-[1rem]">
        <li>
          <a
            href="https://github.com/priyankarpal/ProjectsHut"
            target={"_blank"}
            rel={"noreferrer"}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            ✩ Star on GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
