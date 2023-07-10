export const shuffleProjects = (projects: any) => {
  let i = projects.length;

  while (i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [projects[i], projects[j]] = [projects[j], projects[i]];
  }

  return projects;
};
