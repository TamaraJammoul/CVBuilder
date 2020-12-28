const router = require('express').Router();
const { addLanguage, deleteLanguage, updateLanguage } = require('../../controller/sections/Language');

router.post('/addLanguage', addLanguage);
router.post('/deleteLanguage', deleteLanguage);
router.post('/updateLanguage', updateLanguage);

module.exports = router;