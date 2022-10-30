import { default as jwt } from 'jsonwebtoken';
import userModel from '../DB/model/user.model.js';
import internalServerError from '../utils/internal_server_error.js';

export const roles = {
  Admin: 'admin',
};

export const auth = accessRoles => {
  return async (req, res, next) => {
    try {
      const headerToken = req.headers['authorization'];
      // console.log('~ headerToken', headerToken);

      if (
        !headerToken ||
        headerToken === null ||
        headerToken === undefined ||
        !headerToken.startsWith(process.env.BEARER_SECRETE + ' ')
      ) {
        return res.status(401).json({
          message: 'Invalid header token',
        }); // 401 Unauthorized
      }

      const token = headerToken.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      if (!decoded.isSignedIn) {
        return res.status(401).json({
          message: 'Invalid token',
        }); // 401 Unauthorized
      }

      const foundUser = await userModel.findById(decoded.id);

      if (!foundUser) {
        return res.status(401).json({
          message: 'User not found',
        }); // 401 Unauthorized
      }

      if (!accessRoles.includes(foundUser.role)) {
        return res.status(401).json({
          message: 'User not authorized',
        }); // 401 Unauthorized
      }

      // Add user to req object
      req.user = foundUser;
      next();
    } catch (error) {
      internalServerError(res, error);
    }
  };
};
