const User = require('../models/user');
const Post = require('../models/posts');
const uuid = require('uuid');
const jsonWebToken = require('jsonwebtoken');
const config = require('../config.json');
const secretToken = config.someToken;

const bcrypt = require('bcrypt');
const user = require('../models/user');

const adminLogin = (request, response, next) => {
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


const AdminGetPosts = (request, response, next) => {

    Post.find(request.body.posts).sort({ createdAt: -1 })
        .then(posts => {
            response.status(200).json(posts)
        })
        .catch(error => response.status(204).json({ message: "Vide", error }))

};


const AdminPostOnePost = (request, response, next) => {
    User.findOne({ idOfUser: request.auth.idOfUser })
        .then(user => {
            if (request.auth) {
                user.populate()
                    .then(data => {
                        const postCreation = new Post({
                            idOfPost: uuid.v4(),
                            post: request.body.post,
                            idOfUser: request.auth.idOfUser,
                            firstname: data.firstname,
                            lastname: data.lastname,
                            imageProfil: data.imageProfil,
                            imagePost: `${request.protocol}://${request.get('host')}/postImage/${request.file.filename}`,
                            role: user.role
                        })

                        postCreation.save()
                            .then(() => response.status(201).json(postCreation))
                    })
            }

        })
        .catch((error) => response.status(401).json({ message: "Un problème a été rencontré", error }));
};


const AdminModifyAPost = (request, response, next) => {
    const requestPostToModify = request.file ? {
        ...JSON.parse(request.body.post),
    } : { ...request.body };

    Post.findOne({ idOfPost: request.body.idOfPost })
        .then(() => {

            if (user.role === "admin") {
                Post.updateOne(({ idOfPost: request.body.idOfPost }), { ...requestPostToModify, idOfPost: request.body.idOfPost })
                .then((post) => response.status(201).json({ message: "Post modifié avec succès", post }))
                .catch(error => response.status(403).json(error))
            } 
        })

        .catch(error => response.status(401).json({ message: "Non authorisé", error }))
};



const DeleteAPost = (request, response, next) => {
    Post.findOne({ idOfPost: request.body.idOfPost })

        .then(post => {
            if (post.idOfUser === request.auth.idOfUser) {

                const filename = post.imagePost.split('/postImage')[1];

                fileSystem.unlink(`postImage/${filename}`, () => {

                    Post.deleteOne({ idOfPost: request.body.idOfPost })
                        .then(() => response.status(200).json({ message: "Post supprimé" }))
                        .catch(() => response.status(403).json({ message: "Vous n'êtes pas authorisé à faire cette manipulation" }))
                });
            }
        })
        .catch(errorOnDelete => response.status(401).json({ message: "Non authorisé", errorOnDelete }))
};
