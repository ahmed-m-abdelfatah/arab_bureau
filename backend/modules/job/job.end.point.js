import { roles } from '../../middleware/auth.js';

const endPoint = {
  addJob: [roles.Admin],
  updateJob: [roles.Admin],
  deleteJob: [roles.Admin],
};

export default endPoint;
