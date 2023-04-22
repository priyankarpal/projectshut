import React from "react"

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="mx-auto p-4 flex flex-wrap gap-5 justify-center max-w-3xl items-center sm:justify-between">
        <p className="text-center">
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
      </div>
    </footer>
  )
}

export default Footer
