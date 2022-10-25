const mongoose = require('mongoose');

const mongooseUniqueValidator = require('mongoose-unique-validator');

const userModel = mongoose.Schema({
    idOfUser: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    imageProfil: { type: String, require: true },
});

userModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userModel);
