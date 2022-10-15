const mongoose = require('mongoose');
const uuid = require('uuid');

const commentsModel = mongoose.Schema({
    commentId: { type: String, default: uuid.v4() },
    postId: { type: String, require: true },
    userId: { type: String, require: true },
    comments: { type: String },
    Modification: {
        dateOfChange: { type: Date, require: true }
    }
});


module.exports = mongoose.model('Comments', commentsModel);