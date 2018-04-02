import express from 'express';
import {userModel as User} from '../models/userModel'
import monErr from '../enums/mongooseErrorsCodes';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = new User({
            username: "test",
            password: "pwd"
        });

        await user.save();
        const users = await User.find().exec();

        console.log(users);
        // res.send(user);
        res.send(users);
    }
    catch (err){
        if (err.code === monErr.DuplicateKey) {

        }
        console.log("Shit");
        console.error(err)
    }

});

module.exports = router;