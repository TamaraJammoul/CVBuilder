const router = require('express').Router();
const { addSkill, deleteSkill } = require('../../controller/sections/Skill');

router.post('/addSkill', addSkill);
router.post('/deleteSkill', deleteSkill);

module.exports = router;