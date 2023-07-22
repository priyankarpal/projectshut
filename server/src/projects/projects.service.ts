import { AllProjectsType } from './project.interface'
import { ProjectModel } from '../schema/Projects/project.schema'

const getAllProjects = async () => {
  try {
    const data = await ProjectModel.find({})
    return data
  } catch (error) {
    return null
  }
}

const getProjectById = async (id: string) => {
  try {
    const data = await ProjectModel.find({ _id: { $eq: id } })
    return data
  } catch (error) {
    return null
  }
}

const getProjectBySlug = async (slug: string) => {
  try {
    const data = await ProjectModel.find({ slug: { $eq: slug } })
    return data
  } catch (error) {
    return null
  }
}

const createProject = async (project: AllProjectsType) => {
  try {
    const createProject = await new ProjectModel(project)
    await createProject.save()
    return createProject
  } catch (error) {
    return null
  }
}

const updateProject = async (id: string, project: AllProjectsType) => {
  try {
    const data = await ProjectModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: project },
      { returnOriginal: false }
    )

    return data
  } catch (error) {
    return null
  }
}

const deleteProject = async (id: string) => {
  try {
    const data = await ProjectModel.deleteOne({ id: { $eq: id } })
    return data
  } catch (error) {
    return null
  }
}

export const ProjectService = {
  getAllProjects,
  getProjectById,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
}
