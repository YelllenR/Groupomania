const jsonWebToken = require('jsonwebtoken');
const config = require('../config.json');
const User = require('../models/user');

const authUser = (request, response, next) => {
    const token = request.headers.authorization.split(' ')[1];
    const tokenToDecode = jsonWebToken.verify(token, config.someToken);

    const userId = tokenToDecode.userId


    try {
        if ((request.body.userId !== userToken) && request.body.userToken) {
            response.json({ message: error });
        } else {
            next();
        }; 

        request.auth = {
            userId: userId
        }; 
    }
    catch (error) {
        response.status(401).json({ message: "Requête invalide" })
    }

}; 

module.exports = authUser;