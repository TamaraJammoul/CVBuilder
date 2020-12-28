const router = require('express').Router();
const { addExperience, deleteExperience, updateExperience } = require('../../controller/sections/Experience');

router.post('/addExperience', addExperience);
router.post('/deleteExperience', deleteExperience);
router.post('/updateExperience', updateExperience);

module.exports = router;
