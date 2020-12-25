const router = require('express').Router();
const { addPersonalInformation } = require('../../controller/sections/PersonalInformation');


router.post('/addPersonalInformation', addPersonalInformation);

module.exports = router;