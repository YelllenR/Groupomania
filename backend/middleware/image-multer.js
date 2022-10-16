const multer = require('multer');


const profilPicture = multer.diskStorage({
    destination: (request, file, callback) => {
        return callback(null, 'image')
    },
    filename: (request, file, callback) => {
        const name = file.originalname;
        name.replace(file.originalname, request.body.lastName + '_' + request.body.firstName + '.' + mimeTypes)
        return callback(null, name)
    }
});
profilPicture;

function CheckFileType(file, callback) {
    const fileTypes = /jpeg|jpg|png|webp|gif/;
    const mimetype = fileTypes.test(file.mimetype);

    if (mimetype) {
        return callback(null, true);
    } else {
        callback('Erreur: Le fichier ne correspond pas à une image');
    }
};

const uploadImage = multer({
    profilPicture: Storage,
    fileFilter: function (request, file, callback) {
        CheckFileType(file, callback)
    }
});

module.exports = uploadImage().single('image');

