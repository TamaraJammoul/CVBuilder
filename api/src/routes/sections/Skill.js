const router = require('express').Router();
const { addSkill, deleteSkill, updateSkill, getSkills } = require('../../controller/sections/Skill');

router.post('/addSkill', addSkill);
router.post('/deleteSkill', deleteSkill);
router.post('/updateSkill', updateSkill);
router.post('/getSkills', getSkills);

module.exports = router;