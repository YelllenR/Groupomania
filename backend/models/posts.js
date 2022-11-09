const mongoose = require('mongoose');
const uuid = require('uuid');


const postsModel = new mongoose.Schema({
    idOfPost: { type: String, default: uuid.v4() },
    idOfUser: { type: mongoose.SchemaTypes.String, ref: 'User' },
    firstname: { type: mongoose.SchemaTypes.String, ref: 'User' },
    lastname: { type: mongoose.SchemaTypes.String, ref: 'User' },
    imageProfil: { type: mongoose.SchemaTypes.String, ref: 'User' },
    post: { type: String },
    happy: { type: Number, default: 0 },
    sad: { type: Number, default: 0 },
    happyReactionsOnPost: [],
    sadReactionsOnPost: [],
    imagePost: { type: String },
    role: { type: String }
},
    { timestamps: true }
);

module.exports = mongoose.model('Post', postsModel);