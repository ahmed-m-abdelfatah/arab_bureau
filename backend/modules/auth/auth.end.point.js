import { roles } from '../../middleware/auth.js';

const endPoint = {
  logout: [roles.Admin],
};

export default endPoint;
