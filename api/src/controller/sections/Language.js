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
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
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
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
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
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found"
                })
            }
        })
}

exports.copyLanguage = (req, res) => {
    const _id = req.body.cvID;
    const language_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                languages = cv.Languages;
                Language.findById(language_id).exec((err, language) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (language) {
                        const newLanguage = new Language({
                            Name: language.Name,
                            Rate: language.Rate,
                            RateFrom10: language.RateFrom10,
                            RateFrom100: language.RateFrom100,
                            Order: language.Order
                        })
                        languages.push(newLanguage);
                        newLanguage.save().then((newlanguage) => {
                            CV.updateOne({ _id: _id }, { $set: { Languages: languages } }).then(() => {
                                return res.status(200).json({
                                    msg: "Language Copied successfully",
                                    data: {
                                        newLanguage: newlanguage
                                    }
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "Language not found"
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

exports.orderLanguages = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            languages = cv.Languages;

            if (oldID >= newID) {
                Promise.all(languages.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Language.find({ _id: { $in: cv.Languages } }).sort({ Order: 1 }).then((lan) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: lan
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(languages.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Language.find({ _id: { $in: cv.Languages } }).sort({ Order: 1 }).then((lan) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: lan
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
    Language.findById(item).exec().then(async (lan) => {
        if (lan.Order === oldID) {
            await Language.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (lan.Order >= newID && lan.Order < oldID) {
            var n = lan.Order + 1;
            await Language.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Language.findById(item).exec().then(async (lan) => {
        if (lan.Order === oldID) {
            await Language.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (lan.Order > oldID && lan.Order <= newID) {
            var n = lan.Order - 1;
            await Language.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}