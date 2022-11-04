const mongoose = require('mongoose');
const uuid = require('uuid');
const { Schema } = mongoose;

const postsModel = new mongoose.Schema({
    idOfPost: { type: String, default: uuid.v4() },
    idOfUser: {type: mongoose.SchemaTypes.String, ref: 'User'},
    firstname: { type: mongoose.SchemaTypes.String, ref: 'User' },
    lastname: { type: mongoose.SchemaTypes.String, ref: 'User' },
    imageProfil: { type: mongoose.SchemaTypes.String, ref: 'User'},
    post: { type: String },
    dateOfPost: { type: String, require: true },
    reactions: [
        happy = { type: Schema.Types.ObjectId, ref: 'User' },
        sad = { type: Schema.Types.ObjectId, ref: 'User' },
    ],
    modificationDatePost: { type: Date },
    imagePost: { type: String }

});

module.exports = mongoose.model('Post', postsModel);