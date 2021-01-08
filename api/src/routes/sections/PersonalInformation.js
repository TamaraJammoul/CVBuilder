const router = require('express').Router();
const { check, body } = require('express-validator');
const { updatePersonalInformation, getPersonalInformation, hidePersonalInformation, unHidePersonalInformation } = require('../../controller/sections/PersonalInformation');
const { validationRes } = require('../../controller/validation');
const multer = require('multer');
const path = require('path');

//set storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

//init upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    }
});

router.post('/updatePersonalInformation',
    upload.single('profile'),
    (req, res, next) => {
        req.body.Image = req.file.path;
        next();
    },
    validationRes, updatePersonalInformation);

router.post('/getPersonalInformation', [check('_id').notEmpty()], validationRes, getPersonalInformation);

module.exports = router;