/* eslint-disable padded-blocks */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
export const searchProject = (projects, title) => {
  let resultArr = [];
  if (title.length > 0) {
    for (const project of projects) {
      if (project.title.toLowerCase().includes(title.toLowerCase())) {
        resultArr.push(project);
      }
    }
  }

  return resultArr;
};
