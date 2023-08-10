'use client'
import { NextPage } from "next";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import { Motion } from "@/components/framer-motion";

interface ProjectType {
  username: string;
  github_url: string;
  title: string;
  description: string;
}
interface ProjectCardType {
  project: ProjectType;
  filter: string;
  index: number;
}

const ProjectCard: NextPage<ProjectCardType> = ({ project, index }) => {
  const { username, title, description, github_url } = project;

  return (
    <Motion.section
      initial={{ opacity: 0, y: 50, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.1, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 }}
      className="border shadow-sm rounded-xl py-5 px-3 w-full h-full mb-3 max-w-md mx-auto sm:m-0  border-gray-700 hover:border-primary duration-200 shadow-slate-700/[.7]">
      <div className="flex justify-between items-center mb-3">
        <Motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.3 }}
          className="normal-case text-lg/5 font-bold basis-full line-clamp-1 text-white ">
          {title}
        </Motion.h1>
        <Image
          src={`https://github.com/${username}.png`}
          alt={`${username}'s github profile`}
          className="h-10 w-10 rounded-full"
          width={50}
          height={50}
        />
      </div>
      <div className="h-14">
        <Motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.4 }}
          className="mb-2 line-clamp-2 text-white">{description}</Motion.p>
      </div>
      <Motion.div
        className="flex flex-row justify-between gap-5">
        {/*  GitHub Link Button */}
        <Link
          href={github_url}
          target="_blank"
          rel="noreferrer"
          title="GitHub(External Link)"
          aria-label="Follow us on GitHub"
          className="px-4 group active:scale-95 transition text-center text-white border w-1/2 border-gray-700 hover:border-gray-600  xl:text-[1rem] md:text-[0.8rem] rounded-md py-[0.35rem] "
        >
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.5 }}
            className="flex gap-2 justify-center items-center"
          >
            GitHub
            <span
              className="group-hover:translate-x-1 duration-300 block"
              aria-hidden="true"
            >
              <BsArrowRightShort size={15} />
            </span>
          </Motion.div>
        </Link>
        {/* for user profile card page button  */}
        <Link
          href={`/projects/${username.toLowerCase()}`}
          className="w-1/2 px-4 group active:scale-95 transition text-center text-white border border-gray-700 hover:border-gray-600  xl:text-[1rem] md:text-[0.8rem] rounded-md py-[0.35rem] "
          // state={{ filter }}
          aria-label="visit user profile"
        >
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring", stiffness: 110, delay: (index % 4) * 0.3 + 0.5 }}
            className="flex gap-2 justify-center items-center"
          >
            More
            <span
              className="group-hover:translate-x-1 duration-300 block"
              aria-hidden="true"
            >
              <BsArrowRightShort size={15} />
            </span>
          </Motion.div>
        </Link>
      </Motion.div>
    </Motion.section>
  );
};

export default ProjectCard;
