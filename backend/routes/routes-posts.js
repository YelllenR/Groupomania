const express = require('express');

const routerPost = express.Router(express);

const postsControl = require('../controller/postsControl');

const auth = require('../middleware/auth');

const imageFromPost = require('../middleware/postImage')



routerPost.get('/Posts', auth, imageFromPost, postsControl.GetPosts)
routerPost.post('/Post',  auth, imageFromPost, postsControl.PostOnePost)
routerPost.put('/:id/Post', auth, imageFromPost, postsControl.ModifyAPost)
routerPost.delete('/:id/delete', auth, imageFromPost, postsControl.DeleteAPost)

module.exports = routerPost;