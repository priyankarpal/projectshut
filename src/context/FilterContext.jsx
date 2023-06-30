/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({ author: '', project: '', techStack: [] });
  useEffect(() => {
    // set url based on option selection
    const updatedParams = new URLSearchParams();
    let techStackNames;
    let authorName;
    let projectName;
    if (selectedOptions.techStack.length > 0) {
      techStackNames = selectedOptions.techStack?.join(',');
      updatedParams.append('filters', techStackNames);
    }
    if (selectedOptions.author.length > 0) {
      authorName = selectedOptions.author;
      updatedParams.append('author', authorName);
    }
    if (selectedOptions.project.length > 0) {
      projectName = selectedOptions.project;
      updatedParams.append('project', projectName);
    }

    const decodedParams = decodeURIComponent(updatedParams);

    navigate({ search: techStackNames || authorName || projectName ? decodedParams : null });
  }, [selectedOptions]);

  const handleOptionClick = (type, option) => {
    // assigning value based on types, eg: author/project/tech-stack
    if (type === 'author') {
      selectedOptions.author = option;
    }
    if (type === 'project') {
      selectedOptions.project = option;
    }
    if (type === 'tech-stack' && selectedOptions.techStack) {
      const isSelected = selectedOptions.techStack.includes(option);
      if (isSelected) {
        const updatedOptions = selectedOptions.techStack.filter((selected) => selected !== option);
        selectedOptions.techStack = updatedOptions;
      } else {
        selectedOptions.techStack.push(option);
      }
    }

    // to clear all selected options
    if (type === 'clear') {
      selectedOptions.techStack = [];
      selectedOptions.author = '';
      selectedOptions.project = '';
    }
    setSelectedOptions({ ...selectedOptions });
  };

  return <FilterContext.Provider value={{ selectedOptions, handleOptionClick }}>{children}</FilterContext.Provider>;
}
