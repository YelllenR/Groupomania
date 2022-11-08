const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');


const userModel = mongoose.Schema({
    // userPost:{type: mongoose.Schema.Types.String},
    idOfUser: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    imageProfil: { type: String, require: true },
    isAdmin: { type: Number, default: 0 }
});


// faire le admin role
userModel.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userModel);
