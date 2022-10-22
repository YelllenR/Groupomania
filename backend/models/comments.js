const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;

const commentsModel = mongoose.Schema({
    commentId: { type: String, default: uuid.v4() },
    postId: { type: String, require: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: { type: String },
    modificationDateComment: { type: Date, require: true },
    creationDateComment: { type: Date, require: true }
});


module.exports = mongoose.model('Comments', commentsModel);