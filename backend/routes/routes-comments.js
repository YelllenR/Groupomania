const express = require('express');

const routerComment = express.Router(express);

const commentsControl = require('../controller/commentsControl');


const auth = require('../middleware/auth');

const imageFromPost = require('../middleware/postImage')


routerComment.get('/:id', auth, imageFromPost, commentsControl.GetComment);
routerComment.post('/:id', auth, imageFromPost, commentsControl.PostAComment);

module.exports = routerComment;