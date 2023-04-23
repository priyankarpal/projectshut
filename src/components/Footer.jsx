import React from "react"

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <p className="text-center p-5">
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
    </footer>
  )
}

export default Footer
