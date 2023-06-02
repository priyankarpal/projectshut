import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const existingFilters = queryParams.get('filters')?.split(',');

  const [selectedOptions, setSelectedOptions] = useState(existingFilters || []);

  useEffect(() => {
    const updatedParams = new URLSearchParams();
    const techStackNames = selectedOptions?.join(',');
    updatedParams.append('filters', techStackNames);
    const decodedParams = decodeURIComponent(updatedParams);
    navigate({ search: techStackNames ? decodedParams : null });
  }, [selectedOptions]);

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.includes(option);

    if (isSelected) {
      const updatedOptions = selectedOptions.filter((selected) => selected !== option);
      setSelectedOptions(updatedOptions);
    } else {
      const updatedOptions = [...selectedOptions, option];
      setSelectedOptions(updatedOptions);
    }
  };

  return <FilterContext.Provider value={{ selectedOptions, handleOptionClick }}>{children}</FilterContext.Provider>;
};
