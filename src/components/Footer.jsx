const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className=" pb-5 px-[5rem] w-full  bg-secondary">
        <div className="flex justify-between flex-wrap ">
          <div>Handcrafted with ❤️🚀</div>
          <div className="flex ml-4 space-x-4">
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
