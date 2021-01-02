const router = require('express').Router();
const { addCV, deleteCV, getAllCV, getCV } = require('../controller/CV');
const { body } = require('express-validator');
const { validationRes } = require('../controller/validation');

router.post('/addCV', body('Email').isEmail(), validationRes, addCV);
router.post('/deleteCV', body('Email').isEmail(), validationRes, deleteCV);
router.post('/getAllCV', body('Email').isEmail(), validationRes, getAllCV);
router.post('/getCV', getCV);

module.exports = router;