"use client";
import React, { useEffect, useState, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Dialog, Transition } from "@headlessui/react";
import { BsFilter } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import techStack from "@/utils/techStack";
import { searchProject } from "@/utils/searchProject";
import { Loading } from "./Loading";
import { shuffleProjects } from "@/utils/paginate";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/DB/projects.json";
import { useRouter } from "next/navigation";
import { Motion } from "@/components/framer-motion";

interface NewProjectsType {
  username: string;
  github_url: string;
  title: string;
  description: string;
  tech: string[];
}

interface SelectedOptions {
  author: string;
  project: string;
  techStack: string[];
}

const Projects = () => {
  const Projects: NewProjectsType[] = [];

  projects.forEach((project) => {
    const username = project.github_username;
    project.Projects.forEach((proj) => {
      Projects.push({ ...proj, username });
    });
  });

  const [limit, setLimit] = useState(10);

  const [visibleProjects, setVisibleProjects] = useState(
    shuffleProjects(Projects).slice(0, limit)
  );

  const [openFilter, setOpenFilter] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    author: "",
    project: "",
    techStack: [],
  });

  const [searchitem, setSearchItem] = useState<any>([]);

  useEffect(() => {
    // Set URL based on option selection
    const updatedParams = new URLSearchParams();
    const techStackNames =
      selectedOptions.techStack.length > 0
        ? selectedOptions.techStack.join(",")
        : "";
    const authorName =
      selectedOptions.author.length > 0 ? selectedOptions.author : "";
    const projectName =
      selectedOptions.project.length > 0 ? selectedOptions.project : "";

    techStackNames && updatedParams.append("filters", techStackNames);
    authorName && updatedParams.append("author", authorName);
    projectName && updatedParams.append("project", projectName);

    const fullPath = `${window.location.pathname}?${updatedParams}`;

    router.push(fullPath);
  }, [selectedOptions, router]);

  const handleOptionClick = (type: string, option: string) => {
    const updatedOptions: SelectedOptions = { ...selectedOptions };

    // Assign value based on types, e.g., author/project/tech-stack
    updatedOptions.author = type === "author" ? option : updatedOptions.author;
    updatedOptions.project =
      type === "project" ? option : updatedOptions.project;

    if (type === "techStack" && updatedOptions.techStack) {
      const isSelected = updatedOptions.techStack.includes(option);
      updatedOptions.techStack = isSelected
        ? updatedOptions.techStack.filter((selected) => selected !== option)
        : [...updatedOptions.techStack, option];
    }

    // To clear all selected options
    updatedOptions.techStack = type === "clear" ? [] : updatedOptions.techStack;
    updatedOptions.author = type === "clear" ? "" : updatedOptions.author;
    updatedOptions.project = type === "clear" ? "" : updatedOptions.project;

    setSelectedOptions(updatedOptions);
  };

  //  to load more projects

  const loadMoreProjects = () => {
    searchitem.length === 0
      ? selectedOptions.techStack &&
        selectedOptions.techStack.length !== 0 &&
        selectedOptions.author.length > 0 &&
        selectedOptions.project.length > 0
        ? (setLimit(visibleProjects.length), undefined)
        : setTimeout(() => {
            setLimit(limit + 15);
            setVisibleProjects(Projects.slice(0, limit + 10));
          }, 1200)
      : undefined;
  };

  useEffect(() => {
    let count =
      selectedOptions.author && selectedOptions.author.length > 0 ? 1 : 0; // Check if selectedOptions.author exists and has a length greater than 0, increment count by 1 if true
    count +=
      selectedOptions.techStack && selectedOptions.techStack.length
        ? selectedOptions.techStack.length
        : 0; // Check if selectedOptions.techStack exists and has a length greater than 0, add its length to count if true
    setFilterCount(count); // Update the filter count with the calculated value
  }, [selectedOptions]);

  const getProjects = (selectedOptions?: any) => {
    const currProjects = getFilteredProjects(selectedOptions);
    setVisibleProjects(currProjects);

    setSearchItem(
      selectedOptions &&
        ((selectedOptions.project && selectedOptions.project.length !== 0) ||
          (selectedOptions.techStack && selectedOptions.techStack.length !== 0))
        ? currProjects
        : []
    );

    if (
      selectedOptions &&
      selectedOptions.techStack &&
      selectedOptions.techStack.length === 0 &&
      !selectedOptions.author &&
      !selectedOptions.project
    ) {
      setLimit(15);
      setVisibleProjects(Projects.slice(0, 15));
      return;
    }
  };

  useEffect(() => {
    getProjects(selectedOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const getFilteredProjects = (selectedOptions?: any) => {
    let filteredProjects = Projects;

    if (
      selectedOptions &&
      selectedOptions.techStack &&
      selectedOptions.techStack.length > 0
    ) {
      filteredProjects = selectedOptions.techStack.flatMap(
        (tech: string | RegExp) =>
          Projects.filter((obj) => {
            const arr = obj.tech;
            const regexPattern = new RegExp(tech, "i");
            return Array.isArray(arr) && arr.some((e) => regexPattern.test(e));
          })
      );
    }
    if (selectedOptions && selectedOptions.author) {
      filteredProjects = searchProject(
        filteredProjects,
        selectedOptions.author,
        "author"
      );
    }

    if (selectedOptions && selectedOptions.project) {
      filteredProjects = searchProject(
        filteredProjects,
        selectedOptions.project,
        "project"
      );
    }

    return [...new Set(filteredProjects)];
  };

  const handleClear = () => {
    if (
      selectedOptions.author !== "" ||
      selectedOptions.project !== "" ||
      selectedOptions.techStack.length != 0
    ) {
      handleOptionClick("clear", "");
      // getProjects();
    }
  };
  return (
    <section className="my-8 max-w-6xl w-11/12 mx-auto sm:my-10">
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 110,
          delay: 0.2,
        }}
        className="text-[2.5rem] font-bold text-center text-white"
      >
        Search for <span className="text-primary">cool</span> Projects
      </Motion.div>
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 110,
          delay: 0.3,
        }}
        className="flex items-center justify-center my-7 mx-20"
      >
        <input
          type="text"
          id="combo-box-demo"
          placeholder="Search by project name"
          className={`border-2 text-white outline-none duration-200  border-gray-700 hover:border-primary rounded-md p-2  bg-transparent `}
          onChange={(e) => {
            handleOptionClick && handleOptionClick("project", e.target.value);
          }}
          value={selectedOptions.project}
        />
      </Motion.div>
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 110,
          delay: 0.4,
        }}
        className="flex items-stretch"
      >
        <button
          className="border border-gray-600 hover:border-gray-500 rounded-md p-2 flex items-stretch text-white"
          onClick={() => setOpenFilter(!openFilter)}
        >
          Filter{" "}
          <div className="ml-2 ">
            {filterCount > 0 ? (
              <div className="bg-primary rounded-sm px-3 text-white">
                {filterCount}
              </div>
            ) : (
              <div className="mt-1">
                <BsFilter />
              </div>
            )}
          </div>
        </button>
        {filterCount > 0 && (
          <button
            className=" rounded-md border  border-gray-600 hover:border-gray-500 py-2 px-3 mx-2 text-white"
            onClick={() => handleClear()}
          >
            <MdClear />
          </button>
        )}
      </Motion.div>

      <Transition appear show={openFilter} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenFilter(false)}
        >
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
                    color: "black",
                  }}
                >
                  <div className="flex justify-end w-full">
                    <button
                      className="bg-red-600 hover:bg-red-500 rounded-md border p-2 mx-2 gap-1 text-white"
                      onClick={() => setOpenFilter(false)}
                    >
                      <MdClear />
                    </button>
                  </div>
                  <div className="flex items-center justify-center my-7 mx-20">
                    <input
                      type="text"
                      id="combo-box-demo"
                      placeholder="Search by author name"
                      className="border-solid border-2 outline-none border-primary rounded-md p-2"
                      style={{ color: "black" }}
                      onChange={(e) =>
                        handleOptionClick("author", e.target.value)
                      }
                      value={selectedOptions.author}
                    />
                  </div>
                  <div className="flex flex-wrap justify-start md:justify-center m-4 gap-2">
                    {techStack.map((tech, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => handleOptionClick("techStack", tech)}
                        className={`${
                          selectedOptions.techStack &&
                          selectedOptions.techStack.includes(tech)
                            ? "bg-primary"
                            : "border border-primary"
                        } rounded-sm p-2`}
                        style={{
                          color: "black",
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

      <div>
        {visibleProjects.length > 0 ? (
          <InfiniteScroll
            className="my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh] "
            dataLength={visibleProjects.length}
            next={loadMoreProjects}
            hasMore={visibleProjects.length < Projects.length}
            loader={
              <>
                <Loading.AllProjects />
                <Loading.AllProjects />
                <Loading.AllProjects />
              </>
            }
            endMessage={
              <p style={{ textAlign: "center" }} className="py-5">
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {(searchitem.length == 0 ? visibleProjects : searchitem).map(
              (project: NewProjectsType, index: number) => (
                <ProjectCard
                  index={index}
                  key={index}
                  project={project}
                  filter={
                    selectedOptions.techStack &&
                    selectedOptions.techStack.join(",")
                  }
                />
              )
            )}
          </InfiniteScroll>
        ) : (
          <div className="flex justify-center items-center h-[50vh]">
            <h1 className="text-2xl font-bold text-center text-white ">
              No Projects Found
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
