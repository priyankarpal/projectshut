/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
export const searchProject = (projects, name) => {
  const resultArr = [];
  if (name.length > 0) {
    for (const project of projects) {
      for (const item of project.Projects) {
        if (item.title.toLowerCase().includes(name.toLowerCase())) {
          resultArr.push(project);
        }
      }
    }
  }

  return resultArr;
};
