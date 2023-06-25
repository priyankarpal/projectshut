/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
/* eslint-disable import/prefer-default-export */
export const searchProject = (projects, title, type) => {
  let resultArr = [];
  if (title.length > 0) {
    for (const project of projects) {
      // search based on projects
      if (type === 'project') {
        if (project.title.toLowerCase().includes(title.toLowerCase())) {
          resultArr.push(project);
        }
      } else if (type === 'author') {
        // search based on authors
        if (project.username.toLowerCase().includes(title.toLowerCase())) {
          resultArr.push(project);
        }
      }
    }
  }

  return resultArr;
};
