const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className=" pb-5 px-10 w-full  bg-secondary">
        <div className="flex justify-between ">
          <div>Handcrafted By Students ❤️🚀</div>
          <div className="flex items-center justify-start ml-4 space-x-4">
            <a target={"_blank"} href=" https://github.com/priyankarpal">
              GitHub
            </a>
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
