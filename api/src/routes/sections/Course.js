const router = require('express').Router();
const { addCourse, deleteCourse, updateCourse, getCourses, hideCourses, copyCourse } = require('../../controller/sections/Course');

router.post('/addCourse', addCourse);
router.post('/deleteCourse', deleteCourse);
router.post('/updateCourse', updateCourse);
router.post('/getCourses', getCourses);
router.post('/hideCourses', hideCourses);
router.post('/copyCourse', copyCourse);

module.exports = router;