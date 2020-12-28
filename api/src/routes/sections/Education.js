const router = require('express').Router();
const { addEducation, deleteEducation, updateEducation } = require('../../controller/sections/Education');

router.post('/addEducation', addEducation);
router.post('/deleteEducation', deleteEducation);
router.post('/updateEducation', updateEducation);

module.exports = router;