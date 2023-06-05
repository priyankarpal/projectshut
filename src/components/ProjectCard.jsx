/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import { ThemeContext } from '../context/Theme';

function ProjectCard({ project, filter }) {
  const { username, title, description, link } = project;

  const { theme } = useContext(ThemeContext);

  return (
    <article
      className="border shadow-sm rounded-xl py-5 px-3 w-full h-full mb-3 max-w-md mx-auto sm:m-0  border-gray-700 shadow-slate-700/[.7]"
      style={{
        background: theme?.navbar?.background,
        color: theme?.color,
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 ">{title}</h3>
        <img
          src={`https://images.weserv.nl/?output=webp&width=50px&url=https://github.com/${username}.png`}
          alt={`${username}'s github profile`}
          className="h-10 w-10 rounded-full"
        />
      </div>

      <p className="mb-2 line-clamp-2">{description}</p>

      <div className="flex flex-row justify-between">
        {/*  GitHub Link Button */}
        <div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-full px-4 items-center group flex gap-2 justify-center text-center text-white from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-[0.35rem]"
          >
            GitHub Link
            <span className="group-hover:translate-x-1 duration-300 block" aria-hidden="true">
              <ArrowRight size={15} />
            </span>
          </a>
        </div>
        <div>
          {/* for user profile card page button  */}
          <Link
            to={`/projects/${username.toLowerCase()}`}
            className="w-full px-4 items-center group flex gap-2 justify-center text-center text-white from-indigo-500 via-purple-500 to-pink-500 bg-gradient-to-r  xl:text-[1rem] md:text-[0.8rem]  rounded-md py-[0.35rem]"
            state={{ filter }}
          >
            More
            <span className="group-hover:translate-x-1 duration-300 block" aria-hidden="true">
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
