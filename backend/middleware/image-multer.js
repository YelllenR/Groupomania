const multer = require('multer');


const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './images')
    },
    filename: (request, file, callback) => {
        const name = file.originalname;

        callback(null, Date.now() + name)
    }
});



const uploadImage = multer({
    storage: storage
});


module.exports = uploadImage.single('image');

