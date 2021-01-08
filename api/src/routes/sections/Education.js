const router = require('express').Router();
const { addEducation, deleteEducation, updateEducation, getEducations, hideEducations, unHideEducations } = require('../../controller/sections/Education');

router.post('/addEducation', addEducation);
router.post('/deleteEducation', deleteEducation);
router.post('/updateEducation', updateEducation);
router.post('/getEducations', getEducations);
router.post('/hideEducations', hideEducations);

module.exports = router;