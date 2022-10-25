const jsonWebToken = require('jsonwebtoken');
const config = require('../config.json');


module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const tokenToDecode = jsonWebToken.verify(token, config.someToken);

        const idOfUser = tokenToDecode.userId;

        if (request.body.idOfUser && (request.body.idOfUser !== userId)) {
            response.json({ message: "at try part", error });

        } else {
            next();
        };

        request.auth = {
            idOfUser: idOfUser,
        };

        console.log(request.auth)
    }
    catch (error) {
        response.status(401).json({ message: "Requête invalide", error })
    }

};

