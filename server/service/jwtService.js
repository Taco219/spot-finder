import jwt from 'jsonwebtoken';

const secret = "secret";

export const createUsrIdToken = async (userId) => {
    return new Promise((resolve, reject) => {
        jwt.sign({userId: userId}, secret, (err, token) => {
            if(err){
                reject(err);
            }
            else{
                console.log('token');
                console.log(token);
                resolve(token)
            }
        });
    });
};