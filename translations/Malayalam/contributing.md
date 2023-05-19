# 😎 ProjectsHut ലേക്ക് നിങ്ങളുടെ കോഡ് സംഭാവന ചെയ്യുക

## 🧐 സംഭാവന ചെയ്യാൻ ഈ ഘട്ടങ്ങൾ പാലിക്കുക

- നിങ്ങൾ ഒരു PR/issue സൃഷ്ടിക്കുമ്പോഴെല്ലാം നല്ല തലക്കെട്ടും വിവരണവും ചേർക്കുക
- നല്ല commit സന്ദേശങ്ങൾ ചേർക്കുക
- ആവശ്യമെങ്കിൽ സ്‌ക്രീൻഷോട്സും ചേർക്കുക

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/priyankarpal/ProjectsHut)

1. ഈ repository ഫോർക്ക് ചെയ്യുക

![ Fork this repository](https://user-images.githubusercontent.com/88102392/226444075-7d7d28b5-8d88-459a-bb82-38a3f64aaf28.png)

2. `Go to file` -ൽ ക്ലിക്ക് ചെയ്യുക

![Go to file](https://user-images.githubusercontent.com/88102392/226444608-12a2abb9-436c-4843-8893-49029cb4c033.png)

3. `src/DB/projects.json`-ന്റെ അവസാനത്തിൽ ഇനിപ്പറയുന്ന കോഡ് ചേർക്കുക

```json
{
  "gh-username": "YOUR-GITHUB-USERNAME",
  "link": "LINK-TO-GITHUB-OR-DEMO",
  "title": "PROJECT-TITLE",
  "description": "PROJECT-DESCRIPTION",
  "tech": ["some tech 1", "some tech 2", "etc"]
}
```

> ### നിങ്ങൾക്ക് ഇത് ലോക്കലായി റൺ ചെയ്യണമെങ്കിൽ ഇവ പിന്തുടരുക

4. ഇത് നിങ്ങളുടെ കമ്പ്യൂട്ടറിലേക്ക് clone ചെയ്യുക

```
 git clone https://github.com/[your-username]/ProjectsHut.git
```

5. പ്രോജക്റ്റ് ഫോൾഡറിലേക്ക് navigate ചെയ്യുക

```
cd ProjectsHut
```

6. `.env.example` എന്നതിനെ `.env` എന്ന് പുനർനാമകരണം ചെയ്യുകയും `.env` ഫയലിൽ നിങ്ങളുടെ `GitHub Personal Access Token` ചേർക്കുകയും ചെയ്യുക 

7. ഡിപൻഡൻസികൾ ഇൻസ്റ്റാൾ ചെയ്യുക

```
pnpm i
```

8.  ലോക്കലായി റൺ ചെയ്യുക 

```
pnpm dev
```

9.  നിങ്ങളുടെ `GitHub Username` ഉപയോഗിച്ച് ഒരു പുതിയ ബ്രാഞ്ച് സൃഷ്ടിക്കുക

```diff
git checkout -b [name_of_your_new_branch]
```

10. എല്ലാ ടെസ്റ്റ് കേസുകളും പാസ്സ് ആയെന്ന്  ഉറപ്പാക്കുക

```
pnpm test
```

11. നിങ്ങളുടെ മാറ്റങ്ങൾ add ചെയ്യുക 

```diff
git add .
```

12. നിങ്ങളുടെ commits add ചെയ്യുക 

```diff
git commit -m "Your Changes"
```

> കമ്മിറ്റ് ചെയ്യുമ്പോൾ ഈ error വരുകയാണെങ്കിൽ 
>
> ```diff
> husky - pre-commit hook exited with code 1(error)
> ```
>
> ഈ കമാൻഡ് ഉപയോഗിക്കുക
>
> ```diff
> pnpm format
> ```

13. Upstream കമാൻഡ് സെറ്റ് ചെയ്യുക

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

14. നിങ്ങളുടെ commits Push ചെയ്യുക

```diff
git push -u origin [Your-branch-name]
```

15. ഒരു PR സൃഷ്ടിക്കുക

16. Merge നായി  കാത്തിരിക്കുക
