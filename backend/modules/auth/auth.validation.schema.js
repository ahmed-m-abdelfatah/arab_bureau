import { userKeyPattern } from '../../utils/joi_key_pattern.js';
import { default as joi } from 'joi';

export const login = {
  body: joi.object().required().keys({
    userName: userKeyPattern.userName.required(),
    password: userKeyPattern.password.required(),
  }),
};

export const signup = {
  body: joi
    .object()
    .required()
    .keys({
      name: userKeyPattern.name.required(),
      userName: userKeyPattern.userName.required(),
      password: userKeyPattern.password.required(),
      cPassword: userKeyPattern.cPassword('password').required(),
    }),
};

export const forgetPassword = {
  body: joi.object().required().keys({
    name: userKeyPattern.name.required(),
    userName: userKeyPattern.userName.required(),
  }),
};

export const resetForgetPassword = {
  params: joi.object().required().keys({
    id: userKeyPattern.id.required(),
  }),
  body: joi
    .object()
    .required()
    .keys({
      newPassword: userKeyPattern.password.required(),
      cNewPassword: userKeyPattern.cPassword('newPassword').required(),
    }),
};
