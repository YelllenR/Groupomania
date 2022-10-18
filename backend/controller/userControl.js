const User = require('../models/user');

const jsonWebToken = require('jsonwebtoken');
const uuid = require('uuid');

const secretToken = uuid.v4();

const bcrypt = require('bcrypt');

const userLogIn = (request, response, next) => {
    User.findOne({ email: request.body.email })

        .then(user => {
            if (user === null) {
                response.status(400).json({ message: "Merci de vérifier les informations" })
            } else {
                bcrypt.compare(request.body.password, user.password)

                    .then(userExist => {
                        if (!userExist) {
                            response.status(200).json({
                                // user: user.userId,
                                token: jsonWebToken.sign(
                                    { user: user.userId },
                                    secretToken,
                                    { expiresIn: "24h" }
                                )
                            })
                        } else {
                            return response.status(400).json({ message: "Une erreur est survenue" })
                        }

                    })
                    .catch(logError => {
                        response.status(401).json({ logError })
                    });
            }
        })
        .catch(error => {
            response.status(400).json({ error });
        })
};


const createAccount = (request, response, next) => {
    bcrypt.hash(request.body.password, 15)
        .then(passwordCrypt => {
            const user = new User({
                userId: uuid.v4(),
                email: request.body.email,
                password: passwordCrypt,
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                profilImage: `${request.protocol}://${request.get("host")}/images/${request.file}`,
            });
            try {
                user.save()
                    .then(() => response.status(201).json({ message: "Le compte a été créé avec succes" }))
                    .catch(creationError => response.status(400).json({ message: "Une erreur est survenue lors de la création", creationError }))
            }
            catch (error) {
                console.log("pas possible de créé", error)
            }

        })

        .catch(error => response.status(500).json({ message: "error controller back", error }));

};


module.exports = {
    userLogIn,
    createAccount
};