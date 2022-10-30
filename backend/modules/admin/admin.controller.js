import { default as bcryptjs } from 'bcryptjs';
import userModel from '../../DB/model/user.model.js';
import '../../getENV.js';
import internalServerError from '../../utils/internal_server_error.js';

export const displayProfile = (req, res) => {
  try {
    const { name, userName } = req.user;
    res.status(200).json({ message: 'Done', name, userName });
  } catch (error) {
    internalServerError(res, error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, userName } = req.body;

    const updatedProfile = await userModel
      .findByIdAndUpdate(req.user._id, { name, userName, $inc: { __v: 1 } }, { new: true })
      .select('-password');

    res.status(200).json({ message: 'Done updating your profile', updatedProfile });
  } catch (error) {
    internalServerError(res, error);
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await userModel.findById(req.user._id);

    if (oldPassword == newPassword) {
      res.status(400).json({ message: 'new password cannot equal old password' }); // 400 Bad Request
    } else {
      const match = await bcryptjs.compare(oldPassword, user.password);

      if (!match) {
        res.status(400).json({ message: 'in-valid old password' }); // 400 Bad Request
      } else {
        const hashedPassword = await bcryptjs.hash(newPassword, parseInt(process.env.BCRYPT_JS_SALT_ROUNDS));
        await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });
        res.status(200).json({ message: 'Done' }); // 200 OK
      }
    }
  } catch (error) {
    internalServerError(res, error);
  }
};

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await userModel.find().select('name');

    const editedAdmins = admins.map(admin => {
      // console.log('admin._id == req.user._id', admin._id == req.user._id); // return new object
      // console.log('admin.id == req.user.id', admin.id == req.user.id); // return value
      if (admin.id == req.user.id) {
        const { _doc } = admin;
        return { ..._doc, currentAdmin: true };
      }

      return admin;
    });

    res.status(200).json({ message: 'Done', editedAdmins }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const deleteCurrentAdmin = async (req, res) => {
  try {
    // check if password is correct
    const match = await bcryptjs.compare(req.body.password, req.user.password);

    if (!match) {
      res.status(400).json({ message: 'in-valid password' }); // 400 Bad Request
    } else {
      // delete
      await userModel.findByIdAndDelete(req.user._id);
      res.status(200).json({ message: 'Done deleting your account' }); // 200 OK
    }
  } catch (error) {
    internalServerError(res, error);
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (id === req.user.id) {
      return res.status(401).json({ message: "You can't delete your own profile from here" }); // 401 unauthorized
    }

    await userModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Done deleting the admin' }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};
