const CV = require('../../models/CV');
const Course = require('../../models/sections/Course');
const func = require("../func");

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
                var {
                    Name, NameAr, Description, DescriptionAr, Year, Order
                } = req.body;
                NameAr = func(NameAr);
                DescriptionAr = func(DescriptionAr);
                let course = new Course({
                    Name, NameAr, Description, DescriptionAr, Year, Order
                });
                course.save()
                    .then((mem) => {
                        let tmpCourses = cv.Courses;
                        tmpCourses.push(mem._id);
                        cv.updateOne({ Courses: tmpCourses })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Course added successfuly",
                                    status: 1,
                                    Name, NameAr, Description, DescriptionAr, Year, Order
                                })
                            })
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV found",
                    status: 0,
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
                        Course.findById(req.body.course_id).then((co) => {
                            Course.deleteOne({ _id: req.body.course_id }).then(() => {
                                Course.find({ _id: { $in: tmpCourses } }).then((coArray) => {
                                    Promise.all(coArray.map(item => {
                                        return anAsyncFunction3(item, co.Order);
                                    }))
                                    return res.status(200).json({
                                        msg: "Course deleted",
                                        status: 1,
                                        tmpCourses
                                    })
                                })
                            })
                        })
                    })
            }
        })
}

exports.updateCourse = (req, res) => {
    var { _id, Name, NameAr, Description, DescriptionAr, Year, Order } = req.body;
    NameAr = func(NameAr);
    DescriptionAr = func(DescriptionAr);
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
                    NameAr,
                    Description,
                    DescriptionAr,
                    Year,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Course updated successfully",
                        status: 1,
                        _id,
                        Name,
                        NameAr,
                        Description,
                        DescriptionAr,
                        Year,
                        Order
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                status: 0,
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
                                status: 1,
                                data: mem
                            })
                        }
                        else {
                            return res.status(200).json({
                                msg: "No CV Found",
                                status: 0,
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV Found",
                    status: 0,
                    err
                })
            }
        })
}

exports.hideCourses = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB ERROR Occurred",
                    err
                })
            }
            if (cv) {
                hidden = cv.Hidden;
                hidden.HideCourses = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Courses hide successfully";
                        else msg = "Courses show successfully";
                        return res.status(200).json({
                            msg,
                            status: 1,
                            cv_id: req.body._id,
                            hidden: hidden.HideCourses
                        })
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found",
                    status: 0,
                })
            }
        })
}

exports.copyCourse = (req, res) => {
    const _id = req.body.cvID;
    const course_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                courses = cv.Courses;
                Course.findById(course_id).exec((err, course) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (course) {
                        const newCourse = new Course({
                            Name: course.Name, NameAr: course.NameAr, Description: course.Description, DescriptionAr: course.DescriptionAr, Year: course.Year, Order: courses.length + 1
                        })
                        courses.push(newCourse);
                        newCourse.save().then((newcourse) => {
                            CV.updateOne({ _id: _id }, { $set: { Courses: courses } }).then(() => {
                                return res.status(200).json({
                                    msg: "course Copied successfully",
                                    status: 1,
                                    Name: newcourse.Name,
                                    NameAr: newcourse.NameAr,
                                    Description: newcourse.Description,
                                    DescriptionAr: newcourse.DescriptionAr,
                                    Year: newcourse.Year,
                                    Order: newcourse.Order
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Course not found",
                            status: 0,
                        })
                    }
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV not found",
                    status: 0,
                })
            }
        })
}

exports.orderCourses = (req, res) => {   ////  cv_id, oldOrder,newOrder
    CV.findById(req.body._id).exec((err, cv) => {
        if (err) {
            return res.status(400).json({
                msg: "Error in connection to MonogoDB",
                err
            })
        }
        if (cv) {
            const oldID = req.body.oldID;
            const newID = req.body.newID;
            courses = cv.Courses;

            if (oldID >= newID) {
                Promise.all(courses.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Course.find({ _id: { $in: cv.Courses } }).sort({ Order: 1 }).then((course) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    status: 1,
                                    data: course
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(courses.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Course.find({ _id: { $in: cv.Courses } }).sort({ Order: 1 }).then((course) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    status: 1,
                                    data: course
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(200).json({
                msg: "NO CV Found",
                status: 0,
            })
        }
    })
}

const anAsyncFunction = async (item, newID, oldID) => {
    Course.findById(item).exec().then(async (course) => {
        if (course.Order === oldID) {
            await Course.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (course.Order >= newID && course.Order < oldID) {
            var n = course.Order + 1;
            await Course.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Course.findById(item).exec().then(async (course) => {
        if (course.Order === oldID) {
            await Course.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (course.Order > oldID && course.Order <= newID) {
            var n = course.Order - 1;
            await Course.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await Course.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}