import mongoose from 'mongoose'

const spotSchema = mongoose.Schema({
    name: {type: String},
    loc: {
        type: [Number],
        index: '2d'
    }
}, {
    versionKey: false
});

export const spotModel = mongoose.model('Spot', spotSchema);