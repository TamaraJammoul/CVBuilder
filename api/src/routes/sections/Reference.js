const router = require('express').Router();
const { addReference, deleteReference, updateReference } = require('../../controller/sections/Reference');

router.post('/addReference', addReference);
router.post('/deleteReference', deleteReference);
router.post('/updateReference', updateReference);

module.exports = router;