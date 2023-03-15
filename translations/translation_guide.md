# Translation Guide

## 📌 Currently Translated Languages

The original text is written in English and is currently translated into the following languages:

- Korean

## 📄 Document List

You need to translate the document below.

- [CODE_OF_CONDUCT.md](https://github.com/priyankarpal/ProjectsHut/blob/main/CODE_OF_CONDUCT.md)
- [contributing.md](https://github.com/priyankarpal/ProjectsHut/blob/main/contributing.md)
- [README.md](https://github.com/priyankarpal/ProjectsHut/blob/main/README.md)

## 💡 Translation Tip

- Translating [CODE_OF_CONDUCT.md](https://github.com/priyankarpal/ProjectsHut/blob/main/CODE_OF_CONDUCT.md) is helpful to read Contributor Covenant's [Translations](https://www.contributor-covenant.org/translations/) documentation. It includes a version, so please check the version carefully.

## ✒ How to contribute to translation

- Convert official language to your native language. It would ne better for new comers to contribute to this project.

### Run it on GitHub Website

1. Fork repository
   ![ Fork this repository](/images/fork.png)
2. Click on `translations` folder and create a folder with the name of the language you want to translate.

3. Add the translated documents in folder you have created.

4. Create PR (Pull Request) to contribute translation

5. Wait for merge.

### Run it Locally

1. Fork repository
   ![ Fork this repository](/images/fork.png)
2. Clone it to your computer

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

3.  Navigate to the project folder

```
cd ProjectsHut
```

4.  install dependencies

```
yarn
```

5.  run in local

```
yarn run dev
```

6.  Create a new branch using your `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

7. Create a folder with the name of the language you want to translate in `translations` folder.

8. Add the translated documents in folder you have created.

9. Add your changes.

```diff
git add .
```

10. Add your commits

```diff
git commit -m "Your Changes"
```

11. Set upstream command

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

12. Push your commits

```diff
git push -u origin [Your-branch-name]
```

13. Create a PR

14. Wait for merge
