interface SocialMediaType {
  name: string
  link: string
}

interface ProjectsType extends SocialMediaType {
  description: string
  tech: string[]
}

export interface AllProjectsType {
  github_username: string
  Social_media: SocialMediaType[]
  projects: ProjectsType[]
  github_repo_link: string
  deployment_url: string
}