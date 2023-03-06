# 😎 Contribute your Code to ProjectsHut

#### Make sure you've basic knowledge of these

- [Git](https://git-scm.com)
- [GitHub](https://github.com)
- [JSON](https://www.w3schools.com/js/js_json_intro.asp)

## 🧐 Follow these steps to Contribute
> Also you can add your code through Gitpod 
> [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1.  Fork this repository
2.  Clone it to your computer `git clone https://github.com/your-username/ProjectsHut.git`
3.  Navigate to the project folder `cd ProjectsHut`
4.  Add your projects to here

    
 - add following code to end of `src/DB/projects.json`




```json
{
  "gh-username": "YOUR-GITHUB-USERNAME",
  "link": "LINK-TO-GITHUB-OR-DEMO",
  "title": "PROJECT-TITLE",
  "description": "PROJECT-DESCRIPTION",
  "tech": ["some tech 1", "some tech 2", "etc"]
}
```

 > If you want to run it locally then follow these
 >  - install dependencies `yarn`
 >  - run in local `yarn run dev`

5.  Create a new branch using your `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

6. Add your changes.

```diff
git add .
```

7. Add your commits

```diff
git commit -m "Your Changes"
```

8. Set upstream command

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

9. Push your commits

```diff
git push -u origin [Your-branch-name]
```

10. Create a PR

11. Wait for merge
