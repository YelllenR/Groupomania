const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const commentsModel = mongoose.Schema({
    commentId: { type: String, default: uuid.v4() },
    idOfPost: { type: String, require: true },
    imageProfil: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    idOfUser: { type: String, require: true },
    comment: { type: String },
},
    { timestamps: true }
);


module.exports = mongoose.model('Comment', commentsModel);