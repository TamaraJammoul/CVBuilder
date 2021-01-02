const CV = require('../../models/CV');
const PersonalSkills = require('../../models/sections/PersonalSkills');


exports.addPersonalSkills = (req, res) => {
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
                let personalSkills = new PersonalSkills({ Name, RateFrom5, RateFrom100, Order });
                personalSkills.save()
                    .then((psk) => {
                        let tmpPersonalSkills = cv.PersonalSkills;
                        tmpPersonalSkills.push(psk._id);
                        cv.updateOne({ PersonalSkills: tmpPersonalSkills })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "PersonalSkills added successfuly",
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

exports.deletePersonalSkills = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpPersonalSkills = cv.PersonalSkills;
                let index = -1;
                for (let i = 0; i < tmpPersonalSkills.length; i++) {
                    if (tmpPersonalSkills[i].toString() === req.body.personalSkill_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpPersonalSkills.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { PersonalSkills: tmpPersonalSkills } })
                    .then(() => {
                        PersonalSkills.deleteOne({ _id: req.body.personalSkill_id }).then(() => {
                            return res.status(200).json({
                                msg: "PersonalSlills deleted",
                                data: tmpPersonalSkills
                            })
                        })
                    })
            }
        })
}

exports.updatePersonalSkills = (req, res) => {
    const { _id, Name, RateFrom5, Order } = req.body;
    PersonalSkills.findById(_id).exec((error, personalSkills) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (personalSkills) {
            const RateFrom100 = RateFrom5 * 20;
            PersonalSkills.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    RateFrom5,
                    RateFrom100,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "PersonalSkills updated successfully",
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
                msg: "No PersonalSkills found",
            })
        }
    })
}

exports.getPersonalSkills = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                PersonalSkills.find({ _id: { $in: cv.PersonalSkills } })
                    .exec((err, psk) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (psk) {
                            return res.status(200).json({
                                msg: "Personal Skills returned successfully",
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