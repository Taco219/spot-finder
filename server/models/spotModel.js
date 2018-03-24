import mongoose from 'mongoose'

const spotSchema = mongoose.Schema({
    name: {type: String, unique: true},
    loc: {
        type: [Number],
        index: '2d'
    }
}, {
    versionKey: false
});

export const spotModel = mongoose.model('Spot', spotSchema);