const router = require('express').Router();
const { addSkill, deleteSkill, updateSkill } = require('../../controller/sections/Skill');

router.post('/addSkill', addSkill);
router.post('/deleteSkill', deleteSkill);
router.post('/updateSkill', updateSkill)
module.exports = router;