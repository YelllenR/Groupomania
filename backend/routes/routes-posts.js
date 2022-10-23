const express = require('express');

const routerPost = express.Router(express);

const postsControl = require('../controller/postsControl');

const auth = require('../middleware/auth');

const imageMulter = require('../middleware/image-multer')

routerPost.get('/Posts', auth, imageMulter, postsControl.GetPosts)
routerPost.post('/Post', auth, imageMulter, postsControl.PostOnePost)
routerPost.put('/:id/Post', auth, imageMulter, postsControl.ModifyAPost)
routerPost.delete('/:id/delete', auth, imageMulter, postsControl.DeleteAPost)

module.exports = routerPost;