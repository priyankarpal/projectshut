export const searchProject = (projects: any, title: string, type: string) => {
  return title.length > 0
    ? projects.filter((project: any) =>
        type === "project"
          ? project.title.toLowerCase().includes(title.toLowerCase())
          : type === "author"
          ? project.username.toLowerCase().includes(title.toLowerCase())
          : false
      )
    : [];
};
