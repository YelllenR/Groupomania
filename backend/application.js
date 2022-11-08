
const express = require('express');
const cors = require('cors');
const config = require('./config.json');
const mongoose = require('mongoose');
const application = express();
const userRoute = require('./routes/routes-user');
const connexion = config.connexion;
const path = require('path');
const postRoute = require('./routes/routes-posts');
const commentRoute = require('./routes/routes-comments');

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
application.use(express.urlencoded({ extended: false }));
application.use('/Groupomania', cors())

application.use('/Groupomania', cors(), userRoute);
application.use('/Groupomania', cors(), postRoute);
application.use('/Groupomania', cors(), commentRoute);

application.use('/images', express.static(path.join(__dirname, 'images')));
application.use('/postImage', express.static(path.join(__dirname, 'postImage')));

module.exports = application;