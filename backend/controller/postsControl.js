const Post = require('../models/posts');

const uuid = require('uuid');

const fileSystemExtra = require('fs-extra');
const User = require('../models/user');


const GetPosts = (request, response, next) => {

    Post.find(request.body.posts)
        .then(posts => {
            response.status(200).json(posts)
        })
        .catch(error => response.status(204).json({ message: "Vide", error }))

};

const currentDateTime = new Date();

const PostOnePost = (request, response, next) => {

    User.findOne({ idOfUser: request.auth.idOfUser })
        .then(user => {
            if (request.auth) {
                user.populate()
                    .then(data => {
                        const postCreation = new Post({
                            idOfPost: uuid.v4(),
                            post: request.body.post,
                            dateOfPost: currentDateTime,
                            idOfUser: data.idOfUser,
                            firstname: data.firstname,
                            lastname: data.lastname,
                            imageProfil: data.imageProfil,
                            imagePost: `${request.protocol}://${request.get('host')}/postImage/${request.file.filename}`
                        })


                        postCreation.save()
                            .then(() => response.status(201).json(postCreation))
                    })
            }

        })
        .catch((error) => response.status(401).json({ message: "Un problème a été rencontré", error }));




};





const ModifyAPost = (request, response, next) => {

    const requestPostToModify = request.file ? {
        ...JSON.parse(request.body.post),
        imagePost: `${request.protocol}://${request.get('host')}/postImage/${request.file.filename}`
    } : { ...request.body };


    if (request.auth) {
        Post.findOne({ idOfPost: request.param.idOfPost }, { post: request.body.post })
            .then((post) => response.status(200).json({ message: "found post" }))
            .catch(error => response.status(204).json({ message: "Impossible de trouver ce post", error }))
    } else {
        return response.json(401).json({ message: "Ce post ne vous appartient pas" })
    }

    if (response.status(200)) {
        Post.updateOne({ idOfPost: request.param.idOfPost }, { ...requestPostToModify, idOfPost: request.param.idOfPost, modificationDatePost: currentDateTime })
            .then((modification) => {
                response.status(201).json({ message: "Post modifié avec succès", modification })
            })
            .catch(modifyError => response.status(500).json({ message: "Réessayer ultérieurement", modifyError }));
    }
};


const DeleteAPost = (request, response, next) => {
    Post.findOne({ idOfPost: request.param.postId })

        .then(postToDelete => {
            if (postToDelete.idOfUser === request.auth.idOfUser) {
                const imageFilename = postToDelete.imagePost.split('/PostImages')[1];
                fileSystemExtra.unlink(`imagePost/${imageFilename}`, () => {

                    Post.deleteOne({ postId: request.param.idOfPost })
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
    // GetOnePost
};


