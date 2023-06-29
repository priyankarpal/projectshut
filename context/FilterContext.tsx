/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
// import { useNavigate } from "react-router-dom";

// interface FilterContextType {
//   selectedOptions: SelectedOptionType
//   handleOptionClick: (type: string, option: string) => void
// }
// interface SelectedOptionType {
//   author: string
//   project: string
//   teckStack: string[]
// }
// export const FilterContext = createContext<FilterContextType | undefined>(
//   undefined
// )

// export function FilterProvider({ children }: { children: React.ReactNode }) {
//   const router = useRouter()
//   const [selectedOptions, setSelectedOptions] = useState({
//     author: '',
//     project: '',
//     techStack: [],
//   })
//   useEffect(() => {
//     // set url based on option selection
//     const updatedParams = new URLSearchParams()
//     let techStackNames: string | null = null
//     let authorName: string | null = null
//     let projectName: string | null = null
//     if (selectedOptions.techStack.length > 0) {
//       techStackNames = selectedOptions.techStack?.join(',')
//       updatedParams.append('filters', techStackNames)
//     }
//     if (selectedOptions.author.length > 0) {
//       authorName = selectedOptions.author
//       updatedParams.append('author', authorName)
//     }
//     if (selectedOptions.project.length > 0) {
//       projectName = selectedOptions.project
//       updatedParams.append('project', projectName)
//     }

//     const decodedParams = decodeURIComponent(updatedParams.toString())

//     router.push(
//       `${window.location.pathname}?${
//         techStackNames || authorName || projectName || ''
//       }`
//     )
//   }, [selectedOptions, router])

//   const handleOptionClick = (type: string, option: string) => {
//     const updatedOption: SelectedOptionType = { ...selectedOptions }
//     // assigning value based on types, eg: author/project/tech-stack
//     if (type === 'author') {
//       updatedOption.author = option
//     }
//     if (type === 'project') {
//       updatedOption.project = option
//     }
//     if (type === 'tech-stack' && updatedOption.techStack) {
//       const isSelected = updatedOption.techStack.includes(option)
//       if (isSelected) {
//         const updatedOptions = updatedOption.techStack.filter(
//           (selected) => selected !== option
//         )
//         // updatedOption.techStack = updatedOptions
//       } else {
//         updatedOption.techStack.push(option)
//       }
//     }

//     // to clear all selected options
//     if (type === 'clear') {
//       updatedOption.techStack = []
//       updatedOption.author = ''
//       updatedOption.project = ''
//     }
//     setSelectedOptions(updatedOption)
//   }

//   const contextValue: FilterContextType = {
//     selectedOptions,
//     handleOptionClick,
//   }
//   return (
//     <FilterContext.Provider value={contextValue}>
//       {children}
//     </FilterContext.Provider>
//   )
// }

interface SelectedOptions {
  author: string
  project: string
  techStack: string[]
}

export interface FilterContextType {
  selectedOptions: SelectedOptions
  handleOptionClick: (type: string, option: string) => void
}

export const FilterContext = createContext<FilterContextType>({
  selectedOptions: {
    author: '',
    project: '',
    techStack: [],
  },
  handleOptionClick: (type = '', option = '') => {},
})
// export const FilterContext = createContext<FilterContextType | undefined>(
//   undefined
// )
// export const FilterContext = createContext<FilterContextType | null>(null)

export function FilterProvider({ children }: { children: React.ReactNode }) {
  console.log('conect')
  const router = useRouter()
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    author: '',
    project: '',
    techStack: [],
  })
  // useEffect(() => {
  //   // Load the selected options from JSON or any other data source
  //   const savedOptions  // Replace with your own implementation
  //   setSelectedOptions(savedOptions)
  // }, [])
  useEffect(() => {
    console.log('insid is selected')
    // Set URL based on option selection
    const updatedParams = new URLSearchParams()
    let techStackNames: string | null = null
    let authorName: string | null = null
    let projectName: string | null = null

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

    const query = `?${techStackNames || authorName || projectName || ''}`
    const fullPath = `${window.location.pathname}${query}`

    router.push(fullPath)
  }, [selectedOptions, router])

  const handleOptionClick = (type: string, option: string) => {
    console.log('inside handleOptionClick')
    const updatedOptions: SelectedOptions = { ...selectedOptions }

    // Assign value based on types, e.g., author/project/tech-stack
    if (type === 'author') {
      updatedOptions.author = option
    }
    if (type === 'project') {
      updatedOptions.project = option
    }
    if (type === 'tech-stack' && updatedOptions.techStack) {
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

  const contextValue: FilterContextType = {
    selectedOptions,
    handleOptionClick,
  }

  return (
    <FilterContext.Provider value={{ selectedOptions, handleOptionClick }}>
      {children}
    </FilterContext.Provider>
  )
}
