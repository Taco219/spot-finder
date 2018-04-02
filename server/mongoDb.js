import mongoose from 'mongoose'

export const connectDb = async () => {
    mongoose.Promise = global.Promise;

    await mongoose.connect('mongodb://localhost:27017/spot-finder');
    console.log('Connected to mongo');

    return true;
};
