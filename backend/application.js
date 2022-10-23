
const express = require('express');
const cors = require('cors');
const config = require('./config.json');
const mongoose = require('mongoose');
const application = express();
const userRoute = require('./routes/routes-user');
const connexion = config.connexion;
const path = require('path');
const users = require('./controller/userInfos');
const postRoute = require('./routes/routes-posts');


mongoose.connect(connexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => response = console.log("connexion ok"))
    .catch(connexionError => {
        console.error('Something went wrong in connecting', connexionError)
        process.exit();
    });



application.use(express.json());
application.use('/Groupomania/auth', cors(), userRoute);
application.use('/Groupomania', cors(), postRoute);
application.use('/image', cors(), express.static(path.join(__dirname, 'imageFile')));

application.use(express.urlencoded({ extended: false }));


module.exports = application;