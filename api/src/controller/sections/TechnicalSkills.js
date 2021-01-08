const CV = require('../../models/CV');
const TechnicalSkills = require('../../models/sections/TechnicalSkills');


exports.addTechnicalSkills = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                const { Name, RateFrom5, Order } = req.body;
                const RateFrom100 = RateFrom5 * 20;
                let technicalSkills = new TechnicalSkills({ Name, RateFrom5, RateFrom100, Order });
                technicalSkills.save()
                    .then((psk) => {
                        let tmpTechnicalSkills = cv.TechnicalSkills;
                        tmpTechnicalSkills.push(psk._id);
                        cv.updateOne({ TechnicalSkills: tmpTechnicalSkills })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "TechnicalSkills added successfuly",
                                    data: psk
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

exports.deleteTechnicalSkills = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpTechnicalSkills = cv.TechnicalSkills;
                let index = -1;
                for (let i = 0; i < tmpTechnicalSkills.length; i++) {
                    if (tmpTechnicalSkills[i].toString() === req.body.technicalSkill_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpTechnicalSkills.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { TechnicalSkills: tmpTechnicalSkills } })
                    .then(() => {
                        TechnicalSkills.deleteOne({ _id: req.body.technicalSkill_id }).then(() => {
                            return res.status(200).json({
                                msg: "TechnicalSlills deleted",
                                data: tmpTechnicalSkills
                            })
                        })
                    })
            }
        })
}

exports.updateTechnicalSkills = (req, res) => {
    const { _id, Name, RateFrom5, Order } = req.body;
    TechnicalSkills.findById(_id).exec((error, technicalSkills) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (technicalSkills) {
            const RateFrom100 = RateFrom5 * 20;
            TechnicalSkills.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    RateFrom5,
                    RateFrom100,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "TechnicalSkills updated successfully",
                    data: {
                        _id,
                        Name,
                        RateFrom5,
                        RateFrom100,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No TechnicalSkills found",
            })
        }
    })
}

exports.getTechnicalSkills = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                TechnicalSkills.find({ _id: { $in: cv.TechnicalSkills } })
                    .exec((err, psk) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (psk) {
                            return res.status(200).json({
                                msg: "Technical Skills returned successfully",
                                data: psk
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

exports.hideTechnicalSkills = (req, res) => {
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
                hidden.HideTechnicalSkills = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    var msg = "";
                    if (req.body.hide) msg = "TechnicalSkills hide successfully";
                    else msg = "TechnicalSkills show successfully";
                    return res.status(200).json({
                        msg,
                        data: {
                            cv_id: req.body._id,
                            hidden: hidden.HideTechnicalSkills
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