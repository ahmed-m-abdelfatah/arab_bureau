import './getENV.js';
import express from 'express';
import indexRouter from './modules/index.router.js';

async function appRoutes(app) {
  app.use(express.json());
  app.use(process.env.CHANNEL + '/auth', indexRouter.authRouter);
  app.use(process.env.CHANNEL + '/admin', indexRouter.userRouter);
  app.use(process.env.CHANNEL + '/job', indexRouter.jobRouter);
}

export default appRoutes;
