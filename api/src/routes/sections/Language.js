const router = require('express').Router();
const { addLanguage, deleteLanguage, updateLanguage, getLanguages } = require('../../controller/sections/Language');

router.post('/addLanguage', addLanguage);
router.post('/deleteLanguage', deleteLanguage);
router.post('/updateLanguage', updateLanguage);
router.post('/getLanguages', getLanguages);

module.exports = router;