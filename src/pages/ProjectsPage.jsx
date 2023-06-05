/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { ProjectCard } from '../components';
import projects from '../DB/projects.json';
import techStack from '../utils/techStack';
import { FilterContext } from '../context/FilterContext';
import InfiniteScroll from 'react-infinite-scroll-component';
import { searchProject } from '@/utils/searchProject';
import ProjectLoading from '@/components/ProjectLoading';

function ProjectsPage() {
  const Projects = [];

  projects.forEach((project) => {
    const username = project.github_username;
    project.Projects.forEach((proj) => {
      Projects.push({ ...proj, username });
    });
  });

  const [searchInput, setSearchInput] = useState('');
  const { selectedOptions, handleOptionClick } = useContext(FilterContext);
  const [limit, setLimit] = useState(15);
  const [visibleProjects, setVisibleProjects] = useState(Projects.slice(0, limit));

  function loadMoreProjects() {
    if (searchInput !== '' || selectedOptions.length !== 0) {
      setLimit(visibleProjects.length);
      return;
    }
    setTimeout(() => {
      setLimit(limit + 15);
      setVisibleProjects(Projects.slice(0, limit + 15));
    }, 1200);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('q') || '';

  function handleChange(e) {
    setSearchParams((prevParams) => {
      if (e.target.value !== '') {
        prevParams.set('q', e.target.value);
      } else {
        prevParams.delete('q');
      }
      return prevParams;
    });
    if (e.target.value !== '') {
      setVisibleProjects(searchProject(selectedOptions.length > 0 ? getFilteredProjects() : Projects, e.target.value));
    } else {
      setLimit(15);
      setVisibleProjects(Projects.slice(0, 15));
    }
  }



  useEffect(() => {
    if (selectedOptions.length === 0) {
      setLimit(15);
      setVisibleProjects(Projects.slice(0, 15));
      return;
    }
    const currProjects = getFilteredProjects();
    setVisibleProjects(currProjects);
  }, [selectedOptions]);

  const getFilteredProjects = () => {
    const filteredProjects = selectedOptions.flatMap((tech) =>
      Projects.filter((obj) => {
        const arr = obj.tech;
        const regexPattern = new RegExp(tech, 'i');
        return arr.some((e) => regexPattern.test(e));
      }),
    );
    return [...new Set(filteredProjects)];
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
          placeholder="Thea Theme"
          className="hover:bg-slate-200 border-solid border-2 outline-none border-primary rounded-md p-2 md:w-1/2"
          style={{ color: 'black' }}
          onChange={handleChange}
          value={searchValue}
        />
      </div>
      <div className="flex flex-wrap justify-start md:justify-center m-4 gap-2 ">
        {techStack.map((tech, index) => (
          <Button
            key={index.id}
            onClick={() => handleOptionClick(tech)}
            variant={selectedOptions.includes(tech) ? 'contained' : 'outlined'}
            className="bg-primary hover:bg-slate-200"
          >
            <span className={selectedOptions.includes(tech) ? 'text-white' : 'text-primary'}>{tech.toLowerCase()}</span>
          </Button>
        ))}
      </div>

      {/* As the number of cards may change, it is important to give a min-height to 'section' */}


      <section>
        {visibleProjects.length > 0 ? (
          <InfiniteScroll
            className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh] "
            dataLength={visibleProjects.length} //This is important field to render the next data
            next={loadMoreProjects}
            hasMore={visibleProjects.length < Projects.length}
            loader={
              selectedOptions.length === 0 ? (
                <>
                  <ProjectLoading />
                  <ProjectLoading />
                  <ProjectLoading />

                </>
              ) : null
            }
            endMessage={
              <p style={{ textAlign: 'center' }} className="py-5">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {visibleProjects &&
              visibleProjects.map((project) => (
                <ProjectCard key={project.link} project={project} filter={selectedOptions?.join(',')} />
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
