const router = require('express').Router();
const { check } = require('express-validator');
const { signUp, logIn, requireSignIn } = require('../controller/auth');
const { validationRes } = require('../controller/validation');

router.post('/logIn', [check('Email', 'Email shoud be correct').isEmail(), check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, logIn);
router.post('/signUp', [check('Email', 'Email shoud be correct').isEmail(), check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, signUp);

module.exports = router;