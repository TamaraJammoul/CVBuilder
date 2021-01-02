const router = require('express').Router();
const { addEducation, deleteEducation, updateEducation, getEducations } = require('../../controller/sections/Education');

router.post('/addEducation', addEducation);
router.post('/deleteEducation', deleteEducation);
router.post('/updateEducation', updateEducation);
router.post('/getEducations', getEducations);

module.exports = router;