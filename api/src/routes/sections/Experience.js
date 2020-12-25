const router = require('express').Router();
const { addExperience, deleteExperience } = require('../../controller/sections/Experience');

router.post('/addExperience', addExperience);
router.post('/deleteExperience', deleteExperience);

module.exports = router;
