const ProjectCard = ({ gh, name, link, title, description, tech }) => {
  return (
    <div className="flex flex-col border shadow-sm rounded-xl p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] transition-all duration-200  hover:scale-105  cursor-pointer">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold text-white-800 dark:text-white">
          {title}
        </h3>

        <img
          src={`https://github.com/${gh}.png`}
          className="h-10 w-10 rounded-full"
          alt={`${gh}'s github profile`}
        />
      </div>
      <p className="mt-1  text-gray-500 dark:text-gray-500 flex gap-1 flex-row overflow-auto">
        {tech.map((tag, i) => (
          <p
            className="bg-green-400 rounded-full text-black pl-[.5rem] pr-[.5rem] text-[.8rem]"
            key={i}
          >
            {tag}
          </p>
        ))}
      </p>
      <p className="mt-2 text-white-800 dark:text-white-400">{description}</p>
      <a
        className="mt-3 inline-flex items-center gap-2  text-sm font-medium p-3 justify-center bg-primary rounded text-white   xl:text-[1rem] md:text-[0.8rem]"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Check it out
      </a>
    </div>
  );
};

export default ProjectCard;
