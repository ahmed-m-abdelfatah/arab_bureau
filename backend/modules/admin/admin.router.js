import express from 'express';
import { auth } from '../../middleware/auth.js';
import validation from '../../middleware/validation.js';
import * as controller from './admin.controller.js';
import endPoint from './admin.end.point.js';
import * as validators from './admin.validation.schema.js';

const router = express.Router();

// display profile
router.get('/', auth(endPoint.displayProfile), controller.displayProfile);

// update profile
router.patch('/update', validation(validators.updateProfile), auth(endPoint.updateProfile), controller.updateProfile);

// update password
router.patch(
  '/password',
  validation(validators.updatePassword),
  auth(endPoint.updatePassword),
  controller.updatePassword,
);

// update password
router.get('/all', auth(endPoint.getAllAdmins), controller.getAllAdmins);

// Delete profile
router.delete(
  '/profile/delete',
  validation(validators.deleteCurrentAdmin),
  auth(endPoint.deleteCurrentAdmin),
  controller.deleteCurrentAdmin,
);

// Delete user
router.delete('/:id/delete', validation(validators.deleteAdmin), auth(endPoint.deleteAdmin), controller.deleteAdmin);

export default router;
