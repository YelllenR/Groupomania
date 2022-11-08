const express = require('express');

const routerPost = express.Router(express);

const postsControl = require('../controller/postsControl');

const auth = require('../middleware/auth');

const imageFromPost = require('../middleware/postImage')

const reactionsControl = require('../controller/reactionsControl')

routerPost.get('/Posts', auth, imageFromPost, postsControl.GetPosts);
routerPost.post('/Post', auth, imageFromPost, postsControl.PostOnePost);
routerPost.put('/modify', auth, imageFromPost, postsControl.ModifyAPost);
routerPost.delete('/delete', auth, imageFromPost, postsControl.DeleteAPost); 
routerPost.post('/Posts/reactions', auth, reactionsControl)

module.exports = routerPost;