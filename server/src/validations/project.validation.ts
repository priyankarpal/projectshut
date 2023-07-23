import { Schema } from 'express-validator'

const createProjectSchema: Schema = {
  github_username: {
    in: ['body'],
    isString: true,
    notEmpty: true,
  },
  social_media: {
    in: ['body'],
    isArray: {
      errorMessage: ' Social Media must be an Array',
    },
    optional: true,
  },
  'social_media.*.name': {
    isString: {
      errorMessage: 'Invalid social media name',
    },
    notEmpty: true,
  },
  'social_media.*.link': {
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
  projects: {
    in: ['body'],
    isArray: {
      errorMessage: 'Projects must be an array',
    },
    notEmpty: true,
  },
  'projects.*.name': {
    isString: {
      errorMessage: 'Invalid project name',
    },
    notEmpty: true,
  },
  'projects.*.link': {
    isURL: {
      errorMessage: 'Invalid project link',
    },
    notEmpty: true,
  },
  'projects.*.description': {
    isString: {
      errorMessage: 'Invalid project description',
    },
    optional: true,
  },
  'projects.*.tech': {
    isArray: {
      errorMessage: 'Tech must be an Array',
    },
    notEmpty: {
      errorMessage: 'Tech array cannot be empty',
    },
  },
  'projects.*.tech.*': {
    isString: {
      errorMessage: 'Invalid tech item',
    },
    notEmpty: {
      errorMessage: 'Tech item cannot be empty',
    },
  },
  github_repo_link: {
    in: ['body'],
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
  deployment_url: {
    in: ['body'],
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
}

const updateProjectSchema: Schema = {
  social_media: {
    in: ['body'],
    isArray: {
      errorMessage: ' Social Media must be an Array',
    },
    optional: true,
  },
  'social_media.*.name': {
    isString: {
      errorMessage: 'Invalid social media name',
    },
    notEmpty: true,
  },
  'social_media.*.link': {
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
  projects: {
    in: ['body'],
    isArray: {
      errorMessage: 'Projects must be an array',
    },
    notEmpty: true,
  },
  'projects.*.name': {
    isString: {
      errorMessage: 'Invalid project name',
    },
    notEmpty: true,
  },
  'projects.*.link': {
    isURL: {
      errorMessage: 'Invalid project link',
    },
    notEmpty: true,
  },
  'projects.*.description': {
    isString: {
      errorMessage: 'Invalid project description',
    },
    optional: true,
  },
  'projects.*.tech': {
    isArray: {
      errorMessage: 'Tech must be an Array',
    },
    notEmpty: {
      errorMessage: 'Tech array cannot be empty',
    },
  },
  'projects.*.tech.*': {
    isString: {
      errorMessage: 'Invalid tech item',
    },
    notEmpty: {
      errorMessage: 'Tech item cannot be empty',
    },
  },
  github_repo_link: {
    in: ['body'],
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
  deployment_url: {
    in: ['body'],
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
}
const deleteProjectSchema: Schema = {
  id: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid id value',
    },
    notEmpty: {
      errorMessage: 'id cannot be empty',
    },
  },
}

export const projectValidationSchema = {
  createProjectSchema,
  updateProjectSchema,
  deleteProjectSchema,
}
