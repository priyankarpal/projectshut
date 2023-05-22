import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import { ThemeContext } from "../context/Theme"

const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <section>
      <div className="relative overflow-hidden">
        {/* added custom padding also added mt-14 */}
        <div className="pt-16 pb-custom sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-5xl font-bold  md:text-3xl md:leading-[3rem] lg:text-[4rem] lg:leading-[5rem]">
                Share your projects
              </h1>
              <p className="mt-4 text-xl text-gray-400  tracking-wide">
                ProjectsHut is a platform where you can share your open source projects with the world.
              </p>
            </div>
            <div>
              <div className="mt-14">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 py-16">
                    <div className="flex flex-grow items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226263231-48164d02-d839-4f6c-8844-c577b6f0a8bb.png"
                            alt="a person working on a laptop"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226263387-8a56849f-3ecb-49cf-a81f-50eff89ea364.png"
                            alt="laptop"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-5">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226263566-759d90ef-e2a8-4f56-918c-1bb832ff388f.png"
                            alt="Computer setup"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226263656-6073c233-755c-4920-adf0-7081fb664b25.png"
                            alt="laptop"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226263725-a4dc4c6c-9e8a-43a8-ba8f-cb13b8aa122c.png"
                            alt="lappy"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      {/* changed here xs screen should be hidden */}
                      <div className="hidden md:grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226263994-a58ef52a-d921-4200-8b8e-b40f6532dbf4.png"
                            alt="hacking"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://user-images.githubusercontent.com/88102392/226264059-7d78100f-7a00-4a1c-b777-41fb2141aed9.png"
                            alt="Developer"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="ProjectsPage"
                  className="inline-block rounded-md border border-transparent py-3 px-5 text-center font-semibold"
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
