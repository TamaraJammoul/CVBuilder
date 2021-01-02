const router = require('express').Router();
const { check } = require('express-validator');
const { updateCareer, getCareer } = require('../../controller/sections/CareerObjectives');
const { validationRes } = require('../../controller/validation');

router.post('/updateCareer', [check('Text', 'Text shoud not be empty').notEmpty()], validationRes, updateCareer);
router.post('/getCareer', [check('_id', 'You should specify an Id').notEmpty()], validationRes, getCareer);
module.exports = router;