
const express = require('express');
const cors = require('cors');
const config = require('./config.json');
const mongoose = require('mongoose');
const application = express();


mongoose.connect(config.connexion, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(response => response = console.log("connexion ok"))
    .catch(connexionError => {
        console.error('Something went wrong in connecting', connexionError)
        process.exit();
    });


application.use(express.json());
application.use('/Groupomania', cors());
application.use('/Groupomania/auth', cors());
application.use('/images', cors());
application.use(express.urlencoded({ extended: false }));



module.exports = application;