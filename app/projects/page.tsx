import { NextPage } from 'next'
import React, { useContext, useEffect, useState, Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Dialog, Transition } from '@headlessui/react'
import { Filter } from 'react-feather'
import techStack from '../../utils/techStack'
import { FilterContext, FilterContextType } from '../../context/FilterContext'
import { searchProject } from '../../utils/searchProject'
import ProjectLoading from '../../components/ProjectLoading'
import { shuffleProjects } from '../../utils/paginate'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../DB/projects.json'

interface NewProjectsType {
  username: string
  link: string
  title: string
  description: string
  tech: string[]
}

const ProjectsPage: NextPage = () => {
  const Projects: NewProjectsType[] = []

  projects.forEach((project) => {
    const username = project.github_username
    project.Projects.forEach((proj) => {
      Projects.push({ ...proj, username })
    })
  })

  const { selectedOptions, handleOptionClick } =
    useContext<FilterContextType>(FilterContext)

  const [limit, setLimit] = useState(15)
  const [visibleProjects, setVisibleProjects] = useState(
    shuffleProjects(Projects).slice(0, limit)
  )
  const [openFilter, setOpenFilter] = useState(false)
  const [filterCount, setFilterCount] = useState(0)

  function loadMoreProjects() {
    if (
      selectedOptions.techStack &&
      selectedOptions.techStack.length !== 0 &&
      selectedOptions.author.length > 0 &&
      selectedOptions.project.length > 0
    ) {
      setLimit(visibleProjects.length)
      return
    }
    setTimeout(() => {
      setLimit(limit + 15)
      setVisibleProjects(Projects.slice(0, limit + 15))
    }, 1200)
  }

  useEffect(() => {
    let count = 0
    if (selectedOptions.author && selectedOptions.author.length > 0) {
      count += 1
    }
    count += selectedOptions.techStack && selectedOptions.techStack.length
    setFilterCount(count)
  }, [selectedOptions])

  const getProjects = () => {
    if (
      selectedOptions.techStack &&
      selectedOptions.techStack.length === 0 &&
      !selectedOptions.author &&
      !selectedOptions.project
    ) {
      setLimit(15)
      setVisibleProjects(Projects.slice(0, 15))
      return
    }

    const currProjects = getFilteredProjects()
    setVisibleProjects(currProjects)
  }

  useEffect(() => {
    getProjects()
  }, [selectedOptions])

  const getFilteredProjects = () => {
    let filteredProjects = Projects

    if (selectedOptions.techStack && selectedOptions.techStack.length > 0) {
      filteredProjects = selectedOptions.techStack.flatMap(
        (tech: string | RegExp) =>
          Projects.filter((obj) => {
            const arr = obj.tech
            const regexPattern = new RegExp(tech, 'i')
            return Array.isArray(arr) && arr.some((e) => regexPattern.test(e))
          })
      )
    }

    if (selectedOptions.author) {
      filteredProjects = searchProject(
        filteredProjects,
        selectedOptions.author,
        'author'
      )
    }

    if (selectedOptions.project) {
      filteredProjects = searchProject(
        filteredProjects,
        selectedOptions.project,
        'project'
      )
    }

    return [...new Set(filteredProjects)]
  }

  const handleClear = () => {
    if (handleOptionClick) {
      handleOptionClick('clear', '')
      getProjects()
    }
  }

  return (
    <main className='my-8 max-w-6xl w-11/12 mx-auto sm:my-10'>
      <h1 className='text-[2.5rem] font-bold text-center text-white'>
        Search for <span className='text-primary'>cool </span> Projects
      </h1>
      <div className='flex items-center justify-center my-7 mx-20'>
        <input
          type='text'
          id='combo-box-demo'
          placeholder='Search by project name'
          className={`custom border-solid border-2 outline-none border-primary rounded-md p-2 md:w-1/2 bg-transparent text-center`}
          onChange={(e) => {
            handleOptionClick && handleOptionClick('project', e.target.value)
          }}
          value={selectedOptions.project}
        />
      </div>
      <div className='flex items-stretch'>
        <button
          className='border border-primary rounded-sm p-3 flex items-stretch text-white'
          onClick={() => setOpenFilter(!openFilter)}
        >
          Filter{' '}
          <div className='ml-2'>
            {filterCount > 0 ? (
              <div className='bg-primary rounded-sm px-3 text-white'>
                {filterCount}
              </div>
            ) : (
              <div className='mt-1'>
                <Filter size={20} />
              </div>
            )}
          </div>
        </button>
        <button
          className='border border-primary rounded-sm p-3 mx-2 text-white'
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>

      <Transition appear show={openFilter} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setOpenFilter(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex h-[30rem] items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'
                  style={{
                    color: 'black',
                  }}
                >
                  <div className='flex items-center justify-center my-7 mx-20'>
                    <input
                      type='text'
                      id='combo-box-demo'
                      placeholder='Search by author name'
                      className='border-solid border-2 outline-none border-primary rounded-md p-2'
                      style={{ color: 'black' }}
                      onChange={(e) =>
                        handleOptionClick('author', e.target.value)
                      }
                      value={selectedOptions.author}
                    />
                  </div>
                  <div className='flex flex-wrap justify-start md:justify-center m-4 gap-2'>
                    {techStack.map((tech, index) => (
                      <button
                        type='button'
                        key={index}
                        onClick={() => handleOptionClick('techStack', tech)}
                        className={`${
                          selectedOptions.techStack &&
                          selectedOptions.techStack.includes(tech)
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

      <section>
        {visibleProjects.length > 0 ? (
          <InfiniteScroll
            className='my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh]'
            dataLength={visibleProjects.length}
            next={loadMoreProjects}
            hasMore={visibleProjects.length < Projects.length}
            loader={
              <>
                <ProjectLoading />
                <ProjectLoading />
                <ProjectLoading />
              </>
            }
            endMessage={
              <p style={{ textAlign: 'center' }} className='py-5'>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {visibleProjects.map((project: NewProjectsType, index: number) => (
              <ProjectCard
                key={index}
                project={project}
                filter={
                  selectedOptions.techStack &&
                  selectedOptions.techStack.join(',')
                }
              />
            ))}
          </InfiniteScroll>
        ) : (
          <div className='flex justify-center items-center h-[50vh]'>
            <h1 className='text-2xl font-bold text-center'>
              No Projects Found
            </h1>
          </div>
        )}
      </section>
    </main>
  )
}

export default ProjectsPage
