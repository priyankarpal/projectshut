'use client'
import { NextPage } from 'next'
import React, { useEffect, useState, Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Dialog, Transition } from '@headlessui/react'
import { Filter } from 'react-feather'
import techStack from '../../utils/techStack'
import { searchProject } from '../../utils/searchProject'
import ProjectLoading from '../../components/ProjectLoading'
import { shuffleProjects } from '../../utils/paginate'
import ProjectCard from '../../components/ProjectCard'
import { useRouter } from 'next/navigation'
import { Footer, Navbar } from '@/components'
import demo from '@/DB/demo.json'

interface NewProjectsType {
  username: string
  link: string
  title: string
  description: string
  tech: string[]
}

interface SelectedOptions {
  author: string
  project: string
  techStack: string[]
}

interface UserProjectType {
  username: string
  link: string
  title: string
  description: string
  tech:string[]
  // projectName: String
  // username: String
  // image: String
  // link: string
  // description: String
  // projectUrl: String
  // language: String[]
}

const ProjectsPage: NextPage = () => {

  const [limit, setLimit] = useState(15)

  const [openFilter, setOpenFilter] = useState(false)
  const [filterCount, setFilterCount] = useState(0)
  const router = useRouter()
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    author: '',
    project: '',
    techStack: [],
  })

  const [searchitem, setSearchItem] = useState<any>([])
  const [userProjects, setUserProjects] = useState<UserProjectType[]>([])
  const [initialLoading, setInitialLoading] = useState(true)
  const [visibleProjects, setVisibleProjects] = useState<UserProjectType[]>([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    setInitialLoading(true)
    let arr: UserProjectType[] = []

    for (let index = 0; index < demo.length; index++) {
      let owner = demo[index].owner
      let projects = demo[index].projects
      for (let idx = 0; idx < projects.length; idx++) {
        const res = await fetch(
          `https://api.github.com/repos/${owner}/${projects[idx]}`
        ).then((result) => result.json())
        if (res) {
          console.log(res)
          arr.push({
            username: res?.owner?.login,
            link: res.html_url,
            title: res.name,
            description: res?.description,
            tech: res.language,
          })
        }
      }
      setInitialLoading(false)
      setUserProjects(arr)
      setVisibleProjects(shuffleProjects(arr).slice(0, limit))
    }
  }
  
 
  useEffect(() => {
    // Set URL based on option selection
    const updatedParams = new URLSearchParams()
    let techStackNames: string = ''
    let authorName: string = ''
    let projectName: string = ''

    if (selectedOptions.techStack.length > 0) {
      techStackNames = selectedOptions.techStack.join(',')
      updatedParams.append('filters', techStackNames)
    }

    if (selectedOptions.author.length > 0) {
      authorName = selectedOptions.author
      updatedParams.append('author', authorName)
    }

    if (selectedOptions.project.length > 0) {
      projectName = selectedOptions.project
      updatedParams.append('project', projectName)
    }

    const fullPath = `${window.location.pathname}?${updatedParams}`

    router.push(fullPath)
  }, [selectedOptions, router])

  const handleOptionClick = (type: string, option: string) => {
    const updatedOptions: SelectedOptions = { ...selectedOptions }
    // Assign value based on types, e.g., author/project/tech-stack
    if (type === 'author') {
      updatedOptions.author = option
    }
    if (type === 'project') {
      updatedOptions.project = option
    }
    if (type === 'techStack' && updatedOptions.techStack) {
      const isSelected = updatedOptions.techStack.includes(option)
      if (isSelected) {
        updatedOptions.techStack = updatedOptions.techStack.filter(
          (selected) => selected !== option
        )
      } else {
        updatedOptions.techStack.push(option)
      }
    }
    // To clear all selected options
    if (type === 'clear') {
      updatedOptions.techStack = []
      updatedOptions.author = ''
      updatedOptions.project = ''
    }

    setSelectedOptions(updatedOptions)
  }

  function loadMoreProjects() {
    if (searchitem.length == 0) {
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
        setVisibleProjects(userProjects.slice(0, limit + 15))
      }, 1200)
    }
  }

  useEffect(() => {
    let count = 0
    if (selectedOptions.author && selectedOptions.author.length > 0) {
      count += 1
    }
    count += selectedOptions.techStack && selectedOptions.techStack.length
    setFilterCount(count)
  }, [selectedOptions])

  const getProjects = (selectedOptions?: any) => {
    const currProjects = getFilteredProjects(selectedOptions)
    setVisibleProjects(currProjects)
    if (
      (selectedOptions &&
        selectedOptions.project &&
        selectedOptions.project.length !== 0) ||
      (selectedOptions &&
        selectedOptions.techStack &&
        selectedOptions.techStack.length !== 0)
    ) {
      setSearchItem(currProjects)
    } else {
      setSearchItem([])
    }
    if (
      selectedOptions &&
      selectedOptions.techStack &&
      selectedOptions.techStack.length === 0 &&
      !selectedOptions.author &&
      !selectedOptions.project
    ) {
      setLimit(15)
      setVisibleProjects(userProjects.slice(0, 15))
      return
    }
  }

  useEffect(() => {
    getProjects(selectedOptions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions])

  const getFilteredProjects = (selectedOptions?: any) => {
    let filteredProjects = userProjects

    if (
      selectedOptions &&
      selectedOptions.techStack &&
      selectedOptions.techStack.length > 0
    ) {
      filteredProjects = selectedOptions.techStack.flatMap(
        (tech: string | RegExp) =>
          userProjects.filter((obj) => {
            const arr = obj.tech
            const regexPattern = new RegExp(tech, 'i')
            return Array.isArray(arr) && arr.some((e) => regexPattern.test(e))
          })
      )
    }
    if (selectedOptions && selectedOptions.author) {
      filteredProjects = searchProject(
        filteredProjects,
        selectedOptions.author,
        'author'
      )
    }

    if (selectedOptions && selectedOptions.project) {
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
    <>
      <Navbar />
     {!initialLoading?<section className='my-8 max-w-6xl w-11/12 mx-auto sm:my-10'>
        <div className='text-[2.5rem] font-bold text-center text-white'>
          Search for <span className='text-primary'>cool </span> Projects
        </div>
        <div className='flex items-center justify-center my-7 mx-20'>
          <input
            type='text'
            id='combo-box-demo'
            placeholder='Search by project name'
            className={`border-2 text-white outline-none border-primary rounded-md p-2  bg-transparent `}
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
            <div className='ml-2 '>
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

        <div>
          {visibleProjects.length > 0 ? (
            <InfiniteScroll
              className='my-7 min-h-[34vh] sm:grid sm:grid-cols-2 sm:auto-rows-min sm:gap-x-2 sm:gap-y-4 sm:justify-items-center sm:items-center sm:min-h-[37vh] md:gap-x-3 md:min-h-[50vh] lg:grid-cols-3 lg:min-h-[60vh] xl:min-h-[70vh]'
              dataLength={visibleProjects.length}
              next={loadMoreProjects}
              hasMore={visibleProjects.length < userProjects.length}
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
              {(searchitem.length == 0 ? visibleProjects : searchitem).map(
                (project: NewProjectsType, index: number) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    filter={
                      selectedOptions.techStack &&
                      selectedOptions.techStack.join(',')
                    }
                  />
                )
              )}
            </InfiniteScroll>
          ) : (
            <div className='flex justify-center items-center h-[50vh]'>
              <h1 className='text-2xl font-bold text-center'>
                No Projects Found
              </h1>
            </div>
          )}
        </div>
      </section>:
      <div className="text-white">Loading</div>}
      <Footer />
    </>
  )
}

export default ProjectsPage
