/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { GitHub, Twitter, Linkedin, Instagram, Youtube, ArrowLeftCircle, ArrowUpCircle } from 'react-feather';
import { ThemeContext } from '../context/Theme';
import projects from '../DB/projects.json';

function ProjectList() {
  const { theme } = useContext(ThemeContext);
  const { username } = useParams();
  const data = useLocation();
  const { filter } = data.state;

  const [userObj, setObject] = useState({});
  const [user, setUser] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // make the scroll bar start from the top of the page
    window.scrollTo(0, 0);
    // return object which has a simillar name as in URL , which can be get by useParams() hook.
    //  And being added into objForUser

    const filterdObj = projects.filter((obj) => {
      if (obj.github_username.toLowerCase() === username) {
        return obj;
      }
      return null;
    });

    setObject(filterdObj[0]);
    getData();
  }, []);

  //to get the user data from github
  const getData = async () => {
    setInitialLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`).then((res) => res.json());
    if (res) {
      setUser(res);
      setInitialLoading(false);
    }
  };
  return (
    <section className="flex flex-col gap-4 md:flex-row xsm:my-2 p-4 md:p-8">
      {}
      {/* Left side profile section */}
      {!initialLoading && Object.keys(userObj).length > 0 && (
        <div
          className=" w-full md:w-[50%] md:h-5/6 lg:max-w-[35%] flex flex-col shadow-xl rounded-md mb-4 md:mb-0 md:sticky md:top-2 px-10 "
          style={{
            background: theme?.navbar?.background,
            color: theme?.color,
          }}
        >
          {/* Back to projects link */}
          <div className="m-4 hover:text-purple-500 transition-all duration-300 ease-in-out flex gap-2 items-center">
            <ArrowLeftCircle size={20} />

            <Link to={`/projectspage${filter ? `?filters=${filter}` : ''}`} className="ml-2">
              {`Back to ${filter ? filter.charAt(0).toUpperCase() + filter.slice(1) : 'All'} Projects`}
            </Link>
          </div>

          <div className="flex justify-center items-center mb-3 my-10">
            <img
              src={user && user.avatar_url}
              alt={`${username}'s github profile`}
              className="w-36 h-36 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center mb-3 text-center">
            <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 ">@{username}</h3>
          </div>
          <div className="flex flex-row xsm:mx-auto my-2 ">
            {userObj.Social_media.gitHub !== '' && (
              <div className="mx-5 xsm:mx-2">
                <a
                  href={userObj.Social_media.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <GitHub />
                </a>
              </div>
            )}
            {userObj.Social_media.LinkedIn !== '' && (
              <div className="mx-4">
                <a
                  href={userObj.Social_media.LinkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <Linkedin />
                </a>
              </div>
            )}
            {userObj.Social_media.Twitter !== '' && (
              <div className="mx-4">
                <a
                  href={userObj.Social_media.Twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <Twitter />
                </a>
              </div>
            )}
            {userObj.Social_media.YouTube !== '' && (
              <div className="mx-4">
                <a
                  href={userObj.Social_media.YouTube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <Youtube />
                </a>
              </div>
            )}
            {userObj.Social_media.Instagram !== '' && (
              <div className="mx-4">
                <a
                  href={userObj.Social_media.Instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <Instagram />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects lists */}
      <div
        className={`space-y-12 lg:grid lg:gap-x-6 lg:space-y-0 ${
          Object.keys(userObj).length > 0 && userObj['Projects'].length > 2
            ? 'lg:grid-cols-3'
            : Object.keys(userObj).length > 0 && userObj['Projects'].length > 1
            ? 'lg:grid-cols-2'
            : 'lg:grid-cols-1'
        }`}
      >
        {Object.keys(userObj).length > 0 &&
          userObj.Projects.map((project, index) => (
            <div
              className="w-100 my-1 p-4 shadow-lg mb-4"
              key={index.id}
              style={{
                borderRadius: '10px',
                background: theme?.navbar?.background,
                color: theme?.color,
                minHeight: '100px',
              }}
            >
              <div className=" border-b border-gray-600 p-4 relative">
                <p className="capitalize text-lg/5 font-bold basis-full line-clamp-1">{project.title}</p>
                <p className=" pr-[.5rem] text-[.9rem] my-4 xsm:mx-2 mx-4">{project.description}</p>
                <span className="absolute top-0 right-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[2rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500 "
                    aria-label="Github"
                  >
                    <ArrowUpCircle size={30} />
                  </a>
                </span>
              </div>
              {/* Tech Stack section */}
              <div className="flex flex-row items-center mt-2 gap-4">
                <div className="mr-6 md:mr-4">Tech-Stack : </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <p
                      className={`text-xs font-semibold inline-block py-1 px-2 .uppercase rounded-full uppercase  ${
                        theme.mode === 'dark' ? 'text-black bg-white' : 'text-white bg-black'
                      }`}
                      key={i.id}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default ProjectList;
