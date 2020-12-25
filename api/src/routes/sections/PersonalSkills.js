const router = require('express').Router();
const { addPersonalSkills, deletePersonalSkills } = require('../../controller/sections/PersonalSkills');

router.post('/addPersonalSkills', addPersonalSkills);
router.post('/deletePersonalSkills', deletePersonalSkills);

module.exports = router;