const router = require('express').Router();
const { updateCareer } = require('../../controller/sections/CareerObjectives');

router.post('/updateCareer', updateCareer);

module.exports = router;