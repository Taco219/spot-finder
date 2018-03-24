import mongoose from 'mongoose'

export const conntectDb = async () => {
    mongoose.Promise = global.Promise;

    await mongoose.connect('mongodb://localhost:27017/spot-finder');
    console.log('Connected to mongo');

    return true;
};
