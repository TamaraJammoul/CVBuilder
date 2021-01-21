const CV = require('../../models/CV');
const Skill = require('../../models/sections/Skill');

exports.addSkill = (req, res) => {
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
                    Name, NameAr, Order
                } = req.body;
                let skill = new Skill({
                    Name, NameAr, Order
                });
                skill.save()
                    .then((skl) => {
                        let tmpSkills = cv.Skill;
                        tmpSkills.push(skl._id);
                        cv.updateOne({ Skill: tmpSkills })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Skill added successfuly",
                                    data: skl
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

exports.deleteSkill = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpSkills = cv.Skill;
                let index = -1;
                for (let i = 0; i < tmpSkills.length; i++) {
                    if (tmpSkills[i].toString() === req.body.skill_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpSkills.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Skill: tmpSkills } })
                    .then(() => {
                        Skill.deleteOne({ _id: req.body.skill_id }).then(() => {
                            return res.status(200).json({
                                msg: "skill deleted",
                                data: tmpSkills
                            })
                        })
                    })
            }
        })
}

exports.updateSkill = (req, res) => {
    const { _id, Name, NameAr, Order } = req.body;
    Skill.findById(_id).exec((error, skill) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (skill) {
            Skill.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    NameAr,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Skill updated successfully",
                        data: {
                            _id,
                            Name,
                            NameAr,
                            Order
                        }
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Skill found",
            })
        }
    })
}

exports.getSkills = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Skill.find({ _id: { $in: cv.Skill } })
                    .exec((err, skill) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (skill) {
                            return res.status(200).json({
                                msg: "Skills returned successfully",
                                data: skill
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

exports.hideSkills = (req, res) => {
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
                hidden.HideSkill = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Skills hide successfully";
                        else msg = "Skills show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideSkill
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

exports.copySkill = (req, res) => {
    const _id = req.body.cvID;
    const skill_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                skills = cv.Skill;
                Skill.findById(skill_id).exec((err, skill) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (skill) {
                        const newSkill = new Skill({
                            Name: skill.Name,
                            NameAr: skill.NameAr,
                            Order: skill.Order
                        })
                        skills.push(newSkill);
                        newSkill.save().then((newskill) => {
                            CV.updateOne({ _id: _id }, { $set: { Skill: skills } }).then(() => {
                                return res.status(200).json({
                                    msg: "Skill Copied successfully",
                                    data: newskill
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Skill not found"
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

exports.orderSkills = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            skills = cv.Skill;

            if (oldID >= newID) {
                Promise.all(skills.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Skill.find({ _id: { $in: cv.Skill } }).sort({ Order: 1 }).then((skl) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: skl
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(skills.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Skill.find({ _id: { $in: cv.Skill } }).sort({ Order: 1 }).then((skl) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: skl
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
    Skill.findById(item).exec().then(async (skl) => {
        if (skl.Order === oldID) {
            await Skill.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (skl.Order >= newID && skl.Order < oldID) {
            var n = skl.Order + 1;
            await Skill.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Skill.findById(item).exec().then(async (skl) => {
        if (skl.Order === oldID) {
            await Skill.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (skl.Order > oldID && skl.Order <= newID) {
            var n = skl.Order - 1;
            await Skill.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}