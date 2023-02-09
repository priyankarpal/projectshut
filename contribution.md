1.  Fork this repository
2.  Clone it to your computer `git clone https://github.com/priyankarpal/ProjectsHut.git`
3.  Navigate to the project folder `cd ProjectsHut` 
4. Add your projects to here
    -  first add image of the project `/images/your-image.png`
    - add following code to HTML `index.html` after projects section
```diff
    <!-- Your GitHub username -->
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