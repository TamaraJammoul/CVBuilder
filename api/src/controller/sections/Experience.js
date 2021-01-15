const CV = require('../../models/CV');
const Experience = require('../../models/sections/Experience');

exports.addExperience = (req, res) => {
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
                    Name, Description, Start, End, Project, Order
                } = req.body;
                let experience = new Experience({
                    Name, Description, Start, End, Project, Order
                });
                experience.save()
                    .then((exp) => {
                        let tmpExperiences = cv.Experiences;
                        tmpExperiences.push(exp._id);
                        cv.updateOne({ Experiences: tmpExperiences })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Experience added successfuly",
                                    data: exp
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

exports.deleteExperience = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpExperiences = cv.Experiences;
                let index = -1;
                for (let i = 0; i < tmpExperiences.length; i++) {
                    if (tmpExperiences[i].toString() === req.body.experience_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpExperiences.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Experiences: tmpExperiences } })
                    .then(() => {
                        Experience.deleteOne({ _id: req.body.experience_id }).then(() => {
                            return res.status(200).json({
                                msg: "experience deleted",
                                data: tmpExperiences
                            })
                        })
                    })
            }
        })
}

exports.updateExperience = (req, res) => {
    const { _id, Name, Description, Start, End, Project, Order } = req.body;
    Experience.findById(_id).exec((error, experience) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (experience) {
            Experience.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Description,
                    Start,
                    End,
                    Project,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Experience updated successfully",
                        data: {
                            _id,
                            Name,
                            Description,
                            Start,
                            End,
                            Project,
                            Order
                        }
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Experience found",
            })
        }
    })
}

exports.getExperiences = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Experience.find({ _id: { $in: cv.Experiences } })
                    .exec((err, exp) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (exp) {
                            return res.status(200).json({
                                msg: "Experiences returned successfully",
                                data: exp
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

exports.hideExperiences = (req, res) => {
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
                hidden.HideExperiences = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Experiences hide successfully";
                        else msg = "Experiences show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideExperiences
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

exports.copyExperience = (req, res) => {
    const _id = req.body.cvID;
    const experience_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                experiences = cv.Experiences;
                Experience.findById(experience_id).exec((err, experience) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (experience) {
                        const newExperience = new Experience({
                            Name: experience.Name,
                            Description: experience.Description,
                            Start: experience.Start,
                            End: experience.End,
                            Project: experience.Project,
                            Orde: experience.Order
                        })
                        experiences.push(newExperience);
                        newExperience.save().then((newexperience) => {
                            CV.updateOne({ _id: _id }, { $set: { Experiences: experiences } }).then(() => {
                                return res.status(200).json({
                                    msg: "Experience Copied successfully",
                                    data: {
                                        newExperience: newexperience
                                    }
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Expereince not found"
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

exports.orderExperiences = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            experiences = cv.Experiences;

            if (oldID >= newID) {
                Promise.all(experiences.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Experience.find({ _id: { $in: cv.Experiences } }).sort({ Order: 1 }).then((exp) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: exp
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(experiences.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Experience.find({ _id: { $in: cv.Experiences } }).sort({ Order: 1 }).then((exp) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: exp
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
    Experience.findById(item).exec().then(async (exp) => {
        if (exp.Order === oldID) {
            await Experience.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (exp.Order >= newID && exp.Order < oldID) {
            var n = exp.Order + 1;
            await Experience.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Experience.findById(item).exec().then(async (exp) => {
        if (exp.Order === oldID) {
            await Experience.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (exp.Order > oldID && exp.Order <= newID) {
            var n = exp.Order - 1;
            await Experience.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}