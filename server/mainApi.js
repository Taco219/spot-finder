import express from 'express';

import userRouter from './api/userApi';

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);

module.exports = mainRouter;