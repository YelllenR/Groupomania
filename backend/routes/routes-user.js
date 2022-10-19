const express = require('express');

const router = express.Router(express);

const userControl = require('../controller/userControl');
const users = require('../controller/userInfos'); 

router.post('/create-account', userControl.createAccount);
router.post('/login', userControl.userLogIn);
router.get('/', userControl.userInfos);


module.exports = router;