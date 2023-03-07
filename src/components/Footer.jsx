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
            </p>
          </div>

          <div className="flex ml-4 gap-5">
            <a target={"_blank"} href="https://twitter.com/priyankarpal">
              Twitter
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/priyankarpal"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
