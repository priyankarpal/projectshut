import demo from '@/DB/demo.json'

const getData = async () => {
  for (let index = 0; index < demo.length; index++) {
    let owner = demo[index].owner
    let projects = demo[index].projects
    for (let idx = 0; idx < projects.length; idx++) {
      const res = await fetch(
        `https://api.github.com/repos/${owner}/${projects[idx]}`
      ).then((result) => result.json())
      if (res) {
        console.log(res)
        // return res
      }
    }
  }
}

export default getData
