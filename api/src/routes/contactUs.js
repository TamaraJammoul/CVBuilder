const router = require('express').Router();
const { contactUs } = require('../controller/contactUs');

router.post('/', contactUs);

module.exports = router;