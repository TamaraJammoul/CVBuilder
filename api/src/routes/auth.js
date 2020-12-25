const router = require('express').Router();
const { signUp, logIn, requireSignIn } = require('../controller/auth');

router.post('/logIn', logIn);
router.post('/signUp', signUp);

module.exports = router;