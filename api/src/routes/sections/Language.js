const router = require('express').Router();
const { addLanguage, deleteLanguage, updateLanguage, getLanguages, hideLanguages, unHideLanguages } = require('../../controller/sections/Language');

router.post('/addLanguage', addLanguage);
router.post('/deleteLanguage', deleteLanguage);
router.post('/updateLanguage', updateLanguage);
router.post('/getLanguages', getLanguages);
router.post('/hideLanguages', hideLanguages);

module.exports = router;