const router = require('express').Router();
const { check } = require('express-validator');
const { signUp, logIn, requireSignIn, logInAdmin, addAdmin, changePasswordAdmin, changePasswordUser, ResetPassword, contactUs } = require('../controller/auth');
const { validationRes } = require('../controller/validation');

router.post('/logIn', [check('Email', 'Email shoud be correct').isEmail(), check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, logIn);
router.post('/signUp', [check('Email', 'Email shoud be correct').isEmail(), check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, signUp);
router.post('/logInAdmin', [check('Email', 'Email should be correct').isEmail(), check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, logInAdmin);
router.post('/addAdmin', addAdmin);
router.post('/changePasswordAdmin', [check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, changePasswordAdmin);
router.post('/changePasswordUser', [check('Password', 'Password at least 8 characters').isLength({ min: 8 })], validationRes, changePasswordUser);
router.post('/resetPassword', ResetPassword);
router.post('/resetPasswordLink', contactUs);

module.exports = router;