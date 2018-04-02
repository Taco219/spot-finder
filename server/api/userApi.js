import express from 'express';
import monErr from '../enums/mongooseErrorsCodes';

import {userModel as User} from '../models/userModel'
import * as jwt from '../service/jwtService';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find().exec();

    res.send(users);
});


// todo create auth
router.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username}).exec();

    const usrToken = await jwt.createUsrIdToken(user._id);

    res.status(200).json({token: usrToken});
});

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        res.send(user);
    }
    catch (err){
        if (err.code === monErr.DuplicateKey) {
            res.status(409).json({msg: "Username already exists"})
        }
        else {
            console.log("Shit");
            console.error(err);
            res.status(500).json({msg: "unknown error"});
        }
    }
});

module.exports = router;