const router = require('express').Router();
const { addCourse, deleteCourse, updateCourse, getCourses, hideCourses, copyCourse, orderCourses } = require('../../controller/sections/Course');

router.post('/addCourse', addCourse);
router.post('/deleteCourse', deleteCourse);
router.post('/updateCourse', updateCourse);
router.post('/getCourses', getCourses);
router.post('/hideCourses', hideCourses);
router.post('/copyCourse', copyCourse);
router.post('/orderCourses', orderCourses);

module.exports = router;