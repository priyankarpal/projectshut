const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className=" pb-8 mx-auto sm:px-6 w-full bg-secondary">
        <div className="pt-8 mt-5 border-t flex justify-center items-center border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-start ml-4 space-x-4">
            <a
              href="https://github.com/priyankarpal/ProjectsHut"
              title="Github"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-xl" />
            </a>
            <a
              href="https://twitter.com/Priyankarpal"
              title="Twitter"
              target="_blank"
            >
              <i className="fa-brands fa-twitter fa-xl" />
            </a>
          </div>

          <div className="flex items-center justify-center flex-1">
            Handcrafted By Students ❤️🚀
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
