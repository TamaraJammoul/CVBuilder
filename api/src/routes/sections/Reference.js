const router = require('express').Router();
const { addReference, deleteReference, updateReference, getReferences, hideReferences, unHideReferences } = require('../../controller/sections/Reference');

router.post('/addReference', addReference);
router.post('/deleteReference', deleteReference);
router.post('/updateReference', updateReference);
router.post('/getReferences', getReferences);
router.post('/hideReferences', hideReferences);

module.exports = router;