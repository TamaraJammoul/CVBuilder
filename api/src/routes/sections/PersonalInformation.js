const router = require('express').Router();
const { check } = require('express-validator');
const { updatePersonalInformation, getPersonalInformation } = require('../../controller/sections/PersonalInformation');
const { validationRes } = require('../../controller/validation');

router.post('/updatePersonalInformation', [
    check('Email', 'Email shoud be correct').isEmail(),
    check('Phone', 'shoud be at least 10 digit').isLength({ min: 10 })
], validationRes, updatePersonalInformation);

router.post('/getPersonalInformation', [check('_id').notEmpty()], validationRes, getPersonalInformation);
module.exports = router;