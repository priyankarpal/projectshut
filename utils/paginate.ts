export const shuffleProjects = (project:any) => {
  let i = project.length;

  let j = 0;

  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element

    temp = project[i];

    project[i] = project[j];

    project[j] = temp;
  }

  return project;
};
