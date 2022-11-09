const Post = require('../models/posts');

const uuid = require('uuid');

const fileSystem = require('fs');
const User = require('../models/user');

/**
 * 
 * @param {*} request - find all posts and then sort in order to get the newest post on top
 * @param {*} response - response with the list of posts or the error
 */
const GetPosts = (request, response, next) => {

    Post.find(request.body.posts).sort({ createdAt: -1 })
        .then(posts => {
            response.status(200).json(posts)
        })
        .catch(error => response.status(204).json({ message: "Vide", error }))

};


/**
 * 
 * @param {*} request finds one user, checks the auth and populate to pass the needed data in order to create a new post
 * @param {*} response - response from findOne and save
 */

const PostOnePost = (request, response, next) => {

    User.findOne({ idOfUser: request.auth.idOfUser })
        .then(user => {
            if (request.auth) {
                user.populate()
                    .then(data => {
                        const postCreation = new Post({
                            idOfPost: uuid.v4(),
                            post: request.body.post,
                            idOfUser: data.idOfUser,
                            firstname: data.firstname,
                            lastname: data.lastname,
                            imageProfil: data.imageProfil,
                            imagePost: `${request.protocol}://${request.get('host')}/postImage/${request.file.filename}`,
                        })

                        postCreation.save()
                            .then(() => response.status(201).json(postCreation))
                    })
            }

        })
        .catch((error) => response.status(401).json({ message: "Un problème a été rencontré", error }));

};


/**
 * 
 * @param {*} request - requested id of post in findOne and updateOne
 * @param {*} response - get the status after the request
 */
const ModifyAPost = (request, response, next) => {

    const requestPostToModify = request.file ? {
        ...JSON.parse(request.body.post),
    } : { ...request.body };

    Post.findOne({ id: request.body.idOfPost })
        .then((post) => {
            if (request.auth.idOfUser === post.idOfUser) {

                Post.updateOne(({ idOfPost: request.body.idOfPost }), {...requestPostToModify, post: request.body.post })
                    .then(() => response.status(201).json({ message: "Post modifié avec succès" }))
                    .catch(error => response.status(403).json(error))


            }
        })

        .catch(error => response.status(401).json({ message: "Non authorisé", error }))
};


/**
 * 
 * @param {*} request - Done with the Id of the post
 * @param {*} response - from the findOne and deleteOne 
 * 
 * 
 */
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



module.exports = {
    GetPosts,
    PostOnePost,
    ModifyAPost,
    DeleteAPost,
};


