import React, { useEffect, useState } from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../context/Theme"
import projects from "../DB/projects.json"
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom"

export default function ProjectList() {
  const { theme } = useContext(ThemeContext)
  const { username } = useParams()

  const [userObj, setObject] = useState({})

  useEffect(() => {
    // return object which has a simillar name as in URL , which can be get by useParams() hook.
    //  And being added into objForUser

    const filterdObj = projects.filter((obj) => {
      if (obj["github_username"].toLowerCase() === username) {
        return obj
      }
    })

    setObject(filterdObj[0])
  }, [])

  return (
    <section className="flex flex-col md:flex-row h-screen my-4">
      {/* Left side profile section */}
      {Object.keys(userObj).length > 0 && (
        <div
          className="w-full md:w-1/4 mx-2 flex flex-col shadow-white-md rounded-md "
          style={{
            background: theme?.navbar?.background,
            color: theme?.color,
          }}
        >
          {/* Beack to projects link */}
          <div className="m-4 hover:text-cyan-300">
            <span>{"<"}</span>
            <Link to="/ProjectsPage" className="font-mono ml-2">
              Back to Projects
            </Link>
          </div>

          <div className="flex justify-center items-center mb-3 my-10">
            <img
              src={`https://github.com/${username}.png`}
              alt={`${username}'s github profile`}
              className="w-32 h-32  rounded-full"
            />
          </div>
          <div className="flex justify-center items-center mb-3 my-10 text-center">
            <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 ">{username}</h3>
          </div>
          <div className="flex flex-row mx-auto my-2">
            {userObj["Social_media"]["gitHub"] !== "" && (
              <div className="mx-4">
                <a
                  href={userObj["Social_media"]["gitHub"]}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <FaGithub />
                </a>
              </div>
            )}
            {userObj["Social_media"]["LinkedIn"] !== "" && (
              <div className="mx-4">
                <a
                  href={userObj["Social_media"]["LinkedIn"]}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            )}
            {userObj["Social_media"]["Twitter"] !== "" && (
              <div className="mx-4">
                <a
                  href={userObj["Social_media"]["Twitter"]}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <FaTwitter />
                </a>
              </div>
            )}
            {userObj["Social_media"]["YouTube"] !== "" && (
              <div className="mx-4">
                <a
                  href={userObj["Social_media"]["YouTube"]}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <FaYoutube />
                </a>
              </div>
            )}
            {userObj["Social_media"]["Instagram"] !== "" && (
              <div className="mx-4">
                <a
                  href={userObj["Social_media"]["Instagram"]}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[1.5rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500"
                  aria-label="Github"
                >
                  <FaInstagram />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Projects lists */}

      <div className="w-full md:w-3/4 mx-2 flex flex-col rounded-md ">
        <div className="flex justify-start items-center mb-3 my-5 ">
          <h3 className="capitalize text-lg/5 font-bold basis-full line-clamp-1 pl-4">{"Projects"}</h3>
        </div>

        {Object.keys(userObj).length > 0 &&
          userObj["Projects"].map((project, index) => {
            return (
              <div
                className="w-100 min-h-400 my-1"
                key={index}
                style={{
                  borderRadius: "10px",
                  background: theme?.navbar?.background,
                  color: theme?.color,
                  minHeight: "100px",
                }}
              >
                <div className=" border-b border-gray-600 p-4 relative">
                  <p className="capitalize text-lg/5 font-bold basis-full line-clamp-1 pl-4">{project["title"]}</p>
                  <p className=" pr-[.5rem] mb-[1rem] text-[.9rem] my-3 mx-7">{project["description"]}</p>
                  <span className="absolute top-3 right-5">
                    <a
                      href={project["link"]}
                      target={"_blank"}
                      rel={"noreferrer"}
                      className="inline-flex h-10 items-center rounded-lg  font-extrabold text-[2rem] hover:scale-110 transition-all duration-300 ease-in-out hover:text-purple-500 "
                      aria-label="Github"
                    >
                      <BsFillArrowUpRightCircleFill />
                    </a>
                  </span>
                </div>

                <div className=" flex flex-row overflow-auto scrollbar items-center ">
                  <div className="mb-3 line-clamp-2 my-2 mx-6">Tech-Stack : </div>
                  <div className="flex flex-wrap ">
                    {project["tech"].map((tag, index) => {
                      return (
                        <p
                          className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-2 mr-1 mt-1 ${
                            theme.mode === "dark" ? "text-black bg-white" : "text-white bg-black"
                          }`}
                          key={index}
                        >
                          {tag}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}
