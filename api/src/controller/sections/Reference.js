const CV = require('../../models/CV');
const Reference = require('../../models/sections/Reference');
const func = require("../func");

exports.addReference = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                var { Name, NameAr, Number, Order } = req.body;
                NameAr = func(NameAr);
                let reference = new Reference({ Name, NameAr, Number, Order });
                reference.save()
                    .then((ref) => {
                        let tmpReference = cv.References;
                        tmpReference.push(ref._id);
                        cv.updateOne({ References: tmpReference })
                            .then(() => {
                                return res.status(200).json({
                                    msg: "Reference added successfuly",
                                    status: 1,
                                    Name, NameAr, Number, Order
                                })
                            })
                    })
            }
            else {
                return res.status(200).json({
                    msg: "No CV found",
                    status: 0,
                })
            }
        })
}

exports.deleteReference = (req, res) => {
    CV.findOne({ _id: req.body._id })
        .exec((error, cv) => {
            if (error) {
                return res.status(400).json({
                    msg: "Somethings went Wrong, can't get any thing from DB",
                    error: error
                })
            }
            if (cv) {
                let tmpReference = cv.References;
                let index = -1;
                for (let i = 0; i < tmpReference.length; i++) {
                    if (tmpReference[i].toString() === req.body.reference_id) {
                        index = i;
                        break;
                    }
                }
                if (index > -1) {
                    tmpReference.splice(index, 1);
                }
                CV.updateOne({ _id: req.body._id }, { $set: { References: tmpReference } })
                    .then(() => {
                        Reference.findById(req.body.reference_id).then((ref) => {
                            Reference.deleteOne({ _id: req.body.reference_id }).then(() => {
                                Reference.find({ _id: { $in: tmpReference } }).then((refArray) => {
                                    Promise.all(refArray.map(item => {
                                        return anAsyncFunction3(item, ref.Order);
                                    })).then(() => {
                                        return res.status(200).json({
                                            msg: "Reference deleted",
                                            status: 1,
                                            tmpReference
                                        })
                                    })
                                })
                            })
                        })
                    })
            }
        })
}

exports.updateReference = (req, res) => {
    var { _id, Name, NameAr, Number, Order } = req.body;
    NameAr = func(NameAr);
    Reference.findById(_id).exec((error, reference) => {
        if (error) {
            return res.status(400).json({
                msg: "Somethings went Wrong, can't get any thing from DB",
                error: error
            })
        }
        if (reference) {
            Reference.updateOne({ _id: _id }, {
                $set: {
                    Name,
                    NameAr,
                    Number,
                    Order
                }
            }).then(() => {
                CV.updateOne({ _id: req.body.cvID }, { $set: { EditedDate: Date.now() } }).then(() => {
                    return res.status(200).json({
                        msg: "Reference updated successfully",
                        status: 1,
                        _id,
                        Name,
                        NameAr,
                        Number,
                        Order
                    })
                })
            })
        }
        else {
            return res.status(200).json({
                msg: "No Reference found",
                status: 0,
            })
        }
    })
}

exports.getReferences = (req, res) => {
    CV.findById(req.body._id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occured",
                    err
                })
            }
            if (cv) {
                Reference.find({ _id: { $in: cv.References } })
                    .exec((err, ref) => {
                        if (err) {
                            return res.status(400).json({
                                msg: "DB Error Occured",
                                err
                            })
                        }
                        if (ref) {
                            return res.status(200).json({
                                msg: "References returned successfully",
                                status: 1,
                                data: ref
                            })
                        }
                        else {
                            return res.status(200).json({
                                msg: "No CV Found",
                                status: 0,
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

exports.hideReferences = (req, res) => {
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
                hidden.HideReferences = req.body.hide;
                CV.updateOne({ _id: req.body._id }, { $set: { Hidden: hidden } }).then(() => {
                    CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                        var msg = "";
                        if (req.body.hide) msg = "References hide successfully";
                        else msg = "References show successfully";
                        return res.status(200).json({
                            msg,
                            status: 1,
                            cv_id: req.body._id,
                            hidden: hidden.HideReferences
                        })
                    })
                })
            }
            else {
                return res.status(200).json({
                    msg: "CV Not Found",
                    status: 0,
                })
            }
        })
}

exports.copyReference = (req, res) => {
    const _id = req.body.cvID;
    const reference_id = req.body._id;

    CV.findById(_id)
        .exec((err, cv) => {
            if (err) {
                return res.status(400).json({
                    msg: "DB Error Occurred",
                    err
                })
            }
            if (cv) {
                references = cv.References;
                Reference.findById(reference_id).exec((err, reference) => {
                    if (err) {
                        return res.status(400).json({
                            msg: "DB Error Occurred",
                            err
                        })
                    }
                    if (reference) {
                        const newReference = new Reference({
                            Name: reference.Name,
                            NameAr: reference.NameAr,
                            Number: reference.Number,
                            Order: reference.length + 1
                        })
                        references.push(newReference);
                        newReference.save().then((newreference) => {
                            CV.updateOne({ _id: _id }, { $set: { References: references } }).then(() => {
                                return res.status(200).json({
                                    msg: "Reference Copied successfully",
                                    status: 1,
                                    Name: newreference.Name,
                                    NameAr: newreference.NameAr,
                                    Number: newreference.Number,
                                    Order: newreference.Order
                                })
                            })
                        })
                    }
                    else {
                        return res.status(200).json({
                            status: 0,
                            msg: "Reference not found"
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

exports.orderReferences = (req, res) => {   ////  cv_id, oldOrder,newOrder
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
            references = cv.References;

            if (oldID >= newID) {
                Promise.all(references.map(item => {
                    return anAsyncFunction(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Reference.find({ _id: { $in: cv.References } }).sort({ Order: 1 }).then((ref) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    status: 1,
                                    data: ref
                                })
                            })
                        })
                    }, 2000)
                });

            }
            else {
                Promise.all(references.map(item => {
                    return anAsyncFunction2(item, newID, oldID);
                })).then(() => {
                    var timeout = setTimeout(() => {
                        Reference.find({ _id: { $in: cv.References } }).sort({ Order: 1 }).then((ref) => {
                            CV.updateOne({ _id: req.body._id }, { $set: { EditedDate: Date.now() } }).then(() => {
                                return res.status(200).json({
                                    status: 1,
                                    data: ref
                                })
                            })
                        })
                    }, 2000)
                });
            }

        }
        else {
            return res.status(200).json({
                msg: "NO CV Found",
                status: 0
            })
        }
    })
}

const anAsyncFunction = async (item, newID, oldID) => {
    Reference.findById(item).exec().then(async (ref) => {
        if (ref.Order === oldID) {
            await Reference.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (ref.Order >= newID && ref.Order < oldID) {
            var n = ref.Order + 1;
            await Reference.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction2 = async (item, newID, oldID) => {
    Reference.findById(item).exec().then(async (ref) => {
        if (ref.Order === oldID) {
            await Reference.updateOne({ _id: item }, { $set: { Order: newID } });
            return Promise.resolve('ok');
        }
        else if (ref.Order > oldID && ref.Order <= newID) {
            var n = ref.Order - 1;
            await Reference.updateOne({ _id: item }, { $set: { Order: n } });
            return Promise.resolve('ok');
        }
    })
}

const anAsyncFunction3 = async (item, order) => {
    console.log(item, order);
    if (item.Order > order) {
        await Reference.updateOne({ _id: item._id }, { $set: { Order: item.Order - 1 } });
        return Promise.resolve('ok');
    }
}