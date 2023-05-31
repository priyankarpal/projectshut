import React, { useContext, useEffect, useState } from 'react';
import { ProjectCard } from '../components';
import projects from '../DB/projects.json';
import techStack from '../utils/techStack';
import { paginate } from '../utils/paginate';
import { Link } from 'react-router-dom';
import { FilterContext } from '@/context/FilterContext';
import { searchProject } from '@/utils/searchProject';
import { Button } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

const paginatedArr = paginate(projects);

const ProjectsPage = () => {
  //used the json format to avoid code repeatation
  const [page, setPage] = useState({ pageNo: 0, prev: false, next: false });
  const [currentItems, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [disablePagination, setDisablePagination] = useState(false);
  const { selectedOptions, handleOptionClick } = useContext(FilterContext);

  function handleChange(e) {
    setSearchInput(e.target.value);
    if (e.target.value != '') {
      setDisablePagination(true);
      setItems(searchProject(selectedOptions.length > 0 ? getFilteredProjects() : projects, e.target.value));
    } else {
      setDisablePagination(false);
      loadItems();
    }
  }

  // this useEffect is for when user click on pagination button then render only that page projects

  useEffect(() => {
    //checks if the current page is the last page
    page.next = page.pageNo === paginatedArr.length - 1 ? true : false;
    //checks if the current page is the first page
    page.prev = page.pageNo === 0 ? true : false;
    setPage({ ...page });

    //setting the projects as label and name for mui autocomplete
    let arr = [];

    let allProjects = projects;
    for (let i = 0; i < allProjects.length; i++) {
      let projectInAllProjects = allProjects[i].Projects;
      arr.push({
        label: projectInAllProjects[0].title,
        author: allProjects[i].github_username,
      });
    }
    // setProjectsArr(arr);

    //move the paginated item in a function to use multiple times
    loadItems();

    window.scrollTo(0, 0); // this makes the page scroll to top on page state changes
  }, [page.pageNo]);

  // function to set item for pagination
  const loadItems = () => {
    const data = paginatedArr[page.pageNo];
    setItems(data);
  };

  useEffect(() => {
    // Reset the search query
    setSearchInput('');

    // If no technology options are selected, set items to the current page's data
    if (selectedOptions.length === 0) {
      loadItems();
      return;
    }
    const currProjects = getFilteredProjects();
    setItems(currProjects);
  }, [selectedOptions]);

  // Filter projects based on selected technology options
  const getFilteredProjects = () => {
    const filteredProjects = selectedOptions.flatMap((tech) =>
      projects.filter((obj) => {
        const arr = obj['Projects'][0].tech;
        const regexPattern = new RegExp(tech, 'i');
        return arr.some((e) => regexPattern.test(e));
      }),
    );
    return [...new Set(filteredProjects)];
  };

  const prevPage = () => {
    if (page.pageNo - 1 < 0) {
      page.pageNo = paginatedArr.length - 1;
      setPage({ ...page });
      return;
    }
    page.pageNo = page.pageNo - 1;
    setPage({ ...page });
  };

  const nextPage = () => {
    page.pageNo = (page.pageNo + 1) % paginatedArr.length;
    setPage({ ...page });
  };

  const handleSetPage = (ind) => {
    page.pageNo = ind;
    setPage({ ...page });
  };

  return (
    <main className=" my-8  max-w-6xl w-11/12 mx-auto sm:my-10 ">
      <h1 className="text-[2.5rem] font-bold text-center">
        Search for <span className="text-primary">cool </span>Projects
      </h1>
      <div className="flex items-center justify-center my-7 mx-20">
        <input
          type="text"
          id="combo-box-demo"
          placeholder="Thea Theme"
          className="hover:bg-slate-200 border-solid border-2 outline-none border-primary rounded-md p-2 md:w-1/2"
          style={{ color: 'black' }}
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      <div className="flex flex-wrap justify-start md:justify-center m-4 gap-2 ">
        {techStack.map((tech, index) => (
          <Button
            key={index}
            onClick={() => handleOptionClick(tech)}
            variant={selectedOptions.includes(tech) ? 'contained' : 'outlined'}
            className="bg-primary hover:bg-slate-200"
          >
            <span className={selectedOptions.includes(tech) ? 'text-white' : 'text-primary'}>{tech.toLowerCase()}</span>
          </Button>
        ))}
      </div>

      {/* As the number of cards may change, it is important to give a min-height to 'section' */}
      <section className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh] ">
        {currentItems.length > 0 ? (
          currentItems.map((item, i) => (
            <ProjectCard
              github_username={item['github_username']}
              listOfProjects={item['Projects']}
              socaialMedia={item['Social_media']}
              key={i}
            />
          ))
        ) : (
          <>No such project.</>
        )}
      </section>

      {/* when user apply filter then show specific projects and hide prev and next page */}
      {selectedOptions?.length === 0 && !disablePagination && (
        <div className=" py-5 flex gap-2 flex-wrap justify-center text-black ">
          <button
            type="button"
            className={`bg-white px-3 py-1 hover:bg-slate-200 rounded-md ${
              page.prev ? `disabled:cursor-not-allowed` : null
            }`}
            disabled={page.prev}
            onClick={prevPage}
          >
            Prev
          </button>
          {paginatedArr.map((ele, ind) => {
            return (
              <button
                type="button"
                className={`bg-white px-3 py-1 hover:bg-slate-200 rounded-md ${
                  page.pageNo === ind ? 'text-primary' : null
                }`}
                onClick={() => handleSetPage(ind)}
                key={ind}
              >
                {ind + 1}
              </button>
            );
          })}
          <button
            type="button"
            className={`bg-white px-3 py-1 rounded-md hover:bg-slate-200 ${
              page.next ? `disabled:cursor-not-allowed` : null
            }`}
            disabled={page.next}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default ProjectsPage;
