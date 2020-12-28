const router = require('express').Router();
const { addReferance, deleteReferance, updateReferance } = require('../../controller/sections/Referance');

router.post('/addReferance', addReferance);
router.post('/deleteReferance', deleteReferance);
router.post('/updateReferance', updateReferance);

module.exports = router;