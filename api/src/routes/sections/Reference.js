const router = require('express').Router();
const { addReference, deleteReference, updateReference, getReferences } = require('../../controller/sections/Reference');

router.post('/addReference', addReference);
router.post('/deleteReference', deleteReference);
router.post('/updateReference', updateReference);
router.post('/getReferences', getReferences);

module.exports = router;