const router = require('express').Router();
const { addPersonalSkills, deletePersonalSkills, updatePersonalSkills, getPersonalSkills } = require('../../controller/sections/PersonalSkills');

router.post('/addPersonalSkills', addPersonalSkills);
router.post('/deletePersonalSkills', deletePersonalSkills);
router.post('/updatePersonalSkills', updatePersonalSkills);
router.post('/getPersonalSkills', getPersonalSkills);

module.exports = router;