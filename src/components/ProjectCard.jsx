const ProjectCard = ({ gh, name, link, title, description, tech }) => {
    return (
        <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition-all duration-200  hover:border-white hover:scale-105 hover:shadow-[0_7px_15px_RGB(209,211,224)] cursor-pointer">
            <img src={`https://github.com/${gh}.png`} className="h-10 w-10 rounded-full" alt={`${name}'s github profile`} />
            <a href={link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    className="ml-1.5 h-4 w-4 float-right relative bottom-10">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
            </a>
            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
            <p className="mt-1 text-sm text-gray-300">{description}</p>

            <div className="flex flex-row overflow-auto">
                {tech.map((tag, i) => (
                    <h4 className="bg-primary rounded-md text-white p-2 m-1 xl:text-base md:text-xs" key={i}>{tag}</h4>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
