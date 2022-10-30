import { roles } from '../../middleware/auth.js';

const endPoint = {
  displayProfile: [roles.Admin],
  updateProfile: [roles.Admin],
  updatePassword: [roles.Admin],
  getAllAdmins: [roles.Admin],
  deleteCurrentAdmin: [roles.Admin],
  deleteAdmin: [roles.Admin],
};

export default endPoint;
