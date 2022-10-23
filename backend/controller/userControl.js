const User = require('../models/user');

const jsonWebToken = require('jsonwebtoken');
const uuid = require('uuid');

const secretToken = uuid.v4();
const auth = require('../middleware/auth');

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
                                        expiresIn: "2hr"
                                    }
                                )
                            })
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
                idOfUser: uuid.v4(),
                email: request.body.email,
                password: passwordCrypt,
                firstname: request.body.firstname,
                lastname: request.body.lastname,
                profilImage: `${request.protocol}://${request.get("host")}/image/${request.file}`,
            });
            try {
                user.save()
                    .then(() => response.status(201).json({ message: "Le compte a été créé avec succes" }))
                    .catch(creationError => response.status(400).json({ message: "Une erreur est survenue lors de la création", creationError }))
            }
            catch (error) {
                console.log("pas possible de créer", error)
            }

        })

        .catch(error => response.status(500).json({ message: "error controller back", error }));

};


const userInfos = (request, response, next) => {
    User.findOne({ idOfUser: request.params.idOfUser })
        .then(user => {
            if (user.idOfUser !== request.auth.idOfUser) {
                response.status(401).json({ message: "pas bon"})
            } else {
                response.status(200).json({ message: "Voici vos information", user })
            }
        })

        .catch((error) => response.status(500).json({ error }))

       
}


// response.status(200).send(user))
module.exports = {
    userLogIn,
    createAccount,
    userInfos,
};