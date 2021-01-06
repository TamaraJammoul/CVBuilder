const CV = require('../../models/CV');
const Course = require('../../models/sections/Course');

exports.addCourse = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                const {
                    Name, Order
                } = req.body;
                let course = new Course({
                    Name, Order
                });
                course.save()
                    .then((mem) => {
                        let tmpCourses = cv.Courses;
                        tmpCourses.push(mem._id);
                        cv.updateOne({ Courses: tmpCourses })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Course added successfuly",
                                    data: mem
                                })
                            })
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV found"
                })
            }
        })
}

exports.deleteCourse = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpCourses = cv.Courses;
                let index = -1;
                for (let i = 0; i < tmpCourses.length; i++) {
                    if (tmpCourses[i].toString() === req.body.course_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpCourses.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Courses: tmpCourses } })
                    .then(() => {
                        Course.deleteOne({ _id: req.body.course_id }).then(() => {
                            return res.status(200).json({
                                msg: "Course deleted",
                                data: tmpCourses
                            })
                        })
                    })
            }
        })
}

exports.updateCourse = (req, res) => {
    const { _id, Name, Order } = req.body;
    Course.findById(_id).exec((error, course) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (course) {
            Course.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Course updated successfully",
                    data: {
                        _id,
                        Name,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Course found",
            })
        }
    })
}

exports.getCourses = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Course.find({ _id: { $in: cv.Courses } })
                    .exec((err, mem) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (mem) {
                            return res.status(200).json({
                                msg: "Courses returned successfully",
                                data: mem
                            })
                        }
                        else {
                            return res.status(200).json({
                                msg: "No CV Found",
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV Found",
                    err
                })
            }
        })
}