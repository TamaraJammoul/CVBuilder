const router = require('express').Router();
const { addCV, deleteCV, getAllCV } = require('../controller/CV');

router.post('/addCV', addCV);
router.post('/deleteCV', deleteCV);
router.post('/getAllCV', getAllCV);

module.exports = router;