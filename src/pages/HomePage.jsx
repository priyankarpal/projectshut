/* eslint-disable max-len */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Banner from '../components/Banner';
import { ThemeContext } from '../context/Theme';
import images from '../DB/homepage-image.json';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  window.scrollTo(0, 0);
  const { theme } = useContext(ThemeContext);

  const notify = () => {
    toast('Want to add your project? Check out the docs!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="pt-16 pb-custom sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-[19.5rem] md:max-w-[24.5rem] tab:max-w-[28rem] lg:max-w-[30rem]">
              <h1 className="text-3xl font-bold sm:text-[5vw] md:text-5xl md:leading-[3rem] lg:text-[4rem] lg:leading-[5rem] animated-text">
                Share your projects
              </h1>

              <p className="mt-4 text-xl text-gray-400 tracking-wide ">
                ProjectsHut is a platform where you can share your open source projects with the world.
              </p>

              <div className="mt-14">
                <Link
                  to="/projectspage"
                  className="inline-block rounded-md border border-transparent py-3 px-5 text-center font-semibold shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 "
                  style={{
                    backgroundColor: theme?.button?.buttonBgColor,
                    color: theme?.button?.buttonTextColor,
                  }}
                  onClick={notify}
                >
                  Browse Projects
                </Link>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-auto lg:absolute lg:inset-y-0 mx-auto lg:w-full sm:max-w-8xl md:max-w-6xl"
            >
              <div className="py-8 xsm:px-0 md:px-4 absolute transform left-2 xs:left-1/4 xsm:-translate-x-1/5 xs:-translate-x-1/4 sm:left-1/2 sm:top-0 sm:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ">
                <div className="flex justify-center flex-grow items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    {images.slice(0, 2).map((image, index) => (
                      <div key={index.id} className="h-52 w-36 md:h-64 md:w-44 overflow-hidden rounded-lg">
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
                      <div key={index.id} className="h-52 w-36 md:h-64 md:w-44 overflow-hidden rounded-lg">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="floating-image h-full w-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="hidden xl:grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    {images.slice(5).map((image, i) => (
                      <div key={i.id} className="h-52 w-36 md:h-64 md:w-44 overflow-hidden rounded-lg">
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
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
}

export default HomePage;
