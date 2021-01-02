const router = require('express').Router();
const { addExperience, deleteExperience, updateExperience, getExperiences } = require('../../controller/sections/Experience');

router.post('/addExperience', addExperience);
router.post('/deleteExperience', deleteExperience);
router.post('/updateExperience', updateExperience);
router.post('/getExperiences', getExperiences);

module.exports = router;
