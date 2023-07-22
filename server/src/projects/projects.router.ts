import express, { Response, Request } from 'express'
import { AllProjectsType } from './project.interface'
import { ProjectService } from './projects.service'
import { checkSchema, validationResult } from 'express-validator'
import { projectValidationSchema } from '../validations/project.validation'

export const projectRouter = express.Router()
interface RequestParams {
  id: string
  slug: string
}
interface RequestBody {
  body: AllProjectsType
}

//to get all projects
projectRouter.get('/', async (req: Request, res: Response) => {
  try {
    const data = await ProjectService.getAllProjects()
    res.status(200).send({ success: true, data: data })
  } catch (error) {
    res.status(500).send({ success: false, error: error })
  }
})

//to get a specific project based on id
projectRouter.get(
  '/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params
      const data = await ProjectService.getProjectById(id)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)

//to get a specific project based on slug
projectRouter.get(
  '/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params
      const data = await ProjectService.getProjectBySlug(slug)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)

//to create a new project
projectRouter.post(
  '/create',
  checkSchema(projectValidationSchema.createProjectSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        })
      }

      const project = req.body
      const data = await ProjectService.createProject(project)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)

//to update a particular project
projectRouter.post(
  '/update/:id',
  checkSchema(projectValidationSchema.updateProjectSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        })
      }
      const { id } = req.params
      const project = req.body
      const data = await ProjectService.updateProject(id, project)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)

//to delete a project
projectRouter.post(
  '/delete',
  checkSchema(projectValidationSchema.updateProjectSchema),
  async (req: Request, res: Response) => {
    try {
      const { id } = req.body
      const data = await ProjectService.deleteProject(id)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)
