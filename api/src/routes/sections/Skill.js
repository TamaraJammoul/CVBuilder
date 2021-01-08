const router = require('express').Router();
const { addSkill, deleteSkill, updateSkill, getSkills, hideSkills, unHideSkills } = require('../../controller/sections/Skill');

router.post('/addSkill', addSkill);
router.post('/deleteSkill', deleteSkill);
router.post('/updateSkill', updateSkill);
router.post('/getSkills', getSkills);
router.post('/hideSkills', hideSkills);

module.exports = router;