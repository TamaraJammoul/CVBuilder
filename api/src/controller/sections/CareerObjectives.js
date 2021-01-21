const CV = require('../../models/CV');
const CareerObjectives = require('../../models/sections/CareerObjectives');

exports.updateCareer = (req, res) => {
    const { _id, Text, TextAr } = req.body;
    CareerObjectives.findById(_id).exec((error, careerObjectives) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (careerObjectives) {
            CareerObjectives.updateOne({ _id: _id }, {
                $set: {
                    Text,
                    TextAr
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Career Objectives updated successfully",
                        data: {
                            _id,
                            Text,
                            TextAr
                        }
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Career Objectives found",
            })
        }
    })
}

exports.getCareer = (req, res) => {
    CareerObjectives.findById(req.body._id)
        .exec((err, career) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB error occured",
                    err
                })
            }
            if (career) {
                return res.status(200).json({
                    msg: "Career Obkectives returned successfully",
                    career
                })
            }
            else {
                return res.status(200).json({
                    msg: "No Career Objectives Found",
                })
            }
        })
}

exports.hideCareer = (req, res) => {
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
                hidden.HideCareerObjectives = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "Career hide successfully";
                        else msg = "Career show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideCareerObjectives
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
