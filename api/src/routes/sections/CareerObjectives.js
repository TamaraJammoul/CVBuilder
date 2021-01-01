const router = require('express').Router();
const { check } = require('express-validator');
const { updateCareer } = require('../../controller/sections/CareerObjectives');
const { validationRes } = require('../../controller/validation');

router.post('/updateCareer', check('Text', 'Text shoud not be empty').notEmpty(), validationRes, updateCareer);

module.exports = router;