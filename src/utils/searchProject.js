export const searchProject = (projects, name) => {
  let resultArr = [];
  if (name.length > 0) {
    for (const project of projects) {
      for (const item of project.Projects) {
        if (item.title.toLowerCase().includes(name.toLowerCase())) {
          resultArr.push(project);
          break;
        }
      }
    }
  }

  return resultArr;
};
