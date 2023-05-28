import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button, TextField, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { ProjectCard, SkeletonLoader } from '../components';
import projects from '../DB/projects.json';
import techStack from '../utils/techStack';

const ProjectsPage = () => {
  const [allProjects, setAllProjects] = useState([]); // Store all projects
  const [filteredProjects, setFilteredProjects] = useState([]); // Store filtered projects based on search or selected tech stack
  const [currentItems, setCurrentItems] = useState([]); // Store currently visible projects
  const [selectedButton, setSelectedButton] = useState(null); // Store the index of the selected tech stack button
  const [selectedName, setSelectedName] = useState(''); // Store the value of the selected project name
  const [visibleProjects, setVisibleProjects] = useState(18); // Number of initially visible projects

  useEffect(() => {
    // Fetching all projects from the JSON file and storing them in state
    const allProjects = projects.flatMap((user) =>
      user.Projects.map((project) => ({
        username: user.github_username,
        title: project.title,
        description: project.description,
        repo_link: project.link,
        tech_stack: project.tech,
      })),
    );
    setAllProjects(allProjects);
    setFilteredProjects(allProjects);
    setCurrentItems(allProjects.slice(0, visibleProjects));
  }, []);

  const handleLoadMore = () => {
    // Function to handle loading more projects
    setTimeout(() => {
      setCurrentItems((prev) => [...prev, ...allProjects.slice(visibleProjects, visibleProjects + 18)]);
      setVisibleProjects((prev) => prev + 18);
    }, 1500);
  };

  const handleQuery = (index) => {
    setSelectedName('');
    // Function to handle selecting a tech stack button and update filtered projects accordingly
    setSelectedButton((prev) => (prev === index ? null : index));
    const regexPattern = new RegExp(techStack[index], 'i');
    const currProjects = allProjects.filter((project) => regexPattern.test(project.tech_stack));
    setVisibleProjects(18);
    setFilteredProjects(currProjects);
    setCurrentItems(currProjects.slice(0, visibleProjects));
  };

  useEffect(() => {
    // Update filtered projects when the selected tech stack button changes or is null
    if (selectedButton === null) {
      setFilteredProjects(allProjects);
      setCurrentItems(allProjects.slice(0, visibleProjects));
    }
  }, [selectedButton]);

  const handleSearch = () => {
    // Function to handle project search by name and update filtered projects
    if (selectedName.length > 0) {
      const selectedArr = allProjects.filter((project) =>
        project.title.toLowerCase().includes(selectedName.toLowerCase()),
      );
      setFilteredProjects(selectedArr);
      setCurrentItems(selectedArr.slice(0, visibleProjects));
    } else {
      setFilteredProjects(allProjects);
      setCurrentItems(allProjects.slice(0, visibleProjects));
    }
  };

  const handleSetName = (newValue) => {
    // Function to handle setting the selected project name from the search bar
    setSelectedName(newValue || '');
  };

  return (
    <main className="my-8 max-w-6xl w-11/12 mx-auto sm:my-10">
      <h1 className="text-6xl font-bold text-center">
        List of <span className="text-primary">cool </span>Projects
      </h1>
      <p className="mt-3 text-1.2rem text-center mx-auto w-10/12">
        Want to add your projects?
        <Link
          to="/docs"
          rel="noreferrer"
          className="p-2 inline-block rounded-lg text-primary hover:underline focus:underline transition-all duration-300"
        >
          Check documentation <span aria-hidden="true">→</span>
        </Link>
      </p>

      <p className="mt-3 text-2rem font-bold text-center mx-auto w-10/12">
        Search Your <span className="text-primary">cool </span>Project
      </p>
      <div className="flex items-stretch my-7 mx-20">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          fullWidth
          className="hover:bg-slate-200 border-solid border-2 border-violet-500 rounded-xl"
          options={allProjects.map((option) => option.title)}
          value={selectedName}
          onChange={(event, newValue) => handleSetName(newValue)}
          renderInput={(params) => <TextField className="bg-white rounded-xl" {...params} />}
        />
        <button className="mx-5" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
      <div className="flex flex-wrap justify-start md:justify-center m-4 gap-2">
        {techStack.map((tech, index) => (
          <Button
            key={index}
            onClick={() => handleQuery(index)}
            variant={selectedButton === index ? 'contained' : 'outlined'}
            className="bg-primary hover:bg-slate-200"
          >
            <span className={selectedButton === index ? 'text-white' : 'text-primary'}>{tech.toLowerCase()}</span>
          </Button>
        ))}
      </div>

      {currentItems.length > 0 && (
        <InfiniteScroll
          dataLength={currentItems.length}
          next={handleLoadMore}
          hasMore={visibleProjects < filteredProjects.length}
          className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh]"
          loader={
            <>
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </>
          }
          endMessage={
            !selectedName && (
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            )
          }
        >
          {currentItems.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </InfiniteScroll>
      )}
    </main>
  );
};

export default ProjectsPage;
