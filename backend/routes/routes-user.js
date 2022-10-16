const express = require('express');

const router = express.Router(express);

const userControl = require('../controller/userControl');

router.post('/create-account', userControl.createAccount);
router.post('/login', userControl.userLogIn);
router.get('/', userControl.userLogIn)


module.exports = router;