const CV = require('../../models/CV');
const Language = require('../../models/sections/Language');

exports.addLanguage = (req, res) => {
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
                    Name, Rate, Order
                } = req.body;

                const RateFrom10 = Rate * 2;
                const RateFrom100 = Rate * 20;

                let language = new Language({
                    Name, Rate, RateFrom10, RateFrom100, Order
                });
                language.save()
                    .then((lan) => {
                        let tmpLanguages = cv.Languages;
                        tmpLanguages.push(lan._id);
                        cv.updateOne({ Languages: tmpLanguages })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Language added successfuly",
                                    data: lan
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

exports.deleteLanguage = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpLanguages = cv.Languages;
                let index = -1;
                for (let i = 0; i < tmpLanguages.length; i++) {
                    if (tmpLanguages[i].toString() === req.body.language_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpLanguages.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { Languages: tmpLanguages } })
                    .then(() => {
                        Language.deleteOne({ _id: req.body.language_id }).then(() => {
                            return res.status(200).json({
                                msg: "language deleted",
                                data: tmpLanguages
                            })
                        })
                    })
            }
        })
}

exports.updateLanguage = (req, res) => {
    const { _id, Name, Rate, Order } = req.body;
    Language.findById(_id).exec((error, language) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (language) {
            const RateFrom10 = Rate * 2;
            const RateFrom100 = Rate * 20;
            Language.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Rate,
                    RateFrom10,
                    RateFrom100,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Language updated successfully",
                    data: {
                        _id,
                        Name,
                        Rate,
                        RateFrom10,
                        RateFrom100,
                        Order
                    }
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Language found",
            })
        }
    })
}

exports.getLanguages = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Language.find({ _id: { $in: cv.Languages } })
                    .exec((err, lan) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (lan) {
                            return res.status(200).json({
                                msg: "Langueges returned successfully",
                                data: lan
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

exports.hideLanguages = (req, res) => {
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
                hidden.HideLanguages = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    var msg = "";
                    if (req.body.hide) msg = "Languages hide successfully";
                    else msg = "Languages show successfully";
                    return res.status(200).json({
                        msg,
                        data: {
                            cv_id: req.body._id,
                            hidden: hidden.HideLanguages
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