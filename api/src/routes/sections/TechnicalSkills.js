const router = require('express').Router();
const { addTechnicalSkills, deleteTechnicalSkills, updateTechnicalSkills, getTechnicalSkills, hideTechnicalSkills, unHideTechnicalSkills } = require('../../controller/sections/TechnicalSkills');

router.post('/addTechnicalSkills', addTechnicalSkills);
router.post('/deleteTechnicalSkills', deleteTechnicalSkills);
router.post('/updateTechnicalSkills', updateTechnicalSkills);
router.post('/getTechnicalSkills', getTechnicalSkills);
router.post('/hideTechnicalSkills', hideTechnicalSkills)

module.exports = router;