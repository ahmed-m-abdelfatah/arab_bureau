import express from 'express';
import validation from '../../middleware/validation.js';
import * as validators from './job.validation.schema.js';
import { auth } from '../../middleware/auth.js';
import endPoint from './job.end.point.js';
import * as controller from './job.controller.js';

const router = express.Router();

// add new job
router.post('/add', validation(validators.addJob), auth(endPoint.addJob), controller.addJob);

// add new job
router.patch('/:id/update', validation(validators.updateJob), auth(endPoint.updateJob), controller.updateJob);

// hard delete new job
router.delete('/:id/delete', validation(validators.deleteJob), auth(endPoint.deleteJob), controller.deleteJob);

// get all job
router.get('/all', controller.getAllJobs);

export default router;
