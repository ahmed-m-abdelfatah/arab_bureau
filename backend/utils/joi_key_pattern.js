import { default as joi } from 'joi';

export const userKeyPattern = {
  name: joi.string().pattern(new RegExp('^[a-zA-Z].*$')).messages({
    'string.pattern.base': 'The name should be in english alphabet',
  }),
  userName: joi.string().pattern(new RegExp('^@AB-[a-zA-Z0-9]{3,14}$')).messages({
    'string.pattern.base': 'userName is not valid',
  }),
  password: joi
    .string()
    .pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?_!@.$%^&*-]).{8,}$'))
    .messages({
      'string.pattern.base':
        'PASSWORD MINIMUM LENGTH IS 8 WITH AT LEAST ONE LOWER CASE, ONE UPPER CASE, ONE NUMBER AND ONE SPECIAL CHARACTER',
    }),
  cPassword: ref =>
    joi.string().valid(joi.ref(ref)).messages({
      'any.only': `Password and Confirm Password must be same`,
      'string.empty': 'Confirm Password must not be empty',
    }),
  id: joi.string().min(24).max(24),
  token: joi.string(),
  role: joi.valid('admin'),
};

export const jobKeyPattern = {
  id: joi.string().min(24).max(24),
  title: joi.string(),
  description: joi.string(),
  responsibilities: joi.array().items(joi.string()),
  requirements: joi.array().items(joi.string()),
  salaryRange: joi.string().allow(''),
};
