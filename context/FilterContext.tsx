import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SelectedOptions {
  author: string;
  project: string;
  techStack: string[];
}

export interface FilterContextType {
  selectedOptions: SelectedOptions;
  handleOptionClick: (type: string, option: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  selectedOptions: {
    author: "",
    project: "",
    techStack: [],
  },
  handleOptionClick: (type = "", option = "") => {},
});

export function FilterProvider({ children }: { children: React.ReactNode }) {
  console.log("conect");
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    author: "",
    project: "",
    techStack: [],
  });
  useEffect(() => {
    console.log("insid is selected");
    // Set URL based on option selection
    const updatedParams = new URLSearchParams();
    let techStackNames: string | null = null;
    let authorName: string | null = null;
    let projectName: string | null = null;

    if (selectedOptions.techStack.length > 0) {
      techStackNames = selectedOptions.techStack.join(",");
      updatedParams.append("filters", techStackNames);
    }

    if (selectedOptions.author.length > 0) {
      authorName = selectedOptions.author;
      updatedParams.append("author", authorName);
    }

    if (selectedOptions.project.length > 0) {
      projectName = selectedOptions.project;
      updatedParams.append("project", projectName);
    }

    const query = `?${techStackNames || authorName || projectName || ""}`;
    const fullPath = `${window.location.pathname}${query}`;

    router.push(fullPath);
  }, [selectedOptions, router]);

  const handleOptionClick = (type: string, option: string) => {
    console.log("inside handleOptionClick");
    const updatedOptions: SelectedOptions = { ...selectedOptions };

    // Assign value based on types, e.g., author/project/tech-stack
    if (type === "author") {
      updatedOptions.author = option;
    }
    if (type === "project") {
      updatedOptions.project = option;
    }
    if (type === "tech-stack" && updatedOptions.techStack) {
      const isSelected = updatedOptions.techStack.includes(option);
      if (isSelected) {
        updatedOptions.techStack = updatedOptions.techStack.filter(
          (selected) => selected !== option
        );
      } else {
        updatedOptions.techStack.push(option);
      }
    }

    // To clear all selected options
    if (type === "clear") {
      updatedOptions.techStack = [];
      updatedOptions.author = "";
      updatedOptions.project = "";
    }

    setSelectedOptions(updatedOptions);
  };

  return (
    <FilterContext.Provider value={{ selectedOptions, handleOptionClick }}>
      {children}
    </FilterContext.Provider>
  );
}
