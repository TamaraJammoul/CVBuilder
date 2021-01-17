const CV = require('../../models/CV');
const Education = require('../../models/sections/Education');

exports.addEducation = (req, res) => {
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
                    UniversityName, Faculty, YearStart,
                    YearEnd, DegreeFrom5, Grade, Order
                } = req.body;

                const DegreeFrom10 = DegreeFrom5 * 2;
                const DegreeFrom100 = DegreeFrom5 * 20;

                let education = new Education({
                    UniversityName, Faculty, YearStart,
                    YearEnd, Grade, DegreeFrom5, DegreeFrom10,
                    DegreeFrom100, Order
                });
                education.save()
                    .then((edu) => {
                        let tmpEducations = cv.Educations;
                        tmpEducations.push(edu._id);
                        cv.updateOne({ Educations: tmpEducations })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Educations added successfuly",
                                    data: edu
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

exports.deleteEducation = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpEducations = cv.Educations;
                let index = -1;
                for (let i = 0; i < tmpEducations.length; i++) {
                    if (tmpEducations[i].toString() === req.body.education_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpEducations.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Educations: tmpEducations } })
                    .then(() => {
                        Education.deleteOne({ _id: req.body.education_id }).then(() => {
                            return res.status(200).json({
                                msg: "education deleted",
                                data: tmpEducations
                            })
                        })
                    })
            }
        })
}

exports.updateEducation = (req, res) => {
    const { _id, UniversityName, Faculty, YearStart, YearEnd, Grade, DegreeFrom5, Order } = req.body;
    Education.findById(_id).exec((error, education) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        const DegreeFrom10 = DegreeFrom5 * 2;
        const DegreeFrom100 = DegreeFrom5 * 20;
        if (education) {
            Education.updateOne({ _id: _id }, {
                $set: {
                    UniversityName,
                    Faculty,
                    YearStart,
                    YearEnd,
                    Grade,
                    DegreeFrom5,
                    DegreeFrom10,
                    DegreeFrom100,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Education updated successfully",
                        data: {
                            _id,
                            UniversityName,
                            Faculty,
                            YearStart,
                            YearEnd,
                            Grade,
                            DegreeFrom5,
                            DegreeFrom10,
                            DegreeFrom100,
                            Order
                        }
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Education found",
            })
        }
    })
}

exports.getEducations = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Education.find({ _id: { $in: cv.Educations } })
                    .exec((err, edu) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (edu) {
                            return res.status(200).json({
                                msg: "Educations returned successfully",
                                data: edu
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

exports.hideEducations = (req, res) => {
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
                hidden.HideEducations = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Educations hide successfully";
                        else msg = "Educations show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideEducations
                            }
                        })
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found"
                })
            }
        })
}

exports.copyEducation = (req, res) => {
    const _id = req.body.cvID;
    const education_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                educations = cv.Educations;
                Education.findById(education_id).exec((err, education) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (education) {
                        const newEducation = new Education({
                            UniversityName: education.UniversityName,
                            Faculty: education.Faculty,
                            YearStart: education.YearStart,
                            YearEnd: education.YearEnd,
                            DegreeFrom5: education.DegreeFrom5,
                            DegreeFrom10: education.DegreeFrom10,
                            DegreeFrom100: education.DegreeFrom100,
                            Grade: education.Grade,
                            Order: education.Order
                        })
                        educations.push(newEducation);
                        newEducation.save().then((neweducation) => {
                            CV.updateOne({ _id: _id }, { $set: { Educations: educations } }).then(() => {
                                return res.status(200).json({
                                    msg: "Education Copied successfully",
                                    data: neweducation
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Education not found"
                        })
                    }
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV not found"
                })
            }
        })
}

exports.orderEducations = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            educations = cv.Educations;

            if (oldID >= newID) {
                Promise.all(educations.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Education.find({ _id: { $in: cv.Educations } }).sort({ Order: 1 }).then((edu) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: edu
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(educations.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Education.find({ _id: { $in: cv.Educations } }).sort({ Order: 1 }).then((edu) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: edu
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(200).json({
                msg: "NO CV Found"
            })
        }
    })
}

const anAsyncFunction = async (item, newID, oldID) => {
    Education.findById(item).exec().then(async (edu) => {
        if (edu.Order === oldID) {
            await Education.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (edu.Order >= newID && edu.Order < oldID) {
            var n = edu.Order + 1;
            await Education.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Education.findById(item).exec().then(async (edu) => {
        if (edu.Order === oldID) {
            await Education.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (edu.Order > oldID && edu.Order <= newID) {
            var n = edu.Order - 1;
            await Education.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}