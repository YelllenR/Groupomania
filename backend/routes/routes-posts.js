const express = require('express');

const routerPost = express.Router(express);

const postsControl = require('../controller/postsControl');

routerPost.get('/Posts', postsControl.GetPosts)
routerPost.post('/Post', postsControl)
routerPost.put('/:id', postsControl)
routerPost.delete('/:id/suppression', postsControl)

module.exports = routerPost;