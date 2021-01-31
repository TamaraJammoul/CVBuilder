const CV = require('../../models/CV');
const OtherTraining = require('../../models/sections/OtherTraining');

exports.addOtherTraining = (req, res) => {
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
                let otherTraining = new OtherTraining({
                    Name, NameAr, Order
                });
                otherTraining.save()
                    .then((otr) => {
                        let tmpOtherTrainings = cv.OtherTrainings;
                        tmpOtherTrainings.push(otr._id);
                        cv.updateOne({ OtherTrainings: tmpOtherTrainings })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "OtherTraining added successfuly",
                                    data: otr
                                })
                            })
                    })
            }
            else {
                return res.status(0).json({
                    msg: "No CV found"
                })
            }
        })
}

exports.deleteOtherTraining = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpOtherTrainings = cv.OtherTrainings;
                let index = -1;
                for (let i = 0; i < tmpOtherTrainings.length; i++) {
                    if (tmpOtherTrainings[i].toString() === req.body.otherTraining_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpOtherTrainings.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { OtherTrainings: tmpOtherTrainings } })
                    .then(() => {
                        OtherTraining.findById(req.body.otherTraining_id).then((oth) => {
                            OtherTraining.deleteOne({ _id: req.body.otherTraining_id }).then(() => {
                                OtherTraining.find({ _id: { $in: tmpOtherTrainings } }).then((othArray) => {
                                    Promise.all(othArray.map(item => {
                                        return anAsyncFunction3(item, oth.Order);
                                    })).then(() => {
                                        return res.status(200).json({
                                            msg: "otherTraining deleted",
                                            data: tmpOtherTrainings
                                        })
                                    })
                                })
                            })
                        })
                    })
            }
        })
}

exports.updateOtherTraining = (req, res) => {
    const { _id, Name, NameAr, Order } = req.body;
    OtherTraining.findById(_id).exec((error, otherTraining) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings wen Wron, can't get any thing from DB",
                error: error
            })
        }
        if (otherTraining) {
            OtherTraining.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    NameAr,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "OtherTraining updated successfully",
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
            return res.status(0).json({
                msg: "No OtherTraining found",
            })
        }
    })
}

exports.getOtherTrainings = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                OtherTraining.find({ _id: { $in: cv.OtherTrainings } })
                    .exec((err, otr) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (otr) {
                            return res.status(200).json({
                                msg: "Other Trainings returned successfully",
                                data: otr
                            })
                        }
                        else {
                            return res.status(0).json({
                                msg: "No CV Found",
                                err
                            })
                        }
                    })
            }
            else {
                return res.status(0).json({
                    msg: "No CV Found",
                    err
                })
            }
        })
}

exports.hideOtherTrainings = (req, res) => {
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
                hidden.HideOtherTrainings = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "OtherTrainings hide successfully";
                        else msg = "OtherTrainings show successfully";
                        return res.status(200).json({
                            msg,
                            data: {
                                cv_id: req.body._id,
                                hidden: hidden.HideOtherTrainings
                            }
                        })
                    })
                })
            }
            else {
                return res.status(0).json({
                    msg: "CV Not Found"
                })
            }
        })
}

exports.copyOtherTraining = (req, res) => {
    const _id = req.body.cvID;
    const otherTraining_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                otherTrainings = cv.OtherTrainings;
                OtherTraining.findById(otherTraining_id).exec((err, otherTraining) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (otherTraining) {
                        const newOtherTraining = new OtherTraining({
                            Name: otherTraining.Name,
                            NameAr: otherTraining.NameAr,
                            Order: otherTrainings.length + 1
                        })
                        otherTrainings.push(newOtherTraining);
                        newOtherTraining.save().then((newotherTraining) => {
                            CV.updateOne({ _id: _id }, { $set: { OtherTrainings: otherTrainings } }).then(() => {
                                return res.status(200).json({
                                    msg: "OtherTraining Copied successfully",
                                    data: newotherTraining
                                })
                            })
                        })
                    }
                    else {
                        return res.status(0).json({
                            msg: "OtherTraining not found"
                        })
                    }
                })
            }
            else {
                return res.status(0).json({
                    msg: "CV not found"
                })
            }
        })
}

exports.orderOtherTrainings = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            otherTrainings = cv.OtherTrainings;

            if (oldID >= newID) {
                Promise.all(otherTrainings.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        OtherTraining.find({ _id: { $in: cv.OtherTrainings } }).sort({ Order: 1 }).then((oth) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: oth
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(otherTrainings.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        OtherTraining.find({ _id: { $in: cv.OtherTrainings } }).sort({ Order: 1 }).then((oth) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: oth
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(0).json({
                msg: "NO CV Found"
            })
        }
    })
}

const anAsyncFunction = async (item, newID, oldID) => {
    OtherTraining.findById(item).exec().then(async (oth) => {
        if (oth.Order === oldID) {
            await OtherTraining.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (oth.Order >= newID && oth.Order < oldID) {
            var n = oth.Order + 1;
            await OtherTraining.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    OtherTraining.findById(item).exec().then(async (oth) => {
        if (oth.Order === oldID) {
            await OtherTraining.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (oth.Order > oldID && oth.Order <= newID) {
            var n = oth.Order - 1;
            await OtherTraining.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await OtherTraining.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}