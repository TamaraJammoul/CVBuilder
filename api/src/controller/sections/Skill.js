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
                    Name, Order
                } = req.body;
                let skill = new Skill({
                    Name, Order
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
    const { _id, Name, Order } = req.body;
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
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Skill updated successfully",
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
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found"
                })
            }
        })
}