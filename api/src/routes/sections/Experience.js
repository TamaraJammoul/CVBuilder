const router = require('express').Router();
const { addExperience, deleteExperience, updateExperience, getExperiences, hideExperiences, unHideExperiences } = require('../../controller/sections/Experience');

router.post('/addExperience', addExperience);
router.post('/deleteExperience', deleteExperience);
router.post('/updateExperience', updateExperience);
router.post('/getExperiences', getExperiences);
router.post('/hideExperiences', hideExperiences);

module.exports = router;
