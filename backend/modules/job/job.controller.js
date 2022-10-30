import jobModel from '../../DB/model/job.model.js';
import { roles } from '../../middleware/auth.js';
import internalServerError from '../../utils/internal_server_error.js';

export const addJob = async (req, res) => {
  try {
    const { title, description, responsibilities, requirements, salaryRange } = req.body;

    const job = await jobModel.create({
      title,
      description,
      responsibilities,
      requirements,
      salaryRange,
      createdBy: req.user._id,
    });

    res.status(201).json({ message: 'Done', job }); // 201 Created
  } catch (error) {
    internalServerError(res, error);
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, responsibilities, requirements, salaryRange } = req.body;

    const job = await jobModel.findById(id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' }); // 404 Not Found
    }

    if (req.user.role != roles.Admin) {
      return res.status(401).json({ message: "You can't update this job. peasant" }); // 401 Unauthorized
    }

    const updated = await jobModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        responsibilities: responsibilities?.length > 0 ? [...responsibilities] : [],
        requirements: requirements?.length > 0 ? [...requirements] : [],
        salaryRange,
        $inc: { __v: 1 },
      },
      { new: true },
    );

    res.status(200).json({ message: 'Done updating the job', updated }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await jobModel.findById(id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' }); // 404 Not Found
    }

    if (req.user.role != roles.Admin) {
      return res.status(401).json({ message: "You can't delete this job. peasant" }); // 401 Unauthorized
    }

    await jobModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Done deleting the job' }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const allJobs = await jobModel.find().select('-createdBy -__v').sort('-updatedAt');

    res.status(200).json({ message: 'Done getting all job', allJobs }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};
