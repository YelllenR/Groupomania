const multer = require('multer');

const imagePostPage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'postImage')
    },
    filename: (request, file, callback) => {
        const name = file.originalname;
        callback(null, Date.now() + name)
    }
});

const imageFromPost = multer({
    storage: imagePostPage
});



module.exports = imageFromPost.single('imagePost');