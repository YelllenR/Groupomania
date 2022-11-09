
const Post = require('../models/posts');



const reactions = {
    happy: 1,
    sad: 1,
    removeHappy: - 1,
    removeSad: - 1
};

const reactionsOnPost = (request, response, next) => {

    Post.aggregate([
        { $match: { idOfPost: request.body.idOfPost } }
    ])
        .then(post => {

            switch (request.body) {

                case reactions.happy:
                    if (!post.happyReactionsOnPost.includes(request.auth.idOfUser)) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { happy: reactions.happy },
                            $addToSet: { happyReactionsOnPost: request.auth }
                        })
                            .then(() => response.status(200).json({ message: 'ok' }))
                            .catch(error => response.status(401).json({ message: error }))
                    }
                    break;

                case reactions.removeSad:
                    if (post.happyReactionsOnPost.includes(request.auth.idOfUser)) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { happy: reactions.removeHappy },
                            $pull: { happyReactionsOnPost: request.auth }
                        })
                            .then(() => response.status(200).json({ message: 'ok', }))
                            .catch(error => response.status(401).json({ message: error }))
                    }

                    break;

                case reactions.sad:
                    if (!post.sadReactionsOnPost.includes(request.auth.idOfUser) && reactions.sad) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { sad: reactions.sad + 1},
                            $addToSet: { sadReactionsOnPost: request.auth }
                        })
                            .then(() => response.status(200).json({ message: 'ok' }))
                            .catch(error => response.status(401).json(error))
                    };

                    break;


                case reactions.removeSad:
                    if (post.sadReactionsOnPost.includes(request.auth.idOfUser)) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { sad: reactions.removeSad },
                            $pull: { sadReactionsOnPost: request.auth }
                        })
                            .then(() => response.status(200).json({ message: 'ok' }))
                            .catch(error => response.status(401).json({ message: error }))
                    }
                    break;

                   
            }

            response.status(200).json(request.body.reactions)
        })


        .catch(error => response.status(500).json(error));
};




module.exports = reactionsOnPost; 