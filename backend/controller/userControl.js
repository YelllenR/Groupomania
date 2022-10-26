const User = require('../models/user');

const jsonWebToken = require('jsonwebtoken');
const uuid = require('uuid');

const config = require('../config.json');
const secretToken = config.someToken;

const bcrypt = require('bcrypt');


const userLogIn = (request, response, next) => {
    User.findOne({ email: request.body.email })

        .then(user => {
            if (user === null) {
                response.status(400).json({ message: "Merci de vérifier les informations" })
            } else {
                bcrypt.compare(request.body.password, user.password)

                    .then(valid => {
                        if (!valid) {
                            response.status(400).json({ message: "Une erreur est survenue" })

                        } else {
                            response.status(200).json({
                                idOfUser: user.idOfUser,

                                token: jsonWebToken.sign(
                                    {
                                        idOfUser: user.idOfUser
                                    },
                                    secretToken,
                                    {
                                        expiresIn: "24h"
                                    },
                                )
                            })
                        }
                    })
                    .catch(logError => {
                        response.status(401).json({ logError })

                    })
            }
        })
        .catch(error => {
            response.status(400).json({ error });
        })
};


const createAccount = (request, response, next) => {

    bcrypt.hash(request.body.password, 10)
        .then(passwordCrypt => {
            const user = new User({
                idOfUser: new uuid.v4(),
                email: request.body.email,
                password: passwordCrypt,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                imageProfil: `${request.protocol}://${request.get('host')}/images/${request.file.filename}`
            });

            console.log(user)
            user.save()
                .then(() => response.status(201).json({ message: "Le compte a été créé avec succes" }))
                .catch(creationError => response.status(400).json({ message: "Une erreur est survenue lors de la création", creationError }))

        })

        .catch(error => response.status(500).json({ message: "error controller back", error }));

};


const userInfos = (request, response, next) => {
    User.findOne({ user: request.body.idOfUser })
        .then(idOfUser => {
            if (idOfUser.user !== request.body.idOfUser) {
                response.status(401).json({ message: "Requête non authorisée" })
            } else {
                response.status(200).json({ message: `Voici vos informations : ${idOfUser}` })
            }
        })

        .catch((error) => response.status(500).json({ message: "error userControl", error }))
};


module.exports = {
    userLogIn,
    createAccount,
    userInfos,
};