
const Post = require('../models/posts');



const reactions = {
    happy: 1,
    sad: 1,
    removeHappy: - 1,
    removeSad: - 1
};

const reactionsOnPost = (request, response, next) => {

    Post.findOne({ id: request.body.idOfPost })
        .then(post => {

            switch (reactions) {
                case (reactions.happy):
                    if (!post.happyReactionsOnPost.includes(request.auth.idOfUser)) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { happy: reactions.happy },
                            $addToSet: { happyReactionsOnPost: request.auth }
                        })
                            .then((modif) => response.status(200).json({ message: 'ok', modif }))
                            .catch(error => response.status(401).json({ message: error }))
                    }
                    break;

                case (reactions.happy - 1):
                    if (post.happyReactionsOnPost.includes(request.auth.idOfUser)) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { happy: reactions.happy - 1 },
                            $pull: { happyReactionsOnPost: request.auth }
                        })
                            .then((modif) => response.status(200).json({ message: 'ok', modif }))
                            .catch(error => response.status(401).json({ message: error }))
                    }

                    break;

                case (reactions.sad):
                    if (!post.sadReactionsOnPost.includes(request.auth.idOfUser) && reactions.sad) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { sad: reactions.sad },
                            $addToSet: { sadReactionsOnPost: request.auth }
                        })
                            .then(() => response.status(200).json({ message: 'ok' }))
                            .catch(error => response.status(401).json(error))
                    }
                    break;


                case (reactions.sad - 1):
                    if (post.sadReactionsOnPost.includes(request.auth.idOfUser)) {

                        Post.updateOne({ idOfPost: request.body.idOfPost }, {
                            $inc: { sad: reactions.sad - 1 },
                            $pull: { sadReactionsOnPost: request.auth }
                        })
                            .then((modif) => response.status(200).json({ message: 'ok', modif }))
                            .catch(error => response.status(401).json({ message: error }))
                    }
                    break;
            }

            response.status(200).json(post)
        })

        .catch(error => response.status(500).json(error));
};




module.exports = reactionsOnPost; 