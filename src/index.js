//  JS Code to display currnet stargazers count of the repository on the website

async function fetchProjects() {
  const url = "https://api.github.com/repos/priyankarpal/ProjectsHut";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchProjects()
  .then((data) => {
    const stargazersCount = data.stargazers_count;
    // Display the fetched data on HTML elements
    document.getElementById("stargazers-count").textContent = stargazersCount;
  })
  .catch((error) => {
    console.error(error);
  });
