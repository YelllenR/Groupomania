const express = require('express');

const routerPost = express.Router(express);

const postsControl = require('../controller/postsControl');

const auth = require('../middleware/auth');

const imageFromPost = require('../middleware/postImage')
const withoutImage = require('../middleware/postImage')

routerPost.get('/Posts', auth, imageFromPost, postsControl.GetPosts)
//routerPost.get('/Post/:id', auth, imageFromPost, postsControl.GetOnePost)
routerPost.post('/Post', auth, imageFromPost, postsControl.PostOnePost)// routerPost.post('/Post', auth, optionsImage.imagePostNone, postsControl.PostOnePost)
routerPost.put('/:id', auth, imageFromPost, postsControl.ModifyAPost)
routerPost.delete('/:id/delete', auth, imageFromPost, postsControl.DeleteAPost)

module.exports = routerPost;