const router = require('express').Router();
const { check } = require('express-validator');
const { contactUs } = require('../controller/contactUs');
const { validationRes } = require('../controller/validation');
router.post('/', [
    check('Email', 'Email shoud be right').isEmail(),
    check('Number', 'Number should be 10 digits').isLength({ min: 10 })
], validationRes, contactUs);

module.exports = router;