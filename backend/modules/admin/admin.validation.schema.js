import { default as joi } from 'joi';
import { userKeyPattern } from '../../utils/joi_key_pattern.js';

export const updateProfile = {
  body: joi.object().required().keys({
    name: userKeyPattern.name.required(),
    userName: userKeyPattern.userName.required(),
  }),
};

export const updatePassword = {
  body: joi
    .object()
    .required()
    .keys({
      oldPassword: userKeyPattern.password.required(),
      newPassword: userKeyPattern.password.required(),
      cNewPassword: userKeyPattern.cPassword('newPassword').required(),
    }),
};

export const deleteCurrentAdmin = {
  body: joi.object().required().keys({
    password: userKeyPattern.password.required(),
  }),
};

export const deleteAdmin = {
  params: joi.object().required().keys({
    id: userKeyPattern.id.required(),
  }),
};
