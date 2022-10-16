const mongoose = require('mongoose');

const mongooseUniqueValidator = require('mongoose-unique-validator');
const uuid = require('uuid');

const userModel = mongoose.Schema({
    userId: { type: String, default: uuid.v4() },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    profilImage: { type: String, require: true },
    userCreationDate: { type: Date, require: true }
});

userModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userModel);
