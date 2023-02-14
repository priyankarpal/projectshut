# 😎 Contribute your Code to ProjectsHut

#### Make sure you've basic knowledge of

- [Git](https://git-scm.com)
- [GitHub](https://github.com)
- [HTML](https://www.w3schools.com/html)

## 🧐 Follow these steps to Contribute

1.  Fork this repository
2.  Clone it to your computer `git clone https://github.com/your-username/ProjectsHut.git`
3.  Navigate to the project folder `cd ProjectsHut`
4.  Add your projects to here
    - install `npm ci`
    - add following code to HTML `index.html` after projects section

```diff
    <!-- Add Your GitHub username -->

<div class="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-white">
   <img src="https://github.com/<YOUR-GITHUB-USERNAME>.png" class="h-10 w-10 rounded-full" alt="" srcset="">
   <a href="<YOUR-PROJECT-LINK>" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
         class="ml-1.5 h-4 w-4 float-right relative bottom-10">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
   </a>
   <h2 class="mt-4 text-xl font-bold text-white">[PROJECT NAME]</h2>
   <p class="mt-1 text-sm text-gray-300">
     [PROJECT DESCRIPTION]
   </p>
   <h4 class="pt-2 text-[#A66EFC]">[TECH STACKS NAME]</h4>
</div>
```

5.  Create a new branch using your `GitHub Username`

```diff
git checkout -b [name_of_your_new_branch]
```

6. Add your commits

```diff
git commit -m "Your Changes"
```

7. Set upstream command

```diff
git remote add upstream https://github.com/priyankarpal/ProjectsHut.git
```

8. Push your commits

```diff
git push -u origin [Your-branch-name]
```

9. Create a PR

10. Wait for merge
