const express = require('express');

const routerUser = express.Router(express);

const userControl = require('../controller/userControl');
const users = require('../controller/userInfos'); 

routerUser.post('/create-account', userControl.createAccount);
routerUser.post('/login', userControl.userLogIn);
routerUser.get('/:id', userControl.userInfos);


module.exports = routerUser;