/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
export const searchProject = (projects, word) => {
  const resultArr = [];
  if (word.length > 0) {
    for (const project of projects) {
      if (project.title.toLowerCase().includes(word.toLowerCase())) {
        resultArr.push(project);
      }
    }
  }

  return resultArr;
};