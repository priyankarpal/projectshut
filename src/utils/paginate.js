export const paginate = (projects) => {
  let shuffledProjects = shuffleProjects(projects);

  const itemsPerPage = 9;

  const pages = Math.ceil(shuffledProjects.length / itemsPerPage);

  const newProjects = Array.from({ length: pages }, (item, index) => {
    let start = itemsPerPage * index;

    return shuffledProjects.slice(start, start + itemsPerPage);
  });

  return newProjects;
};

//used Fisher–Yates Shuffle to avoid the expensive array operations

const shuffleProjects = (project) => {
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
