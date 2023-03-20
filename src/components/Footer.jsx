const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="mx-auto flex max-w-3xl items-center justify-center sm:justify-between flex-wrap p-4 gap-5 "
    >
      <p>
        Under{" "}
        <a
          href="https://github.com/priyankarpal/ProjectsHut/blob/main/LICENSE"
          target={"_blank"}
          rel="noreferrer"
          className="text-primary"
        >
          MIT License
        </a>
        <span> &copy; {new Date().getFullYear()} - Open Source</span>
      </p>

      <ul className="flex items-center gap-2  text-white text-[1rem]">
        <li className="lg:block  "></li>

        <li>
          <a
            href="https://twitter.com/priyankarpal"
            target={"_blank"}
            rel={"noreferrer"}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Follow on Twitter
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
