const router = require('express').Router();
const { addOtherTraining, deleteOtherTraining, updateOtherTraining, getOtherTrainings } = require('../../controller/sections/OtherTraining');

router.post('/addOtherTraining', addOtherTraining);
router.post('/deleteOtherTraining', deleteOtherTraining);
router.post('/updateOtherTraining', updateOtherTraining);
router.post('/getOtherTrainings', getOtherTrainings);

module.exports = router;