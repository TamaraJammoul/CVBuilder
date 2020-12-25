const router = require('express').Router();
const { addEducation, deleteEducation } = require('../../controller/sections/Education');

router.post('/addEducation', addEducation);
router.post('/deleteEducation', deleteEducation);

module.exports = router;