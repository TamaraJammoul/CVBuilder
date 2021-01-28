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
                const { Name, NameAr, RateFrom5, Order } = req.body;
                const RateFrom100 = RateFrom5 * 20;
                let technicalSkills = new TechnicalSkills({ Name, NameAr, RateFrom5, RateFrom100, Order });
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
                        TechnicalSkills.findById(req.body.technicalSkill_id).then((tec)=>{
                            TechnicalSkills.deleteOne({ _id: req.body.technicalSkill_id }).then(() => {
                                TechnicalSkills.find({_id : {$in : tmpTechnicalSkills}}).then((tecArray)=>{
                                    Promise.all(tecArray.map(item => {
                                        return anAsyncFunction3(item , tec.Order);
                                    })).then(()=>{
                                    return res.status(200).json({
                                        msg: "TechnicalSlills deleted",
                                        data: tmpTechnicalSkills
                                    })
                                    })
                                })
                            })
                        })
                    })
            }
        })
}

exports.updateTechnicalSkills = (req, res) => {
    const { _id, Name, NameAr, RateFrom5, Order } = req.body;
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
                    NameAr,
                    RateFrom5,
                    RateFrom100,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "TechnicalSkills updated successfully",
                        data: {
                            _id,
                            Name,
                            NameAr,
                            RateFrom5,
                            RateFrom100,
                            Order
                        }
                    })
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
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
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
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found"
                })
            }
        })
}

exports.copyTechnicalSkill = (req, res) => {
    const _id = req.body.cvID;
    const technicalSkill_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                technicalSkills = cv.TechnicalSkills;
                TechnicalSkills.findById(technicalSkill_id).exec((err, technicalSkill) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (technicalSkill) {
                        const newTechnicalSkill = new TechnicalSkills({
                            Name: technicalSkill.Name,
                            NameAr: technicalSkill.NameAr,
                            RateFrom5: technicalSkill.RateFrom5,
                            RateFrom100: technicalSkill.RateFrom100,
                            Order: technicalSkills.length + 1
                        })
                        technicalSkills.push(newTechnicalSkill);
                        newTechnicalSkill.save().then((newtechnicalSkill) => {
                            CV.updateOne({ _id: _id }, { $set: { TechnicalSkills: technicalSkills } }).then(() => {
                                return res.status(200).json({
                                    msg: "TechnicalSkill Copied successfully",
                                    data: newtechnicalSkill
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            msg: "TechnicalSkill not found"
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

exports.orderTechnicalSkills = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            technicalskills = cv.TechnicalSkills;

            if (oldID >= newID) {
                Promise.all(technicalskills.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        TechnicalSkills.find({ _id: { $in: cv.TechnicalSkills } }).sort({ Order: 1 }).then((tsk) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: tsk
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(technicalskills.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        TechnicalSkills.find({ _id: { $in: cv.TechnicalSkills } }).sort({ Order: 1 }).then((tsk) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    data: tsk
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
    TechnicalSkills.findById(item).exec().then(async (tsk) => {
        if (tsk.Order === oldID) {
            await TechnicalSkills.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (tsk.Order >= newID && tsk.Order < oldID) {
            var n = tsk.Order + 1;
            await TechnicalSkills.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    TechnicalSkills.findById(item).exec().then(async (tsk) => {
        if (tsk.Order === oldID) {
            await TechnicalSkills.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (tsk.Order > oldID && tsk.Order <= newID) {
            var n = tsk.Order - 1;
            await TechnicalSkills.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await TechnicalSkills.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}