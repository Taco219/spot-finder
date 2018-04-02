import bodyParser from 'body-parser';

import express from 'express';
import apiRouter from './mainApi';

import { connectDb } from './mongoDb';

const app = express();

const run = async () => {

    app.use(bodyParser.json());

    app.use('/', apiRouter);

    try {
        await connectDb();

        console.log("Starting app on port: 3333");
        app.listen(3333);
    }
    catch (err){
        console.error("Failed to start server.");
        console.error(err);
    }
};

run().then();
