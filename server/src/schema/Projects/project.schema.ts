import { model, Schema } from 'mongoose'

const ProjectsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tech: [{ type: String, require: true }],
  github_username: {
    type: String,
    require: true,
  },
  github_repo_link:{
   type: String,
   require: true,
  },
  deployment_url:{
   type: String,
   require: true,
  }
})
export const ProjectModel = model('Projects', ProjectsSchema)