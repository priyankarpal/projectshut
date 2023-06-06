/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GitHub, Twitter, Linkedin, Instagram, Youtube, ArrowLeftCircle, Copy, Share2, Check, X } from 'react-feather';
import { ThemeContext } from '../context/Theme';
import projects from '../DB/projects.json';
import Loader from '../utils/Loader';

function ProjectList() {
  const { theme } = useContext(ThemeContext);
  const { username } = useParams();

  const [userObj, setObject] = useState({});
  const [user, setUser] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // to get the user data from github
  const getData = async () => {
    setInitialLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`).then((result) => result.json());
    if (res) {
      setUser(res);
      setInitialLoading(false);
    }
  };

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

  const handleShareProfile = () => {
    setIsOpenModal(true);
  };

  // to copy the link to the clipboard
  const copyText = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  const handleModalClose = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <section className="flex flex-col gap-4 md:flex-row xsm:my-2 p-4 md:p-8">
      {initialLoading && <Loader />}
      {/* Left side profile section */}
      {!initialLoading && Object.keys(userObj).length > 0 && (
        <div
          className=" w-full md:w-[50%] md:h-5/6 lg:max-w-[35%] flex flex-col shadow-xl rounded-md mb-4 md:mb-0 md:sticky md:top-2 px-10 "
          style={{
            background: theme?.navbar?.background,
            color: theme?.color,
          }}
          onClick={() => handleModalClose()}
        >
          {/* Back to projects link */}
          <div className="flex items-stretch">
            <div className="mt-4 mb-2 hover:text-purple-500 transition-all duration-300 ease-in-out flex gap-2 items-center">
              <Link to="/projectspage" className="flex items-stretch">
                <ArrowLeftCircle size={20} className="mt-0.5" />
                <span className="ml-2">Back to All Projects</span>
              </Link>
            </div>
            <div
              className="mt-4 mb-2 ml-40 hover:text-purple-500 transition-all duration-300 ease-in-out flex"
              onClick={() => handleShareProfile()}
            >
              <span>
                <Share2 size={20} className="mt-0.5" />
              </span>
            </div>
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
          <div className="justify-center items-center text-center py-5 ">
            <p className="text-sm break-words">{user.bio}</p>
          </div>
          <div className="flex flex-row xsm:mx-auto my-2 mb-5">
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
      <div className="w-full md:w-3/4 mx-2 flex flex-col rounded-md ">
        {!initialLoading &&
          Object.keys(userObj).length > 0 &&
          userObj.Projects.map((project, index) => (
            <div
              className="w-100 my-1 p-4 mb-4 "
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
                    <GitHub size={30} />
                  </a>
                </span>
              </div>
              {/* Tech Stack section */}
              <div className="flex flex-row items-center mt-2 gap-4">
                <div className="flex flex-wrap gap-2 m-3">
                  {project.tech.map((tag, i) => (
                    <p
                      className={`text-xs font-semibold inline-block py-1 px-2 .uppercase rounded-full uppercase m-2 ${
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
      {isOpenModal && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed  inset-0 bg-gray-500 bg-opacity-70 transition-opacity" />

          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
              <div className="relative transform overflow-hidden rounded-lg  transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <div
                  className="bg-white mb-12 px-4 pb-4 pt-5 sm:p-6 sm:pb-4  basis-full relative "
                  style={{
                    borderRadius: '10px',
                    background: theme?.navbar?.background,
                    color: theme?.color,
                    minHeight: '150px',
                  }}
                >
                  <div>
                    {' '}
                    <p className="text-center font-bold mt-2"> Share you Profile 🎉🎉🎉</p>
                    <div className="md:w-10/12 ml-20 flex items-stretch mt-6">
                      <input
                        className="h-full w-3/4 rounded-[7px] border border-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-blue-gray-200 "
                        value={window.location.href}
                        disabled
                      />
                      <button onClick={() => copyText()}>
                        {isCopied ? (
                          <div className="flex items-stretch ">
                            <Check style={{ color: 'green', fontSize: '5rem' }} />
                            <p className="text-green-800">Copied</p>
                          </div>
                        ) : (
                          <Copy style={{ fontSize: '5rem' }} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button className="absolute top-5 right-7" onClick={() => setIsOpenModal(false)}>
                    <X />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{' '}
    </section>
  );
}
export default ProjectList;
