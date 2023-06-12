/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable spaced-comment */
//used Fisher–Yates Shuffle to avoid the expensive array operations

export const shuffleProjects = (project) => {
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
