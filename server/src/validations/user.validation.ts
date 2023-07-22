import { Schema } from 'express-validator'

const signUpUserSchema: Schema = {
  name: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid Name',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },
  bio: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid Name',
    },
    optional: true,
  },
  socials: {
    in: ['body'],
    isArray: {
      errorMessage: ' Social Media must be an Array',
    },
    optional: true,
  },
  'socials.*.name': {
    isString: {
      errorMessage: 'Invalid social media name',
    },
    notEmpty: true,
  },
  'socials.*.link': {
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
}

const updateUserSchema: Schema = {
  bio: {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid Name',
    },
    optional: true,
  },
  socials: {
    in: ['body'],
    isArray: {
      errorMessage: ' Social Media must be an Array',
    },
    optional: true,
  },
  'socials.*.name': {
    isString: {
      errorMessage: 'Invalid social media name',
    },
    notEmpty: true,
  },
  'socials.*.link': {
    isURL: {
      errorMessage: 'Invalid link',
    },
    notEmpty: true,
  },
}

export const userValidationSchema = {
  signUpUserSchema,
  updateUserSchema,
}
