const router = require('express').Router();
const { addLanguage, deleteLanguage } = require('../../controller/sections/Language');

router.post('/addLanguage', addLanguage);
router.post('/deleteLanguage', deleteLanguage);

module.exports = router;