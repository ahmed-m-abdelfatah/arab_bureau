import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: [String],
    requirements: [String],
    salaryRange: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

const jobModel = mongoose.model('Job', jobSchema);

export default jobModel;
