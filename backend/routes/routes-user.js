const express = require('express');

const routerUser = express.Router(express);

const userControl = require('../controller/userControl');
const imageMulter = require('../middleware/image-multer')

routerUser.post('/create-account', imageMulter, userControl.createAccount);
routerUser.post('/login', imageMulter, userControl.userLogIn);
routerUser.get('/userId', imageMulter, userControl.userInfos);


module.exports = routerUser;