# Follow these steps to contribute

**Understand the Project:**

Familiarize yourself with the project's objectives, architecture, and existing codebase. This will enable you to make informed contributions that align with the project's goals.

**Choose an Issue/Create an issue:**

Create an issue or work on the existing issue if you're assigned. Also, if you're in `GSSOC'23`, please add `"I'm in GSSOC'23"` so that we can add the `GSSOC'23` label on that particular issue/PR.

**Assign an Issue Number:**

Assign the `#ISSUE_NUMBER` in the description of the PR request.

**Work on Your assigned issue first:**

We kindly request that you prioritize working on your assigned issue at this time. It is highly recommended that you begin by creating an issue before proceeding to create a pull request. By doing so, you can outline the problem or task at hand and facilitate a smoother workflow. Once the issue is established, please proceed to implement the necessary changes, address any bugs, or incorporate new features to effectively resolve the selected issue/task.

**Commit Your Changes:**

Once you have made significant progress or completed your contribution, commit your changes with a descriptive commit message. It is advisable to make frequent, small commits to make the review process more manageable. Please check [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## DO NOT SPAM !!! ⚠

If the manatainer or owner finds any blank issue or any kind of unethical behaviour from a certain individual, he/she will labeled as `SPAM` and will be prohibited from any kind of contribution or participation in future in this project.

# 😎 How to add your projects to ProjectsHut

1. Fork this repository

![ Fork this repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. Click on `Go to file`

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. Add following code to end of `src/DB/projects.json`

```json
{
  "github_username": "YOUR_GITHUB_USERNAME",
  "Social_media": {
    "gitHub": "YOUR_GITHUB_ACCOUNT_LINK",
    "LinkedIn": "YOUR_LINKEDIN_ACCOUNT_LINK",
    "Instagram": "YOUR_INSTAGRAM_ACCOUNT_LINK",
    "YouTube": "YOUR_YOUTUBE_ACCOUNT_LINK",
    "Twitter": "YOUR_TWITTER_ACCOUNT_LINK"
  },
  "Projects": [
    {
      "link": "PROJECT_LINK",
      "title": "PROJECT_NAME",
      "description": "PROJECT_DESCRIPTION",
      "tech": "[tech1,tech2]"
    }
  ]
}
```

4. Commit all changes.

- add a commit like this for only projects addition `data: project addition by [your-githubuser-name] #issue_number`

> ### OR, If you want to run it locally then follow these

1.  Clone it to your computer

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

2.  Navigate to the project folder

```
cd ProjectsHut
```

3. Rename `.env.example` to `.env` & add your `GitHub Personal Access Token` in `.env` file

4. install dependencies

```
pnpm i
```

5.  Create a new branch using your `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

6.  Run in local

```
pnpm dev
```

7. Make sure all the test cases pass

```
pnpm test
```

8. Add your changes.

```diff
git add .
```

9. Add your commits

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

10. Set upstream command

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

11. Push your commits

```diff
git push -u origin [Your-branch-name]
```

12. Create a PR

> ### Now Wait for the merge
