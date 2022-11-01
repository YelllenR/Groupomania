const Posts = require('../models/posts');
const User = require('../models/user');

const uuid = require('uuid');

const fileSystemExtra = require('fs-extra');


const GetPosts = (request, response, next) => {

    Posts.find(request.body.posts)

        .then((posts) => response.status(200).json(posts))
        .catch(error => response.status(204).json({ message: "Vide", error }))
};


const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();


const currentDateTime = `${day}-${month}-${year} à ${hour}h${minutes}`;

const PostOnePost = (request, response, next) => {

    const postCreation = new Posts({
        idOfPost: uuid.v4(),
        idOfUser: request.auth.idOfUser,
        post: request.body.post,
        dateOfPost: currentDateTime,
        imagePost: `${request.protocol}://${request.get('host')}/postImage/${request.file.filename}`
    });

    postCreation.save()
        .then(() => response.status(201).json({ message: "Post a été créé avec succès", postCreation}))
        .catch((error) => response.status(401).json({ message: "Un problème a été rencontré lors de la création", error }))

}




const ModifyAPost = (request, response, next) => {

    const requestPostToModify = request.file ? {
        ...JSON.parse(request.body.post),
        imagePost: `${request.protocol}://${request.get('host')}/postImage/${request.file.filename}`
    } : { ...request.body };

    if (idOfUser === request.auth.idOfUser) {
        Posts.findOne({ idOfPost: request.param.idOfPost })
            .then(() => response.status(200).json({ message: "found post" }))
            .catch(error => response.status(204).json({ message: "Impossible de trouver ce post", error }))
    } else {
        return response.json(401).json({ message: "Ce post ne vous appartient pas" })
    }

    if (response.status(200)) {
        Posts.updateOne({ idOfPost: request.param.idOfPost }, { ...requestPostToModify, idOfPost: request.param.idOfPost, modificationDatePost: currentDateTime })
            .then((modification) => {
                response.status(201).json({ message: "Post modifié avec succès", modification })
            })
            .catch(modifyError => response.status(500).json({ message: "Réessayer ultérieurement", modifyError }));
    }

};

const DeleteAPost = (request, response, next) => {
    Posts.findOne({ idOfPost: request.param.postId })

        .then(postToDelete => {
            if (postToDelete.idOfUser === request.auth.idOfUser) {
                const imageFilename = postToDelete.imagePost.split('/PostImages')[1];
                fileSystemExtra.unlink(`imagePost/${imageFilename}`, () => {

                    Posts.deleteOne({ postId: request.param.idOfPost })
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
    DeleteAPost
};


