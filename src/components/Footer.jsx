const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className=" pb-5 px-[5rem] w-full  bg-secondary">
        <div className="flex justify-between flex-wrap ">
          <div>
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
          </div>

          <div className="flex ml-4 gap-5">
            <a
              href="https://twitter.com/priyankarpal"
              target={"_blank"}
              rel={"noreferrer"}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Follow on Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
