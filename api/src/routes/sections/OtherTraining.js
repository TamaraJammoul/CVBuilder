const router = require('express').Router();
const { addOtherTraining, deleteOtherTraining, updateOtherTraining, getOtherTrainings, hideOtherTrainings, copyOtherTraining, orderOtherTrainings } = require('../../controller/sections/OtherTraining');

router.post('/addOtherTraining', addOtherTraining);
router.post('/deleteOtherTraining', deleteOtherTraining);
router.post('/updateOtherTraining', updateOtherTraining);
router.post('/getOtherTrainings', getOtherTrainings);
router.post('/hideOtherTrainings', hideOtherTrainings);
router.post('/copyOtherTraining', copyOtherTraining);
router.post('/orderOtherTrainings', orderOtherTrainings);

module.exports = router;