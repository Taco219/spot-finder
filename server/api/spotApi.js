import express from 'express';
import monErr from '../enums/mongooseErrorsCodes';

import {spotModel as Spot} from '../models/spotModel'
import * as jwt from '../service/jwtService';

const router = express.Router();

router.get('/', async (req, res) => {
    const spots = await Spot.find().exec();

    res.send(spots);
});

router.post('/', async(req, res) => {

    try {
        const spot = new Spot(req.body);

        await spot.save();
        res.status(201).json({spot: spot});

    }
    catch (err){

    }

});

module.exports = router;