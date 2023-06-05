export const searchProject = (projects, title) => {
  let resultArr = [];
  if (title.length > 0) {
    for (const project of projects) {
        if (project.title.toLowerCase().includes(title.toLowerCase())) {
          resultArr.push(project);
          break;
        }
    }
  }

  return resultArr;
};
