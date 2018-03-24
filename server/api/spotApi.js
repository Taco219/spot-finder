import express from 'express';
import monErr from '../enums/mongooseErrorsCodes';

import {userModel as User} from '../models/userModel'
import * as jwt from '../service/jwtService';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find().exec();

    res.send(users);
});