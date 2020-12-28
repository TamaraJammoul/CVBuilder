const router = require('express').Router();
const { addOtherTraining, deleteOtherTraining, updateOtherTraining } = require('../../controller/sections/OtherTraining');

router.post('/addOtherTraining', addOtherTraining);
router.post('/deleteOtherTraining', deleteOtherTraining);
router.post('/updateOtherTraining', updateOtherTraining);

module.exports = router;