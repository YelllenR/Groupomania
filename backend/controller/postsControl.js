const Posts = require('../models/posts');

const uuid = require('uuid');

const fileSystemExtra = require('fs-extra')

const GetPosts = (request, response, next) => {
    Posts.find(request.body.posts)

        .then((posts) => response.status(200).json(posts))
        .catch(error => response.status(400).json({ message: "Erreur, impossible de lister les posts", error }))
}

const PostOnePost = (request, response, next) => {

}



module.exports = {
    GetPosts,

};


