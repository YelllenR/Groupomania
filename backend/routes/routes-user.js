const express = require('express');

const routerUser = express.Router(express);
const userControl = require('../controller/userControl');
const imageMulter = require('../middleware/image-multer')
const auth = require('../middleware/auth')

routerUser.post('/auth/create-account', imageMulter, userControl.createAccount);
routerUser.post('/auth/login', imageMulter, userControl.userLogIn);
routerUser.get('/userId', auth, imageMulter, userControl.userInfos);
// routerUser.get('/users', auth, imageMulter, userControl.allUsers);

module.exports = routerUser;

