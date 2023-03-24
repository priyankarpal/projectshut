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
        <li className="pb-5">
          <a
            href="https://twitter.com/intent/tweet?text=Exciting%20news%21%F0%9F%A5%B3%20I%20just%20discovered%20an%20awesome%20open-source%20project%20called%20ProjectsHut.%20If%20you%27re%20looking%20to%20contribute%20your%20first%20code%20or%20simply%20want%20to%20explore%20some%20cool%20programming%20projects%2C%20you%20should%20definitely%20check%20it%20out.%20https%3A%2F%2Fgithub.com%2Fpriyankarpal%2FProjectsHut"
            target={"_blank"}
            rel={"noreferrer"}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Share on Twitter
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
