const router = require('express').Router();
const { addExperience, deleteExperience, updateExperience, getExperiences, hideExperiences, copyExperience, orderExperiences } = require('../../controller/sections/Experience');

router.post('/addExperience', addExperience);
router.post('/deleteExperience', deleteExperience);
router.post('/updateExperience', updateExperience);
router.post('/getExperiences', getExperiences);
router.post('/hideExperiences', hideExperiences);
router.post('/copyExperience', copyExperience);
router.post('/orderExperiences', orderExperiences);

module.exports = router;
