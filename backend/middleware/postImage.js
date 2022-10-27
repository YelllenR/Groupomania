const multer = require('multer');

const imagePostPage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './postImage')
    },
    filename: (request, file, callback) => {
        const name = file.originalname;
        // name.replace(file.originalname, '.' + mimeTypes)
        callback(null, name)
    }
});

const imageFromPost = multer({
    storage: imagePostPage
});

module.exports = imageFromPost.single('imagePost');