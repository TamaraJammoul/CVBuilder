const router = require('express').Router();
const { addCourse, deleteCourse, updateCourse, getCourses } = require('../../controller/sections/Course');

router.post('/addCourse', addCourse);
router.post('/deleteCourse', deleteCourse);
router.post('/updateCourse', updateCourse);
router.post('/getCourses', getCourses);

module.exports = router;