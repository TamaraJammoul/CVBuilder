const router = require('express').Router();
const { addOtherTraining, deleteOtherTraining } = require('../../controller/sections/OtherTraining');

router.post('/addOtherTraining', addOtherTraining);
router.post('/deleteOtherTraining', deleteOtherTraining);

module.exports = router;