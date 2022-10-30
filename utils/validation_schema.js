import { default as joi } from 'joi';
import { jobKeyPattern, userKeyPattern } from '../backend/utils/joi_key_pattern.js';

const login = joi.object({
  userName: userKeyPattern.userName.required(),
  password: userKeyPattern.password.required(),
});

const signup = joi.object({
  name: userKeyPattern.name.required(),
  userName: userKeyPattern.userName.required(),
  password: userKeyPattern.password.required(),
  cPassword: userKeyPattern.cPassword('password').required(),
});

const addJob = joi.object({
  title: jobKeyPattern.title.required(),
  description: jobKeyPattern.description.required(),
  requirements: jobKeyPattern.requirements,
  responsibilities: jobKeyPattern.responsibilities,
  salaryRange: jobKeyPattern.salaryRange,
});

const updateJob = joi.object({
  title: jobKeyPattern.title.required(),
  description: jobKeyPattern.description.required(),
  requirements: jobKeyPattern.requirements,
  responsibilities: jobKeyPattern.responsibilities,
  salaryRange: jobKeyPattern.salaryRange,
});

const updateProfile = joi.object({
  name: userKeyPattern.name.required(),
  userName: userKeyPattern.userName.required(),
});

const updatePassword = joi.object({
  oldPassword: userKeyPattern.password.required(),
  newPassword: userKeyPattern.password.required(),
  cNewPassword: userKeyPattern.cPassword('newPassword').required(),
});

const deleteAccount = joi.object({
  password: userKeyPattern.password.required(),
});

const validators = {
  login,
  signup,
  addJob,
  updateJob,
  updateProfile,
  updatePassword,
  deleteAccount,
};

export default validators;
