const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const postsModel = mongoose.Schema({
    idOfPost: { type: String, default: uuid.v4() },
    idOfUser: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: String },
    dateOfPost: { type: String, require: true },
    reactions: [
        happy = { type: Schema.Types.ObjectId, ref: 'User' },
        sad = { type: Schema.Types.ObjectId, ref: 'User' },
    ],
    modificationDatePost: { type: Date },
    imagePost: { type: String, require: false}

});

module.exports = mongoose.model('Posts', postsModel);