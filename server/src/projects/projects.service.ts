const getAllProjects = async()=>{
 try {
  const data = await ProjectModel.find({})
  return data
 } catch (error) {
  return null
 }
}

const getProjectById = async (id) => {
  try {
    const data = await ProjectModel.find({ _id: { $eq: id } })
    return data
  } catch (error) {
    return null
  }
}

const getProjectBySlug = async (slug) => {
  try {
    const data = await ProjectModel.find({slug:{$eq: slug}})
    return data
  } catch (error) {
    return null
  }
}

const createProject = async (project) => {
  try {
    const createProject = await new ProjectModel(project)
    await createProject.save()
    return createProject
  } catch (error) {
    return null
  }
}

const updateProject = async (id, project) => {
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

const deleteProject = async (id) => {
  try {
    const data = await ProjectModel.deleteOne({ id: { $eq: id } })
    return data
  } catch (error) {
    return null
  }
}