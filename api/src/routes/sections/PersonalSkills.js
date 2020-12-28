const router = require('express').Router();
const { addPersonalSkills, deletePersonalSkills, updatePersonalSkills } = require('../../controller/sections/PersonalSkills');

router.post('/addPersonalSkills', addPersonalSkills);
router.post('/deletePersonalSkills', deletePersonalSkills);
router.post('/updatePersonalSkills', updatePersonalSkills);

module.exports = router;