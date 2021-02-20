const router = require('express').Router();
const { addCV, deleteCV, getAllCV, getCV, updateCreatedDate, updateLanguage, updateName, updateTemplate, getCVData, getCVsData } = require('../controller/CV');
const { body } = require('express-validator');
const { validationRes } = require('../controller/validation');

router.post('/addCV', body('Email').isEmail(), validationRes, addCV);
router.post('/deleteCV', body('Email').isEmail(), validationRes, deleteCV);
router.post('/getAllCV', body('Email').isEmail(), validationRes, getAllCV);
router.post('/getCV', body('_id').notEmpty(), getCV);
router.post('/updateLanguage', body('_id').notEmpty(), updateLanguage);
router.post('/updateName', body('_id').notEmpty(), updateName);
router.post('/updateTemplate', body('_id').notEmpty(), updateTemplate);
router.post('/getCVData', getCVData);
router.get('/getCVsData', getCVsData);

module.exports = router;