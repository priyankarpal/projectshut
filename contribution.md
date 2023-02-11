# 😎 Contribute your Code to ProjectsHut
#### Make sure you've basic knowledge of 
 - [Git](https://git-scm.com)
 - [GitHub](https://github.com)
 - [HTML](https://www.w3schools.com/html)
## 🧐 Follow these steps to Contribute
1.  Fork this repository
2.  Clone it to your computer `git clone https://github.com/your-username/ProjectsHut.git`
3.  Navigate to the project folder `cd ProjectsHut` 
4. Add your projects to here
    -  first add image of the project `/images/your-image.png`
    - add following code to HTML `index.html` after projects section
```diff
    <!-- Add Your GitHub username -->
    <div class="prjs">
            <img src="/images/your-image.png" class="prj-img" loading="lazy" alt="Project name">
            <div class="prj-content">
                <h3>Project Name</h3>
                <h4>Tech Stacks: <span class="tech-stacks-col">Tech Stack you Used</span> </h4>
                <p>Projects Description</p>
                <a href="add-your-link" class="prj-btn">View Project</a>
            </div>
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
