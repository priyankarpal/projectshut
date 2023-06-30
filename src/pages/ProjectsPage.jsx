/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
import React, { useContext, useEffect, useState, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Dialog, Transition } from '@headlessui/react';
import { Filter } from 'react-feather';
import { ProjectCard } from '../components';
import projects from '../DB/projects.json';
import techStack from '../utils/techStack';
import { FilterContext } from '../context/FilterContext';
import { searchProject } from '../utils/searchProject';
import ProjectLoading from '../components/ProjectLoading';
import { shuffleProjects } from '../utils/paginate';
import { ThemeContext } from '../context/Theme';

function ProjectsPage() {
  const Projects = [];
  const { theme } = useContext(ThemeContext);

  projects.forEach((project) => {
    const username = project.github_username;
    project.Projects.forEach((proj) => {
      Projects.push({ ...proj, username });
    });
  });

  const { selectedOptions, handleOptionClick } = useContext(FilterContext);
  const [limit, setLimit] = useState(15);
  const [visibleProjects, setVisibleProjects] = useState(shuffleProjects(Projects).slice(0, limit));
  const [openFilter, setOpenFilter] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  // for loadmore projects
  function loadMoreProjects() {
    if (
      selectedOptions.techStack &&
      selectedOptions.techStack.length !== 0 &&
      selectedOptions.author.length > 0 &&
      selectedOptions.project.length > 0
    ) {
      setLimit(visibleProjects.length);
      return;
    }
    setTimeout(() => {
      setLimit(limit + 15);

      setVisibleProjects(Projects.slice(0, limit + 15));
    }, 1200);
  }

  useEffect(() => {
    // to count all the filters
    let count = 0;
    if (selectedOptions.author && selectedOptions.author.length > 0) {
      count += 1;
    }
    count += selectedOptions.techStack && selectedOptions.techStack.length;
    setFilterCount(count);
  }, [selectedOptions]);

  const getProjects = () => {
    // if no filter is chosen then first 15 projects will shown
    if (
      selectedOptions.techStack &&
      selectedOptions.techStack.length === 0 &&
      !selectedOptions.author &&
      !selectedOptions.project
    ) {
      setLimit(15);
      setVisibleProjects(Projects.slice(0, 15));
      return;
    }

    // get all the filtered projects based on respective logic
    const currProjects = getFilteredProjects();
    setVisibleProjects(currProjects);
  };

  useEffect(() => {
    // get all the projects when an option is selected
    getProjects();
  }, [selectedOptions]);

  const getFilteredProjects = () => {
    let filteredProjects = Projects;

    // filter projects based on tech stack
    if (selectedOptions.techStack && selectedOptions.techStack.length > 0) {
      filteredProjects = selectedOptions.techStack.flatMap((tech) =>
        Projects.filter((obj) => {
          const arr = obj.tech;
          const regexPattern = new RegExp(tech, 'i');
          return arr.some((e) => regexPattern.test(e));
        }),
      );
    }

    // filter projects based on author names
    if (selectedOptions.author) {
      filteredProjects = searchProject(filteredProjects, selectedOptions.author, 'author');
    }

    // filter projects based on project names
    if (selectedOptions.project) {
      filteredProjects = searchProject(filteredProjects, selectedOptions.project, 'project');
    }
    return [...new Set(filteredProjects)];
  };

  // to clear all filters
  const handleClear = () => {
    handleOptionClick('clear', '');
    getProjects();
  };
  return (
    <main className=" my-8  max-w-6xl w-11/12 mx-auto sm:my-10 ">
      <h1 className="text-[2.5rem] font-bold text-center">
        Search for <span className="text-primary">cool </span>
        Projects
      </h1>
      <div className="flex items-center justify-center my-7 mx-20">
        <input
          type="text"
          id="combo-box-demo"
          placeholder="search by project name"
          className={`custom border-solid border-2 outline-none border-primary rounded-md p-2 md:w-1/2 bg-transparent ${
            theme.mode === 'light' ? 'text-black' : 'text-white'
          }`}
          onChange={(e) => handleOptionClick('project', e.target.value)}
          value={selectedOptions.project}
        />
      </div>
      <div className="flex item-stretch">
        {' '}
        <button
          className="border border-primary rounded-sm p-3 flex item-stretch"
          style={{
            color: theme?.color,
          }}
          onClick={() => setOpenFilter(!openFilter)}
        >
          Filter{' '}
          <div
            className="ml-2"
            style={{
              color: theme?.color,
            }}
          >
            {' '}
            {filterCount > 0 ? (
              <div className="bg-primary rounded-sm px-3">{filterCount}</div>
            ) : (
              <div className="mt-1">
                {' '}
                <Filter size={20} />
              </div>
            )}
          </div>
        </button>
        <button className="border border-primary rounded-sm p-3 mx-2" onClick={() => handleClear()}>
          Clear
        </button>
      </div>

      {/* pop up code */}
      <Transition appear show={openFilter} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setOpenFilter(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-[30rem] items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                  style={{
                    color: 'black',
                  }}
                >
                  {/*  search by author name */}
                  <div className="flex items-center justify-center my-8 mx-2">
                    <input
                      type="text"
                      id="combo-box-demo"
                      placeholder="search by author name"
                      className="border-solid border-2 outline-none border-primary rounded-md p-2 w-3/4"
                      style={{ color: 'black' }}
                      onChange={(e) => handleOptionClick('author', e.target.value)}
                      value={selectedOptions.author}
                    />
                  </div>
                  {/* tech stacks buttons */}
                  <div className="flex flex-wrap justify-start md:justify-center m-4 gap-2 ">
                    {techStack.map((tech, index) => (
                      <button
                        type="button"
                        key={index.id}
                        onClick={() => handleOptionClick('tech-stack', tech)}
                        className={`${
                          selectedOptions.techStack && selectedOptions.techStack.includes(tech)
                            ? 'bg-primary'
                            : 'border border-primary'
                        } rounded-sm p-2`}
                        style={{
                          color: 'black',
                        }}
                      >
                        <span>{tech.toLowerCase()}</span>
                      </button>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* As the number of cards may change, it is important to give a min-height to 'section' */}

      <section>
        {visibleProjects.length > 0 ? (
          <InfiniteScroll
            className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh] "
            dataLength={visibleProjects.length}
            next={() => {
              loadMoreProjects();
            }}
            hasMore={visibleProjects.length < Projects.length}
            loader={
              <>
                <ProjectLoading />
                <ProjectLoading />
                <ProjectLoading />
              </>
            }
            endMessage={
              <p style={{ textAlign: 'center' }} className="py-5">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.link}
                project={project}
                filter={selectedOptions.techStack && selectedOptions.techStack?.join(',')}
              />
            ))}
          </InfiniteScroll>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="text-2xl font-bold text-center">No Projects Found</h1>
          </div>
        )}
      </section>
    </main>
  );
}

export default ProjectsPage;
