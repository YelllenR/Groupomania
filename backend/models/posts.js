const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const postsModel = mongoose.model({
    postId: { type: String, default: uuid.v4() },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    post: { type: String },
    dateOfPost: { type: Date, require: true },
    reactions: [
        happy = { type: Schema.Types.ObjectId, ref: 'User' },
        sad = { type: Schema.Types.ObjectId, ref: 'User' },
    ],
    modificationDatePost: { type: Date, require: true }

});

module.exports = mongoose.model('Posts', postsModel);