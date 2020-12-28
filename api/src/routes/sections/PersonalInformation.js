const router = require('express').Router();
const { updatePersonalInformation } = require('../../controller/sections/PersonalInformation');


router.post('/updatePersonalInformation', updatePersonalInformation);

module.exports = router;