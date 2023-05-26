import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import { ThemeContext } from "../context/Theme"
import images from "../DB/homepage-image.json"

const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="pt-16 pb-custom sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-5xl font-bold  md:text-3xl md:leading-[3rem] lg:text-[4rem] lg:leading-[5rem] animated-text">
                Share your projects
              </h1>
              <p className="mt-4 text-xl text-gray-400 tracking-wide">
                ProjectsHut is a platform where you can share your open source projects with the world.
              </p>
            </div>
            <div>
              <div className="mt-14">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 py-16">
                    <div className="flex flex-grow items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {images.slice(0, 2).map((image, index) => (
                          <div key={index} className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="floating-image h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-5">
                        {images.slice(2, 5).map((image, index) => (
                          <div key={index} className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="floating-image h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="hidden md:grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {images.slice(5).map((image, index) => (
                          <div key={index} className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="floating-image h-full w-full object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="ProjectsPage"
                  className="inline-block rounded-md border border-transparent py-3 px-5 text-center font-semibold shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 "
                  style={{
                    backgroundColor: theme?.button?.buttonBgColor,
                    color: theme?.button?.buttonTextColor,
                  }}
                >
                  Browse Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  )
}

export default HomePage
