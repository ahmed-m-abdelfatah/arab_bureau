import { jobKeyPattern } from '../../utils/joi_key_pattern.js';
import { default as joi } from 'joi';

export const addJob = {
  body: joi.object().required().keys({
    title: jobKeyPattern.title.required(),
    description: jobKeyPattern.description.required(),
    responsibilities: jobKeyPattern.responsibilities,
    requirements: jobKeyPattern.requirements,
    salaryRange: jobKeyPattern.salaryRange,
  }),
};

export const updateJob = {
  params: joi.object().required().keys({
    id: jobKeyPattern.id.required(),
  }),

  body: joi.object().required().keys({
    title: jobKeyPattern.title.required(),
    description: jobKeyPattern.description.required(),
    responsibilities: jobKeyPattern.responsibilities,
    requirements: jobKeyPattern.requirements,
    salaryRange: jobKeyPattern.salaryRange,
  }),
};

export const deleteJob = {
  params: joi.object().required().keys({
    id: jobKeyPattern.id.required(),
  }),
};
