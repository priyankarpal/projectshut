import { NextPage } from "next";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

interface ProjectType {
  username: string;
  link: string;
  title: string;
  description: string;
}
interface ProjectCardType {
  project: ProjectType;
  filter: string;
}

const ProjectCard: NextPage<ProjectCardType> = ({ project }) => {
  const { username, title, description, link } = project;

  return (
    <section className="border shadow-sm rounded-xl py-5 px-3 w-full h-full mb-3 max-w-md mx-auto sm:m-0  border-gray-700 hover:border-primary duration-200 shadow-slate-700/[.7]">
      <div className="flex justify-between items-center mb-3">
        <h1 className="normal-case text-lg/5 font-bold basis-full line-clamp-1 text-white ">
          {title}
        </h1>
        <Image
          src={`https://github.com/${username}.png`}
          alt={`${username}'s github profile`}
          className="h-10 w-10 rounded-full"
          width={50}
          height={50}
        />
      </div>
      <div className="h-14">
        <p className="mb-2 line-clamp-2 text-white">{description}</p>
      </div>
      <div className="flex flex-row justify-between gap-5">
        {/*  GitHub Link Button */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer px-4 items-center group flex gap-2 justify-center text-center text-white border w-1/2 border-gray-700  xl:text-[1rem] md:text-[0.8rem] rounded-md py-[0.35rem] "
        >
          GitHub
          <span
            className="group-hover:translate-x-1 duration-300 block"
            aria-hidden="true"
          >
            <BsArrowRightShort size={15} />
          </span>
        </a>
        {/* for user profile card page button  */}
        <Link
          href={`/projects/${username.toLowerCase()}`}
          className="w-1/2  px-4 items-center group flex gap-2 justify-center text-center text-white border border-gray-700  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-[0.35rem] "
          // state={{ filter }}
        >
          More
          <span
            className="group-hover:translate-x-1 duration-300 block"
            aria-hidden="true"
          >
            <BsArrowRightShort size={15} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
