const router = require('express').Router();
const { check } = require('express-validator');
const { updateCareer, getCareer, hideCareer, unHideCareer } = require('../../controller/sections/CareerObjectives');
const { validationRes } = require('../../controller/validation');

router.post('/updateCareer', [check('Text', 'Text shoud not be empty').notEmpty()], validationRes, updateCareer);
router.post('/getCareer', [check('_id', 'You should specify an Id').notEmpty()], validationRes, getCareer);
router.post('/hideCareer', [check('_id', 'You should specify an Id').notEmpty()], validationRes, hideCareer);

module.exports = router;