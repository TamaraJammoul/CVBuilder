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
                let language = new Language({
                    Name, Rate, Order
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
            Language.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    Rate,
                    Order
                }
            }).then(() => {
                return res.status(200).json({
                    msg: "Language updated successfully",
                    data: {
                        _id,
                        Name,
                        Rate,
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