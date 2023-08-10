"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { MdArrowBackIosNew } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import projects from "@/DB/projects.json";
import Image from "next/image";
import { Loading } from "./Loading";
import { getUserData } from "@/API/user";

interface userObjType {
  github_username: string;
  Projects: projectsType[];
}

interface userType {
  bio?: string;
  social_accounts: socialMediaType[];
}

interface socialMediaType {
  provider?: string;
  url?: string;
  icon?: JSX.Element;
}

interface projectsType {
  github_url: string;
  title: string;
  description: string;
  tech: string[];
}

function ProjectList() {
  const params = useParams();
  const [userObj, setObject] = useState<userObjType | undefined>();
  const [user, setUser] = useState<userType | undefined>();
  const [initialLoading, setInitialLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // to get the user data from github

  const getData = async () => {
    setInitialLoading(true); 
    const userData = await  getUserData(params?.username as string) as userType;
    setUser(userData);
    setInitialLoading(false);
  }

  useEffect(() => {
    // make the scroll bar start from the top of the page
    window.scrollTo(0, 0);
    // return object which has a simillar name as in URL , which can be get by useParams() hook.
    //  And being added into objForUser

    const filterdObj = projects.filter((obj) => {
      if (obj.github_username.toLowerCase() === params?.username) {
        return obj;
      }
      return null;
    });
    if (!filterdObj[0]) {
      notFound();
    }
    setObject(filterdObj[0]);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShareProfile = () => {
    setIsOpenModal(true);
  };

  // to copy the link to the clipboard
  const copyText = async () => {
    const textToCopy = window.location.href;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setIsCopied(true);
        // Reset the "Copied" state after a short delay (e.g., 2 seconds)
        setTimeout(() => setIsCopied(false), 2000);
      },
      () => {
        // Handling the error, if any, while copying
        console.error("Failed to copy the text.");
      }
    );
  };

  return (
    <section className="flex flex-col gap-4 md:flex-row xsm:my-2 p-4 md:p-8">
      {initialLoading && <Loading.Profile />}
      {/* Left side profile section */}
      {!initialLoading && userObj && Object.keys(userObj).length > 0 && (
        <div className="w-full md:w-[50%] md:h-5/6 lg:max-w-[35%] flex flex-col shadow-xl rounded-md mb-4 md:mb-0 md:sticky md:top-28 px-8 text-white border border-gray-800 mt-1">
          {/* Back to projects link */}
          <div className="flex items-center justify-between my-4">
            <div>
              <div className="hover:text-purple-500 transition-all duration-300 ease-in-out flex-grow flex gap-2  items-center">
                <Link
                  href="/projects"
                  className="flex items-stretch"
                  aria-label="Back to projects link"
                >
                  <MdArrowBackIosNew className="mt-0.5 text-[1.5rem]" />
                </Link>
              </div>
            </div>
            {/* share button */}
            <div
              className="hover:text-purple-500 transition-all duration-500 ease-in-out flex cursor-pointer"
              onClick={() => handleShareProfile()}
            >
              <FiShare2 className="text-[1.5rem]" />
            </div>
          </div>

          <div className="flex justify-center items-center mb-3 my-10">
            <Image
              src={`https://github.com/${params?.username}.png`}
              alt={`${params?.username}'s github profile`}
              className="w-36 h-36 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg border border-gray-800"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-center items-center mb-3 text-center">
            <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 ">
              @{params?.username}
            </h3>
          </div>
          <div className="justify-center items-center text-center py-5 ">
            <p className="text-sm break-words">{user?.bio}</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center xsm:mx-auto my-2 mb-5">
            {user?.social_accounts && user?.social_accounts.map(({ provider, url, icon }: socialMediaType) => (
              <div className="mx-4" key={provider}>
                <Link
                  href={url ?? ""}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label={`Follow us on ${provider}`}
                  title={`${provider}(External Link)`}
                >
                  {icon ? icon : provider === "linkedin" ? <FaLinkedin /> : <FaTwitter />}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Projects lists */}
      <div className="w-full md:w-3/4 md:mx-2 flex flex-col rounded-md ">
        {initialLoading && (
          <>
            <Loading.UserProjects />
            <Loading.UserProjects />
            <Loading.UserProjects />
          </>
        )}

        {!initialLoading &&
          userObj &&
          Object.keys(userObj).length > 0 &&
          userObj?.Projects.map((project, index) => (
            <div key={index}
              className="w-100 my-1 p-4 mb-4 text-white hover:border-primary border border-gray-800"
              style={{
                borderRadius: "10px",
                minHeight: "100px",
              }}
            >
              <div className=" border-b border-gray-600 p-4 relative">
                <p className="capitalize text-lg/5 font-bold basis-full line-clamp-1">
                  {project.title}
                </p>
                <p className=" pr-[.5rem] text-[.9rem] my-4 xsm:mx-0 mx-4">
                  {project.description}
                </p>
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-[-.5rem] right-[-.2rem]"
                >
                  <div className="inline-flex h-10 items-center rounded-lg font-extrabold text-[2rem] hover:scale-110 transition-all duration-300 ease-in-out  hover:text-primary">
                    <LuExternalLink size={25} />
                  </div>
                </Link>
              </div>
              {/* Tech Stack section */}
              <div className="flex flex-row items-center m-4 gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <p
                      className={`text-xs font-semibold inline-block py-1 px-2 .uppercase rounded-full uppercase mr-2 `}
                      key={i}
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
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-70 transition-opacity" />

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0 ">
              <div className="relative transform overflow-hidden rounded-lg  transition-all sm:my-8 w-full sm:max-w-lg ">
                <div className="bg-gray-200 border px-4 py-4 md:p-6 relative ">
                  <p className="text-center text-xl font-bold mt-2 mb-4">
                    {" "}
                    Share Your Profile 🎉
                  </p>
                  <div className="flex justify-center w-full">
                    <input
                      className="w-3/4 border bg-transparent  rounded-md p-2 "
                      value={window.location.href}
                      disabled
                    />
                    <button onClick={() => copyText()} aria-label="copy">
                      {isCopied ? (
                        <div className="flex items-stretch ">
                          <BsCheck2Circle
                            style={{ color: "green", fontSize: "1.5rem" }}
                          />
                        </div>
                      ) : (
                        <MdOutlineContentCopy style={{ fontSize: "1.5rem" }} />
                      )}
                    </button>
                  </div>

                  <button
                    className="absolute top-5 right-7 duration-500"
                    onClick={() => setIsOpenModal(false)}
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </section>
  );
}
export default ProjectList;
