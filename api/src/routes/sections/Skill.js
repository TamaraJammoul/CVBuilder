const router = require('express').Router();
const { addSkill, getSkills, hideSkills } = require('../../controller/sections/Skill');

router.post('/addSkill', addSkill);
router.post('/getSkills', getSkills);
router.post('/hideSkills', hideSkills);


module.exports = router;