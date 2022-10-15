const mongoose = require('mongoose');
const uuid = require('uuid');

const postsModel = mongoose.model({
    postId: { type: String, default: uuid.v4()},
    userId: {},
    post: { type: String },
    dateOfPost: { type: Date, require: true },
    reactions: [
        happy = { type: Boolean },
        sad = { type: Boolean },
    ],
    Modification: {
        dateOfChange: { type: Date, require: true }
    }
});

module.exports = mongoose.model('Posts', postsModel);