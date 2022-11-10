
const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');
const application = express();
const userRoute = require('./routes/routes-user');
const connexion = process.env.connexion
const path = require('path');
const postRoute = require('./routes/routes-posts');
const commentRoute = require('./routes/routes-comments');
const adminRoute = require('./routes/routes-superadmin');
const helmet = require('helmet');


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
application.use('/Groupomania', cors(), adminRoute);


application.use('/images', express.static(path.join(__dirname, 'images')));
application.use('/postImage', express.static(path.join(__dirname, 'postImage')));


application.use(
    // It prevents a document from loading any cross-origin resources if it doesn't have any permission
    helmet.crossOriginEmbedderPolicy({ policy: "require-corp" }),

    // Another layer of security to specify that the resources come frome the same site
    helmet({ crossOriginResourcePolicy: { policy: "same-site" } }),

    // It removes the powered by header
    helmet.hidePoweredBy(),

    // Blocks the cross reading for the same MIME types
    helmet.noSniff(),

    // Activates the strict transport security, that forces the client to use only secure connections to access the site
    // If it is still active, it prevents attack of type man-in-the-middle
    helmet.hsts({
        maxAge: 123456,
        includeSubDomains: false
    })
);



module.exports = application;