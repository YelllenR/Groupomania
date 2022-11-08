const Comment = require('../models/comments');
const Post = require('../models/posts');
const user = require('../models/user');



const PostAComment = (request, response, next) => {

    Post.aggregate([
        { $match: { idOfPost: request.params.id } },
    ])

    user.aggregate([
        { $match: { idOfUser: request.auth.idOfUser } }
    ])
        .then((data) => {

            for (const key in data) {
                const userData = data[key];
                imageProfil = userData.imageProfil;
                firstname = userData.firstname;
                lastname = userData.lastname;
            }

            const commentCreation = new Comment({
                idOfPost: request.params.id,
                comment: request.body.comment,
                idOfUser: request.auth.idOfUser,
                imageProfil: imageProfil,
                firstname: firstname,
                lastname: lastname
            })

            commentCreation.save()
                .then(() => response.status(201).json(commentCreation))
                .catch((error) => response.status(401).json(error))

        })
        .catch(error => response.status(500).json(error))

};


const GetComment = (request, response, next) => {

    Comment.aggregate([
        { $match: { idOfPost: request.params.id } },
        { $sort: { createdAt: -1 } }
    ])
        .then((commentData) => {
            response.status(200).json(commentData)
        })

        .catch(error => response.status(401).json({ message: "pas bon dans get", error }))
};


module.exports = {
    PostAComment,
    GetComment
}