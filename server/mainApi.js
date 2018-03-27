import express from 'express';

import userRouter from './api/userApi';
import spotRouter from './api/spotApi';

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/spot", spotRouter);

module.exports = mainRouter;