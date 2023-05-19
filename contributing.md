# 😎 Contribute your Code to ProjectsHut

## 🧐 Follow these steps to Contribute

- whenever you create a PR/issue please add a good title & description
- add good commit messages
- add screenshots if needed

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. Fork this repository

![ Fork this repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. Click on `Go to file`

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Add following code to end of `src/DB/projects.json`

```json
{
  "gh-username": "YOUR-GITHUB-USERNAME",
  "link": "LINK-TO-GITHUB-OR-DEMO",
  "title": "PROJECT-TITLE",
  "description": "PROJECT-DESCRIPTION",
  "tech": ["some tech 1", "some tech 2", "etc"]
}
```

> ### If you want to run it locally then follow these

4.  Clone it to your computer

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5.  Navigate to the project folder

```
cd ProjectsHut
```

6. Rename `.env.example` to `.env` & add your `GitHub Personal Access Token` in `.env` file

7. install dependencies

```
pnpm i
```

8.  run in local

```
pnpm dev
```

9.  Create a new branch using your `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

10. Make sure all the test cases pass

```
pnpm test
```

11. Add your changes.

```diff
git add .
```

12. Add your commits

```diff
git commit -m "Your Changes"
```

> If you encounter this error while commits
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> use this command
>
> ```diff
> pnpm format
> ```

13. Set upstream command

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

14. Push your commits

```diff
git push -u origin [Your-branch-name]
```

15. Create a PR

16. Wait for merge
