const express = require('express');

const routerAdmin = express.Router(express);
const postsControl = require('../controller/postsControl');

const auth = require('../middleware/auth');
const imageFromPost = require('../middleware/postImage');

const reactionsControl = require('../controller/reactionsControl');

routerAdmin.post('/Post', auth, imageFromPost, postsControl.PostOnePost);
routerAdmin.put('/admin/modify', auth, imageFromPost, postsControl.AdminModifications);
routerAdmin.delete('/admin/delete', auth, imageFromPost, postsControl.AdminDeleteAPost);
routerAdmin.post('/Posts/reactions', auth, reactionsControl);




module.exports = routerAdmin;