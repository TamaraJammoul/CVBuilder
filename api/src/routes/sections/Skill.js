const router = require('express').Router();
const { addSkill, deleteSkill, updateSkill, getSkills, hideSkills, copySkill } = require('../../controller/sections/Skill');

router.post('/addSkill', addSkill);
router.post('/deleteSkill', deleteSkill);
router.post('/updateSkill', updateSkill);
router.post('/getSkills', getSkills);
router.post('/hideSkills', hideSkills);
router.post('/copySkill', copySkill);

module.exports = router;