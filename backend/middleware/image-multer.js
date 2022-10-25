const multer = require('multer');


const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './images')
    },
    filename: (request, file, callback) => {
        const name = file.originalname;
        // name.replace(file.originalname, '.' + mimeTypes)
        callback(null, Date.now() + name)
    }
});


// function CheckFileType(file, callback) {
//     const fileTypes = /jpeg|jpg|png|webp|gif/;
//     const mimetype = fileTypes.test(file.mimetype);

//     if (mimetype) {
//         return callback(null, true);
//     } else {
//         callback('Erreur: Le fichier ne correspond pas à une image');
//     }
// };

const uploadImage = multer({
    storage : storage
}
    // ,
    // {
    //     fileFilter: function (request, file, callback) {
    //         CheckFileType(file, callback)
    //     }
    // }
);

module.exports = uploadImage.single('image');

