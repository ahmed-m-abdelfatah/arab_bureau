import authRouter from './auth/auth.router.js';
import userRouter from './admin/admin.router.js';
import jobRouter from './job/job.router.js';

const indexRouter = { authRouter, userRouter, jobRouter };

export default indexRouter;
