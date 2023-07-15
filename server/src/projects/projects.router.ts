import express, { Express, Response, Request } from 'express'

export const projectRouter = express.Router()

//to get all projects
projectRouter.get('/', async (req, res) => {
  try {
    const data = await ProjectService.getAllProjects()
    res.status(200).send({ success: true, data: data })
  } catch (error) {}
})

//to get a specific project based on id
projectRouter.get('/:id', async (req, res) => {
  try {
    const data = await ProjectService.getProjectById()
    res.status(200).send({ success: true, data: data })
  } catch (error) {}
})

//to get a specific project based on slug
projectRouter.get('/:slug', async (req, res) => {
  try {
    const data = await ProjectService.getProjectBySlug()
    res.status(200).send({ success: true, data: data })
  } catch (error) {}
})

//to create a new project
projectRouter.post('/create', async (req, res) => {
  try {
    const project = req.body
    const data = await ProjectService.createNewProject(project)
    res.status(200).send({ success: true, data: data })
  } catch (error) {}
})

//to update a particular project
projectRouter.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params
    const project = req.body
    const data = await ProjectService.updateProject(id, project)
    res.status(200).send({ success: true, data: data })
  } catch (error) {}
})

//to delete a project
projectRouter.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    const data = await ProjectService.deleteProject(id)
    res.status(200).send({ success: true, data: data })
  } catch (error) {}
})
