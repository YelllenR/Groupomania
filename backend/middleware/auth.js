const jsonWebToken = require('jsonwebtoken');
const secretToken = process.env.someToken

module.exports = (request, response, next) => {
    try {

        const token = request.headers.authorization.split(' ')[1];
        const tokenToDecode = jsonWebToken.verify(token, secretToken);

        const userToken = tokenToDecode.idOfUser;

        if (request.body.idOfUser && (request.body.idOfUser !== userToken)) {
            response.json({ message: "at try part", error });

        } else {
            request.auth = {
                idOfUser: userToken
            }
            next();
        }

    }
    catch (error) {
        response.status(401).json({ message: "Requête invalide", error })
    }
};

