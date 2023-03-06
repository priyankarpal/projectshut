const Navbar = () => {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a
        href="/"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
      >
        🔥
      </a>
      <ul className="flex items-center gap-2 text-sm font-medium text-white ">
        <li className="hover:text-primary">
          <a
            className="rounded-lg px-3 py-2 "
            href="https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md"
            target="_blank"
          >
            Docs
          </a>
        </li>

        <li className="hover:text-primary">
          <a
            className="inline-flex items-center rounded-lg px-3 py-2"
            href="https://github.com/priyankarpal/ProjectsHut"
            target="_blank"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-1.5 h-4 w-4"
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
  );
};

export default Navbar;
