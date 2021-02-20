const router = require('express').Router();
const { addTechnicalSkills, deleteTechnicalSkills, updateTechnicalSkills, getTechnicalSkills, hideTechnicalSkills, copyTechnicalSkill, orderTechnicalSkills } = require('../../controller/sections/TechnicalSkills');

router.post('/addTechnicalSkills', addTechnicalSkills);
router.post('/deleteTechnicalSkills', deleteTechnicalSkills);
router.post('/updateTechnicalSkills', updateTechnicalSkills);
router.post('/getTechnicalSkills', getTechnicalSkills);
router.post('/hideTechnicalSkills', hideTechnicalSkills)
router.post('/copyTechnicalSkill', copyTechnicalSkill);
router.post('/orderTechnicalSkills', orderTechnicalSkills);

module.exports = router;